/**
 * Cập nhật giá trị cho các bộ trong bảng.
 * 
 * @param {object} bigqueryClient: Dữ liệu người dùng BigQuery đã khởi tạo.
 * 
 * @param {*} updateOptions: 
 *   @param {string} datasetId - Dataset, thông thường là sciplay_dataset.
 *   @param {string} tableId - Bảng cần chèn dữ liệu vào. Ví dụ như courses, student_users,...
 *   @param {string[]} conditions - Mảng các điều kiện để xác định bộ dữ liệu cần update.
 *   Mỗi phần tử trong mảng là một chuỗi xâu gồm trường dữ liệu và giá trị của trường đó.
 *   @example ['course_id > 5', 'duration = 2']
 * 
 * @param {string[]} dataToUpdate: mảng dữ liệu mới cần update
 * mỗi phần tử trong mảng là một chuỗi xâu gồm trường dữ liệu cần update và giá trị mới.
 * @example ['description = \'new description\'', 'duration=3']
 * 
 * @returns - Trả về trạng thái hoàn thành của giao tác (success or fail).
 */

async function updateDataInBigQuery(bigqueryClient, updateOptions, dataToUpdate) {
  // Get update options.
  const datasetId = updateOptions.datasetId;
  const tableId = updateOptions.tableId;
  const conditions = (updateOptions.conditions || []).join(' AND ') || 'true';
  const dataToUpdateStr = dataToUpdate.join(', ') || {};

  // Construct the UPDATE SQL query.
  const query = `
    UPDATE \`${datasetId}.${tableId}\`
    SET ${dataToUpdateStr}
    WHERE ${conditions};
  `;

  // Execute the query to update data.
  try {
    const options = {
      query: query,
      location: 'US',
    };

    // Execute the query.
    const [job] = await bigqueryClient.createQueryJob(options);

    // Wait for the query job to complete.
    const [rows] = await job.getQueryResults();

    return { message: 'Updated rows:', response: rows };
  }
  catch (error) {
    return { message: 'Error updating data:', error: error };
  }
}

module.exports = { updateDataInBigQuery };