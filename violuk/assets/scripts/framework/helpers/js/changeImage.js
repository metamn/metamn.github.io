var select = require('./select.js');

// Change an image on the fly
//
// It uses Picturefill
//
// $source - a figure element ID
// $destination - a figure element ID

var changeImage = function(sourceID, destinationID) {
  var sourcePicture = select(sourceID + ' .picture')[0];
  var destinationPicture = select(destinationID + ' .picture')[0];
  var destinationImg = select(destinationID + ' .img')[0];

  destinationPicture.innerHTML = sourcePicture.innerHTML;
  picturefill({
    reevaluate: true,
    elements: [ destinationImg ]
  })
}

module.exports = changeImage;
