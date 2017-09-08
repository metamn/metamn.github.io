// Move elements
//
// Move elements from bottom to top inside a container, using requestAnimationFrame
// - http://creativejs.com/resources/requestanimationframe/
//
// Experimental
//
// - in Firefox the requestAnimationFrame speed is visible slower than in all other browsers

var select = require('./../../../helpers/js/select.js');
var l = require('./../../../helpers/js/loop.js');
var elementSize = require('./../../../helpers/js/elementSize.js');


// Set up
function MoveElements(ID, speed) {
  this.items = select(ID);
  this.speed = speed;

  var parent = this.items[0].parentNode;
  this.h = elementSize(parent).height;

  // position all items to the bottom
  this.items.loop(function(item, index) {
    item.style.top = this.h + 'px';
  });
}

// Do the move
MoveElements.prototype.moveUp = function(speed) {
  var saveThis;

  function move() {
    _this = this;
    _this.items.loop(function(item, index) {
      var position = item.style.top;
      var y = position.replace('px', '');
      var newY = y - Math.floor((Math.random() * 20) + 1);

      // if reached the top move back to bottom
      if (newY < 0) {
        newY = _this.h;
      }

      item.style.top = newY + 'px';
    });
  }
  saveThis = move.bind(this);

  function loop() {
    requestAnimationFrame(saveThis);
    if (true) // some end condition instead of globalAnimationCancel
      globalAnimationCancel = setTimeout(loop, speed);
  }
  globalAnimationCancel = setTimeout(loop, speed);
}

// The main function
var moveElements = function(ID, speed) {
  me = new MoveElements(ID, speed);
  me.moveUp(speed);
}

module.exports = moveElements;
