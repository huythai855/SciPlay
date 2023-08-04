/**
 * Truy vấn giá trị từ BigQuery.
 * 
 * @param {object} bigqueryClient: Dữ liệu người dùng BigQuery đã khởi tạo.
 * 
 * @param {object} queryOptions: Mẫu objects tùy chỉnh của query truyền vào để truy vấn dữ liệu.
 *    @param {string} customQuery - Câu truy vấn tùy chỉnh hoàn thiện, ONLY USE khi cần truy vấn siêu phức tạp -> tự viết query riêng.
 *    @param {string} datasetId - Dataset, thông thường là sciplay_dataset.
 *    @param {string} tableId - Bảng cần lấy dữ liệu ra. Ví dụ như courses, student_users, ...
 *    @param {string[]} column - Các trường cần lấy dữ liệu, truyền vào dưới dạng mảng xâu. @example ['id', 'name', 'description']
 *    @param {string[]} conditions - Các điều kiện để lọc dữ liệu, truyền vào dưới dạng mảng xâu. @example ['course_id < 5', 'duration = 1']
 *    Mặc định, các điều kiện đưa vào đều là điều kiện và (dùng AND). Nếu muốn tự custom thì truyền duy nhất 1 điều kiện đã custom vào mảng.
 *    @param {number} limit - Giới hạn tối đa số lượng dòng dữ liệu lấy (lấy ít thôi tránh tràn bộ nhớ sập mẹ server :<).
 * 
 * @returns {object[]} rows - Mảng các bộ dữ liệu trả về khi thực hiện truy vấn đó.
 */
async function getDataFromBigQuery(bigqueryClient, queryOptions) {
    // Get query options.
    const customQuery = queryOptions.customQuery;
    const datasetId = queryOptions.datasetId;
    const tableId = queryOptions.tableId;
    const column = ((queryOptions.column || []).join(', ')) || '*';
    const conditions = ((queryOptions.conditions || []).join(' AND ')) || 'true';
    const limit = queryOptions.limit || 10;

    // Create query.
    const query = customQuery || 'SELECT ' + column + ' FROM `' + datasetId +'.'+ tableId + '` WHERE ' + conditions + ' LIMIT ' + limit + ';';

    const options = {
        query: query,
        location: 'US',
    };

    // Query & get data.
    try {
        const [rows] = await bigqueryClient.query(options);
        return rows;
    } catch (error) {
        console.error('Error running query:', error);
        return [];
    }
}

module.exports = { getDataFromBigQuery };