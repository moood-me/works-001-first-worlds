for (var i = 0; i < 50; i++) {
  var x = -42 + e.rnd() * 160,
    w = 0.8 + e.rnd() * 3,
    ph = e.rnd() * 6.283,
    f = 0.2 + e.rnd() * 0.3;
  var a = Math.max(0, Math.sin(e.t * f + ph)) * 0.4;
  if (a < 0.02) continue;
  g.fillStyle = "rgba(190,194,215," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(e.t * 0.3 + ph) * 0.4, -0.1 + Math.sin(e.t * f * 0.7 + ph) * 0.08, w / 2, 0.12, 0, 0, 6.283);
  g.fill();
}
