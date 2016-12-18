var snap = require('./__svg/mst__svg.js');
var mstClick = require('./--click/mst--click.js');


// Document.ready ....
window.onload = function() {
  snap('.svg--landscape', 768, 1024);
  snap('.svg--portrait', 768, 1024);
  snap('.svg--mobile', 360, 640);

  if (document.querySelector('.mst')) {
    mstClick();
  }
};
