'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')

const getAllMoviesSuccess = function (data) {
  console.log(data)
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('.content').append(showMoviesHtml)
}

const failure = function (error) {
  console.error(error)
}

module.exports = {
  getAllMoviesSuccess,
  failure
}
