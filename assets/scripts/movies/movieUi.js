'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const store = require('../store')
// const movieEvents = require('./movieEvents')
// const movieApi = require('./movieApi')
// const getFormFields = require('../../../lib/get-form-fields')

const getMoviesSuccess = function (data) {
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Here are all movies submitted by you')
  $('#showAllMovies').show()
  $('#showAllMovies').html('')
  $('#showAllMovies').html(showMoviesHtml)
}

const getMoviesFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error bringing back your movies. Two thumbs, way down.')
}

const newMovieSuccess = function (data) {
  store.movie = data.movie
  $('#newMovieModal').modal('hide')
  $('#new-movie')[0].reset()
  $('#appMessage').show()
  // $('#appMessage').text("Your new movie has been saved. Click 'View All Movies' to see your addition.")
}

const newMovieRefreshSuccess = function (data) {
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Your new movie has been saved and is displayed below.')
  $('#showAllMovies').show()
  $('#showAllMovies').html('')
  $('#showAllMovies').html(showMoviesHtml)
}

const newMovieFailure = function (data) {
  $('#userMessage').text('Error saving your movie. Womp womp.')
}

const removeMovieSuccess = function (data) {
  $('#appMessage').show()
  // $('#appMessage').text("Your movie has been removed. Click 'View All Movies' to see the updated list.")
}

const removeMovieFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error removing the movie. Two thumbs, way down!')
}

const removeRefreshSuccess = function (data) {
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Movie Deleted. Here is you updated list')
  $('#showAllMovies').show()
  $('#showAllMovies').html('')
  $('#showAllMovies').html(showMoviesHtml)
}

const updateMovieSuccess = function (data) {
  $('#editMovieModal').modal('hide')
  $('#appMessage').show()
  $('#appMessage').text("Your movie has been updated. Click 'View All Movies' to see your update.")
}

const updateMovieFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error saving your update.')
}

module.exports = {
  getMoviesSuccess,
  getMoviesFailure,
  newMovieSuccess,
  newMovieFailure,
  removeMovieSuccess,
  removeMovieFailure,
  updateMovieSuccess,
  updateMovieFailure,
  removeRefreshSuccess,
  newMovieRefreshSuccess
}
