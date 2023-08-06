import React, { useState, useEffect } from "react";
import axios from "axios";
import Mentor from "../../../assets/interactive/mentor.png";
import Logo from "../../../assets/interactive/logo.png";
import Text from "../../../assets/interactive/text.png";
import Learner from "../../../assets/interactive/learner.png";

import TypewriterEffect from "./TypewriterEffect";
import "./Interactive.css";

const LessonDetails = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get("user_id");
    const lessonId = urlSearchParams.get("lesson_id");  


    const [lessonData, setLessonData] = useState(null);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        async function fetchLessonData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/lesson?user_id=${userId}&lesson_id=${lessonId}`
                );
                setLessonData(response.data);
                // setName(response.data.student.name);
                
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchLessonData();
        
    }, [userId, lessonId]);

    const showNextLine = () => {
        if(lessonData !== null) {
            if (currentLineIndex <= lessonData.lesson.content.content.length - 1) {
                setCurrentLineIndex(currentLineIndex + 1);
            }
            
            if(lessonData.lesson.content.content[currentLineIndex].lines !== undefined) {
                setDisplayedText(lessonData.lesson.content.content[currentLineIndex].lines[0]);
            }

        }
        
    };

    const typingSpeed = 30; // Tốc độ đánh chữ (ms)

    return (
        <div className="interactive-theory">
            <div className="div">
                <div className="overlap">
                    <img className="learner" alt="Learner" src={Learner} />
                    

                    <div className="text-box">
                        <div className="overlap-group">

                            <div className="type-wrapper">
                                <TypewriterEffect
                                    text={displayedText}
                                    speed={typingSpeed}
                                />
                            </div>

                            <img className="text" alt="Text" src={Text} />

                            <div className="next-button">
                                <button type="button" class="btn btn-primary" onClick={showNextLine}>Tiếp theo</button>
                            </div>

                            
                        </div>
                    </div>
            

                    <img className="mentor" alt="Mentor" src={Mentor} />
                </div>
                <img className="logo" alt="Logo" src={Logo} />
            </div>
        </div>

    );
};

export default LessonDetails;
