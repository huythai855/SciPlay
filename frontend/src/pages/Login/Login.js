import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoname.png'
import './Login.css'
function Login({ history }) {

  return (
    <div>
    <section class ="header">
    <img src ={Logo}/>
        <p>NỀN TẢNG GIÁO DỤC KHOA HỌC TỰ NHIÊN</p>
        
        <p>DÀNH CHO TRẺ EM</p>
        <Link to ='/homepage'>
        <button>LOGIN</button>
        </Link>
        </section>
      
    </div>
  );
}

export default Login;
