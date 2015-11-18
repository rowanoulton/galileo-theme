document.addEventListener('DOMContentLoaded', function () {
  var revealSecret = function () {
    document.body.className = document.body.className.replace('is-offset', '')
    window.scroll(0, window.scrollY + 195)
  }

  // There must be at least some delay here, otherwise it doesn't seem to play ball
  setTimeout(revealSecret, 3000)
})
