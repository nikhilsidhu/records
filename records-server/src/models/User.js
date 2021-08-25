const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  // TODO: date account created?
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  // make sure password was set
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (providedPassword) {
  const user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(providedPassword, user.password, (err, isMatch) => {
      if (err) return reject(err);

      if (!isMatch) return reject(false);

      return resolve(true);
    });
  });
};

mongoose.model('User', userSchema);
