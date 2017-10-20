'use strict'

const store = require('../store')

// store user's data upon successful sign up
const signUpSuccess = function (data) {
  store.user = data.user
  $('#signUpModal').modal('hide')
  $('#signUpModal').hide()
  $('#auth-message').text('Congrats! You are now signed up. Please now SIGN IN with your new credentials to access your movies.')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#auth-message').text('Error on sign up')
}

// show success message
const signInSuccess = function (data) {
  console.log(data)
  $('#signInModal').modal('hide')
  $('#sign-in-container').hide()
  $('#pwUpdateContainer').show()
  $('#sign-out').show()
  $('#newMovieContainer').show()
  $('#auth-message').text('Welcome!')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#auth-message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#auth-message').text('Password successfully changed')
  console.log(data)
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#auth-message').text('Error on password change')
}

const signOutSuccess = function (data) {
  $('#pwUpdateContainer').hide()
  $('#sign-out').hide()
  $('#newMovieModal').hide()
  $('#auth-message').text('Come back again soon!')
  store.user = null
  console.log(data)
}

const signOutFailure = function (error) {
  console.log(error)
  $('#auth-message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
