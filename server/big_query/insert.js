/**
 * Chèn giá trị vào bảng trong BigQuery.
 * 
 * @param {object} bigqueryClient: Dữ liệu người dùng BigQuery đã khởi tạo.
 * 
 * @param {object} insertOptions: 
 *   @param {string} datasetId - Dataset, thông thường là sciplay_dataset.
 *   @param {string} tableId - Bảng cần chèn dữ liệu vào. Ví dụ như courses, student_users, ...
 *   @param {object} advancedOptions - Các tùy chọn nâng cao cho việc chèn dữ liệu vào bảng. Không hay dùng lắm nên ko cần quan tâm.
 * 
 * @param {object[]} dataToInsert: Mảng dữ liệu cần chèn vào, mỗi phần tử trong mảng tập các trường thông tin của bộ cần chèn dưới dạng json.
 * Nếu dữ liệu chèn vào thiếu trường, BigQuery tự động gán bằng NULL
 * Nếu dữ liệu chèn vào có một trường không có sẵn trong bảng -> báo lỗi.
 * @example {course_id: '9', name: 'course 9', header_image: 'header_image 9', duration: 1}
 * 
 * @returns - Trả về trạng thái hoàn thành của giao tác (success or fail).
 */
async function insertDataToBigQuery(bigqueryClient, insertOptions, dataToInsert) {
    // Get insert options.
    const datasetId = insertOptions.datasetId;
    const tableId = insertOptions.tableId;
    const advancedOptions = insertOptions.advancedOptions || {};
  
    // Insert data.
    try {
      const dataset = bigqueryClient.dataset(datasetId);
      const table = dataset.table(tableId);
  
      const [apiResponse] = await table.insert(dataToInsert, advancedOptions);
      return('Inserted rows:', apiResponse);
    } catch (error) {
      return('Error inserting data:', error);
    }
}

module.exports = { insertDataToBigQuery };