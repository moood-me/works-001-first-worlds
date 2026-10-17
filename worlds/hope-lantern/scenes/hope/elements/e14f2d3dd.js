function ridge(base, amp, col, s1, s2, s3, st) {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(-1300, 3);
  for (var x = -1300; x <= 1300; x += st) {
    var n =
      0.5 +
      0.28 * Math.sin(x * 0.0037 + s1) +
      0.2 * Math.sin(x * 0.0093 + s2) +
      0.09 * Math.sin(x * 0.027 + s3) +
      0.03 * Math.sin(x * 0.071 + s1 * 3);
    g.lineTo(x, -base - amp * n);
  }
  g.lineTo(1300, 3);
  g.closePath();
  g.fill();
}
var a = e.rnd() * 6.28,
  b = e.rnd() * 6.28,
  c = e.rnd() * 6.28,
  d = e.rnd() * 6.28,
  f = e.rnd() * 6.28,
  h = e.rnd() * 6.28;
ridge(7, 24, "#353d5e", a, b, c, 9);
var rim = g.createLinearGradient(0, -34, 0, 0);
rim.addColorStop(0, "rgba(150,158,195,0.10)");
rim.addColorStop(1, "rgba(150,158,195,0)");
g.globalCompositeOperation = "source-atop";
g.fillStyle = rim;
g.fillRect(-1300, -40, 2600, 40);
g.globalCompositeOperation = "source-over";
ridge(1, 11, "#2f3653", d, f, h, 7);
