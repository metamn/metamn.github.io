// Scroll snap
//
// Callback when a screen section is scrolled into view
//
// $startPoint - the start of the section (px)
// $endPoint - the end of the section (px)
// $offset - how much earlier to start the scrollsnap regarding the top of the screen (px)
// $callbackScroll - the function to call when inside the section
// $callbackBefore - the function to call when outside the section, at the top of it
// $callbackAfter - the function to call when outside the section, at the bottom of it

var _ = require('lodash');
var getScrollTop = require('./getScrollTop.js');


var scrollSnap = function(startPoint, endPoint, offset, callbackScroll, callbackBefore, callbackAfter) {
  window.addEventListener('scroll',
    _.throttle(_.bind(scrollSnapHandler, this, startPoint, endPoint, offset, callbackScroll, callbackBefore, callbackAfter), 300)
  );
};


var scrollSnapHandler = function() {
  var startPoint = arguments[0];
  var endPoint = arguments[1];
  var offset = arguments[2];
  var callbackScroll = arguments[3];
  var callbackBefore = arguments[4];
  var callbackAfter = arguments[5];

  var distance = getScrollTop();
  distance += offset;

  if (distance <= startPoint) {
    callbackBefore();
  }

  if (distance > startPoint && distance < endPoint) {
    callbackScroll();
  }

  if (distance >= endPoint) {
    callbackAfter();
  }
}

module.exports = scrollSnap;
