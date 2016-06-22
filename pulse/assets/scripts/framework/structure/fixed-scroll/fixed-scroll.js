var _ = require('lodash');
var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var klass = require('./../../helpers/js/klass.js');

// Fixed scroll
//
// The event handler with a throttler
//
// $marginBottom - the approx. size of the fixed title. It is used to fine-tune the last slide.
// - If it is not present the last title will overflow the next sections. It must be set in pixels
//
// Example: fixedScroll('.fixed-scroll', '.fixed-scroll__slide', '70');
//
var fixedScroll = function(slidesContainerID, slideID, marginBottom) {
  window.addEventListener('scroll',
    _.throttle(_.bind(fixedScrolling, this, slidesContainerID, slideID, marginBottom), 300)
  );
};


// The main function
var fixedScrolling = function() {
  var slidesContainerID = arguments[0];
  var slideID = arguments[1];
  var marginBottom = arguments[2];

  var slidesSelector = slidesContainerID + ' ' + slideID;
  var slides = select(slidesSelector);

  var slidesContainer = select(slidesContainerID);
  slidesContainer = slidesContainer[0];

  var slidesContainerHeight = slidesContainer.offsetHeight;
  var slideHeight = slidesContainerHeight / slides.length;

  // Checking if the container is visible, so the slides has to be activated
  if (! isContainerScrolledIntoView(slidesContainer, marginBottom)) {
    klass(slides, 'fixed-scroll__slide--active', 'removeAll');
    return;
  }

  // Activate - deactivate slides
  var activeSlide = getActiveSlide(slideHeight, slides);
  klass(slides, 'fixed-scroll__slide--active', 'removeAll');
  klass(activeSlide, 'fixed-scroll__slide--active', 'add');
};



// Check if the slides container is in the viewport
function isContainerScrolledIntoView(el, marginBottom) {
  var elemBottom = el.getBoundingClientRect().bottom;
  var elemTop = el.getBoundingClientRect().top;
  var isVisible = ((elemTop < 0) && (elemBottom > marginBottom));

  return isVisible;
}



// The index of the current slide in the viewport
function getActiveSlide(slideHeight, slides) {
  var activeSlide = 0;

  for (var i = 0; i < slides.length; i++) {
    if (isScrolledIntoView(slideHeight, slides[i])) {
      activeSlide = i;
      break;
    }
  }

  return slides[activeSlide];
}

// Which slide is in the viewport?
// - http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
function isScrolledIntoView(h, el) {
  var elemBottom = el.getBoundingClientRect().bottom;
  var isVisible = (elemBottom >= 0) && (elemBottom <= h);
  return isVisible;
}



module.exports = fixedScroll;
