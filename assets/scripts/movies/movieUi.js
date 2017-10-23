'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const store = require('../store')
// const movieApi = require('./movieApi')
// const getFormFields = require('../../../lib/get-form-fields')

const getMoviesSuccess = function (data) {
  console.log('getMovieSucces ui = ', data)
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#appMessage').show()
  $('#appMessage').text('Here are all movies submitted by you')
  $('#showAllMovies').empty()
  $('#showAllMovies').append(showMoviesHtml)
}

const getMoviesfailure = function (error) {
  console.error(error)
  $('#appMessage').show()
  $('#appMessage').text('Error bringing back your movies. Two thumbs, way down.')
}

const newMovieSuccess = function (data) {
  store.movie = data.movie
  $('#newMovieModal').modal('hide')
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

module.exports = {
  getMoviesSuccess,
  getMoviesfailure,
  newMovieSuccess,
  newMovieFailure,
  removeMovieSuccess,
  removeMovieFailure
}
