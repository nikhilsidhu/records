const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();
const KEY = 'SECRET_TEST_KEY'; // TODO: find a better place for this...

router.post('/signup', async (req, res) => {
  const { userName, password, email, firstName, lastName, bio } = req.body;

  try {
    const user = new User({
      userName,
      password,
      email,
      firstName,
      lastName,
      bio, // TODO: what happens if req has no bio? default is ''
    });
    await user.save();
    const token = jwt.sign({ userId: user._id }, KEY);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(console.log(err.message)); // 'unable to create user...'
  }
});

router.post('/signin', async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password)
    return res.status(422).send({ error: 'must provide username & password' });

  const user = await User.findOne({ userName });
  if (!user) return res.status(404).send({ error: 'unable to sign in...' });

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, KEY);
    res.send({ token });
  } catch (err) {
    return res.status(404).send({ error: 'unable to sign in...' });
  }
});

module.exports = router;
