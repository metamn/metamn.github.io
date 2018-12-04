/**
 * Javascript functions for the Lynx Theme
 *
 * Note: hover not working in Firefox !!!!
 */

// Canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function resize() {
    var box = c.getBoundingClientRect();
    c.width = box.width;
    c.height = box.height;
}

var light = {
    x: 160,
    y: 200
}

var colors = ["grey", "grey", "grey"];

function drawLight() {
    ctx.beginPath();
    ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
    var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
    gradient.addColorStop(0, "gray");
    gradient.addColorStop(1, "lightgray");
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
    gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
    gradient.addColorStop(0, "#fff");
    gradient.addColorStop(1, "grey");
    ctx.fillStyle = gradient;
    ctx.fill();
}

function Box() {
    this.half_size = Math.floor((Math.random() * 50) + 1);
    this.x = Math.floor((Math.random() * c.width) + 1);
    this.y = Math.floor((Math.random() * c.height) + 1);
    this.r = Math.random() * Math.PI;
    this.shadow_length = 200;
    this.color = colors[Math.floor((Math.random() * colors.length))];

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
        var speed = (60 - this.half_size) / 680;
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
            ctx.fillStyle = "lightgray";
            ctx.fill();
        };
    }
}

var boxes = [];

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawLight();

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

resize();
draw();

while (boxes.length < 4) {
    boxes.push(new Box());
}

window.onresize = resize;
c.onmousemove = function(e) {
    light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
    light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
}


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
		id.classList.add('bottom-0');
	}

	cta.addEventListener('click', onClick, false);
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
				highlightListItem(listItemID);

				var signup = document.querySelector('.signup');
				signup.classList.remove('hidden');
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
	// CTA
	if (document.querySelector('.call-to-action')) {
		cta('.call-to-action');
	}

	// The question answers
	if (document.querySelector('.question-answers .answer')) {
		questionAnswers('.question-answers .answer');
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
