import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lesson from './pages/Lesson/Lesson';
import Login from './pages/Login/Login';
import Learn from './pages/Learn/Learn';
import Forum from './pages/Forum/Forum';
import Coursepath from './pages/Course/Coursepath';
import CourseDetail from './pages/Course/CourseDetail';
function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/learning" element={<Learn/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/coursepath" element={<Coursepath/>} />
          <Route path="/coursedetail" element={<CourseDetail/>} />
          {/* <Route path="/homepage" element={<HomePage />} /> */}
          <Route path="/lesson/:id" element={<Lesson />} />

          <Route path="/physic-page" element={<Coursepath/>} />


          {/* 404 page if you guy wanna edit :> */}
          <Route path='*' element={<Home/>} />   
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
