// import React from 'react';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from "./NavBar";

function Learn({ history }) {

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
        <div className="Background">
            <div className="Section">
                <NavBar className="NavSec" />
                <div className="MainSec">
                    <h2>Học</h2>
                    <Link to="/">Back home</Link>

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
            </div>
        </div>
    );
}

export default Learn;
