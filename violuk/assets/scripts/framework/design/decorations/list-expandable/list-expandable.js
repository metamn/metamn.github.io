var click = require('./../../../helpers/js/click.js');
var select = require('./../../../helpers/js/select.js');
var klass = require('./../../../helpers/js/klass.js');

// List expandable
//
// New list items are revealed after a click on 'Show more'
// Then a callback is fired
var listExpandable = function(listID, callback) {
  var listItems = select(listID + ' .list-expandable__item');
  var trigger = select(listID + ' .list-expandable__more')

  click(trigger, function() {
    klass(trigger[0], 'list-expandable__more--active', 'remove');
    klass(trigger[0], 'list-expandable__more--inactive', 'add');

    klass(listItems, 'list-expandable__item--inactive', 'removeAll');
    klass(listItems, 'list-expandable__item--active', 'addAll');

    callback(listID);
  });
}

module.exports = listExpandable;
