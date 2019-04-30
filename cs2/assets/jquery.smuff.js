$(document).ready(function() {
 
// Logo
//
// - a matrix of 7x24 for Smuff, 7x51 for Smart Stuff

// - sometimes spacing between fonts m>f, f>f in Smuff is lowered through .small
// - in this case the logo width must be recalculated in the css
// - the formula for logo width is:
// x - the number of cells
// z - the number of .small cells
// width: = (x-z)*cell_size + z*cell_size/2

// - the extra letters from Smart Stuff are marked .extended so it can be hide/show later


function logo() {
  var matrix = new Array(7);
  for (y = 0; y < 7; y++) {
    matrix[y] = new Array(61);
    for (x = 0; x < 61; x++) {
      matrix[y][x] = '';
    }
  }

  matrix[6][0] = 'set';

  matrix[6][1] = 'set';

  matrix[6][2] = 'set';

  matrix[6][3] = 'set';

  matrix[6][4] = 'set';

  matrix[0][5] = 'set';
  matrix[1][5] = 'set';
  matrix[2][5] = 'set';
  matrix[3][5] = 'set';
  matrix[6][5] = 'set';

  matrix[0][6] = 'set';
  matrix[3][6] = 'set';
  matrix[6][6] = 'set';

  matrix[0][7] = 'set';
  matrix[3][7] = 'set';
  matrix[4][7] = 'set';
  matrix[5][7] = 'set';
  matrix[6][7] = 'set';

  matrix[0][8] = 'set';

  matrix[0][9] = 'set';

  matrix[0][10] = 'set';

  matrix[0][11] = 'set';
  matrix[1][11] = 'set';
  matrix[2][11] = 'set';
  matrix[3][11] = 'set';

  matrix[0][12] = 'set';

  matrix[0][13] = 'set';
  matrix[1][13] = 'set';
  matrix[2][13] = 'set';
  matrix[3][13] = 'set';

  matrix[0][14] = 'set';

  matrix[0][15] = 'set';
  matrix[1][15] = 'set';
  matrix[2][15] = 'set';
  matrix[3][15] = 'set';

  // art Stu

  matrix[0][17] = 'square';
  matrix[2][17] = 'square';
  matrix[3][17] = 'square';

  matrix[0][18] = 'square';
  matrix[2][18] = 'square';
  matrix[3][18] = 'square';

  matrix[0][19] = 'square';
  matrix[1][19] = 'square';
  matrix[2][19] = 'square';
  matrix[3][19] = 'square';

  matrix[0][21] = 'square';
  matrix[1][21] = 'square';
  matrix[2][21] = 'square';
  matrix[3][21] = 'square';

  matrix[0][22] = 'square';

  matrix[0][23] = 'square';
  matrix[1][23] = 'square';


  matrix[0][25] = 'square';
  matrix[1][25] = 'square';
  matrix[2][25] = 'square';
  matrix[3][25] = 'square';
  matrix[4][25] = 'square';
  matrix[5][25] = 'square';
  matrix[6][25] = 'square';


  matrix[2][26] = 'square';
  matrix[6][26] = 'square';


  matrix[6][28] = 'square';
  matrix[6][29] = 'square';
  matrix[6][30] = 'square';
  matrix[6][31] = 'square';
  matrix[6][32] = 'square';
  matrix[6][33] = 'square';
  matrix[6][34] = 'square';

  matrix[0][35] = 'square';
  matrix[1][35] = 'square';
  matrix[2][35] = 'square';
  matrix[3][35] = 'square';
  matrix[6][35] = 'square';

  matrix[0][36] = 'square';
  matrix[3][36] = 'square';
  matrix[6][36] = 'square';

  matrix[0][37] = 'square';
  matrix[3][37] = 'square';
  matrix[4][37] = 'square';
  matrix[5][37] = 'square';
  matrix[6][37] = 'square';

  matrix[0][39] = 'square';
  matrix[1][39] = 'square';
  matrix[2][39] = 'square';
  matrix[3][39] = 'square';
  matrix[4][39] = 'square';
  matrix[5][39] = 'square';
  matrix[6][39] = 'square';


  matrix[2][40] = 'square';
  matrix[6][40] = 'square';


  // Back to uff

  matrix[0][42] = 'set';
  matrix[1][42] = 'set';
  matrix[2][42] = 'set';
  matrix[3][42] = 'set';

  matrix[3][43] = 'set';

  matrix[1][44] = 'set';
  matrix[2][44] = 'set';
  matrix[3][44] = 'set';

  matrix[0][46] = 'set';
  matrix[1][46] = 'set';
  matrix[2][46] = 'set';
  matrix[3][46] = 'set';
  matrix[4][46] = 'set';
  matrix[5][46] = 'set';
  matrix[6][46] = 'set';

  matrix[0][47] = 'set';
  matrix[4][47] = 'set';

  matrix[0][49] = 'set';
  matrix[1][49] = 'set';
  matrix[2][49] = 'set';
  matrix[3][49] = 'set';
  matrix[4][49] = 'set';
  matrix[5][49] = 'set';
  matrix[6][49] = 'set';

  matrix[0][50] = 'set';
  matrix[4][50] = 'set';


  // .ro


  matrix[4][52] = 'ro';

  matrix[0][54] = 'ro';
  matrix[1][54] = 'ro';
  matrix[2][54] = 'ro';
  matrix[3][54] = 'ro';

  matrix[0][55] = 'ro';

  matrix[0][56] = 'ro';
  matrix[1][56] = 'ro';

  matrix[0][58] = 'ro';
  matrix[1][58] = 'ro';
  matrix[2][58] = 'ro';
  matrix[3][58] = 'ro';

  matrix[0][59] = 'ro';
  matrix[3][59] = 'ro';

  matrix[0][60] = 'ro';
  matrix[1][60] = 'ro';
  matrix[2][60] = 'ro';
  matrix[3][60] = 'ro';


  var ret = "";
  var size = "";
  var klass = '';

  for (y = 0; y < 7; y++) {
    for (x = 0; x < 61; x++) {
      switch(x) {
        case 16:
        case 20:
        case 24:
        case 38:
        case 45:
        case 48:
        case 51:
        case 53:
        case 57:
          size = ' small ';
          break;
        default:
          size = '';
      }

      // .ro
      if (x >= 51 && x <= 60) {
        klass = ' ro-cell ';
      } else {
        klass = '';
      }

      if (x == 51) {
        ret += "<div class='ro'>";
      }


      // smart stuff
      if (x >= 17 && x < 42) {
        klass = ' smart-stuff-cell ';
      } else {
        klass = '';
      }

      if (x == 17) {
        ret += "<div class='smart-stuff'>";
      }
      if (x == 42) {
        ret += "</div>";
      }

      ret += "<div id='cell-" + x + "-" + y + "' class='cell " + size + klass + matrix[y][x] + "'></div>";

      if (x == 60) {
        ret += "</div>";
      }
    }
  }

  return ret;
}
$("#logo.artwork").html(logo());
resizeLogoForSafari(1);


// - Show Smart Stuff
$("#logo.artwork").hover(
  function () {
    if (hoverIsPossible()) {
      $("#logo.artwork .smart-stuff").show(200, function() {
        resizeLogoForSafari(2);
      });
    }
  },
  function () {
    if (hoverIsPossible()) {
      $("#logo.artwork .smart-stuff").hide(); /* blinks if there is any value */
      resizeLogoForSafari(3);
    }
  }
);

// Check if logo hover is deactivated or not
function hoverIsPossible() {
  return true;
}

// In Safari the logo width must be -1em, for Smart Stuff -2em
// - this function deals also with logo hovers
// - params
//    1 - reset the logo on page load
//    2 - reset the logo on mouseover
//    3 - reset the logo on mouseout
function resizeLogoForSafari(where) {
  var is_safari = (navigator.userAgent.match(/webkit/i) && !window.chrome);
  var is_opera = navigator.userAgent.match(/opera/i);
  var is_chrome_old = (window.chrome && (navigator.userAgent.indexOf("Chrome/18.") !== -1));
  
  if (is_safari || is_opera || is_chrome_old) {
    switch(where) {
      case 1:
        var originalWidth = $('#logo.artwork').css('width'); /* it will retrieve the px value not the em !!! */
        var width = originalWidth.replace('px', '') - 1*16;
        break;
      case 2:
        // - the value 20em*16 = 320px is hardwired
        // - the css:hover is executed after jQuery:hover so we can't get this value in real time
        var width = 320 - 2*16;
        break;
      case 3:
        // on hover the original width is lost
        // we use this hardwired value as a workaround
        var width = 147.333;
    }

    $('#logo.artwork').css('width', width + 'px');
  }
}
  
});