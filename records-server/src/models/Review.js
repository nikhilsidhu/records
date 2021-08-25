const mongoose = require('mongoose');
const { Schema } = mongoose;

const musicSchema = new Schema({
  musicType: {
    type: String,
    // enum: ['album', 'song'],
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const reviewSchema = new Schema({
  // TODO: review date? release date?
  userId: {
    // every review points at an instance of a user
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  music: {
    type: musicSchema,
    required: true,
  },
  review: {
    type: Number,
    required: true,
    // min: 0,
    // max: 10,
  },
});

mongoose.model('Review', reviewSchema);
