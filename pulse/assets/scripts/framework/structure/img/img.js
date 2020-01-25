var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');

// Preloading an image or a set of images
// - it is using the `imagesLoaded` script
// - `containerID` can refer a set of images like `.articles` or just a single image like `.article`
var imagesLoading = function(containerID) {
  var containers = select(containerID);

  containers.loop(function(container) {
    imageLoading(container);
  });
}


// Adding the class `img-loaded` for images inside a single container
// - it also adds `figure--loaded` for the parent `figure` container
var imageLoading = function(container) {
  var images = select('.img');
  var figures = select('.figure');

  imagesLoaded(container, function(instance) {
    images.loop(function(image) {
      image.classList.add('img--loaded');
    });

    figures.loop(function(figure) {
      figure.classList.add('figure--loaded');
    });
  });
}

module.exports = imagesLoading;
