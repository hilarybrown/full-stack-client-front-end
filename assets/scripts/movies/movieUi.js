'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const store = require('../store')
// const movieEvents = require('./movieEvents')
// const movieApi = require('./movieApi')
// const getFormFields = require('../../../lib/get-form-fields')

const getMoviesSuccess = function (data) {
  console.log('getMovieSucces ui = ', data)
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Here are all movies submitted by you')
  $('#showAllMovies').empty()
  $('#showAllMovies').html(showMoviesHtml)
  // $('#showAllMovies').on('click', '.edit-movie', testClick)
}

const getMoviesFailure = function (error) {
  console.error(error)
  $('#appMessage').show()
  $('#appMessage').text('Error bringing back your movies. Two thumbs, way down.')
}

const newMovieSuccess = function (data) {
  store.movie = data.movie
  $('#newMovieModal').modal('hide')
  $('#new-movie')[0].reset()
  $('#appMessage').show()
  $('#appMessage').text('Your new movie has been saved. Two thumbs, way up!')
  console.log(store.movie)
}

const newMovieFailure = function (error) {
  console.log(error)
  $('#userMessage').text('Error saving your movie. Womp womp.')
}

const removeMovieSuccess = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('The selected movie has been removed.')
}

const removeMovieFailure = function (error) {
  console.log(error)
  $('#appMessage').show()
  $('#appMessage').text("Error removing the movie. You're stuck with it for now.")
}

// const editMovieSuccess = function (data) {
//   $('#showAllMovies').html('')
//   const editMovieHTML = editMovieTemplate(data.review)
//   $('.update-review-content').html(editReviewHTML)
// }
//
// const editReviewError = function () {
//   console.log('Edit review did not work. Try again.')
// }

module.exports = {
  getMoviesSuccess,
  getMoviesFailure,
  newMovieSuccess,
  newMovieFailure,
  removeMovieSuccess,
  removeMovieFailure
  // updateMovieSuccess,
  // updateMovieFailure
}
