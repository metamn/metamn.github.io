$(document).ready(function() {
  
  
  // The harmony calculator
  // -------------------------------------------------
  
  // The container
  $('body').append('<section id="gravity">');
  
  // The axis
  $('#gravity').append('<div class="h-horizontal"></div>');
  $('#gravity').append('<div class="h-vertical"></div>');
  $('#gravity').append('<div class="h-golden-rectangle"></div>');
  
  
  function goldenRectangle() {
    var minorX = $(window).width() / 8 * 3;
    var majorX = $(window).width() / 8 * 5;
    var left = $(window).width() / 2 - minorX;
    var right = majorX - $(window).width() / 2;
    
    var minorY = $(window).height() / 8 * 3;
    var majorY = $(window).height() / 8 * 5;
    var top = $(window).height() / 2 - minorY;
    var bottom = majorY - $(window).height() / 2;
    
    
    $('.h-golden-rectangle').css('width', left + right + 'px');
    $('.h-golden-rectangle').css('height', top + bottom + 'px');
    $('.h-golden-rectangle').css('left', minorX + 'px');
    $('.h-golden-rectangle').css('top', minorY + 'px');
  }
  
  
  function gravityPoint() {
    var sum = 0;
    var sumX = 0;
    var sumY = 0;
    
    // Loop through elements
    var data = $.parseJSON(elements);
    $.each(data, function() {
      
      // This is a collection 
      if (this['collection']) {
        var type = this['type'];
        $(this['id']).each(function() {
          
          // Do calculate
          // - I couldn't pass sum, sumX, sumY as a reference so their values were lost
          // - so I've copied here the function body ...
          item = $(this);
          if (isElementInViewport(item)) {
              var weight = getElementWeight(item, type);
              var x = distanceX(item);
              var y = distanceY(item);
              
              sum += weight;
              sumX += weight * x;
              sumY += weight * y;
          }
        });
        
        // This is a single standalone item
      } else {
        item = $(this['id']);
        if (isElementInViewport(item)) {
            var weight = getElementWeight(item, type);
            var x = distanceX(item);
            var y = distanceY(item);
            
            sum += weight;
            sumX += weight * x;
            sumY += weight * y;
        }
      }
    });
    
    // Draw the gravity point
    var x = $(window).width() / 2 + sumX / sum;
    var y = $(window).height() / 2 - sumY / sum;
    var style = 'left: ' + x + 'px; top: ' + y + 'px';
    $('#gravity').append('<div class="h-gravity-point" style="' + style + '"></div>');
    
    $('body').append('</section>');
  }
  
  $(window).on('DOMContentLoaded load resize scroll', gravityPoint); 
  $(window).on('DOMContentLoaded load resize scroll', goldenRectangle); 
  
  
  // Calculate
  // - only elements in the viewport are taken into consioderation
  function calculate(item, type, sum, sumX, sumY) {
    if (isElementInViewport(item)) {
      var weight = getElementWeight(item, type);
      var x = distanceX(item);
      var y = distanceY(item);
      
      sum += weight;
      sumX += weight * x;
      sumY += weight * y;
    }
  }
  
  
  // Get the distance of the center of an element from origo
  // - for X
  function distanceX(item) {
    var w = item.css('width');
    var centerX = parseInt(w) / 2;
    
    var position = item.offset();
    
    var coordinateX = position.left + centerX;
    return coordinateX - $(window).width() / 2;
  }
  
  // - for Y
  function distanceY(item) {
    var h = item.css('height');
    var centerY = parseInt(h) / 2;
    
    var position = item.offset();
    
    var coordinateY = position.top + centerY;
    return $(window).height() / 2 - coordinateY;
  }
  
  
  // Get a single elements weight
  function getElementWeight(item, type) {
    var w = item.css('width');
    var h = item.css('height');
    return parseInt(w) * parseInt(h) * getGravityByType(type);
  }
  
  function getGravityByType(type) {
    return (type == 'text') ? 0.4 : 0.7;
  }
  
  
  // Check if the element is inside the viewport
  // - source: http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }
  
  
  
  
  
  
  // The visual grid
  var grid = "";
  for (i=0; i<500; i++) {
    grid += '<div class="col">';
    grid += '<div class="gutter-right">&nbsp;</div>';
    grid += '<div class="gutter-bottom">&nbsp;</div>';
    grid += '</div>';
  }
  
  $("body").append(
    '<section id="grid">' + grid + '</section>'
  );
  
});