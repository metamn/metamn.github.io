$(document).ready(function() {
  
  // Lazy loading of portfolio articles
  // - they ar hidden by default
  // - when an article becomes visible it will fade in
  // - http://stackoverflow.com/questions/15590236/fade-in-element-on-scroll-down-using-css
  
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.portfolio main article.image, .frontpage main article, .older-projects main article').each(function (i) {
      var middle_of_object = $(this).position().top + $(this).outerHeight() / 2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is visible in the window, fade it it */
      if (bottom_of_window > middle_of_object) {
        $(this).animate({'opacity': '1'}, 500);
      }
    });
  }); 
  
  
  // Loading the portfolio story
  // - when the portfolio images are not loaded yet the story flows up and looks ugly
  // - we hide story be default, and show only when all images loaded.
  
  function showPortfolioStory() {
    $('.portfolio main article.image aside').animate({'opacity': '1'}, 500);
  };
  $(window).on('DOMContentLoaded load', showPortfolioStory);
  
});