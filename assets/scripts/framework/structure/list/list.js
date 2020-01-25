var select = require('./../../helpers/js/select.js');
var click = require('./../../helpers/js/click.js');
var popup = require('./../popup/popup.js');

var list = function(listID, action) {
  var items = select(listID + ' .list-item');

  switch (action) {
    case 'popup':
      click(items, function(item) {
        popup(item);
      });
      break;
    default:
  }
}


module.exports = list;
