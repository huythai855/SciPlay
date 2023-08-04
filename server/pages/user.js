const { BigQuery } = require('@google-cloud/bigquery');
const { getDataFromBigQuery } = require('./big_query/query.js');
const { insertDataToBigQuery } = require('./big_query/insert.js');
const { updateDataInBigQuery } = require('./big_query/update.js');

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
        column: ['fullname', 'current_stars', 'current_level', 'date_of_birth'],
        conditions: [`student_id = ${user_id}`],
        limit: 1,
    });

    // console.log(rows[0]);
    return rows[0];
}
// getStudent();

//Finished courses
async function getFinishedCourses() {
    const date = new Date().toJSON();
    const rows = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'course_attendance',
        column: ['course_id'],
        conditions: [`student_id = ${user_id}`, `date_finish < ${date}`], //SOS SOS SOS how to compare date
        limit: 5,
    });

    console.log(rows);
    return rows;
}
getFinishedCourses();