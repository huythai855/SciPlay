import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackUni from '../../assets/back_universe.png'
import './Coursepath.css'
import Background from "../../assets/background.png"
import BackUniV from "../../assets/back_universe.png"
import Owl1 from "../../assets/group-51.png"
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import Icon5 from "../../assets/icon5.png"
import Icon6 from "../../assets/icon6.png"
function Coursepath() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const user_id = urlSearchParams.get("user_id");


  return (
    <div className="course-path">
    <div className="overlap-wrapper">
      <div className="overlap">
        <img className="background" alt="Background" src={Background} />
        <img className="back-universe" alt="Back universe" src={BackUniV} />
        <img className="group" alt="Group" src={Owl1}/>
        <div className="navbar">
          <div className="learn">
            <Link className="div" to={`/learning?user_id=${user_id}`}>
              <img className="icon" alt="Icon" src={Icon2} />
              <div className="text-wrapper">Học</div>
            </Link>
          </div>
          <div className="challenge">
            <img className="img" alt="Icon" src={Icon3} />
            <div className="text-wrapper-2">Thử thách</div>
          </div>
          <Link className="ranking" to={`/ranking?user_id=${user_id}`}>
            <div className="overlap-group">
              <img className="icon-2" alt="Icon" src={Icon4} />
              <div className="text-wrapper-3">Xếp hạng</div>
            </div>
          </Link>
          <div>
          <Link className="overlap-group-4" to={`/forum?user_id=${user_id}`}>
            <img className="icon-3" alt="Icon" src={Icon5} />
            <div className="text-wrapper-4">Diễn đàn</div>
            </Link>
          </div>
          <div className="shop">
            <div className="text-wrapper-5">Cửa hàng</div>
            <img className="icon-4" alt="Icon" src={Icon6} />
          </div>
          <div>
          <Link className="home" to={`/homepage?user_id=${user_id}`}>
            <div className="text-wrapper-6">Trang chủ</div>
            <img className="icon-5" alt="Icon" src={Icon1} />
            </Link>
          </div>
        </div>
        <div >
        <Link className="gravity" to="/coursedetail">
          <div className="h-1-wrapper">
            <h1 className="h-1">TRỌNG LỰC</h1>
          </div>
          </Link>
        </div>
        <div className="spped">
          <div className="div-wrapper">
            <div className="text-wrapper-7">VẬN TỐC</div>
          </div>
        </div>
        <div className="light">
          <div className="overlap-2">
            <div className="text-wrapper-8">ÁNH SÁNG</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Coursepath
