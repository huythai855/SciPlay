import React, {useEffect, useState} from 'react';
import "./Quiz.css";
import bg from "../../../assets/Quiz/backquiz.png";
import opA from '../../../assets/Quiz/optiona.png';
import opB from '../../../assets/Quiz/optionb.png';
import opC from '../../../assets/Quiz/optionc.png';
import opD from '../../../assets/Quiz/optiond.png';
import logo from '../../../assets/logo.png';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Quiz () {
    let ansStatus = ['none','none', 'none' ,'none']; //none || wrong || correct
    const handleClick = event => {
        if(event.target.id === "A"){
            console.log("OptionA");
        }
        else if(event.target.id === "B"){
            console.log("OptionB");
        }
        if(event.target.id === "C"){
            console.log("OptionC");
        }
        if(event.target.id === "D"){
            console.log("OptionD");
        }
    };


    // const [data, setData] = useState({});
    // const {lessonId} = useParams();
    // console.log("Lesson id: ", lessonId);
    // // const [ranking, setRanking] = useState([]);
    // // const {id} = useParams();
    // // let {uid} = useParams();
    // // let rankingNumber = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
    //
    //
    // useEffect(() =>  {
    //
    //     const urlSearchParams = new URLSearchParams(window.location.search);
    //     const lessonId = urlSearchParams.get('lesson_id');
    //     let content = urlSearchParams.get('content');
    //     if (content === null){
    //         content = "current type";
    //     }
    //
    //     console.log("Lesson ID: ", lessonId);
    //     console.log("Content: ", content);
    //
    //     axios.get(`https://node-de-vcl-huythai855.vercel.app/api/lesson?id=${lessonId}`)
    //         .then(response => {
    //             // const { student, rank } = response.data;
    //             setData(response.data);
    //             // setRanking(rank);
    //
    //             // console.log("Ranking: ", ranking);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, /*[ranking]*/);


    return (
        <div className="quiz-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="back-quiz" alt="Back quiz" src={bg} />
                    <img className="logo" alt="Logo" src={logo} />
                    <div className="quiz-sys">
                        <div className="overlap-group">
                            <div className="quiz" onClick={handleClick}>
                                <div className="OptionA" >
                                    <div className={ansStatus[0] === 'none' ? 'none' : (ansStatus[0] === 'correct' ? 'correct' : 'wrong')} >
                                        <p id="A" className="text"> Đây là đáp án A</p>
                                        <img id ="A" className="option-a" alt="Option a" src={opA} />
                                    </div>
                                </div>

                                <div className="OptionB">
                                    <div className={ansStatus[1] === 'none' ? 'none' : (ansStatus[1] === 'correct' ? 'correct' : 'wrong')}>
                                        <img id="B" className="option-b" alt="Option b" src={opB} />
                                        <p id="B" className="text">Đây là đáp án B</p>
                                    </div>
                                </div>
                                <div className="OptionC" >
                                    <div className={ansStatus[2] === 'none' ? 'none' : (ansStatus[2] === 'correct' ? 'correct' : 'wrong')}>
                                        <img id="C" className="option-c" alt="Option c" src={opC} />
                                        <p id="C" className="text">Đây là đáp án C</p>
                                    </div>
                                </div>
                                <div className="OptionD">
                                    <div className={ansStatus[3] === 'none' ? 'none' : (ansStatus[3] === 'correct' ? 'correct' : 'wrong')}>
                                        <img id="D" className="option-d" alt="Option d" src={opD} />
                                        <p id="D" className="text">Đây là đáp án D</p>
                                    </div>
                                </div>
                                <div className="question">
                                    <h1 className="text">Đây là câu hỏi</h1>
                                </div>
                            </div>
                            <div className="char">

                                <div className="enemy-health-bar-wrapper">
                                    <div className="enemy-health-bar">
                                        <div className="health" />
                                    </div>
                                </div>
                                <div className="player-health-bar-wrapper">
                                    <div className="player-health-bar">
                                        <div className="div" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Quiz;