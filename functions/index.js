const functions = require('firebase-functions');

const { app } = require('./dist/server');

exports.ssr = functions.https.onRequest(app);
