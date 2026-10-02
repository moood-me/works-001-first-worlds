function trunk(x, w, lean, dir) {
  g.fillStyle = "#120f14";
  g.beginPath();
  g.moveTo(x - w * 0.8, 0.05);
  g.bezierCurveTo(x - w * 0.5, -3, x - w * 0.4 + lean * 0.5, -8, x + lean - w * 0.25, -15.5);
  g.lineTo(x + lean + w * 0.25, -15.5);
  g.bezierCurveTo(x + w * 0.4 + lean * 0.5, -8, x + w * 0.5, -3, x + w * 0.8, 0.05);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(255,186,110,0.13)";
  g.lineWidth = 0.04;
  g.beginPath();
  g.moveTo(x + dir * w * 0.72, -0.1);
  g.bezierCurveTo(x + dir * w * 0.46, -3, x + dir * w * 0.38 + lean * 0.5, -6, x + dir * w * 0.36 + lean * 0.45, -7);
  g.stroke();
  g.strokeStyle = "#120f14";
  g.lineCap = "round";
  for (var k = 0; k < 4; k++) {
    var by = -8 - k * 1.6,
      bx = x + lean * (-by / 15.5);
    g.lineWidth = 0.22 - k * 0.04;
    g.beginPath();
    g.moveTo(bx, by);
    g.quadraticCurveTo(bx + dir * 1.8, by - 1.2 - e.rnd(), bx + dir * (3 + e.rnd() * 2), by - 2.5 - e.rnd() * 1.5);
    g.stroke();
  }
  var cols = ["rgba(70,40,24,0.75)", "rgba(110,62,30,0.6)", "rgba(40,26,22,0.8)"];
  for (var i = 0; i < 40; i++) {
    var lx = x + lean * 0.7 + dir * (e.rnd() * 5),
      ly = -11 - e.rnd() * 4.5;
    g.fillStyle = cols[i % 3];
    g.beginPath();
    g.ellipse(lx, ly, 0.3 + e.rnd() * 0.6, 0.2 + e.rnd() * 0.35, e.rnd(), 0, Math.PI * 2);
    g.fill();
  }
}
trunk(-6.4, 0.7, 0.8, 1);
trunk(7.6, 0.6, -0.9, -1);
