jQuery.noConflict();
     

jQuery(document).ready(function(){
  
  // Accordion on features
  jQuery("#features .link").click(function() {
    jQuery(this).next().slideToggle(200);
  });
     
  // Hover on frontpage images
  jQuery("#index #features #item").hover(
    function () {
      jQuery(this).addClass('highlight');
    }, 
    function () {
      jQuery(this).removeClass('highlight');
    }
  );  
  
  // Tooltip in frontpage lessons
  jQuery("#index #courses #item.c-1 li, #index #courses #item.c-2 li").tipTip({
    defaultPosition: "right",
    maxWidth: "300px"
  });
  jQuery("#index #courses #item.c-3 li").tipTip({
    defaultPosition: "left",
    maxWidth: "300px"
  });
  
  // Move avatars on frontpage
  jQuery("#index #teacher .img-1").click(function(){
    var left = jQuery(this).children();
    var right = jQuery(this).next().children();
    if (left.attr('style') == '' || left.attr('style') == 'left: 0px;') {
      left.animate({"left": "+=100px"}, "slow"); 
      right.animate({"left": "-=100px"}, "slow");    
    } else {
      right.animate({"left": "+=100px"}, "slow"); 
      left.animate({"left": "-=100px"}, "slow");    
    }    
  });  
  jQuery("#index #teacher .img-2").click(function(){
    var right = jQuery(this).children();
    var left = jQuery(this).parent().children(".img-1").children();
    if (right.attr('style') == '' || right.attr('style') == 'left: 0px;') {
      left.animate({"left": "+=100px"}, "slow"); 
      right.animate({"left": "-=100px"}, "slow");    
    } else {
      right.animate({"left": "+=100px"}, "slow"); 
      left.animate({"left": "-=100px"}, "slow");    
    }    
  }); 
  
}); 
