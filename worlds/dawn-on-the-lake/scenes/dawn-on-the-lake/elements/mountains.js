function ridge(seed, amp, base, col) {
  var a = seed;
  g.beginPath();
  g.moveTo(-14000, 8);
  for (var x = -14000; x <= 14000; x += 120) {
    var u = x / 1000;
    var h =
      base + amp * (0.55 * Math.sin(u * 0.9 + a) + 0.3 * Math.sin(u * 2.3 + a * 2) + 0.15 * Math.sin(u * 5.1 + a * 3));
    h += amp * 0.9 * Math.exp(-Math.pow((x - 900) / 1300, 2));
    g.lineTo(x, -Math.max(20, h));
  }
  g.lineTo(14000, 8);
  g.closePath();
  g.fillStyle = col;
  g.fill();
}
ridge(1.3, 260, 200, "#9a93a8");
ridge(4.1, 150, 90, "#857f97");
