const express = require('express');
const bodyParser = require('body-parser');
const { BigQuery } = require('@google-cloud/bigquery');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');

const app = express();
const port = 8080; // Chọn cổng mà bạn muốn sử dụng


// Credentials to connect to BigQuery.
const credentials = require('./../api_keys/sciplay-5a03294800fe.json');

// Create a BigQuery client
const bigqueryClient = new BigQuery({
    projectId: credentials.project_id,
    credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
    },
});

const keyFilename = './api_keys/sciplay-5a03294800fe.json';
const storageClient = new Storage({ keyFilename });

const bucketName = 'sciplay'; // Thay 'your-bucket-name' bằng tên của Bucket GCS của bạn
const gifFileName = 'course-header-image/1.gif';



// Sử dụng body-parser để phân tích các yêu cầu gửi từ phía client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Định nghĩa các route
app.get('/api/data', async (req, res) => {
  try {
    // Truy vấn dữ liệu từ BigQuery
    const query = 'SELECT * FROM `sciplay_dataset.lesson`';
    const options = {
      query: query,
      location: 'US', // Thay đổi địa điểm nếu dữ liệu của bạn lưu trữ ở nơi khác
    };

    const [rows] = await bigqueryClient.query(options);

    const [url] = await storageClient.bucket(bucketName).file(gifFileName).getSignedUrl({
      action: 'read',
      expires: Date.now() + 15 * 60 * 1000, // URL hết hạn sau 15 phút
    });
    
    const rowName = rows.map(item => ({name: item.name, lesson_id : item.lesson_id ,url: url}));
    console.log('rowName: ', rowName);
    res.json(rowName);
  } catch (error) {
    console.error('Error executing BigQuery query:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});



// Route mới để xử lý việc routing dựa trên thông tin name từ frontend
app.post('/api/routing', (req, res) => {
  const { name } = req.body;
  // Xử lý logic dựa trên thông tin name ở đây (nếu cần)

  // console.log('Clicked on:', name)

  // Ví dụ: Nếu name là 'namePage', chuyển hướng đến trang '/namePage'
  if (true) {                          // (name === 'namePage') {
    res.redirect('/login');
  } else {
    res.status(404).json({ message: 'Page not found' });
  }
});


// Lấý nội dung lesson
app.get('/api/lesson', async (req, res) => {
  // Xử lý logic cho trang /namePage ở đây
  const lesson_id = req.query.id;

  console.log('Lesson_ID: ', lesson_id);

  const query = 'SELECT * FROM `sciplay_dataset.lesson` WHERE lesson_id = ' + lesson_id + ';';
    const options = {
      query: query,
      location: 'US', 
    };

  const [rows] = await bigqueryClient.query(options);
  console.log('Rows:', rows);


  res.json(rows);
});





// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
