// Nested list navigation
//

var click = require('./../../../../helpers/js/click.js');
var select = require('./../../../../helpers/js/select.js');
var klass = require('./../../../../helpers/js/klass.js');



var ulNested = function(listID) {
  var triggers = select(listID + ' .li__nested');

  click(triggers, clickNested);

  function clickNested(event) {
    var trigger = event.target.parentNode;
    console.log(event.target.innerHTML + ' ' + trigger.classList);
    klass(trigger, 'li__nested--active', 'toggle');
    event.stopPropagation();
  }
}

module.exports = ulNested;
