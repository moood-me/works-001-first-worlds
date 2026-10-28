var R = e.rnd;
g.fillStyle = "#2a2f45";
g.beginPath();
g.moveTo(-2500, 5);
for (var x = -2500; x <= 2500; x += 5) {
  var y = -(52 + 22 * Math.sin(x / 420 + 0.3) + 14 * Math.sin(x / 170 + 1) + 6 * Math.sin(x / 55)) - R() * R() * 6;
  g.lineTo(x, y);
}
g.lineTo(2500, 5);
g.closePath();
g.fill();
