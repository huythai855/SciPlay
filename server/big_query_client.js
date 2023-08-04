const { BigQuery } = require('@google-cloud/bigquery');

// Credentials to connect to BigQuery.
const credentials = require('../api_keys/sciplay-5a03294800fe.json');

// Create a BigQuery client
const bigqueryClient = new BigQuery({
    projectId: credentials.project_id,
    credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key,
    },
});

module.exports.bigqueryClient = bigqueryClient;