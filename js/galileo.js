'use strict'

var secretRevealed = false
var doSecretReveal
var resetSecretReveal

doSecretReveal = function () {
  // Remove the negative offset from the banner, while also scrolling down the page
  // this reveals the secret without affecting the users position on the page
  document.body.className = document.body.className.replace('is-offset', '')
  window.scroll(0, window.scrollY + 195)
  secretRevealed = true
}

resetSecretReveal = function () {
  if (secretRevealed) {
    // The native browser behaviour of automatically scrolling to a users last position on refresh
    // is upset by our revealing of the secret banner. This meant that, on refresh, the position
    // the browser returns the user to is incorrect. To compensate for this, we hide the secret banner
    // section again and adjust the page scroll value accordingly
    document.body.className += ' is-offset'
    window.scroll(0, Math.max(window.scrollY - 195, 0))
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // 3000 ms is arbitrary, though there must be at least some
  // delay here, otherwise it doesn't seem to play ball
  setTimeout(doSecretReveal, 3000)
})

window.addEventListener('beforeunload', function () {
  resetSecretReveal()
})
