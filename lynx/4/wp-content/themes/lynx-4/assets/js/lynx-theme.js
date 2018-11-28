/**
 * Javascript functions for the Lynx Theme
 */


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


 // Infinite rotate the cube
 var repeat = setInterval(
   function(){
     cubeRotate('.cube3d');
   },
   2000
 );

 // Handle mouse over
 cubeMouseOver('.cube__wrap');
