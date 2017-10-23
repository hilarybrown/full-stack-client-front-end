'use strict'

const movieApi = require('./movieApi')
const movieUi = require('./movieUi')
const getFormFields = require(`../../../lib/get-form-fields`)

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
  const data = $(event.target).parent().attr('data-id')
  movieApi.removeMovie(data)
    .then(movieUi.removeMovieSuccess)
    .catch(movieUi.removeMovieFailure)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  console.log('event')
  const data = getFormFields(event.target)
  const movieId = (event.target).getAttribute('data-id')
  console.log('save update button clicked, event.target is ', event.target)
  console.log('data is ', data)
  console.log('movie id is ', movieId)
  // movieApi.updateMovie(data, movieId)
    // .then(movieUi.updateMovieSuccess)
    // .catch(movieUi.updateMovieFailure)
}

const addHandlers = () => {
  $('#getMoviesButton').on('submit', onGetMovies)
  $('#new-movie').on('submit', onNewMovie)
  $('#showAllMovies').on('click', '.remove', onRemoveMovie)
}

module.exports = {
  addHandlers,
  onGetMovies,
  onNewMovie,
  onRemoveMovie,
  onUpdateMovie
}
