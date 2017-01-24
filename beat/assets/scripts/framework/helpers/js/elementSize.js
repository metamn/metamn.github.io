// Element size
//
// Calculate the width and height of an element
//
// $el - the element

var elementSize = function(el) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  var ret = { width: width, height: height };

  return ret;
}

module.exports = elementSize;
