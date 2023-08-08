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
        <Link to="/homepage?user_id=1">
        <img className="group" alt="Group" src={Owl1}/>
        </Link>

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
