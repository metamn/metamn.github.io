/**
 * Javascript functions for the Studio Spilo Theme
 */


// Add browser class to an element
// - https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
var addBrowserClass = function(ID, klass1, klass2) {
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  var el = document.querySelector(ID);
  if (!isFirefox && !isSafari) {
    el.classList.add(klass1);
  } else {
    el.classList.add(klass2);
  }
}


// Split string to chars
var splitStringToChars = function(sourceID, destinationID) {
  var text = document.querySelector(sourceID);
  var dest = document.querySelector(destinationID);

  var chars = text.innerHTML.split('');
  var ret = '';

  for (var i = 0; i < chars.length; i++) {
    ret += '<span class="char char--' + i + '">' + chars[i] + '</span>';
  }

  dest.innerHTML = ret;
}


 // Scroll to top
 var scrollToTop = function(triggerID) {
   var triggers = document.querySelectorAll(triggerID);

   function onViewChange(event) {
     window.scrollTo(0, 0);
     event.stopPropagation();
   }

   for (var i = 0; i < triggers.length; i++ ) {
     triggers[i].addEventListener('click', onViewChange, false);
   }
 }


 // Toggle nested menu items
 var listNested = function(triggerID, elementClass) {
  var triggers = document.querySelectorAll(triggerID);

  function onViewChange(event) {
    this.parentNode.parentNode.parentNode.classList.toggle(elementClass + '--active');
    event.stopPropagation();
  }

  for (var i = 0; i < triggers.length; i++ ) {
    triggers[i].addEventListener('click', onViewChange, false);
  }
 }



// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function() {

  // Browser detection for home about
  if (document.querySelector('.studio-spilo-home__about')) {
    addBrowserClass('.studio-spilo-home__about', 'studio-spilo-home__about--no-wavy-support', 'studio-spilo-home__about--wavy-support');
  }

  // Split string to char
  if (document.querySelector('.spacer')) {
    splitStringToChars('.spacer__text', '.spacer__chars')
  }

  // Scroll to top
  if (document.querySelector('.pages-navigation-arrows .middle')) {
    scrollToTop('.pages-navigation-arrows .middle');
  }

  // Nested page menu
  if (document.querySelector('.page-subpages .icon')) {
    listNested('.page-subpages .icon', 'li');
  }

}, false);
