var t = e.t,
  R = e.rnd;
for (var i = 0; i < 10; i++) {
  var cx = -110 + R() * 220 + 4 * Math.sin(t * 0.031 + i * 2.2) + 2 * Math.sin(t * 0.071 + i);
  var cy = -0.3 - R() * 1.6,
    w = 12 + R() * 30,
    h = 0.5 + R() * 1.2,
    a = 0.06 + R() * 0.12;
  a *= 0.6 + 0.4 * Math.sin(t * 0.06 + i * 1.3);
  g.save();
  g.translate(cx, cy);
  g.scale(w, h);
  var gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(184,176,198," + a.toFixed(3) + ")");
  gr.addColorStop(1, "rgba(184,176,198,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
