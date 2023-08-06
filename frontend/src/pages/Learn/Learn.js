import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Learn.css'
import Background from "../../assets/background.png"
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
import Rectangle23 from "../../assets/rectangle-23.png"
import Rectangle from "../../assets/rectangle-6.png"
import Arrow from "../../assets/layer-1-2.png"
import Gif1 from "../../assets/course_header_image/1.gif"
import Gif2 from "../../assets/course_header_image/2.gif"
import Gif3 from "../../assets/course_header_image/3.gif"
import Gif4 from "../../assets/course_header_image/4.gif"
import Gif5 from "../../assets/course_header_image/5.gif"
import Gif6 from "../../assets/course_header_image/6.gif"
import Gif7 from "../../assets/course_header_image/7.gif"
import Gif8 from "../../assets/course_header_image/8.gif"
import Gif9 from "../../assets/course_header_image/9.gif"
import Gif10 from "../../assets/course_header_image/10.gif"
import Gif11 from "../../assets/course_header_image/11.gif"
import Gif12 from "../../assets/course_header_image/12.gif"
import Default from "../../assets/course_header_image/1.gif"

let gif_index = [Gif1, Gif2, Gif3, Gif4, Gif5, Gif6, Gif7, Gif8, Gif9, Gif10, Gif11, Gif12];


function Learn() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({});
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get('user_id');
    // console.log(userId);


  const onChange = date => {
    setDate(date);
  };

  useEffect(() =>  {
    

     axios.get(`http://10.10.143.92:3000/api/course?user_id=${userId}`)
        .then(response => {
            setData(response.data);
            // console.log(data);
            setStudent(response.data.student);
            setCourses(response.data.courses);
            setRecommend(response.data.recommend);
            // setLessons(data.lessons);
            console.log(student);
            console.log(courses);
            console.log(recommend);

            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
  }, [data, student, courses, recommend]);




  return (
<div className="learning">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background" alt="Background" src={Background} />
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
              <div className="text-wrapper">{student.stars ? student.stars : 200}</div>
              <img className="icon" alt="Icon" src={Icon5} />
              <img className="bell" alt="Bell" src={Bell} />
            </div>
            <div className="user">
              <div className="user-text">
                Xin chào,
                <br />
                {student.name ? student.name : "Quân"}
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
              <img className="vector-3" alt="Vector" src={Icon4} />
            </div>
            <div>
            <Link className="overlap-group-3" to="/forum">
              <img className="layer" alt="Layer" src={Icon3} />
              <div className="text-wrapper-3">Diễn đàn</div>
              </Link>
            </div>
            <div className="overlap-2">
              <div className="rankings">
                <img className="rectangle-2" alt="Rectangle" src={Rectangle23} />
                <div className="xep-hang">
                  <Link className="overlap-group-4" to={`/homepage?user_id=${userId}`}>
                    <img className="layer-2" alt="Layer" src={Icon2} />
                    <div className="text-wrapper-4">Xếp hạng</div>
                  </Link>
                </div>
              </div>
              <div className="challenge">
                <img className="layer-3" alt="Layer" src={Icon1} />
                <div className="text-wrapper-5">Thử thách</div>
              </div>
              <Link className="learn" to={`/learning?user_id=${userId}`}>
                <img className="layer-4" alt="Layer" src={Icon} />
                <div className="text-wrapper-6">Học</div>
              </Link>
            </div>
            <div>
            <Link className="home" to={`/homepage?user_id=${userId}`}>
              <img className="layer-5" alt="Layer" src={Icon0} />
              <div className="text-wrapper-7">Trang chủ</div>
              </Link>
            </div>
          </div>
          {/* <img className="logo" alt="Logo" src={Logo} /> */}
          <Link className="home" to={`/homepage?user_id=${userId}`}>
            <img className="logo" alt="Icon" src={Logo} />
          </Link>
          <header className="header">
            <div className="div-wrapper">
              <div className="overlap-3">
                <h1 className="h-1">KHOÁ HỌC VẬT LÝ CƠ BẢN</h1>
                <p className="p">XÂY DỰNG NỀN TẢNG CĂN BẢN NHẤT CHO KHOA HỌC CƠ BẢN</p>
                <div className="group-2">
                  <div className="overlap-group-14">
                    <div className="text-wrapper-8">Tìm hiểu thêm</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="course-class">
            <div className="title">Các lớp đang học</div>
            <div className="overlap-wrapper-2">
              <div className="overlap-4">
                <div className="group-3">
                <Link className='learn1' to ={`/coursepath?user_id=${userId}`}>
                  <div className="overlap-group-5">
                    <div className="text-wrapper-9">{courses.length > 0 ? courses[0].name : "Vật lý cơ bản"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                    <div className="group-4">
                      <div className="text-wrapper-13">Tham gia</div>
                      <img className="vector-4" alt="Vector" src={Arrow} />
                    </div>
                  </div>
                  </Link>
                </div>
                <img className="falling-apple" alt="Falling apple" src={courses.length > 0 ? gif_index[courses[0].course_id - 1] : Default} />
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-20">
                    <div className="text-wrapper-9">{courses.length > 0 ? courses[1].name : "Vật lý trung bình"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle}/>
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-4" alt="Vector" src={Arrow} />
                </div>
                <img className="dcim-afcc" alt="Dcim afcc" src={courses.length > 0 ? gif_index[courses[1].course_id - 1] : Default} />
              </div>
            </div>
            <div className="overlap-wrapper-4">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-6">
                    <div className="text-wrapper-9">{courses.length > 0 ? courses[2].name : "Sinh học cơ bản"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-4" alt="Vector" src={Arrow} />
                </div>
                <img className="img-2" alt="Img" src={courses.length > 0 ? gif_index[courses[2].course_id - 1] : Default} />
              </div>
            </div>
            <div className="overlap-wrapper-5">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-19">
                    <div className="text-wrapper-9">{courses.length > 0 ? courses[3].name : "Toán học cơ bản"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle}/>
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-4" alt="Vector" src={Arrow} />
                </div>
                <img className="img-3" alt="Img" src={courses.length > 0 ? gif_index[courses[3].course_id - 1] : Default} />
              </div>
            </div>
          </div>
          <div className="couse-sugg">
            <div className="title">Lớp dành cho bạn</div>
            <div className="overlap-wrapper-2">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-7">
                    <div className="text-wrapper-9">{recommend.length > 0 ? recommend[0].name : "Hóa học cơ bản"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                    <div className="group-4">
                      <div className="text-wrapper-13">Tham gia</div>
                      <img className="vector-5" alt="Vector" src="/img/vector.png" />
                    </div>
                  </div>
                </div>
                <img className="falling-apple" alt="Falling apple" src={recommend.length > 0 ? gif_index[recommend[0].course_id - 1] : Default}/>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-18">
                    <div className="text-wrapper-9">{recommend.length > 0 ? recommend[1].name : "Hóa học trung bình"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-5" alt="Vector" src="/img/vector.png" />
                </div>
                <img className="dcim-afcc" alt="Dcim afcc" src={recommend.length > 0 ? gif_index[recommend[1].course_id - 1] : Default} />
              </div>
            </div>
            <div className="overlap-wrapper-4">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-9">
                    <div className="text-wrapper-9">{recommend.length > 0 ? recommend[2].name : "Sinh học trung bình"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-5" alt="Vector" src="/img/vector.png" />
                </div>
                <img className="img-2" alt="Img" src={recommend.length > 0 ? gif_index[recommend[2].course_id - 1] : Default} />
              </div>
            </div>
            <div className="overlap-wrapper-5">
              <div className="overlap-4">
                <div className="group-3">
                  <div className="overlap-group-8">
                    <div className="text-wrapper-9">{recommend.length > 0 ? recommend[3].name : "Toán học trung bình"}</div>
                    <div className="overlap-5">
                      <img className="rectangle-3" alt="Rectangle" src={Rectangle} />
                      <div className="text-wrapper-10">1 giờ</div>
                      <div className="text-wrapper-11">3 quiz</div>
                      <div className="text-wrapper-12">3 bài học</div>
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-13">Tham gia</div>
                  <img className="vector-5" alt="Vector" src="/img/vector.png" />
                </div>
                <img className="img-3" alt="Img" src={recommend.length > 0 ? gif_index[recommend[3].course_id - 1] : Default}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Learn
