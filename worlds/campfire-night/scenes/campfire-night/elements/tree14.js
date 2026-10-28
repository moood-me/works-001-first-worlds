var t = e.t,
  h = e.rnd() * 0.3 + 0.85,
  sw = Math.sin(t * 0.4 + e.rnd() * 6) * 0.01;
g.fillStyle = "#0d1210";
g.fillRect(-0.18, -3, 0.36, 3.1);
for (var i = 0; i < 7; i++) {
  var k = i / 7,
    y = -2.4 - k * 9.5 * h,
    w = (3.2 * (1 - k) + 0.5) * (0.85 + e.rnd() * 0.3);
  g.beginPath();
  g.moveTo(sw * k * 20, y - 2.4);
  g.quadraticCurveTo(-w * 0.35, y - 0.9, -w, y + 0.25);
  g.quadraticCurveTo(0, y - 0.3, w, y + 0.25);
  g.quadraticCurveTo(w * 0.35, y - 0.9, sw * k * 20, y - 2.4);
  g.fill();
}
