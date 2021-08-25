require('./models/User');
require('./models/Review');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const requireAuth = require('./middlewares/requireAuth');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(authRoutes);
app.use(reviewRoutes);

const mongoUri = process.env.DB_URI;

mongoose.connect(mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('connected to records db!');
});
mongoose.connection.on('error', (err) => {
  console.log('error connecting to records db...');
});

app.get('/', requireAuth, (req, res) => {
  res.send(`username: ${req.user.userName}\nemail: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('listening on port 3000.');
});
