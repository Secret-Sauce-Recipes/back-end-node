const db = require('../data/dbConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../secrets');
const { check, validationResult } = require('express-validator');

const registerPayloadDuplicate = async (req, res, next) => {
  const { username, email } = req.body;
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

const registerSchema = [
  check('username', 'Username must be at least 6 characters')
    .isLength({ min: 6 })
    .trim()
    .escape(),
  check('password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
    )
    .withMessage(
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .trim()
    .escape(),
  check('email', 'Invalid Email').isEmail().trim().escape(),
];

const registerValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ message: errors.array() });
  } else {
    next();
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
  const { username } = req.body;
  try {
    const [user] = await db('users').where('username', username);
    if (user) {
      req.user = user;
      next();
    } else {
      next({ message: 'Invalid Credentials', status: 401 });
    }
  } catch (err) {
    next(err);
  }
};

const loginValidation = async (req, res, next) => {
  const { password } = req.body;
  const user = req.user;
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = buildToken(user);
    req.token = token;
    next();
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
};

const buildToken = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    user_id: user.user_id,
  };
  const config = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, config);
};

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'Token Required' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Token' });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};

module.exports = {
  registerSchema,
  registerValidate,
  registerPayloadDuplicate,
  loginPayload,
  checkUsernameExists,
  loginValidation,
  restricted,
};
