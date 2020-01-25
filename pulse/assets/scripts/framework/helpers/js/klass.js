var l = require('./loop.js');

// The main Klass object
//
// $klass - one or more klasses like 'active' or 'active inactive'
function Klass(klass) {
  // converts multiple classes into an array
  // - 'active inactive' => 'active', 'inactive'
  this.klass = klass.split(' ');
}

Klass.prototype.removeAll = function(elements, klass, k) {
  elements.loop(function(element) {
    k.remove(element, klass);
  });
}

Klass.prototype.addAll = function(elements, klass, k) {
  elements.loop(function(element) {
    k.add(element, klass);
  });
}

Klass.prototype.remove = function(element, klass) {
  element.classList.remove(klass);
}

Klass.prototype.add = function(element, klass) {
  element.classList.add(klass);
}

Klass.prototype.has = function(element, klass) {
  return element.classList.contains(klass);
}

//
// $element - can be a single element or a collection of elements
// $klass - can be a single klass or multiple klasses separated by space
//
var klass = function(element, klass, action) {
  var k = new Klass(klass);

  switch (action) {
    case 'add':
      k.klass.loop(function(klassname) {
        k.add(element, klassname, k);
      });
      break;
    case 'remove':
      k.klass.loop(function(klassname) {
        k.remove(element, klassname, k);
      });
      break;
    case 'toggle':
      k.klass.loop(function(klassname) {
        k.has(element, klassname) ? k.remove(element, klassname, k) : k.add(element, klassname, k);
      });
      break;
    case 'removeAll':
      k.klass.loop(function(klassname) {
        k.removeAll(element, klassname, k);
      });
      break;
    case 'addAll':
      k.klass.loop(function(klassname) {
        k.addAll(element, klassname, k);
      });
      break;
    case 'has':
      return k.has(element, klass);
      break;
    default:
  }
}

module.exports = klass;
