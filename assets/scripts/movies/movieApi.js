'use strict'

const config = require('../config')
const store = require('../store')

const getMovies = function () {
  console.log('getMovies API ajax call success')
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showMovie = function (data) {
  console.log('made it to showMovie API')
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const removeMovie = function (data) {
  console.log('made it to removeMovie AJAX request')
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMovie = function (movieId, data) {
  console.log('made it to AJAX request')
  return $.ajax({
    url: config.apiOrigin + '/movies/' + movieId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getMovies,
  showMovie,
  newMovie,
  removeMovie,
  updateMovie
}
