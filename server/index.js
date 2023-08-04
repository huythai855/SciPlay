const express = require('express');
const bodyParser = require('body-parser');
const { BigQuery } = require('@google-cloud/bigquery');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');
const { getStudent, getCourse, getLesson, getStudentCourses, getStudentLessons, getFinishedCourses, getRanking, getLatestThreads, getThread, getThreadComment } = require('./helper');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// async function Test () {
//     const stu = await getRanking('current_level', '10');
//     console.log(stu);
// }
// Test();

app.get('/api/homepage', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const student = await getStudent(user_id);
        const courses = await getStudentCourses(user_id);
        const lessons = await getStudentLessons(user_id);
        const data = {
            student,
            courses,
            lessons
        }
        // console.log(data);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/course', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const course_id = req.query.course_id;
        // console.log(`LESSON_ID: ${lesson_id}`);

        if (course_id === undefined) {
            const student = await getStudent(user_id);
            const courses = await getStudentCourses(user_id);
            const data = {
                student,
                courses,
            }
            // console.log(data);
            res.json(data);
        } else {
            const student = await getStudent(user_id);
            const lesson = await getLesson(lesson_id);
            const data = {
                student,
                lesson,
            };
            // console.log(data);
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/user', async (req, res) => {
    try {
        const user_id = req.query.user_id;

        const student = await getStudent(user_id);
        const fin_courses = await getFinishedCourses(user_id);
        const data = {
            student,
            fin_courses,
        }
        // console.log(data);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/ranking', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const ord = req.query.ord;

        const rank = await getRanking(ord, '10');
        const student = await getStudent(user_id);

        const data = {
            student, 
            rank
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/thread', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const thread_id = req.query.thread_id;

        if (thread_id === undefined) {
            const data = await getLatestThreads();
            res.json(data);
        } else {
            const content = await getThread(thread_id);
            const comments = await getThreadComment(thread_id);
            const data = {
                content,
                comments,
            }
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

