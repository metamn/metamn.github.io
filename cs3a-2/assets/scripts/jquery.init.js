$(document).ready(function() {
  
  // Tooltip 
  $('.tooltip-item').on('click', function() {
    $('.tooltip span').html($(this).find('.tooltip-text').html());
    $('.tooltip').addClass('active');
    
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
  });
  
  $('.tooltip-item').first().trigger('click');
  
});