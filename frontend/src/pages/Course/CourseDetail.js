import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CourseDetail.css'

import Owl1 from "../../assets/group-51.png"
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import Icon5 from "../../assets/icon5.png"
import Icon6 from "../../assets/icon6.png"
import Level1 from "../../assets/x-level1-1.png"
import Level2 from "../../assets/x-level2-1.png"
import Level3 from "../../assets/x-level3-1.png"
import Level4 from "../../assets/x-level4-1.png"
import Level5 from "../../assets/x-level5-1.png"
import Level6 from "../../assets/x-level6-1.png"
import Level7 from "../../assets/x-level7-1.png"

function CourseDetail() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const user_id = urlSearchParams.get("user_id");

  return (
    <div className="physic-course">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="group" alt="Group" src={Owl1} />
          <div className="navbar">
            <div className="learn">
              <div className="div">
                <img className="icon" alt="Icon" src={Icon2} />
                <div className="text-wrapper">Học</div>
              </div>
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
          <img className="x" alt="X" src={Level1} />
          <img className="x-level" alt="X" src={Level2} />
          <img className="x-2" alt="X" src={Level3} />
          <img className="x-3" alt="X" src={Level4} />
          <img className="x-4" alt="X" src={Level5} />
          <img className="x-5" alt="X" src={Level6} />
          <img className="x-6" alt="X" src={Level7} />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
