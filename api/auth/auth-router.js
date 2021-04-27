const router = require('express').Router();

router.get('/login', (req, res, next) => {
  res.json({message: '/loginauth'})
})

module.exports = router;
