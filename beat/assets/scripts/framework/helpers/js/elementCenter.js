var elementSize = require('./elementSize.js');
var windowSize = require('./windowSize.js');
var vhToPx = require('./vhToPx.js');

// Element center
//
// Centering an element
//
// $el - the element
// $offsetTop - deviation from top
// $offsetLeft - deviation from left

var elementCenter = function(el, offsetTop, offsetLeft) {
  var e = elementSize(el);
  var w = windowSize();
  var l = (w.width / 2) - (e.width / 2);
  var t = (w.height / 2) - (e.height / 2);
  var ot = vhToPx(offsetTop);
  var ol = vhToPx(offsetLeft)

  var ret = { top: t + ot, left: l + ol }

  return ret;
 }

 module.exports = elementCenter;
