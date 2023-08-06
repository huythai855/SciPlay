import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lesson from './pages/Lesson/Lesson';
import Login from './pages/Login/Login';
import Rankings from "./pages/Rankings/Rankings";
import Learn from './pages/Learn/Learn';
import Forum from './pages/Forum/Forum';
import Coursepath from './pages/Course/Coursepath';
import Flashcard from './pages/Learn/Flashcard/Flashcard';
import CourseDetail from './pages/Course/CourseDetail';
import Quiz from "./pages/Lesson/Quiz/Quiz";

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/homepage" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/rankings" element={<Rankings/>} />
          <Route path="/learning" element={<Learn/>} />
          <Route path="/lesson" element={<Lesson />} />
            
          <Route path="/" element={<Login/>} />
          <Route path="/flashcard" element={<Flashcard/>}/>
          <Route path="/forum" element={<Forum/>} />
          <Route path="/coursepath" element={<Coursepath/>} />
          <Route path="/coursedetail" element={<CourseDetail/>} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/physic-page" element={<Coursepath/>} />
          <Route path="/course-path" element={<Coursepath/>} />

          {/* 404 page if you guy wanna edit :> */}
          {/*<Route path='*' element={<Home/>} />   */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
