const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const firebase = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Firebase Admin SDK initialization
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com"
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/todos', require('./routes/todos'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
