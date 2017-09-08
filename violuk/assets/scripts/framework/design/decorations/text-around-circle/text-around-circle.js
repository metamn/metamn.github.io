var splitStringToChars = require('./../../../helpers/js/splitStringToChars.js');

var textAroundCircle = function(sourceID, destinationID, isLink) {
  isLink = isLink || false;
  
  var text = document.querySelector(sourceID);
  if (!text) return;

  var linkURL = '';
  var linkTitle = '';

  if (isLink) {
    sourceID = sourceID + ' a';
    var link = document.querySelector(sourceID);
    linkURL = link.href;
    linkText = link.title;
  }

  splitStringToChars(sourceID, destinationID, linkURL, linkTitle);
}

module.exports = textAroundCircle;
