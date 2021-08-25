const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Review = mongoose.model('Review');

const router = express.Router();

router.use(requireAuth); // user must be signed in!

router.get('/reviews', async (req, res) => {
  const reviews = await Review.find({ userId: req.user._id });
  res.send(reviews);
});

router.post('/reviews', async (req, res) => {
  const { music, review } = req.body;
  if (!music || !review)
    return res.status(422).send({ error: 'music & review required.' });

  try {
    const newReview = new Review({ music, review, userId: req.user._id });
    await newReview.save();
    res.send(newReview);
  } catch (err) {
    res.status(422).send(console.log(err.message)); // error: 'error submitting review.'
  }
});

module.exports = router;
