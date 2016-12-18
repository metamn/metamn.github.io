// Utils


// Convert Title to Class
// - What's Next -> 'whats-next'
var convertToClassName = function(s) {
  return s.replace(/\s+/g, '-').toLowerCase();
}



// Draw the SVG
var snap = function(id, width, height) {

  // Init Snap
  var paper = Snap(id).attr({
    viewBox: "0 0 " + width + " " + height
  });



  // Settings
  // - the number of vertical points (senses)
  var points = 8;

  // - the names of senses
  var senses = [
    'Position',
    'Motion',
    'Irritability',
    'Reflex',
    'Association',
    'Thought',
    'Culture',
    '???'
  ];

  // - the transitions
  var transitions = [
    'Control of Position = Motion',
    'Control of Motion = Irritability',
    'Control of Irritability = Reflex',
    'Control of Reflex = Association',
    'Control of Association = Thinking',
    'Control of Thinking = Culture',
    'Control of Culture = The next transition',
    'Nobody knows what will happen there'
    ];

  // - the radius of the sense point
  var radiusSensePoint = 20;

  // - axis arrow size
  var arrowSize = 20;

  // - axis legend
  var axisLegend = [
    'Control',
    'Senses'
  ]


  // Draw the axes

  // - the arrow marker
  var arrow = paper.path("M0,0 L0,6 L9,3 z").attr({fill: '#000'});
  var marker = arrow.marker(0, 0, arrowSize, arrowSize, 0, 3);

  var axisX = paper.path("M" + (arrowSize / 2) + "," + (height - arrowSize / 2) + "H" + (width - arrowSize)).attr({
    class: "axis axis--x",
    markerEnd: marker
  });

  var axisY = paper.path("M" + (arrowSize / 2) + "," + (height - arrowSize / 2) + "V" + arrowSize).attr({
    class: "axis axis--y",
    markerEnd: marker
  });

  // - the legend
  // Add text to sense points
  axisLegendX = paper.text(width - 130, height - arrowSize - 10, axisLegend[1]).attr({
    class: 'axis__legend axis__legend--x'
  });

  axisLegendY = paper.text(arrowSize + 10, arrowSize + 10, axisLegend[0]).attr({
    class: 'axis__legend axis__legend--y'
  });


  // Draw the vertical rulers
  var rulers = [];

  for (var i = 1; i <= points; i++ ) {
    var y = (height / points) * i;
    rulers[i-1] = paper.path("M0," + y + "H" + width).attr({
      class: "ruler ruler-" + i
    });
  }


  // Draw the diagonal
  var diagonal = paper.path("M0," + height + "L" + width + ",0").attr({
    class: 'diagonal'
  });


  // Draw sense points and circles at the intersection of rulers with diagonal
  var sensePoints = [];
  var senseCircles = [];
  var senseTitles = [];
  var senseDescriptions = [];

  // Black background
  // - http://stackoverflow.com/questions/31010029/svg-draw-text-with-solid-background-color
  var bbf = '<filter x="0" y="0" width="1" height="1" id="bbf"><feFlood flood-color="black"/><feComposite in="SourceGraphic"/></filter>';
  paper.append(Snap.parse(bbf));
  var blackBackgroundFiler = Snap('#bbf');

  // Glow a sense point
  function glow(point) {
    point.animate(
      {
        r: 1
      },
      220,
      function() {
        point.animate(
          {
            r: radiusSensePoint
          },
          300
        );
      }
    );
  }

  // Loop and draw
  for (var i = 0; i < points; i++ ) {
    var intersection = Snap.path.intersection(diagonal, rulers[i]);
    var x = intersection[0].x;
    var y = intersection[0].y

    // Move up the first circle
    if (i == points - 1) {
      x += radiusSensePoint / 2;
      y -= radiusSensePoint / 2;
    }

    // Class names
    var titleConverted = convertToClassName(senses[points - i - 1]);
    var classPoint = "sense__point sense__point--" + titleConverted;
    var classCircle = "sense__circle sense__circle--" + titleConverted;
    var classTitle = "sense__title sense__title--" + titleConverted;
    var descriptionTitle = "sense__description";

    // Draw sense circles
    // - radius is calculated with the Pitagoras theorem
    var radiusCircle = Math.sqrt(Math.pow(x, 2) + Math.pow((height-y), 2));
    senseCircles[i] = paper.circle(0, height, radiusCircle).attr({
      class: classCircle
    });

    // Draw sense points
    sensePoints[i] = paper.circle(x, y, radiusSensePoint).attr({
      class: classPoint
    });

    // Add hover to sense points
    senseDescriptions[i] = paper.text(arrowSize, y - (radiusSensePoint * 2.5), transitions[points - i - 1]).attr({
      class: descriptionTitle,
      filter: blackBackgroundFiler
    });

    // Add text to sense points
    senseTitles[i] = paper.text(x + (radiusSensePoint * 2), y, senses[points - i - 1]).attr({
      class: classTitle
    });

    // Animate sense points
    setInterval(glow(sensePoints[i]), 1000);
  }
}

module.exports = snap;
