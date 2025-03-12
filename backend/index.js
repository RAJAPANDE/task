const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const firebase = require('firebase-admin');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Firebase Admin SDK initialization
firebase.initializeApp({
  credential: firebase.credential.cert({
    "type": "service_account",
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
