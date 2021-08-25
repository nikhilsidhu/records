const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const KEY = 'SECRET_TEST_KEY'; // TODO: move this...

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization === 'Bearer ***'

  if (!authorization)
    return res.status(401).send({ error: 'you must be logged in.' });

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, KEY, async (err, payload) => {
    if (err) return res.status(401).send({ error: 'you must be logged in.' });

    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
