import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Home.css";
import NavBar from "../NavBar";

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
    <div className="Background">
        <div className="Section">
            <NavBar className="NavSec" />
            <div className="MainSec">
                <div className="LandingSec">
                    <h1>Chào mừng đến với SciPlay</h1>
                    <h2>Hôm nay bạn muốn học gì?</h2>
                </div>

                <div className="SurfingSec">
                    <h3>Các khóa đang học</h3>
                    <ul className="navSec_noBullets">
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
            </div>

        </div>
    </div>

  );
}

export default Home;
