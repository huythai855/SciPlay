import React from 'react';
import { Link } from 'react-router-dom';

function Login({ history }) {

  return (
    <div>
      <h2>SciPlay</h2>
      Nền tảng giáo dục khoa học trực tuyến
        <br/>
        <br/>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Login;
