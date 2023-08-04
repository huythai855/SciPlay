const express = require('express');
const bodyParser = require('body-parser');
const { BigQuery } = require('@google-cloud/bigquery');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');
const { getStudent, getCourse, getLesson, getStudentCourses, getStudentLessons, getFinishedCourses } = require('./helper');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

async function Test () {
    const stu = await getStudent();
    console.log(stu);
}
Test();

app.get('/api/homepage', async (req, res) => {
    try {
        const student = await getStudent();
        const courses = await getStudentCourses();
        const lessons = await getStudentLessons();
        const data = {
            student,
            courses,
            lessons
        }
        // console.log(data);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Can not fetch data' });
    }
});

app.get('/api/lesson', async (req, res) => {
    try {
        const lesson_id = req.query.id;
        // console.log(`LESSON_ID: ${lesson_id}`);

        if (lesson_id === null) {
            const student = await getStudent();
            const courses = await getStudentCourses();
            const lessons = await getStudentLessons();
            const data = {
                student,
                courses,
                lessons
            }
            // console.log(data);
            res.json(data);
        } else {
            const student = await getStudent();
            const lesson = await get(lesson_id);
            const data = {
                student,
                lesson,
            };
            // console.log(data);
            res.json(data);
        }
    } catch (err) {
        res.status(500).json({ message: 'Can not fetch data' });
    }
});

app.get('/api/user', async (req, res) => {
    try {
        const student = await getStudent();
        const fin_courses = await getFinishedCourses();
        const data = {
            student,
            fin_courses,
        }
        // console.log(data);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Can not fetch data' });
    }
});