import React, {useEffect, useState} from 'react';
import "./Rankings.css";
import divline from '../../assets/Rankings/divline.png';
import line2 from '../../assets/Rankings/line-2.png';
import icon from '../../assets/Rankings/icon.png';
import bell1 from '../../assets/Rankings/bell-1.png';
import vector from '../../assets/Rankings/vector.png';
import vector1 from '../../assets/Rankings/vector-1.png';
import  vector2 from '../../assets/Rankings/vector-2.png';
import vector3 from '../../assets/Rankings/vector-3.png';
import line from '../../assets/Rankings/line.png';
import  layer1 from '../../assets/Rankings/layer-1.png';
import layer1_4 from  '../../assets/Rankings/layer-1-4.png';
import layer1_1 from  '../../assets/Rankings/layer-1-1.png';
import  layer1_2 from '../../assets/Rankings/layer-1-2.png';
import  layer1_3 from '../../assets/Rankings/layer-1-3.png';
import logo from '../../assets/Rankings/logo.png';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Rankings() {
    const [data, setData] = useState({});
    const [ranking, setRanking] = useState([]);
    const {id} = useParams();
    let {uid} = useParams();
    let rankingNumber = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get('user_id');


    useEffect(() =>  {
        
        let ord = urlSearchParams.get('ord');
        if (ord === null){
            ord = "current_level";
        }

         axios.get(`http://localhost:3000/api/ranking?user_id=${userId}&ord=${ord}`)
            .then(response => {
                const { student, rank } = response.data;
                setData(response.data);
                setRanking(rank);

                console.log("Ranking: ", ranking);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [ranking]);

    return (
        <div className="rankings">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="search-bar">
                        <div className="overlap-group">
                            <div className="text">Tìm kiếm...</div>
                            <div className="rectangle" />
                            <div className="group">
                                <div className="div">
                                    <div className="ellipse" />
                                    <img className="line" alt="Line" src={line2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="stars">
                            <div className="text-wrapper">500</div>
                            <img className="icon" alt="Icon" src={icon}/>
                            <img className="bell" alt="Bell" src={bell1} />
                        </div>
                        <div className="user">
                            <div className="user-text">
                                Xin chào,
                                <br />
                                {uid}
                            </div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <img className="vector" alt="Vector" src={vector3} />
                                    <img className="img" alt="Vector" src={vector2} />
                                    <img className="vector-2" alt="Vector" src={vector1} />
                                    <div className="fill" />
                                    <div className="level">15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="board">
                        <div className="overlap-2">
                            <img className="div-line" alt="Div line" src={divline} />

                            <div className="board-rank-header">
                                <div className="name-header">Họ và tên</div>
                                <div className="level-header">Cấp độ</div>
                                <div className="star-header">Số sao</div>
                            </div>


                            <div className="board-rank" />
                            {
                                ranking.slice(0,8).map((item, index) => (
                                <div key={index}>
                                    <div className="rank-info">
                                        <div className="name">{item.fullname}</div>
                                        <div className="level-2">{item.current_level}</div>
                                        <div className="stars-2">{item.total_stars}</div>
                                        <img className="line-2" alt="Line" src={line}/>
                                        <div className="rank">{rankingNumber[index]}</div>
                                    </div>
                                </div>))
                            }

                        </div>
                    </div>
                    <div className="level-filter">
                        <div className="div-wrapper">
                            <div className="text-2">Theo cấp độ</div>
                        </div>
                    </div>
                    <div className="star-filter">
                        <div className="div-wrapper">
                            <div className="text-3">Theo số sao</div>
                        </div>
                    </div>
                    <h1 className="title">Xếp hạng</h1>

                    <div className="nav-bar">
                        <div className="shop">
                            <div className="text-wrapper-2">Cửa hàng</div>
                            <img className="vector-3" alt="Vector" src={vector} />
                        </div>
                        <div className="forum">
                            <img className="layer" alt="Layer" src={layer1_4} />
                            <div className="text-wrapper-3">Diễn đàn</div>
                        </div>
                        <div className="xep-hang-wrapper">
                            <Link className="xep-hang" to={`/ranking?user_id=${userId}`}>
                                <div className="overlap-group-3">
                                    <img className="layer-2" alt="Layer" src={layer1_3} />
                                    <div className="text-wrapper-4">Xếp hạng</div>
                                </div>
                            </Link>
                        </div>
                        <div className="challenge">
                            <img className="layer-3" alt="Layer" src={layer1_2} />
                            <div className="text-wrapper-5">Thử thách</div>
                        </div>
                        <Link className="learn" to={`/learning?user_id=${userId}`}>
                            <img className="layer-4" alt="Layer" src={layer1_1} />
                            <div className="text-wrapper-6">Học</div>
                        </Link>
                        <Link className="home" to={`/homepage?user_id=${userId}`} >
                            <img className="layer-5" alt="Layer" src={layer1} />
                            <div className="text-wrapper-7">Trang chủ</div>
                        </Link>
                    </div>
                    <Link to={`/homepage?user_id=${userId}`}>
                    <img className="logo" alt="Logo" src={logo} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Rankings;