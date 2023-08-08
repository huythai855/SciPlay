import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Interactive.css";
import Mentor from "../../../assets/interactive/mentor.png";
import Logo from "../../../assets/interactive/logo.png";
import Text from "../../../assets/interactive/text.png";
import Learner from "../../../assets/interactive/learner.png";

import TypewriterEffect from "./TypewriterEffect";

import LessonDetails from './LessonDetails';

function Interactive() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get("user_id");
    const lessonId = urlSearchParams.get("lesson_id");  

    return (
    <div>
        <LessonDetails userId={userId} lessonId={lessonId} />
    </div>
    );
}

export default Interactive;