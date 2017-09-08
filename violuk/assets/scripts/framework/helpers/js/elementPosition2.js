// Element position
//
// Get the position of an element
// - http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
// - this seems to be working well
//
// $el - the element

var elementPosition2 = function(el) {
  var _x = 0;
  var _y = 0;

  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }

  return { y: _y, x: _x };
}

module.exports = elementPosition2;
