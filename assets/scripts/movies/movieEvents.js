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
  console.log('made it to onRemoveMovie event')
  const data = $(event.target).parent().attr('data-id')
  movieApi.removeMovie(data)
    .then(movieUi.removeMovieSuccess)
    .catch(movieUi.removeMovieFailure)
}

const onUpdateMovie = function (event) {
  console.log('inside updateMovie')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target =', event.target)
  const movieId = data.movie.id
  console.log('movieId =', movieId)
  console.log('data =', data)
  movieApi.updateMovie(movieId, data)
    .then(movieUi.updateMovieSuccess)
    .catch(movieUi.updateMovieFailure)
}

const addHandlers = () => {
  $('#getMoviesButton').on('submit', onGetMovies)
  $('#new-movie').on('submit', onNewMovie)
  $('#showAllMovies').on('click', '.remove', onRemoveMovie)
  // $(document).on('submit', '.editButton', onUpdateMovie)
  // $(document).on('submit', '#editMovieModal', onSubmitUpdateMovie
}

module.exports = {
  addHandlers,
  onGetMovies,
  onNewMovie,
  onRemoveMovie,
  onUpdateMovie
}
