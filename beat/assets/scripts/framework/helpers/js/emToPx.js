// Convert em to px
//
// - http://tzi.fr/js/convert-em-in-px

var emToPx = function(em) {
  return em * getElementFontSize();
}


function getElementFontSize( context ) {
  // Returns a number
  return parseFloat(
    // of the computed font-size, so in px
    getComputedStyle(
      // for the given context
      context
      // or the root <html> element
      || document.documentElement
    )
    .fontSize
  );
}

module.exports = emToPx;
