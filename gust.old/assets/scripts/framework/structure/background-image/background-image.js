var responsiveImageURL = require('./../../helpers/js/responsiveImageURL.js');

// Read the `figure` element's responsive images and breakpoints
// Set as background image with `matchMedia` coming from `Picturefill`
var backgroundImage = function(elementID) {

  // Set a responsive background image using `mathcMedia`
  function setResponsiveBackgroundImage(element, image, breakpoint, retina) {
    var mediaQuery = "only screen and " + breakpoint;

    if (retina) {
      // This might not be cross platform compatible ....
      mediaQuery += " and (-webkit-min-device-pixel-ratio: 2)";
    }

    if (matchMedia(mediaQuery).matches) {
      element.style.backgroundImage = "url('" + image + "')";
    }
  }

  responsiveImageURL(elementID, setResponsiveBackgroundImage);
};

module.exports = backgroundImage;
