var splitStringToChars = require('./../../../helpers/js/splitStringToChars.js');

if (document.querySelector('.text-rolling')) {
  splitStringToChars('.text-rolling__text', '.text-rolling__chars');
}
