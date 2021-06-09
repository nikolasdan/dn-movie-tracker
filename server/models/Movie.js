const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  movieId: String, // TMDB movieId
  title: String,
  year: Number,
  popularity: Number,
  poster_path: String,
  release_date: Number
});

module.exports = mongoose.model('Movie', schema);
