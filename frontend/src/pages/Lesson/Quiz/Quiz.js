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
import line from "../../../assets/Rankings/line.png";

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

    const [data, setData] = useState({});
    const [lesson, setLesson] = useState([]);
    const [quizContent, setQuizContent] = useState([{answers: [{answer:"Isaac Newton",isCorrect:true},{answer:"Yuri Gagarin",isCorrect:false},{answer:"Albert Einstein",isCorrect:false},{answer:"Stephen Hawking",isCorrect:false}],explanation : null,question:"Ai là người đầu tiên phát hiện ra trọng lực ở Trái đất?"}]);
    const [quizIndex, setQuizIndex] = useState(0);
    const [numQuiz, setNumQuiz]  = useState(0);
    let {uid} = useParams();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const lessonId = urlSearchParams.get('lesson_id');
    const userId = urlSearchParams.get('user_id');
    const [lessonData, setLessonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:3000/api/lesson?lesson_id=${lessonId}&user_id=${userId}`);
                // console.log("LessonId: ", lessonId);
                // console.log("UserId: ", userId);

                // console.log(res.data.lesson.content);
                setLessonData(res.data);
                console.log("data: ", quizContent);

                if(res.data.lesson !== undefined) {
                    // await res.data.lesson.content.content.forEach(card => {
                    //     FandB.push({front: card.front, back: card.back});
                    //     // console.log("Card: ", card);
                    // });
                    console.log("res data", res.data.lesson)
                    setQuizContent(res.data.lesson.content.content);
                    setNumQuiz(quizContent.length);
                    // console.log(cardContent.length);
                }

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


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
                                    <div>
                                        <p id="A" className="text">{quizContent[quizIndex].answers[0].answer}</p>
                                        <img id ="A" className="option-a" alt="Option a" src={opA} />
                                    </div>
                                </div>

                                <div className="OptionB">
                                    <div>
                                        <img id="B" className="option-b" alt="Option b" src={opB} />
                                        <p id="B" className="text">{quizContent[quizIndex].answers[1].answer}</p>
                                    </div>
                                </div>
                                <div className="OptionC" >
                                    <div>
                                        <img id="C" className="option-c" alt="Option c" src={opC} />
                                        <p id="C" className="text">{quizContent[quizIndex].answers[2%quizContent[quizIndex].answers.length].answer}</p>
                                    </div>
                                </div>
                                <div className="OptionD">
                                    <div>
                                        <img id="D" className="option-d" alt="Option d" src={opD} />
                                        <p id="D" className="text">{quizContent[quizIndex].answers[3%quizContent[quizIndex].answers.length].answer}</p>
                                    </div>
                                </div>
                                <div className="question">
                                    <h1 className="text">{quizContent[quizIndex].question}</h1>
                                </div>
                            </div>
                            <div className="btn-btn-primary">
                                <button className="btn btn-primary" onClick={() => {setQuizIndex((quizIndex + 1)%numQuiz)}}>Tiếp</button>
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