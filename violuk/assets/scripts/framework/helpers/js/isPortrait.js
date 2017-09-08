// Checking if the screen is in portrait mode
//

var isPortrait = function() {
  var mediaQuery = "only screen and (orientation: portrait)";
  return matchMedia(mediaQuery).matches;
}

module.exports = isPortrait;
