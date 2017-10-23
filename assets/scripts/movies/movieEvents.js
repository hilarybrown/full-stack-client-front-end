'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const movieApi = require('./movieApi')
const movieUi = require('./movieUi')

const onGetMovies = function (event) {
  event.preventDefault()
  movieApi.getMovies()
    .then(movieUi.getMoviesSuccess)
    .catch(movieUi.getMoviesFailure)
}

const onNewMovie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  movieApi.newMovie(data)
    .then(movieUi.newMovieSuccess)
    .catch(movieUi.newMovieFailure)
}

const onRemoveMovie = function (event) {
  event.preventDefault()
  console.log('made it to onRemoveMovie event')
  $('.remove').on('click', function (event) {
    $(event.target).parent().hide()
    movieApi.removeMovie($(event.target).parent().attr('data-id'))
      .then(movieUi.removeMovieSuccess)
      .catch(movieUi.removeMovieFailure)
  })
}

const addHandlers = () => {
  $('#getMoviesButton').on('submit', onGetMovies)
  // $('#new-movie').on('submit', onNewMovie)
  $('#new-movie').on('submit', onNewMovie)
}

module.exports = {
  addHandlers,
  onGetMovies,
  onNewMovie,
  onRemoveMovie
}
