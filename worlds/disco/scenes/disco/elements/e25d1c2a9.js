var w = e.aspect,
  T = Math.PI * 2;
for (var i = 0; i < 140; i++) {
  var x = e.rnd() * (w + 0.7) - 0.35,
    y = -0.35 + e.rnd() * 0.85,
    s = 0.0007 + e.rnd() * e.rnd() * 0.003,
    ph = e.rnd() * T,
    sp = 0.4 + e.rnd() * 1.6,
    mint = e.rnd() < 0.18;
  var fade = Math.min(1, Math.max(0, (0.5 - y) / 0.2));
  if (fade <= 0) continue;
  var tw = 0.5 + 0.3 * Math.sin(e.t * sp + ph) + 0.2 * Math.sin(e.t * sp * 0.37 + ph * 2);
  g.globalAlpha = Math.max(0, tw) * fade;
  g.fillStyle = mint ? "#b5ffec" : "#ffd6f7";
  g.beginPath();
  g.arc(x, y, s, 0, T);
  g.fill();
  if (s > 0.0025) {
    g.globalAlpha *= 0.45;
    g.fillRect(x - s * 4, y - s * 0.15, s * 8, s * 0.3);
    g.fillRect(x - s * 0.15, y - s * 4, s * 0.3, s * 8);
  }
}
g.globalAlpha = 1;
