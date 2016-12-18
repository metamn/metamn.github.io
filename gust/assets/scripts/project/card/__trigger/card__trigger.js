var showCard = function(toggler) {
  var triggers = document.querySelectorAll(toggler);

  function onViewChange(event) {
    this.parentNode.nextSibling.classList.toggle('active');
    event.stopPropagation();
  }

  for (var i = 0; i < triggers.length; i++ ) {
    triggers[i].addEventListener('click', onViewChange, false);
  }
}

showCard('.card__trigger');
