var l = require('./../../../framework/helpers/js/loop.js');
var select = require('./../../../framework/helpers/js/select.js');
var click = require('./../../../framework/helpers/js/click.js');
var klass = require('./../../../framework/helpers/js/klass.js');


var mstClick = function() {
  var mst = select('.mst');

  click(mst, clickMst);

  function clickMst(item) {
    klass(item, 'mst--inactive', 'remove');
    klass(item, 'mst--active', 'add');
  }
}

module.exports = mstClick;
