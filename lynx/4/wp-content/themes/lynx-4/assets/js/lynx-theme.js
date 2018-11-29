/**
 * Javascript functions for the Lynx Theme
 *
 * Note: hover not working in Firefox !!!!
 */

// The question answers
var questionAnswers = function(ID) {
	var answers = document.querySelectorAll(ID);

	function highlightListItem(ID) {
		var item = document.querySelector(ID);

		if (item) {
			item.classList.toggle('highlighted');
		}
	}

	function removeHighlightListItem(ID) {
		var item = document.querySelector(ID);

		if (item) {
			item.classList.toggle('highlighted');
		}
	}

	function onClick(event) {
		var el = event.target;

		var isCorrect = el.getAttribute('data-is-correct');
		var listItemID = el.getAttribute('data-list-item');

		if (isCorrect) {
			if (isCorrect == 'false') {
				el.parentNode.parentNode.classList.add('incorrect');
			} else {
				highlightListItem(listItemID);

				var answers = document.getElementById('answers');
				answers.classList.add('show-signup');
			}
		}

		event.stopPropagation();
	}

	function onMouseOver(event) {
		var el = event.target;

		var listItemID = el.getAttribute('data-list-item');
		if (listItemID) {
			highlightListItem(listItemID);
		}

		event.stopPropagation();
	}

	function onMouseOut(event) {
		var el = event.target;

		var listItemID = el.getAttribute('data-list-item');
		if (listItemID) {
			removeHighlightListItem(listItemID);
		}

		event.stopPropagation();
	}

	for (var i = 0; i < answers.length; i++) {
		answers[i].addEventListener('click', onClick, false);
		answers[i].addEventListener('mouseover', onMouseOver, false);
		answers[i].addEventListener('mouseout', onMouseOut, false);
	}
}


// The cube
// On mouse over stop the rotation
var cubeMouseOver = function(containerID) {
	var container = document.querySelector(containerID);

	container.addEventListener("mouseover", function() {
		clearInterval(repeat);
	});

	container.addEventListener("mouseout", function() {
		repeat = setInterval(
			function(){
				cubeRotate('.cube3d');
			},
			2000
		);
	});
}


// Rotate randomly the cube
var cubeRotate = function(containerID) {
	var container = document.querySelector(containerID);
	var xAngle = 0, yAngle = 0;

	var random = Math.floor(Math.random() * 4000);
	var direction = random % 4;

	switch(direction) {
		case 0: // left
			yAngle -= 90;
			break;
		case 1: // up
			xAngle += 90;
			break;
		case 2: // right
			yAngle += 90;
			break;
		case 3: // down
			xAngle -= 90;
			break;
	};

	transform(container, "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");

	// Cross browser CSS transform
	function transform(container, style) {
		container.style.webkitTransform = style;

		container.style.MozTransform =
		container.style.msTransform =
		container.style.OTransform =
		container.style.transform = style;
	}
}



// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function(){
	// The question answers
	if (document.querySelector('.question-answers .answer')) {
		questionAnswers('.question-answers .answer')
	}

	// The cube
	if (document.querySelector('.cube3d')) {
		// Infinite rotate the cube
		var repeat = setInterval(
			function(){
					cubeRotate('.cube3d');
			},
			2000
		);

		// Handle mouse over the cube
		cubeMouseOver('.cube__wrap');
	}
}, false);
