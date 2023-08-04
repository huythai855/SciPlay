import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackUni from '../../assets/back_universe.png'
import './Coursepath.css'
import Owl from '../../assets/logo1.png'
function Coursepath() {
  return (
    <div className='coursepath'>
            <section className='nav'>
      <img src ={Owl}/>

      <Link to ='/homepage'>
        <button>Trang chủ</button>
        </Link>
        <Link to ='/learn'>
        <button>Học</button>
        </Link>
        <Link to ='/coursepath'>
        <button>Thử Thách</button>
        </Link>
        <Link to ='/homepage'>
        <button>Xếp hạng</button>
        </Link>
        <Link to ='/homepage'>
        <button>Diễn đàn</button>
        </Link>
        <Link to ='/homepage'>
        <button>Cửa hàng</button>
        </Link>
      </section>
    </div>
  )
}

export default Coursepath
