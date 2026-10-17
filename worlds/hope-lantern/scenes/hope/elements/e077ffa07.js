var t = e.t;
for (var i = 0; i < 6; i++) {
  var bx = (e.rnd() - 0.5) * 9,
    by = -0.4 - e.rnd() * 2,
    ph = e.rnd() * 6.2832,
    f1 = 0.05 + e.rnd() * 0.06,
    f2 = 0.07 + e.rnd() * 0.05,
    bl = 0.17 + e.rnd() * 0.23;
  var x = bx + Math.sin(t * f1 + ph) * 1.2 + Math.sin(t * f1 * 2.7 + ph) * 0.3,
    y = by + Math.sin(t * f2 + ph * 1.3) * 0.35 + Math.sin(t * f2 * 3.1) * 0.08;
  var s = Math.sin(t * bl + ph * 2);
  var a = s > 0 ? s * s * 0.85 : 0;
  if (a < 0.01) continue;
  var r = 0.13;
  var gr = g.createRadialGradient(x, y, 0, x, y, r);
  gr.addColorStop(0, "rgba(255,222,160," + a + ")");
  gr.addColorStop(0.18, "rgba(255,196,120," + a * 0.55 + ")");
  gr.addColorStop(1, "rgba(255,180,100,0)");
  g.fillStyle = gr;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
