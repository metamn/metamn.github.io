// Element position
//
// Get the position of an element
//
// $el - the element

var elementPosition = function(el) {
  var p = {};

  p.x = el.offsetLeft;
  p.y = el.offsetTop;

  while (el.offsetParent) {
      p.x = p.x + el.offsetParent.offsetLeft;
      p.y = p.y + el.offsetParent.offsetTop;
      if (el == document.getElementsByTagName("body")[0]) {
          break;
      }
      else {
          el = el.offsetParent;
      }
  }

  return p;
}

module.exports = elementPosition;
