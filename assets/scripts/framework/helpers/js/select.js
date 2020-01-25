// Select
//
// A shorthand version for `document.querySelectorAll`
// - this construct doesn't support a second argument specifying another container than `document`
// - instead of `element.querySelectorAll('.id')` we should always use `document.querySelectorAll('.element .id')`
//
var select = function(IDs) {
  return document.querySelectorAll(IDs);
}


module.exports = select;
