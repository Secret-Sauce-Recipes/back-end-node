const db = require('../data/dbConfig');

const registerPayload = async (req, res, next) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(401).json({ message: 'Username, email, & password required.' });
  }
  const userCheck = await db('users').where('username', username).first();
  const emailCheck = await db('users').where('email', email).first();
  if (!userCheck && !emailCheck) {
    next();
  } else if (userCheck) {
    return res.status(401).json({ message: 'username taken' });
  } else {
    return res.status(401).json({ message: 'email taken' });
  }
};

const loginPayload = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'username and password required' });
  } else {
    next();
  }
};

const checkUsernameExists = async (req, res, next) => {
  const {username} = req.body;
  next()
}

const loginValidation = async (req,res, next) => {
next()
}


module.exports = {
  registerPayload,
  loginPayload,
  checkUsernameExists,
  loginValidation
};
