var t = e.t,
  lf = e.state.light_fade || 0,
  S = 53;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 16; i++) {
  var bx = (R() - 0.5) * 4.8,
    by = -1.4 + R() * 2.3,
    f1 = 0.05 + R() * 0.07,
    f2 = 0.04 + R() * 0.06,
    p = R() * 6.283,
    sz = (1.2 + R() * 1.3) * e.px;
  var x = bx + Math.sin(t * f1 + p) * 0.35 + Math.sin(t * f2 * 1.7 + p * 2) * 0.12,
    y = by + Math.sin(t * f2 + p * 1.3) * 0.25;
  var a = (0.3 + 0.3 * Math.sin(t * (0.3 + f1 * 5) + p)) * (0.45 + 0.55 * Math.exp((-bx * bx) / 3)) * (1 - lf * 0.8);
  if (a <= 0.005) continue;
  var gr = g.createRadialGradient(x, y, 0, x, y, sz * 2.5);
  gr.addColorStop(0, "rgba(255,228,180," + a.toFixed(3) + ")");
  gr.addColorStop(1, "rgba(255,200,150,0)");
  g.fillStyle = gr;
  g.fillRect(x - sz * 2.5, y - sz * 2.5, sz * 5, sz * 5);
}
g.globalCompositeOperation = "source-over";
