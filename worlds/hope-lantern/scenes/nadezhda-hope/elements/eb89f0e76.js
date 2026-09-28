g.lineCap = "round";
for (var i = 0; i < 24; i++) {
  var x = (e.rnd() - 0.5) * 1.6,
    h = 0.6 + e.rnd() * 1.05,
    bend = (e.rnd() - 0.3) * 0.5;
  g.strokeStyle = e.rnd() < 0.5 ? "#0e111b" : "#141827";
  g.lineWidth = 0.018 + e.rnd() * 0.02;
  g.beginPath();
  g.moveTo(x, 0.05);
  g.quadraticCurveTo(x + bend * 0.3, -h * 0.6, x + bend, -h);
  g.stroke();
  if (e.rnd() < 0.4) {
    g.strokeStyle = "rgba(170,185,220,0.22)";
    g.lineWidth = 1.2 * e.px;
    g.beginPath();
    g.moveTo(x + 0.008, 0);
    g.quadraticCurveTo(x + bend * 0.3 + 0.008, -h * 0.6, x + bend + 0.006, -h);
    g.stroke();
  }
  if (e.rnd() < 0.25) {
    g.fillStyle = "#1a1614";
    g.beginPath();
    g.ellipse(x + bend * 0.93, -h * 0.88, 0.024, 0.09, bend * 0.4, 0, 6.2832);
    g.fill();
  }
}
