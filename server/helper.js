const { getDataFromBigQuery } = require('./big_query/query.js');
const { insertDataToBigQuery } = require('./big_query/insert.js');
const { updateDataInBigQuery } = require('./big_query/update.js');
const { bigqueryClient } = require('./big_query_client.js');

const user_id = '1';
// Student informations
async function getStudent() {
    const [rows] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'student_information',
        column: ['fullname', 'current_stars', 'current_level', 'date_of_birth'],
        conditions: [`student_id = ${user_id}`],
        limit: 1,
    });
    // console.log(rows);

    const name = rows.fullname.split(/\s+/);
    const year = rows.date_of_birth.value.split('-');

    const student = {
        fullname: rows.fullname,
        name: name[name.length-1],
        age: (new Date().getFullYear()-parseInt(year)).toString(),
        stars: rows.current_stars,
        level: rows.current_level,
    }
    return student;
}

async function getCourse(course_id){
    const [rows] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'courses',
        column: ['name', 'description', 'header_image', 'duration'],
        conditions: [`course_id = ${course_id}`],
        limit: 1,
    });
    rows.course_id = course_id;
    return rows;
}

async function getLesson(lesson_id) {
    const [rows] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'lesson',
        column: ['name', 'course_id', 'lesson_id', 'duration', 'type', 'link', 'content'],
        conditions: [`lesson_id = ${lesson_id}`],
        limit: 1,
    });

    return rows;
}

// Student's courses
async function getStudentCourses() {
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'course_attendance',
        column: ['course_id'],
        conditions: [`student_id=${user_id}`],
        limit: 3,
    });
    // console.log(rows);

    for (let i = 0; i < rows.length; i++) {
        const { course_id } = rows[i];
        rows[i] = await getCourse(course_id);
    }
    return rows;
}

// Student's lesson
async function getStudentLessons() {
    let rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'lesson_attendance',
        column: ['lesson_id'],
        conditions: [`student_id=${user_id}`],
        limit: 3,
    });
    // console.log(rows);

    // rows = [{lesson_id : '1'}, {lesson_id : '2'}, {lesson_id : '3'}, {lesson_id : '4'}]
    for (let i = 0; i < rows.length; i++) {
        const { lesson_id } = rows[i];
        const lesson = await getLesson(lesson_id);
        rows[i] = lesson;
    }

    // console.log(rows);
    return rows;
}

// Student's finished courses
async function getFinishedCourses() {
    const date = new Date().toJSON().slice(0, 10);
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'course_attendance',
        column: ['course_id'],
        conditions: [`student_id = ${user_id}`, `date_finish < '${date}'`],
        limit: 5,
    });

    // console.log(rows);
    for (let i = 0; i < rows.length; i++) {
        const { course_id } = rows[i];
        rows[i] = await getCourse(course_id);
    }
    return rows;
}


// async function Test () {
//     const stu = await getStudent();
//     console.log(stu);
// }
// Test();

module.exports = {
    getStudent,
    getCourse, 
    getLesson, 
    getStudentCourses,
    getStudentLessons,
    getFinishedCourses
}