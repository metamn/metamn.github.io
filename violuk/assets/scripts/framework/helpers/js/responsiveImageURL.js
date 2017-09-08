// Read the `figure` element's responsive images and breakpoints for later reuse
// - the data gathered is passed to a callback function
var responsiveImageURL = function(elementID, callback) {
  var element = document.querySelector(elementID);
  var picture = element.querySelector('.picture');

  // Collect images and breakpoints from `picture`
  // - <source media="(min-width: 600px)" srcset="/assets/images/placeholder-16-9_tablet.png, /assets/images/placeholder-16-9_tablet2x.png 2x">
  // - start with mobile then go to desktop; media queries stop at the first match
  for (var i = picture.children.length - 1; i >= 0 ; i--) {
    var srcset = picture.children[i].srcset;
    var media = picture.children[i].media;
    var images = srcset.split(', ');

    for (var j = 0; j < images.length; j++) {
      var x2 = images[j].split(' 2x');
      var retina = (x2.length > 1);

      callback(element, x2[0], media, retina);
    }
  }
};

module.exports = responsiveImageURL;
