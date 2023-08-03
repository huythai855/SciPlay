const { BigQuery } = require('@google-cloud/bigquery');
const { getDataFromBigQuery } = require('./big_query/query.js');

// Credentials to connect to BigQuery.
const credentials = require('../../api_keys/sciplay-5a03294800fe.json');

// Create a BigQuery client
const bigqueryClient = new BigQuery({
    projectId: credentials.project_id,
    credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
    },
});

// Student id
const { user_id } = require('./login.js');

// Student informations
async function getStudent() {
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'student_information',
        column: ['fullname', 'current_stars', 'current_level'],
        conditions: [`student_id = ${user_id}`],
        limit: 1,
    });

    // console.log(rows[0]);
    return rows[0];
}
// getStudent();

// Student's courses
async function getCourses() {
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'course_attendance',
        column: ['course_id'],
        conditions: [`student_id=${user_id}`],
        limit: 3,
    });
    // console.log(rows);

    for (let i = 0; i < rows.length; i++)
    {
        const { course_id } = rows[i];
        const course = await getDataFromBigQuery(bigqueryClient, {
                    datasetId: 'sciplay_dataset',
                    tableId: 'courses',
                    column: ['name', 'description'],
                    conditions: [`course_id = ${course_id}`],
                    limit: 1,
                });
        rows[i] = course[0];
        rows[i].course_id = `${course_id}`;
    }

    // console.log(rows);
    return rows;
}
// getCourses();

// Student's lesson
async function getLessons() {
    let rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'lesson_attendance',
        column: ['lesson_id'],
        conditions: [`student_id=${user_id}`],
        limit: 3,
    });
    // console.log(rows);

    // rows = [{lesson_id : '1'}, {lesson_id : '2'}, {lesson_id : '3'}, {lesson_id : '4'}]
    for (let i = 0; i < rows.length; i++)
    {
        const { lesson_id } = rows[i];
        const lesson = await getDataFromBigQuery(bigqueryClient, {
            datasetId: 'sciplay_dataset',
            tableId: 'lesson',
            column: ['name', 'course_id', 'lesson_id'],
            conditions: [`lesson_id = ${lesson_id}`],
            limit: 1,
        });

        // console.log(lesson);
        rows[i] = lesson[0];
    }

    // console.log(rows);
    return rows;
}
// getLessons();
