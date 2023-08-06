import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Flashcard.css'
import Astro from "../../../assets/astronuant.png"
import Logo from "../../../assets/logo.png"


function Flashcard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [onClick, setOnClick] = useState(false);

    const [cardIndex, setCardIndex] = useState(0);
    const [totalCard, setTotalCard] = useState(0);



    const urlSearchParams = new URLSearchParams(window.location.search);
    const lessonId = urlSearchParams.get('lesson_id');
    const userId = urlSearchParams.get('user_id');
    



    const [lessonData, setLessonData] = useState({});
    const [cardContent, setCardContent] = useState([]);
    let FandB = [];

    const handleClick = () => {
        setOnClick(true);
        setIsFlipped(!isFlipped);
    }


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:3000/api/lesson?lesson_id=${lessonId}&user_id=${userId}`);
                console.log("LessonId: ", lessonId);
                console.log("UserId: ", userId);

                // console.log(res.data.lesson.content);
                setLessonData(res.data);
                
                if(res.data.lesson !== undefined) {
                    // await res.data.lesson.content.content.forEach(card => {
                    //     FandB.push({front: card.front, back: card.back});
                    //     // console.log("Card: ", card);
                    // });
                    // setTotalCard(FandB.length);
                    // console.log("Card length: ", FandB.length);
                    // console.log(FandB[0].back);
                    setCardContent(res.data.lesson.content.content);
                    setTotalCard(cardContent.length);
                    console.log("Card content: ", cardContent);
                    console.log(cardContent.length);
                }

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);




    return (

        <div className="trang-flashcard">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="group" alt="Group" src={Astro} />
                    <Link to={`/homepage?user_id=${userId}`}>
                        <img className="logo" alt="Logo" src={Logo}/>
                    </Link>

                    {totalCard}

                    {totalCard <= 0 ? <div></div> :
                        <div>
                            <div className="scene scene--card">
                                <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
                                    <div className="card__face card__face--front" onClick={handleClick}>{cardContent[cardIndex].front}</div>
                                    <div className="card__face card__face--back" onClick={handleClick}>{cardContent[cardIndex].back}</div>
                                
                            </div>
                            <div className="btn-btn-primary">
                                <button class="btn btn-primary" onClick={() => {setCardIndex((cardIndex + 1)%totalCard); setIsFlipped(false)}}>Tiếp</button>
                            </div>
                            </div>
                        </div>
                        
                    }
                
                </div>


            </div>

        </div>




    );
}

export default Flashcard;