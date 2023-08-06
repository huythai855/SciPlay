// import React from 'react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Lesson({ history }) {

  const [data, setData] = useState([]);
  const {id} = useParams();
  console.log("Lesson id: ", id);
  let test_content;

      useEffect(() => {
        axios.get(`https://node-de-vcl-huythai855.vercel.app/api/lesson?id=${id}`)
          .then(response => {
            setData(response.data);
            const { content } = data;
             test_content = response.data.content;
            console.log("Test:", typeof test_content);
            console.log("Data: ", data);
            const obj = JSON.parse(data[0].content);


            console.log("OBJ: ", obj)
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);





      return (
        <div>
          {/* <h2>{name}</h2> */}
          <h2>{test_content}</h2>
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
