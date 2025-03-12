const firebase = require('firebase-admin');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await firebase.auth().createUser({
      email,
      password,
    });
    res.status(201).send({ uid: userRecord.uid });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await firebase.auth().getUserByEmail(email);
    // Implement custom token generation or use Firebase client SDK for login
    res.status(200).send({ uid: user.uid });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    await firebase.auth().generatePasswordResetLink(email);
    res.status(200).send('Password reset link sent');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
