/**
 * Javascript functions for the Lynx Theme
 *
 */

// Canvas long shadow
// - Original idea from https://codepen.io/mladen___/pen/gbvqBo
// - Added: parameters, responsiveness, touch events
//
// Params:
// canvasHeight
// 	- the height of the canvas, optional
// 	- used to redraw the canvas when the content change
// displayLight
// 	- to display the light or not
var canvasLongShadow = function(ID, canvasHeight, displayLight) {
	var displayLight = (typeof displayLight !== 'undefined') ? displayLight : true;

	// Set up the canvas
	// =================
	//
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	// Resize the canvas
	// - instead of resisizing to window lets resize to content, which is sometimes larger
	// - https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
	function resize() {
	    var box = c.getBoundingClientRect();
	    c.width = box.width;
		c.height = (typeof canvasHeight !== 'undefined') ? canvasHeight : document.body.scrollHeight;
	}
	// - run at start
	resize();
	// - change together with the window size
	window.onresize = resize;



	// The light effect which moves with the cursor
	// ============================================
	//
	// The radius of the light
	// - made responsive
	var screenSize = c.getBoundingClientRect();
	var screenSizeMin = Math.min(screenSize.width, screenSize.height);
	var lightRadius = screenSizeMin / 2;

	// The color of the light
	// - more neat if the inner color is darker
	lightColorInner = 'gray';
	lightColorOuter = 'lightgray';

	// The center point of the light
	lightCenterPointSize = 5;
	lightCenterPointColor = '#eee';

	// The original position of the light center
	// - this will later move together with the cursor
	var light = {
	    x: 160,
	    y: 200
	}

	// Drawing the light
	function drawLight() {
	    ctx.beginPath();
	    ctx.arc(light.x, light.y, lightRadius, 0, 2 * Math.PI);
	    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, lightRadius);
	    gradient.addColorStop(0, lightColorInner);
	    gradient.addColorStop(1, lightColorOuter);
	    ctx.fillStyle = gradient;
	    ctx.fill();

	    ctx.beginPath();
	    ctx.arc(light.x, light.y, lightCenterPointSize, 0, 2 * Math.PI);
	    ctx.fillStyle = lightCenterPointColor;
	    ctx.fill();
	}

	// Moving the light with the cursor
	c.onmousemove = function(e) {
	    light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
	    light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
	}

	// Moving the light on touch devices
	// - https://stackoverflow.com/questions/49157880/how-to-handle-touch-events-with-html5-canvas
	document.body.addEventListener('touchmove', function(e) {
	   light.x = e.pageX;
	   light.y = e.pageY;
	}, false);



	// The boxes
	// =========
	//
	// The number of boxes
	var boxNumber = 5;

	// The color of the boxes
	// - they will be randomly choosen
	var boxColors = ['gray'];

	// The color of the box shadow
	var boxShadowColor = 'lightgray';

	// The length of the box shadow
	var boxShadowLength = 200;

	// The box speed
	// - the higher the slower
	var boxSpeed = 680;

	// Drawing a box
	function Box() {
	    this.half_size = Math.floor((Math.random() * 50) + 1);
	    this.x = Math.floor((Math.random() * c.width) + 1);
	    this.y = Math.floor((Math.random() * c.height) + 1);
	    this.r = Math.random() * Math.PI;
	    this.shadow_length = boxShadowLength;
	    this.color = boxColors[Math.floor((Math.random() * boxColors.length))];

	    this.getDots = function() {
	        var full = (Math.PI * 2) / 4;

	        var p1 = {
	            x: this.x + this.half_size * Math.sin(this.r),
	            y: this.y + this.half_size * Math.cos(this.r)
	        };
	        var p2 = {
	            x: this.x + this.half_size * Math.sin(this.r + full),
	            y: this.y + this.half_size * Math.cos(this.r + full)
	        };
	        var p3 = {
	            x: this.x + this.half_size * Math.sin(this.r + full * 2),
	            y: this.y + this.half_size * Math.cos(this.r + full * 2)
	        };
	        var p4 = {
	            x: this.x + this.half_size * Math.sin(this.r + full * 3),
	            y: this.y + this.half_size * Math.cos(this.r + full * 3)
	        };

	        return {
	            p1: p1,
	            p2: p2,
	            p3: p3,
	            p4: p4
	        };
	    }

	    this.rotate = function() {
	        var speed = (60 - this.half_size) / boxSpeed;
	        this.r += speed * 0.002;
	        this.x += speed;
	        this.y += speed;
	    }

	    this.draw = function() {
	        var dots = this.getDots();
	        ctx.beginPath();
	        ctx.moveTo(dots.p1.x, dots.p1.y);
	        ctx.lineTo(dots.p2.x, dots.p2.y);
	        ctx.lineTo(dots.p3.x, dots.p3.y);
	        ctx.lineTo(dots.p4.x, dots.p4.y);
	        ctx.fillStyle = this.color;
	        ctx.fill();


	        if (this.y - this.half_size > c.height) {
	            this.y -= c.height + 100;
	        }
	        if (this.x - this.half_size > c.width) {
	            this.x -= c.width + 100;
	        }
	    }

	    this.drawShadow = function() {
	        var dots = this.getDots();
	        var angles = [];
	        var points = [];

	        for (dot in dots) {
	            var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
	            var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
	            var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
	            angles.push(angle);
	            points.push({
	                endX: endX,
	                endY: endY,
	                startX: dots[dot].x,
	                startY: dots[dot].y
	            });
	        };

	        for (var i = points.length - 1; i >= 0; i--) {
	            var n = i == 3 ? 0 : i + 1;
	            ctx.beginPath();
	            ctx.moveTo(points[i].startX, points[i].startY);
	            ctx.lineTo(points[n].startX, points[n].startY);
	            ctx.lineTo(points[n].endX, points[n].endY);
	            ctx.lineTo(points[i].endX, points[i].endY);
	            ctx.fillStyle = boxShadowColor;
	            ctx.fill();
	        };
	    }
	}

	// Detect collison
	function collisionDetection(b){
		for (var i = boxes.length - 1; i >= 0; i--) {
			if(i != b){
				var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
				var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
				var d = Math.sqrt(dx * dx + dy * dy);
				if (d < boxes[b].half_size + boxes[i].half_size) {
				    boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
				    boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
				}
			}
		}
	}

	// Setting up the boxes
	var boxes = [];

	function draw() {
	    ctx.clearRect(0, 0, c.width, c.height);

		if (displayLight) {
			drawLight();
		}

	    for (var i = 0; i < boxes.length; i++) {
	        boxes[i].rotate();
	        boxes[i].drawShadow();
	    };

	    for (var i = 0; i < boxes.length; i++) {
	        collisionDetection(i)
	        boxes[i].draw();
	    };

	    requestAnimationFrame(draw);
	}

	draw();

	while (boxes.length < boxNumber) {
	    boxes.push(new Box());
	}
}
// - end Canvas


// CTA
var cta = function(ID) {
	var cta = document.querySelector(ID);

	function onClick(event) {
		var slide1 = document.querySelector('.slide-1');
		var slide2 = document.querySelector('.slide-2');
		var id = document.querySelector('.id');

		slide1.classList.add('hidden');
		slide2.classList.remove('hidden');
		id.classList.add('hidden');

		canvasLongShadow('canvas', slide2.scrollHeight, false);
	}

	cta.addEventListener('click', onClick);
}

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
				//highlightListItem(listItemID);

				var signup = document.querySelector('.signup');
				signup.classList.remove('hidden');

				var buttons = document.querySelectorAll('.answer');
				for (var i = 0; i < buttons.length; i++) {
					buttons[i].classList.add('hidden');
				}
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
		//answers[i].addEventListener('mouseover', onMouseOver, false);
		//answers[i].addEventListener('mouseout', onMouseOut, false);
	}
}



// Run functions once the document is ready
document.addEventListener('DOMContentLoaded', function() {
	// Canvas long shadow
	if (document.getElementById('canvas')) {
		canvasLongShadow('canvas');
	}

	// CTA
	if (document.querySelector('.call-to-action')) {
		cta('.call-to-action');
	}

	// The question answers
	if (document.querySelector('.question-answers .answer')) {
		questionAnswers('.question-answers .answer');
	}
}, false);
