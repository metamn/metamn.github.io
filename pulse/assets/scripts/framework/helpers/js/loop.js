// Loop
//
// This is a replacement for the `for()` loop
// - https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
//
// It is important to avoid getting array elements by index, like `figures[i]`
// - with `loop` if the `figures` are empty we won't get any error messages;
// - with a `for` loop we will get an error and everything will halt
//
// Usage: `items.loop(item, index)`
NodeList.prototype.loop = Array.prototype.forEach;
Array.prototype.loop = Array.prototype.forEach;


var loopDummy = function() {}
module.exports = loopDummy;
