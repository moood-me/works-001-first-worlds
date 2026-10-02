g.fillStyle = "#4a4c63";
g.beginPath();
g.moveTo(-2600, 1);
for (var x = -2600; x <= 2600; x += 6) {
  var h = 9 + 4 * Math.sin(x * 0.004 + 1) + 2 * Math.sin(x * 0.019) + (e.rnd() < 0.35 ? 6 + e.rnd() * 10 : e.rnd() * 3);
  g.lineTo(x, -h);
}
g.lineTo(2600, 1);
g.closePath();
g.fill();
