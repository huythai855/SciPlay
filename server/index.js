const express = require('express');
const bodyParser = require('body-parser');
const { BigQuery } = require('@google-cloud/bigquery');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');

const { 
    getUser, getStudent, getCourse, getLesson, getStudentCourses, getStudentLessons, 
    getFinishedCourses, getRanking, getLatestThreads, getThread, getThreadComment, 
    getInsideCourse, getTopicLesson } = require('./helper');
const { getRecommendation } = require('./rec_from_some')


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/api/login', async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const user = await getUser(email, password);

    try {
        const email = req.query.email;
        const password = req.query.password;
        const user = await getUser(email, password);
        

        if (user === undefined) {
            res.json({ "error": true, "student_id" : undefined});
        }
        else {
            const student = await getStudent(user.user_id);
            res.json({"error": false, "student_id": student.student_id});
        }
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data from /api/login' });
    }
});

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
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/course', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const course_id = req.query.course_id;
        const course_path_id = req.query.course_path_id;

        if (course_id === undefined) {
            const student = await getStudent(user_id);
            const courses = await getStudentCourses(user_id);
            const recommend = await getRecommendation(user_id, 4);
            const data = {
                student,
                courses,
                recommend
            }
            res.json(data);
        } else {
            if (course_path_id === undefined) {
                const student = await getStudent(user_id);
                const topics = await getInsideCourse(course_id);
                const data = {
                    student,
                    topics,
                };
                res.json(data);
            }
            else {
                const student = await getStudent(user_id);
                const lessons = await getTopicLesson(course_path_id);
                const data = {
                    student,
                    lessons,
                }
                res.json(data);
            }
        }
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});

app.get('/api/lesson', async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const lesson_id = req.query.lesson_id;

        const student = await getStudent(user_id);
        const lesson = await getLesson(lesson_id);
        const data = {
            student,
            lesson,
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
})

app.get('/api/user', async (req, res) => {
    try {
        const user_id = req.query.user_id;

        const student = await getStudent(user_id);
        const fin_courses = await getFinishedCourses(user_id);
        const data = {
            student,
            fin_courses,
        }
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
            const student = await getStudent(user_id);
            const threads = await getLatestThreads();
            const data = {
                student,
                threads,
            }
            res.json(data);
        } else {
            const student = await getStudent(user_id);
            const content = await getThread(thread_id);
            const comments = await getThreadComment(thread_id);
            const data = {
                student,
                content,
                comments,
            }
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: 'Cannot fetch data' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
