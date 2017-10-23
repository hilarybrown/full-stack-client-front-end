'use strict'

const store = require('../store')
// const app = require('../app.js')

const success = (data) => {
  if (data) {
    console.log(data)
  } else {
    console.log('Success')
  }
}

const failure = (error) => {
  console.log(error)
}

// store user's data upon successful sign up
const signUpSuccess = function (data) {
  store.user = data.user
  $('#signUpModal').modal('hide')
  $('#signUpModal').hide()
  $('#authMessage').text('Congrats! You are now signed up. Please now SIGN IN with your new credentials to access your movies.')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Error on sign up')
}

// show success message
const signInSuccess = function (data) {
  console.log(data)
  $('#getMoviesButton').show()
  $('#signInModal').modal('hide')
  $('#sign-in-container').hide()
  $('#pwUpdateContainer').show()
  $('#sign-out').show()
  $('#newMovieContainer').show()
  $('#authMessage').text('Welcome!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#authMessage').text('Password successfully changed')
  console.log(data)
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#authMessage').text('Error on password change')
}

const signOutSuccess = function (data) {
  $('#appMessage').hide()
  $('#sign-in-container').show()
  $('#getMoviesButton').hide()
  $('#pwUpdateContainer').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password').show()
  $('#newMovieModal').hide()
  $('#authMessage').show()
  $('#authMessage').text('Come back again soon!')
  store.user = null
  console.log(data)
}

const signOutFailure = function (error) {
  $('#appMessage').hide()
  console.log(error)
  $('#auth-message').text('Error on sign out')
}

module.exports = {
  success,
  failure,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
