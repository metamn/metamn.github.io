var windowSize = require('./windowSize.js');

// Convert vh to px
//
// - http://stackoverflow.com/questions/18387490/how-do-i-convert-a-height-of-an-element-given-in-vh-to-pixels

var vhToPx = function(vh) {
  var h = windowSize().height * vh / 100;
  return h;
}


module.exports = vhToPx;
