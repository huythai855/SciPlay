const dotenv = require('dotenv');
const { BigQuery } = require('@google-cloud/bigquery');

// Load environment variables from .env file
dotenv.config();

// Credentials to connect to BigQuery.
// const credentials = require('../api_keys/sciplay-5a03294800fe.json');

// Create a BigQuery client
const bigqueryClient = new BigQuery({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
    },
});


module.exports.bigqueryClient = bigqueryClient;