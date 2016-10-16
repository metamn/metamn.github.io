// Set element position
//
// $el - element
// $top - the top in px
// $left - the left in px

var setElementPosition = function(el, top, left) {
  el.style.top = top + 'px';
  el.style.left = left + 'px';
}

module.exports = setElementPosition;
