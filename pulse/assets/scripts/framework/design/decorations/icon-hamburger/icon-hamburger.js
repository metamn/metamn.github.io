var click = require('./../../../helpers/js/click.js');
var select = require('./../../../helpers/js/select.js');
var klass = require('./../../../helpers/js/klass.js');

var iconHamburgerClick = function(triggerID, callback) {
  var trigger = select(triggerID);

  click(trigger, function() {
    renameKlass(trigger[0], 'icon-hamburger--default', 'icon-hamburger--open');
    klass(trigger[0], 'icon-hamburger--close', 'toggle');
    klass(trigger[0], 'icon-hamburger--open', 'toggle');
    // ie for the menu to show items
    callback();
  });

  // Transforms the `deafult` state to `open` state
  // - if the icon is in `open` state already this function is not required
  function renameKlass(element, oldKlass, newKlass) {
    if (klass(element, oldKlass, 'has')) {
      klass(element, oldKlass, 'remove');
      klass(element, newKlass, 'add');
    }
  }
}

module.exports = iconHamburgerClick;
