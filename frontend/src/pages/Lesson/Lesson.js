// import React from 'react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Lesson({ history }) {

  const [data, setData] = useState([]);
  const {id} = useParams();
  console.log("Lesson id: ", id);

  useEffect(() => {
    axios.get(`https://node-de-vcl-huythai855.vercel.app/api/lesson?id=${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);



  return (
    <div>
      {/* <h2>{name}</h2> */}
      <h2>Lesson Page</h2>
      <Link to="/">Back home</Link>
      <br />
      <br />

      <ul>
        {data.map(item => (
          <li key={item.lesson_id}>
            Tên bài học: {item.name}
            <br />
            Độ dài: {item.description}
            <br />
            Loại bài học: {item.type}
            <br />
            Nội dung: {item.content}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Lesson;
