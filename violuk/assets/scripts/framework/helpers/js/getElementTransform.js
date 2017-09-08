// Get the transform value of an element
// - https://css-tricks.com/get-value-of-css-rotation-through-javascript/
var getElementTransform = function(element, direction) {
  if (element === undefined || element === null) { return; }

  var ret = 0;

  var s = element.style.transform;
  if (s) {
    // translateX(-440px) => -440
    var regex = /-?[0-9]+(?:\.[0-9]+)?(?=px|%|\b)/i;
    ret =  s.match(regex);
  } else {

    var st = window.getComputedStyle(element, null);
    var tr = st.getPropertyValue("-webkit-transform") || st.getPropertyValue("-moz-transform") || st.getPropertyValue("-ms-transform") || st.getPropertyValue("-o-transform") || st.getPropertyValue("transform") || "FAIL";

    //console.log('e:' + element.innerHTML);
    //console.log('tr:' + tr);
    //console.log('');

    if ((tr !== 'FAIL') && (tr !== 'none')) {
      var values = tr.split('(')[1].split(')')[0].split(',');
      var v1 = values[0];
      var v2 = values[1];
      var v3 = values[2];
      var v4 = values[3];
      var v5 = values[4];
      var v6 = values[5];

      switch (direction) {
        case 'S':
          ret = v1;
          break;
        case 'X':
          ret = v5;
          break;
        case 'Y':
          ret = v6;
          break;
        default:
          ret = 0;
      }
    } else {
      console.log('getElementTransform failed');
    }
  }

  return parseFloat(ret);
}

module.exports = getElementTransform;
