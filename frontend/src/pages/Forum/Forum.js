import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Forum.css'
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
function Forum() {
  return (
    <div className="forum">
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
                  <div className="fill" />
                  <div className="level">15</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bar">
            <div className="shop">
              <div className="text-wrapper-2">Cửa hàng</div>
              <img className="vector-3" alt="Vector" src={Icon4}/>
            </div>
            <Link className="div-wrapper" to="/forum">
              <div className="overlap-group-3">
                <img className="layer" alt="Layer" src={Icon3} />
                <div className="text-wrapper-3">Diễn đàn</div>
              </div>
            </Link>
            <div className="rankings">
              <div className="xep-hang">
                <div className="overlap-group-4">
                  <img className="layer-2" alt="Layer" src={Icon2} />
                  <div className="text-wrapper-4">Xếp hạng</div>
                </div>
              </div>
            </div>
            <div className="challenge">
              <img className="layer-3" alt="Layer" src={Icon1} />
              <div className="text-wrapper-5">Thử thách</div>
            </div>
            <div>
            <Link className="learn" to="/learning">
              <img className="layer-4" alt="Layer" src={Icon} />
              <div className="text-wrapper-6">Học</div>
              </Link>
            </div>
            <div>
            <Link className="home" to="/homepage">
              <img className="layer-5" alt="Layer" src={Icon0}/>
              <div className="text-wrapper-7">Trang chủ</div>
              </Link>
            </div>
          </div>
          <img className="logo" alt="Logo" src={Logo}/>
          <h1 className="text-forum">Diễn đàn</h1>
          <div className="BOX-FORUM">
            <div className="navbar">
              <div className="time">Thời gian</div>
              <div className="content">Nội dung</div>
              <div className="uploader">Người đăng</div>
              <div className="ans">Số câu trả lời</div>
            </div>
          </div>
          <div className="BOX-forumans">
            <div className="navbar-2">
              <div className="date">12/07/2023</div>
              <p className="question">Mọi người giúp mình câu này với ạ</p>
              <div className="name-uploader">Huy Thái</div>
              <div className="number-ans">10</div>
            </div>
          </div>

          <div className="BOX-forumans1">
            <div className="navbar-21">
              <div className="date1">12/07/2023</div>
              <p className="question1">Mọi người ơi sao câu này mình làm không đúng</p>
              <div className="name-uploader1">Ngọc Mai</div>
              <div className="number-ans1">14</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Forum;