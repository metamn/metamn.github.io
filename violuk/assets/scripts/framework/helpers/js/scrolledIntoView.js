// Scrolled into view
//
// Check if a section is in the viewport
//
// $startPoint - the top of the section (px)
// $endPoint - the bottom of the section (px)

function scrolledIntoView(startPoint, endPoint, offset) {
  var distance = (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var isVisible = (((distance + offset) > startPoint) && ((distance + offset) < endPoint));

  //console.log('d:' + distance + ', s:' + startPoint + ', e:' + endPoint);
  //console.log(isVisible);
  //console.log('');

  return isVisible;
}

module.exports = scrolledIntoView;
