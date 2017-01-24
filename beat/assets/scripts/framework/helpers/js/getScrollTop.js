// Get scroll position
//
// A cross-broser way via http://stackoverflow.com/questions/871399/cross-browser-method-for-detecting-the-scrolltop-of-the-browser-window
//
var getScrollTop = function() {
  if(typeof pageYOffset!= 'undefined'){
      //most browsers except IE before #9
      return pageYOffset;
  }
  else{
      var B= document.body; //IE 'quirks'
      var D= document.documentElement; //IE with doctype
      D= (D.clientHeight)? D: B;
      return D.scrollTop;
  }
}

module.exports = getScrollTop;
