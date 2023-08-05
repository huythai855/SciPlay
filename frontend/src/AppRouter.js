import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lesson from './pages/Lesson/Lesson';
import Login from './pages/Login/Login';
import Rankings from "./pages/Rankings/Rankings";
import Learn from './pages/Learn/Learn';
import Coursepath from './pages/Course/Coursepath';

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/homepage" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/rankings" element={<Rankings/>} />
          <Route path="/learning" element={<Learn/>} />
          <Route path="/lesson/:id" element={<Lesson />} />

          <Route path="/course-path" element={<Coursepath/>} />
          <Route path="/" element={<Login/>} />

          {/* 404 page if you guy wanna edit :> */}
          {/*<Route path='*' element={<Home/>} />   */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
