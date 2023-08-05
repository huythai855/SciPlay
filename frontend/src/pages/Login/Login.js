import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Logo from '../../assets/logoname.png'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';


function Login({ history }) {
  const [username, setUsername] = useState(''); // Khởi tạo trạng thái cho tên người dùng
  const [password, setPassword] = useState(''); // Khởi tạo trạng thái cho mật khẩu người dùng
  const [data, setData] = useState(false); // Khởi tạo trạng thái cho lỗi
  let errorHappened = false;
  const errorHappenedRef = useRef(errorHappened);
  // TODO: add logic change for isVisible


  errorHappenedRef.current = errorHappened;
  const urlSearchParams = new URLSearchParams(window.location.search);
  errorHappened = urlSearchParams.get('error');
  errorHappenedRef.current = errorHappened === 'true';
  console.log("errorHappened: ", errorHappened);


  useEffect(() => {
    errorHappenedRef.current = errorHappened;
    const urlSearchParams = new URLSearchParams(window.location.search);
    errorHappened = urlSearchParams.get('error');
    errorHappenedRef.current = errorHappened === 'true';
    console.log("errorHappened: ", errorHappened);

  }, []);



  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`http://192.168.1.23:3000/api/ranking?username=${username}&password=${password}`)
    .then(response => {
        setData(response.data);
        const {error} = response.data;
        const {user_id} = response.data;


        if(error === true) {
          window.location.href = "http://localhost:3000/login?error=true";
        }
        else {
          window.location.href = `http://localhost:3000/homepage?user_id=${user_id}`;
        }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


    console.log('Name:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <section className="headera">
        <img src={Logo} alt="Logo" />

        <div className='paragraph'>
          <div>Nền tảng giáo dục khoa học tự nhiên</div>
          <div>dành cho trẻ em</div>
        </div>

        <div className="loginClass">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label for="usr" style={{ color: '#4860D4', fontWeight: 'bold' }} sm={1}>Username:</Label>
              <Col sm={2}>
                <Input type="text" style={{ color: '#4860D4' }} id="usr" value={username} onChange={handleUsernameChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="pwd" style={{ color: '#4860D4', fontWeight: 'bold' }} sm={1}>Mật khẩu:</Label>
              <Col sm={2}>
                <Input type="password" style={{ color: '#4860D4' }} id="pwd" value={password} onChange={handlePasswordChange} />
              </Col>
            </FormGroup>

            <div className={`wrongPass ${errorHappenedRef.current ? 'visible' : 'hidden'}`}>
              * Sai tên đăng nhập hoặc mật khẩu
            </div>

            <FormGroup row>
              <Col sm={{ size: 6, offset: 3 }}>
                <Button className='buttonClass' color="primary" type="submit">Đăng nhập</Button>
              </Col>
            </FormGroup>

          </Form>
        </div>


        {/* <Link to='/homepage'>
          <button>LOGIN</button>
        </Link> */}
      </section>

    </div>
  );
}

export default Login;
