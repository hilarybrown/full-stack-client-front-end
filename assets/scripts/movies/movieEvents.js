'use strict'

const movieApi = require('./movieApi')
const movieUi = require('./movieUi')

const onGetAllMovies = function (event) {
  event.preventDefault()
  movieApi.getAllMovies()
    .then(movieUi.getAllMoviesSuccess)
    .catch(movieUi.failure)
}

const addHandlers = () => {
  $('#getMoviesButton').on('click', onGetAllMovies)
}

module.exports = {
  addHandlers
}
