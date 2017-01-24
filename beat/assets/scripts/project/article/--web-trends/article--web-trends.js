var select = require('./../../../framework/helpers/js/select.js');
var klass = require('./../../../framework/helpers/js/klass.js');

// Callback function for the expandable list
// - when 'show more' is clicked navigation arrows will be shown under the list
// - this way on small screens the user can go to the article instead of scrolling up to click on the article title
var callbackForListExpandable = function(listID) {
  var list = select(listID);
  var article = list[0].parentElement.parentElement;
  var more = article.getElementsByClassName("article__more");

  klass(more[0], 'article__more--inactive', 'remove');
  klass(more[0], 'article__more--active', 'add');
}

module.exports = callbackForListExpandable;
