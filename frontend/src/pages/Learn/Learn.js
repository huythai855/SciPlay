import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Learn.css'
import Owl from '../../assets/logo1.png'
function Learn() {
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
<div className='learn'>
      <h1>Chào mừng đến với SciPlay12243</h1>
      <h2>Hôm nay bạn muốn học gì?</h2>
      <section className='nav'>
      <img src ={Owl}/>

      <Link to ='/homepage'>
        <button>Trang chủ</button>
        </Link>
        <Link to ='/learn'>
        <button>Học</button>
        </Link>
        <Link to ='/homepage'>
        <button>Thử Thách</button>
        </Link>
        <Link to ='/homepage'>
        <button>Xếp hạng</button>
        </Link>
        <Link to ='/homepage'>
        <button>Diễn đàn</button>
        </Link>
        <Link to ='/homepage'>
        <button>Cửa hàng</button>
        </Link>
      </section>
      

      <br />
      <h3>Các khóa đang học</h3>
      
      <ul>
        {data.map(item => (
          <li className='learnBox' key={item.lesson_id}>
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
                

      <br />
      <h3>Lớp dành cho bạn</h3>
      
      <ul>
        {data.map(item => (
          <li className='learnBox' key={item.lesson_id}>
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
    
  )
}

export default Learn
