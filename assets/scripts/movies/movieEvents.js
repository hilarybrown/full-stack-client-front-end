'use strict'

const movieApi = require('./movieApi')
const movieUi = require('./movieUi')
const getFormFields = require(`../../../lib/get-form-fields`)

const onGetMovies = function (event) {
  event.preventDefault()
  movieApi.getMovies()
    .then((movies) => {
      $(document).on('submit', '#edit-movie', onUpdateMovie)
      return movies
    })
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
  const data = $(event.target).parent().attr('data-id')
  movieApi.removeMovie(data)
    .then(movieUi.removeMovieSuccess)
    .catch(movieUi.removeMovieFailure)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const movieId = data.movie.id
  movieApi.updateMovie(movieId, data)
    .then(movieUi.updateMovieSuccess)
    .catch(movieUi.updateMovieFailure)
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
