g.strokeStyle = "#08070c";
g.lineWidth = 0.05;
g.lineCap = "round";
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, -4);
for (var k = 0; k < 4; k++) {
  var y = -2.6 - k * 0.4,
    w = 1 - k * 0.2;
  g.moveTo(-w, y);
  g.lineTo(w, y);
}
g.stroke();
