// Window size
//
// Get the window size
//
// - http://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window

var windowSize = function() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var ret = { width: x, height: y }
  return ret;
}

module.exports = windowSize;
