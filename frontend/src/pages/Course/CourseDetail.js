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

          <Link to="/homepage?user_id=1">
          <img className="group" alt="Group" src={Owl1} />
          </Link>

          <div className="navbar">
   
      
          </div>
          <Link to="">
          <img className="x" alt="X" src={Level1} />
          </Link>

          <Link to="/interactive?user_id=1&lesson_id=1">
          <img className="x-level" alt="X" src={Level2} />
          </Link>

          <Link to="/flashcard?user_id=1&lesson_id=4">
          <img className="x-2" alt="X" src={Level3} />
          </Link>

          <Link to="/quiz?user_id=1&lesson_id=3">
              <img className="x-3" alt="X" src={Level4} />
          </Link>


          <img className="x-4" alt="X" src={Level5} />
          <img className="x-5" alt="X" src={Level6} />
          <img className="x-6" alt="X" src={Level7} />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
