const { getDataFromBigQuery } = require('./big_query/query.js');
const { insertDataToBigQuery } = require('./big_query/insert.js');
const { updateDataInBigQuery } = require('./big_query/update.js');
const { bigqueryClient } = require('./big_query_client.js');

// Student informations
async function getStudent(user_id) {
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

///COURSE
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
// Student's courses
async function getStudentCourses(user_id) {
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
// Student's finished courses
async function getFinishedCourses(user_id) {
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
// Specific course' topics
async function getInsideCourse(course_id) {
    const query = 'SELECT * FROM `sciplay_dataset.course_path` WHERE course_id = ' + course_id + ' ORDER BY id ASC';
    const options = {
        query: query,
        location: 'US',
    }

    const [rows] = await bigqueryClient.query(options);
    return rows;
}

///LESSON
async function getLesson(lesson_id) {
    const [rows] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'lesson',
        column: ['*'],
        conditions: [`lesson_id = ${lesson_id}`],
        limit: 1,
    });
    rows.content = JSON.parse(rows.content);

    return rows;
}

async function getLessonName(lesson_id) {
    const [rows] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'lesson',
        column: ['name', 'lesson_id'],
        conditions: [`lesson_id = ${lesson_id}`],
        limit: 1,
    });

    return rows;
}
// Student's lesson
async function getStudentLessons(user_id) {
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
        const lesson = await getLessonName(lesson_id);
        rows[i] = lesson;
    }

    // console.log(rows);
    return rows;
}
// Lesson inside a topic
async function getTopicLesson(course_path_id){
    const query = 'SELECT lesson_id FROM `sciplay_dataset.lesson` WHERE course_path_id = ' + course_path_id + ' ORDER BY lesson_id ASC';
    const options = {
        query: query,
        location: 'US',
    }

    const [rows] = await bigqueryClient.query(options);
    return rows;
}

///RANK
// Rank in descending
async function getRanking(order, limit) {
    const query = 'SELECT fullname, total_stars, current_level FROM `sciplay_dataset.student_information` ORDER BY ' + order + ' DESC LIMIT ' + limit + ';';
    const options = {
        query: query,
        location: 'US',
    };

    try {
        const [rows] = await bigqueryClient.query(options);
        return rows;
    } catch (error) {
        console.error('Error running query:', error);
        return [];
    }
};

///THREAD
// Latest threads
async function getLatestThreads(){
    const query = 'SELECT * FROM `sciplay_dataset.thread` ORDER BY date_time DESC LIMIT 10;';
    const options = {
        query: query,
        location: 'US',
    };

    const [rows] = await bigqueryClient.query(options);
    for (let i = 0; i < rows.length; i++)
    {
        const time = rows[i].date_time.value.slice(0, 10);
        rows[i].time = time;
        rows[i].title = rows[i].content.slice(0, 40) + '...';
    }
    return rows;
}
// Specific thread
async function getThread(thread_id){
    const [row] = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'thread',
        column: ['*'],
        conditions: [`thread_id = ${thread_id}`],
        limit: 1,
    });
    console.log(row.date_time.value.toString().slice('T'));
    const [date, time] = row.date_time.value.slice('-');
    row.time = time;
    row.date = date;

    return row;
}
// Thread comments
async function getThreadComment(thread_id){
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'thread_comment',
        column: ['*'],
        conditions: [`thread_id = ${thread_id}`],
        limit: 20,
    });

    return rows;
}

// async function Test () {
//     const stu = await getRanking('current_level', '10');
//     console.log(stu);
// }
// Test();

module.exports = {
    getStudent,
    getCourse, 
    getStudentCourses,
    getFinishedCourses,
    getInsideCourse,
    getLesson, 
    getStudentLessons,
    getRanking, 
    getLatestThreads,
    getThread,
    getThreadComment,
}