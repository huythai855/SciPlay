import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  // const [gifUrl, setGifUrl] = useState([]);

  useEffect(() => {
    axios.get('https://node-de-vcl-huythai855.vercel.app/api/data')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]); // Theo dõi sự thay đổi của biến data



  return (
    <div>
      <h1>Chào mừng đến với SciPlay</h1>
      <h2>Hôm nay bạn muốn học gì?</h2>

      <ul>
        <li>
          <Link to="/homepage">Trang chủ</Link>
        </li>
        <li>
          <Link to="/homepage">Học</Link>
        </li>
        <li>
          <Link to="/homepage">Thử Thách</Link>
        </li>
        <li>
          <Link to="/homepage">Xếp hạng</Link>
        </li>
        <li>
          <Link to="/homepage">Diễn đàn</Link>
        </li>
        <li>
          <Link to="/homepage">Cửa hàng</Link>
        </li>
      </ul>

      <br />
      <h3>Các khóa đang học</h3>
      
      <ul>
        {data.map(item => (
          <li key={item.lesson_id}>
            <Link to={`/lesson/${item.lesson_id}`}>{item.name}</Link>
            <br />
            {item.url ? (
              <img src={item.url} style={{ width: '100px'}} alt="GIF" />
            ) : (
              <p>Loading...</p>
            )}

          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Home;
