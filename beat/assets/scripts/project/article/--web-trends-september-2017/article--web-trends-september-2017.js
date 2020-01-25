var listExpandable = require('./../../../framework/design/decorations/list-expandable/list-expandable.js');
var callbackForListExpandable = require('./../--web-trends/article--web-trends.js');
var revealOnHover = require('./../../../framework/helpers/js/revealOnHover.js');

if (document.querySelector('.article--web-trends-september-2017 .list-expandable')) {
  listExpandable('.article--web-trends-september-2017 .list-expandable', callbackForListExpandable);

  if (document.querySelector('.article--web-trends-september-2017-artwork')) {
    revealOnHover('.article--web-trends-september-2017 .list-expandable', '.article--web-trends-september-2017 .list-expandable__item', '.article--web-trends-september-2017-artwork .wts17a', 'wts17a');
  }
}
