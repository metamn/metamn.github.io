/**
 * Javascript functions for the Lynx Theme
 *
 */


// CTA
var cta = function(ID) {
	var cta = document.querySelector(ID);

	function onClick(event) {
		var slide2 = document.querySelector('.slide-2');
		slide2.classList.add('slide-2--show');
	}

	cta.addEventListener('click', onClick);
}

// The question answers
var questionAnswers = function(ID) {
	var answers = document.querySelectorAll(ID);

	function onClick(event) {
		var el = event.target;

		var isCorrect = el.getAttribute('data-is-correct');
		var listItemID = el.getAttribute('data-list-item');

		if (isCorrect) {
			if (isCorrect == 'false') {
				el.parentNode.parentNode.classList.add('incorrect');
			} else {
				var slide2 = document.querySelector('.slide-2');
				slide2.classList.remove('slide-2--show');
				slide2.classList.add('slide-2--collapse');
			}
		}

		event.stopPropagation();
	}


	for (var i = 0; i < answers.length; i++) {
		answers[i].addEventListener('click', onClick, false);
	}
}



// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function() {
	// CTA
	if (document.querySelector('.call-to-action')) {
		cta('.call-to-action');
	}

	// The question answers
	if (document.querySelector('.question-answers .answer')) {
		questionAnswers('.question-answers .answer');
	}
}, false);
