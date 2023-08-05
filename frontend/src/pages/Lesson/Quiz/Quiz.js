import React from "react";
import "./Quiz.css";
import bg from "../../../assets/Quiz/backquiz.png";
import opA from '../../../assets/Quiz/optiona.png';
import opB from '../../../assets/Quiz/optionb.png';
import opC from '../../../assets/Quiz/optionc.png';
import opD from '../../../assets/Quiz/optiond.png';
import logo from '../../../assets/logo.png';

function Quiz () {
    let ansStatus = ['none','none', 'none','none'];
    return (
        <div className="quiz-page">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <img className="back-quiz" alt="Back quiz" src={bg} />
                    <img className="logo" alt="Logo" src={logo} />
                    <div className="quiz-sys">
                        <div className="overlap-group">
                            <div className="quiz">
                                <div className="OptionA">
                                    <div className={ansStatus[0] === 'none' ? 'none' : (ansStatus[0] === 'correct' ? 'correct' : 'wrong')}>
                                        <img className="option-a" alt="Option a" src={opA}/>
                                        <p className="text">Đây là đáp án A</p>
                                    </div>
                                </div>

                                <div className="OptionB">
                                    <div className={ansStatus[1] === 'none' ? 'none' : (ansStatus[1] === 'correct' ? 'correct' : 'wrong')}>
                                        <img className="option-b" alt="Option b" src={opB} />
                                        <p className="text">Đây là đáp án B</p>
                                    </div>
                                </div>
                                <div className="OptionC">
                                    <div className={ansStatus[1] === 'none' ? 'none' : (ansStatus[2] === 'correct' ? 'correct' : 'wrong')}>
                                        <img className="option-c" alt="Option c" src={opC} />
                                        <p className="text">Đây là đáp án C</p>
                                    </div>
                                </div>
                                <div className="OptionD">
                                    <div className={ansStatus[1] === 'none' ? 'none' : (ansStatus[3] === 'correct' ? 'correct' : 'wrong')}>
                                        <img className="option-d" alt="Option d" src={opD} />
                                        <p className="text">Đây là đáp án D</p>
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