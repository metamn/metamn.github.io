/**
 * Javascript functions for the Log Lolla Pro Theme
 */


// Click on an archive counter
var archiveCounterClick = function() {
	var archiveCounters = document.querySelectorAll('.archive-counter-list .archive-counter');

	function onMouseClick(index, event) {
		var target = '.' + archiveCounters[index].dataset.scrollto;
		console.log('target:' + target);
		console.log(jQuery(target));

		jQuery('html, body').animate(
			{
				scrollTop: jQuery(target).offset().top
        	},
			1000
		);
	}

	for (var i = 0; i < archiveCounters.length; i++) {
    	archiveCounters[i].addEventListener('click', onMouseClick.bind(null, i), false);
    }
}

// Click on post content
var postContentClick = function() {
  var postContent = document.querySelectorAll('.post-with-sidebar .post-content-between-sidebars');

  function postContentRemoveClicks() {
    for (var i = 0; i < postContent.length; i++) {
      postContent[i].parentNode.classList.remove('post-with-sidebar--clicked');
    }
  }

  function onMouseClick(index, event) {
    var post = postContent[index].parentNode;

    if (post.classList.contains('post-with-sidebar--clicked')) {
      post.classList.remove('post-with-sidebar--clicked')
    } else {
      postContentRemoveClicks();
      post.classList.add('post-with-sidebar--clicked');
    }

    event.stopPropagation();
  }

  for (var i = 0; i < postContent.length; i++) {
    postContent[i].addEventListener('click', onMouseClick.bind(null, i), false);
  }
}

// Click on the hamburger menu
var menuHamburgerClick = function(ID) {
  var menuHamburger = document.querySelector('.header-menu-hamburger');
  var menuMain = document.querySelector('.header-menu');

  function onViewChange(event) {
    menuMain.classList.toggle('header-menu--closed');
    menuHamburger.classList.toggle('header-menu-hamburger--closed');
    event.stopPropagation();
  }

  menuHamburger.addEventListener('click', onViewChange, false);
}


// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function(){
	// Archive counter click
	if (document.querySelector('.archive-counter-list')) {
		archiveCounterClick();
	}

	// Post content click
	if (document.querySelector('.post-list')) {
		postContentClick();
	}

	// Hamburger menu
	if (document.querySelector('.header-menu-hamburger')) {
		menuHamburgerClick('.header-menu-hamburger');
	}
}, false);
