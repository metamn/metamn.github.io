// Click
//
// Shorthand for `addEventListener("click")`
//
// - $items - a set of elements to apply click
// - $cb - a callback function which returns the element clicked
//
// Usage:
// click(items, function(item) { .... });
//
// Styleguide click


var select = require('./select.js');
var l = require('./loop.js');


var click = function(items, cb) {
  items.loop(function(item) {
    item.addEventListener("click", fn, false);
  });

  // The only way to return the HTMLElement clicked
  // - all other constructs will return the mouse event instead
  function fn() {
    cb(this);
  }
}


module.exports = click;
