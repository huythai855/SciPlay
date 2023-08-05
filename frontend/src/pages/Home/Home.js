import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './Home.css'

import Line2 from "../../assets/line-2.png"
import Icon5 from "../../assets/icon-5.png"
import Bell from "../../assets/bell-1.png"
import VectorR from "../../assets/vector-5.png"
import VectorA from "../../assets/vector-4.png"
import VectorB from "../../assets/vector-3.png"
import Icon4 from "../../assets/icon-4.png"
import Icon0 from "../../assets/icon0.png"
import Icon1 from "../../assets/icon-1.png"
import Icon2 from "../../assets/icon-2.png"
import Icon3 from "../../assets/icon-3.png"
import Icon from "../../assets/icon.png"
import Logo from "../../assets/logo.png"
import Line1 from "../../assets/line-1.png"
import Arrow from "../../assets/layer-1-2.png"
import Rectangle from "../../assets/rectangle-6.png"
import Lac1 from "../../assets/lac1.gif"
import Lac2 from "../../assets/lac2.gif"
import Lac3 from "../../assets/lac3.gif"


function Home() {  
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="homepage">
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="search-bar">
          <div className="overlap-group">
            <div className="text">Tìm kiếm...</div>
            <div className="rectangle" />
            <div className="group">
              <div className="div">
                <div className="ellipse" />
                <img className="line" alt="Line" src={Line2} />
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="stars">
            <div className="text-wrapper">500</div>
            <img className="icon" alt="Icon" src={Icon5} />
            <img className="bell" alt="Bell" src={Bell} />
          </div>
          <div className="user">
            <div className="user-text">
              Xin chào,
              <br />
              Huy Thái
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="vector" alt="Vector" src={VectorR} />
                <img className="img" alt="Vector" src={VectorA} />
                <img className="vector-2" alt="Vector" src={VectorB} />
                <div className="fill">
                  <div className="level">15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="shop">
            <div className="text-wrapper-2">Cửa hàng</div>
            <img className="icon-2" alt="Icon" src={Icon4} />
          </div>
          <div className="forum">
            <img className="icon-3" alt="Icon" src={Icon3} />
            <div className="text-wrapper-3">Diễn đàn</div>
          </div>
          <div className="rankings">
            <div className="ranking">
              <div className="overlap-group-3">
                <img className="icon-4" alt="Icon" src={Icon2} />
                <div className="text-wrapper-4">Xếp hạng</div>
              </div>
            </div>
          </div>
          <div className="challenge">
            <img className="icon-5" alt="Icon" src={Icon1} />
            <div className="text-wrapper-5">Thử thách</div>
          </div>
          <div className="learn">
            <img className="icon-6" alt="Icon" src={Icon} />
            <div className="text-wrapper-6">Học</div>
          </div>
          <Link className="home" to="/homepage">
            <img className="layer" alt="Layer" src={Icon0}/>
            <div className="text-wrapper-7">Trang chủ</div>
          </Link>
        </div>
        <Link to="/homepage">
          <img className="logo" alt="Logo" src={Logo} />
        </Link>
        <div className="calendar">
          <div className="overlap-2">
            <div className="rectangle-2" />
            <div className="group-2">
              <h1 className="h-1">Tháng 8</h1>
              <p className="sun-mon-tue-wed-thu">
                Sun&nbsp;&nbsp; Mon&nbsp;&nbsp; Tue&nbsp;&nbsp; Wed&nbsp;&nbsp; Thu&nbsp;&nbsp; Fri&nbsp;&nbsp; Sat
              </p>
              <p className="element">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                5
              </p>
              <p className="p">
                &nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12
              </p>
              <p className="element-2">
                &nbsp;&nbsp;
                13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                17&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 18&nbsp;&nbsp;&nbsp;&nbsp; 19
              </p>
              <p className="element-3">
                &nbsp;&nbsp;
                20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;&nbsp;
                23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26
              </p>
              <p className="element-4">
                &nbsp;&nbsp;
                27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;&nbsp;&nbsp;
                30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 31
              </p>
              <img className="line-2" alt="Line" src={Line1} />
            </div>
          </div>
        </div>
        <div className="quiz-practice">
          <div className="text-wrapper-8">Các quiz luyện tập</div>
          <div className="quiz">
            <div className="overlap-group-4">
              <div className="rectangle-3" />
              <div className="text-wrapper-9">Luyện tập vật lý</div>
              <div className="rectangle-4" />
              <img className="layer-2" alt="Layer" src={Arrow}/>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-3">
              <div className="rectangle-5" />
              <div className="text-wrapper-10">Luyện tập hóa học</div>
              <div className="rectangle-6" />
              <img className="layer-3" alt="Layer" src={Arrow} />
            </div>
          </div>
          <div className="quiz-2">
            <div className="overlap-4">
              <div className="rectangle-7" />
              <div className="text-wrapper-11">Luyện tập sinh học</div>
              <div className="rectangle-8" />
              <img className="layer-4" alt="Layer" src={Arrow} />
            </div>
          </div>
        </div>
        <div className="learning-class">
          <div className="text-wrapper-8">Các lớp đang học</div>
          <div className="basic-phy">
            <div className="overlap-5">
              <div className="group-3">
                <div className="overlap-group-5">
                  <div className="text-wrapper-12">Vật lý cơ bản</div>
                  <div className="overlap-6">
                    <img className="rectangle-9" alt="Rectangle" src={Rectangle} />
                    <div className="text-wrapper-13">1 giờ</div>
                    <div className="text-wrapper-14">3 quiz</div>
                    <div className="text-wrapper-15">3 bài học</div>
                  </div>
                  <div className="group-4">
                    <div className="text-wrapper-16">&nbsp;Tham gia &nbsp;&nbsp;▶</div>
                  </div>
                </div>
              </div>
              <img className="falling-apple" alt="Falling apple" src={Lac1} />
            </div>
          </div>
          <div className="adv-phy">
            <div className="overlap-5">
              <div className="group-3">
                <div className="overlap-group-5">
                  <div className="text-wrapper-12">Vật lý nâng cao</div>
                  <div className="overlap-6">
                    <img className="rectangle-9" alt="Rectangle" src={Rectangle} />
                    <div className="text-wrapper-13">1 giờ</div>
                    <div className="text-wrapper-14">3 quiz</div>
                    <div className="text-wrapper-15">3 bài học</div>
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-16">&nbsp;Tham gia &nbsp;&nbsp;▶</div>
              </div>
              <img className="dcim-afcc" alt="Dcim afcc" src={Lac2} />
            </div>
          </div>
          <div className="basic-chem">
            <div className="overlap-5">
              <div className="group-3">
                <div className="overlap-group-6">
                  <div className="text-wrapper-12">Hóa học cơ bản</div>
                  <div className="overlap-6">
                    <img className="rectangle-9" alt="Rectangle" src={Rectangle} />
                    <div className="text-wrapper-13">1 giờ</div>
                    <div className="text-wrapper-14">3 quiz</div>
                    <div className="text-wrapper-15">3 bài học</div>
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-16">&nbsp;Tham gia &nbsp;&nbsp;▶</div>
              </div>
              <img className="img-2" alt="Img" src={Lac3} />
            </div>
          </div>
        </div>
        <div className="welcome">
          <div className="overlap-7">
            <img className="logo-2" alt="Logo" src={Logo} />
            <p className="text-wrapper-17">Chào Thái, hôm nay bạn muốn học gì nhỉ?</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  );
}

export default Home;