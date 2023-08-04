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

// Get user's id
let user_id = '3';

async function getUser() {
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    let row = await getDataFromBigQuery(bigqueryClient, {
        datasetId: 'sciplay_dataset',
        tableId: 'user_information',
        column: ['user_id'],
        conditions: [`email = ${email}`, `password = ${password}`],
        limit: 1,
    });

    // console.log(row);
}

module.exports.user_id = user_id;

