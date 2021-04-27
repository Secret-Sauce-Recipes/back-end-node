const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('./auth-model');
const { BCRYPT_ROUNDS } = require('../secrets');
const {
  registerPayload,
  loginPayload,
  checkUsernameExists,
  loginValidation,
} = require('./auth-middleware');

router.post('/register', registerPayload, async (req, res, next) => {
  try {
    console.log(typeof BCRYPT_ROUNDS);
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
    user.password = hash;
    const newUser = await Users.addUser(user);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post('/login', loginPayload, checkUsernameExists, loginValidation, (req, res) => {
  res.json({ message: '/loginauth' });
});

module.exports = router;
