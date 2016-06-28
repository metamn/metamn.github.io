var iconHamburger = require('./../../design/decorations/icon-hamburger/icon-hamburger.js');
var select = require('./../../helpers/js/select.js');
var klass = require('./../../helpers/js/klass.js');

// Click on the hamburger icon and get a callback
iconHamburger('.menu .icon-hamburger', iconHamburgerCallback);

// Show/hide the menu items
function iconHamburgerCallback() {
  var menuItems = select('.menu .menu__items');

  klass(menuItems[0], 'menu__items--active', 'toggle');
}

// It's necessary to have this ..
var menu = function(menuID) {
  //
}

module.exports = menu;
