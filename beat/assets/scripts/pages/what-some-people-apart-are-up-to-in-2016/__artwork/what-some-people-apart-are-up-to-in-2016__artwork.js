var select = require('./../../../framework/helpers/js/select.js');
var klass = require('./../../../framework/helpers/js/klass.js');


var randomZindex = function(authorsID) {
  var authors = select(authorsID);
  var rnd = Math.floor((Math.random() * authors.length));

  klass(authors, 'author--stacked--active', 'removeAll');
  klass(authors[rnd], 'author--stacked--active', 'add')
}


if (document.querySelector('.what-some-people-apart-are-up-to-in-2016__artwork .author')) {
  window.setInterval(function(){
    randomZindex('.what-some-people-apart-are-up-to-in-2016__artwork .author');
  }, 1000);
}
