var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var klass = require('./../../helpers/js/klass.js');

// Reveal on Hover
//
// Reveal a new item when hovering an element
//
// $sourceContainerID - the container of the source items
// $sourceID - a list of elements for hover
// $destinationID - a list of elements to be activated
// $klassName  - on hover the activated element will have added a new klass 'klassName--active'
//
var revealOnHover = function(sourceContainerID, sourceID, destinationID, klassName) {
  var sourceContainer = select(sourceContainerID);
  var source = select(sourceID);
  var destination = select(destinationID);

  // Attach event handler
  source.loop(function(item, index) {
    item.addEventListener("mouseover", function() {
      revealItem(destination, index, klassName);
    })
  });

  // Reveal new elements
  function revealItem(destination, index, klassName) {
    klass(destination, klassName + '--active', 'removeAll');
    klass(destination[index], klassName + '--active', 'add');
  }

  // When mouse moves out of source make all revealed items inactive
  sourceContainer[0].addEventListener("mouseout", function() {
    klass(destination, klassName + '--active', 'removeAll');
  });
}

module.exports = revealOnHover;
