'use strict'

const config = require('../config')
const store = require('../store')

const getAllMovies = function () {
  console.log('sending get flights call')
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getAllMovies
}
