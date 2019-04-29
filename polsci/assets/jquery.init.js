jQuery.noConflict();
     
// Use jQuery via jQuery(...)
jQuery(document).ready(function(){
  
  var mobile = jQuery("#skip-to-content").is(":visible");
  
  
  // Logo
  jQuery(".logo h1").each(function(index) {
    index += 1;
    jQuery(this).html(jQuery(this).html() + "<span>" + index + "</span>");
  });
  
  // Clicking TOC
  // Read more
  jQuery("#toc h4").click(function() {
    jQuery(this).next().toggle('slow');
  });
  
  // Creating TOC
  var toc = jQuery("#body > :header:not(h4,h5,h6)");
  if (toc.size() > 1) {
    jQuery("#toc h4").removeClass('hidden');
    var res = "<ul>";
    toc.each(function(index) { 
      var ref = " id" + index;
      var id = jQuery(this).attr("id");
      jQuery(this).attr("id", id + ref);
      res = res + "<li><a href='#" + ref + "'>" + this.innerHTML + '</a></li>';
    });
    res += "</ul>";
    jQuery("#toc #items").append(res);
  }
  
  
  // Read more
  jQuery("#more h4").click(function() {
    jQuery(this).next().toggle('slow');
    jQuery(this).hide('slow');
  });
  
  
  // Toggle copyright
  jQuery(".copyright").click(function() {
    jQuery("#copyright").toggle('slow');
  });
  
  // Show submenus
  var submenus = jQuery("body").attr('class').split(/\s+/);
  jQuery.each(submenus, function(index, value) { 
    jQuery("#menu #" + value).show("slow");
  });
  
    
  // Show Events, News, Search ...
  jQuery("#secondary li h4").click(function() {        
    var id = "#" + jQuery(this).attr('class'); 
    
    if (mobile) {
      jQuery("#news-holder").html(jQuery(id).html()).show('slow');
    } else {
      jQuery(id).toggle('slow', function() {
        // Check which div to switch of
        if (jQuery("#content #body").is(":visible")) {
          toggleArticleOpacity("");  
        } else {
          toggleArticleOpacity(" #excerpt");  
        }            
      });
    }      
  });
  
  // Hiding or showing the main article 
  // div - the ID of the article to switch ("excerpt", or "" for both)
  function toggleArticleOpacity(div) {    
    var switchOff = false;
    
    jQuery.each(["#news", "#events"], function(index, value) { 
      switchOff = switchOff || (jQuery(value).is(":visible"));
    });
    
    if (switchOff) {
      jQuery("#content article" + div).fadeTo('slow', .1);
    } else {
      jQuery("#content article" + div).fadeTo('slow', .97);
    }
  }
  
  
  // Enlarge menu on hover 
  jQuery("#menu ul li a").hover(
    function () {
      jQuery(this).addClass('highlight', 300);
    }, 
    function () {
      jQuery(this).removeClass('highlight', 300);
    }
  );

  
  // Startpage. Show article body on click
  jQuery(".startpage article").click(function() {
    jQuery(".startpage #body").toggle('slow');   
    jQuery(".startpage #excerpt").toggle('slow');
  });
  
  
  // Set background image
  if (!mobile) {
    jQuery('body').css('background-image', 'url(' + jQuery("#background-image").html() + ')');  
  }
  
});
