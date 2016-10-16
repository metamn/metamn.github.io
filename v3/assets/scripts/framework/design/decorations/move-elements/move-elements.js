// Move elements
//
// Move elements from bottom to top using requestAnimationFrame
// - http://creativejs.com/resources/requestanimationframe/
//
// Experimental
//
// - in Firefox the requestAnimationFrame speed is visible slower than in all other browsers

var select = require('./../../../helpers/js/select.js');
var l = require('./../../../helpers/js/loop.js');
var elementPosition = require('./../../../helpers/js/elementPosition.js');


// Set up
function MoveElements(ID, speed) {
  this.items = select(ID);
  this.speed = speed;

  // save original positions
  var originalPosition = [];

  this.items.loop(function(item, index) {
    originalPosition[index] = elementPosition(item);

    // Fix Safari bug
    if (originalPosition[index].y == 0) {
      originalPosition[index].y = Math.floor((Math.random() * 20) + 400);
    }
  });

  this.originalPosition = originalPosition;
}

// Do the move
MoveElements.prototype.moveUp = function(speed) {
  var saveThis;

  function move() {
    _this = this;
    _this.items.loop(function(item, index) {
      var position = elementPosition(item);
      var y = position.y;
      var newY = y - Math.floor((Math.random() * 20) + 1);

      if (newY < 0) {
        newY = _this.originalPosition[index].y;
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
