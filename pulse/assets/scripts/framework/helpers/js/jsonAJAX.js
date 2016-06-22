// Calls a JSON API via AJAX
// - the response is sent back via a callback function


var select = require('./../../helpers/js/select.js');


var jsonAJAX = function(url, callback) {
  // JSON AJAX Call to an API endpoint
  // - http://www.w3schools.com/json/json_http.asp
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // Process request
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = JSON.parse(xmlhttp.responseText);
      callback(result);
    }
  }
}

module.exports = jsonAJAX;
