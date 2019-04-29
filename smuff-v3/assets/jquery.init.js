jQuery.noConflict();

jQuery(document).ready(function(){
  
  // Mixed view for products
  jQuery("#product.mixed").addClass('thumbly');
  jQuery("#product.mixed").first().removeClass('thumbly');
  jQuery("#product.mixed").first().addClass('holder');
  
  jQuery("#product.thumbly").hover(
    function () {
      jQuery(this).addClass('thumbly-hover');
    }, 
    function () {
      jQuery(this).removeClass('thumbly-hover');
    }
  );
  
  jQuery("#product.thumbly").click(function() {
    // to be done ...
  });

  
  // List, Grid, Scroll view for products
  // Hide nav buttons for Scroll view
  function toggleScroll() {
    jQuery("#product-scroll-left").toggle();
    jQuery("#product-scroll-right").toggle();
    jQuery("#products article").toggle();
  }
  
  jQuery("#navigation-icons li").click(function() {
    var klass = jQuery(this).attr('rel');
    
    if (jQuery("#products #product").first().hasClass("scroll")) {
      toggleScroll();
    }
    jQuery("#products article").removeClass("grid list scroll");
    jQuery("#products article").addClass(klass);
    
    jQuery("#see-all-products").removeClass("grid list scroll");
    jQuery("#see-all-products").addClass(klass);
    
    if (klass == "scroll") {
      toggleScroll();
    }
  });
  
  
  
  // Sticky header
  jQuery(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = jQuery('header').offset().top;
    
    jQuery(window).scroll(function(){
      if( jQuery(window).scrollTop() > stickyHeaderTop ) {
        jQuery('header').css({position: 'fixed', top: '0px'});        
        jQuery('header').addClass('fixed');
        jQuery('#content').addClass('fixed');
      } else {
        jQuery('header').css({position: 'static', top: '0px'});        
        jQuery('header').removeClass('fixed');
        jQuery('#content').removeClass('fixed');
      }
    });
  });
  
  
  
  // Category select dropdown list
  jQuery(".select-box ul li").hide();
  jQuery(".select-box ul li.active").show();
  
  // Show list items
  jQuery(".select-box h2").click(function() {
    jQuery(this).next().children().show();
  }); 
  
  // Select list item
  jQuery(".select-box ul li").click(function() {
    jQuery(".select-box ul li").removeClass('active');
    jQuery(this).addClass('active');
    
    // remove this when links will work and url will change
    jQuery(".select-box ul li").hide();
    jQuery(".select-box ul li.active").show();
  });
  
  
  
  // Product Scroll view
  jQuery("#product.scroll").first().addClass('active');
  
  jQuery("#product-scroll-right").click(function() {
    var first = jQuery("#product.active");
            
    jQuery(first).removeClass('active');
    jQuery(first).hide();
    
    if (!(jQuery(first).next().hasClass('scroll'))) {
      jQuery("#product.scroll").first().addClass('active');
      jQuery("#product.scroll").first().show();
    } else {
      jQuery(first).next().addClass('active');
      jQuery(first).next().show();
    }
  }); 
  jQuery("#product-scroll-left").click(function() {
    var first = jQuery("#product.active");
            
    jQuery(first).removeClass('active');
    jQuery(first).hide();
    
    if (!(jQuery(first).prev().hasClass('scroll'))) {
      jQuery("#product.scroll").last().addClass('active');
      jQuery("#product.scroll").last().show();
    } else {
      jQuery(first).prev().addClass('active');
      jQuery(first).prev().show();
    }
  }); 
});
