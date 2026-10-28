var T = Math.PI * 2;
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 34; i++) {
  var x0 = -13 + e.rnd() * 26,
    y0 = -1 - e.rnd() * 10,
    ax = 0.5 + e.rnd() * 1.2,
    ay = 0.3 + e.rnd() * 0.8,
    f1 = 0.07 + e.rnd() * 0.1,
    f2 = 0.05 + e.rnd() * 0.09,
    p1 = e.rnd() * T,
    p2 = e.rnd() * T,
    r = 0.05 + e.rnd() * 0.08;
  var x = x0 + ax * Math.sin(e.t * f1 + p1) + 0.3 * Math.sin(e.t * f1 * 2.7 + p2),
    y = y0 + ay * Math.sin(e.t * f2 + p2) - 0.2 * Math.cos(e.t * f1 * 1.9 + p1);
  var tw = 0.5 + 0.5 * Math.sin(e.t * (0.8 + f1 * 6) + p1);
  var gr = g.createRadialGradient(x, y, 0, x, y, r * 4);
  gr.addColorStop(0, "rgba(255,224,122," + 0.55 * tw + ")");
  gr.addColorStop(1, "rgba(255,224,122,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(x, y, r * 4, 0, T);
  g.fill();
}
g.globalCompositeOperation = "source-over";
