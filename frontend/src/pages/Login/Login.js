import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Logo from '../../assets/logoname.png'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form, FormGroup, Label, Input, Button, Col } from 'reactstrap';


function Login({ history }) {
  const [email, setEmail] = useState(''); // Khởi tạo trạng thái cho tên người dùng
  const [password, setPassword] = useState(''); // Khởi tạo trạng thái cho mật khẩu người dùng
  const [data, setData] = useState({"status": "unreceived"}); // Khởi tạo trạng thái cho lỗi
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

  useEffect(() => {
    console.log("Updated data: ", data, typeof data);
    if(data !== {"status": "unreceived"}) {

      if(data.error === true) {
        window.location.href = "http://localhost:3001/login?error=true";
      }
      else {
        if(data.error === false) {
          window.location.href = `http://localhost:3001/homepage?user_id=${data.student_id}`;
        }
      }
        
    }
  }, [data]);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    await event.preventDefault();

    axios.get(`http://localhost:3000/api/login?email=${email}&password=${password}`)
    .then((response) => {
        setData(response.data);

        console.log("data: ", data, typeof(data));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });


    console.log('Email:', email);
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
              <Label for="usr" style={{ color: '#4860D4', fontWeight: 'bold' }} sm={1}>Email:</Label>
              <Col sm={2}>
                <Input type="text" style={{ color: '#4860D4' }} id="usr" value={email} onChange={handleEmailChange} />
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
