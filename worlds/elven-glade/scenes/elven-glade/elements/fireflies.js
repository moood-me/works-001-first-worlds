var T = Math.PI * 2;
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 40; i++) {
  var x0 = (e.rnd() - 0.5) * 22,
    y0 = -e.rnd() * 2.6,
    s = 0.2 + e.rnd() * 0.3,
    ph = e.rnd() * 6;
  var x = x0 + Math.sin(e.t * s + ph) * 0.8,
    y = y0 + Math.sin(e.t * s * 1.3 + ph * 2) * 0.4;
  var a = Math.pow(Math.max(0, Math.sin(e.t * 0.9 + ph * 3)), 3);
  if (a < 0.05) continue;
  var gr = g.createRadialGradient(x, y, 0, x, y, 0.12);
  gr.addColorStop(0, "rgba(230,255,170," + a + ")");
  gr.addColorStop(1, "rgba(200,255,140,0)");
  g.fillStyle = gr;
  g.fillRect(x - 0.12, y - 0.12, 0.24, 0.24);
}
