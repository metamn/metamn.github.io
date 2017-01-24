var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var click = require('./../../helpers/js/click.js');

// Split string to chars
//
// $sourceID - the container for the text
// $destinationID - the container where the characters will be inserted
// $linkURL - the URL, if the text is a link
// $linkTitle - the link title, if the text is a link
var splitStringToChars = function(sourceID, destinationID, linkURL, linkTitle) {
  linkURL = linkURL || '';
  linkTitle = linkTitle || '';

  var texts = select(sourceID);
  var dest = select(destinationID);

  texts.loop(function(text, index) {
    var chars = text.innerHTML.split('');

    var ret = '';
    var link = '';

    if (linkURL != '') {
      var link = '<a href="' + linkURL + '" title="' + linkTitle + '">';
    }

    chars.loop(function(char, index) {
      if (link != '') { ret += link; }
      ret += '<span class="char char--' + index + '">' + char + '</span>';
      if (link != '') { ret += '</a>' }
    });


    dest[index].innerHTML = ret;
  });
}

module.exports = splitStringToChars;
