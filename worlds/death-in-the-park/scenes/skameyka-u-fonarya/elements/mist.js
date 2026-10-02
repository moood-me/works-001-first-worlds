var K = typeof globalThis !== "undefined" ? globalThis : {},
  S = e.state || {},
  st = S.stillness || 0,
  W = K.__dpk,
  w;
if (W) {
  var dt = e.t - W.l;
  if (dt > 0 && dt < 0.5) W.w += dt * (1 - st);
  if (dt !== 0) W.l = e.t;
  w = W.w;
} else {
  K.__dpk = { w: e.t, l: e.t };
  w = e.t * (1 - st);
}
var gr = g.createLinearGradient(0, -3, 0, 0.5);
gr.addColorStop(0, "rgba(70,80,118,0)");
gr.addColorStop(0.75, "rgba(70,80,118,0.22)");
gr.addColorStop(1, "rgba(70,80,118,0.08)");
g.fillStyle = gr;
g.fillRect(-60, -3, 120, 3.5);
for (var k = 0; k < 6; k++) {
  var sp = 0.12 + e.rnd() * 0.15,
    cx = -60 + ((((k * 23 + w * sp) % 120) + 120) % 120),
    cy = -0.5 - e.rnd() * 0.9,
    rw = 7 + e.rnd() * 10,
    rh = 0.6 + e.rnd() * 0.4;
  g.save();
  g.translate(cx, cy);
  g.scale(rw, rh);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(90,100,140,0.16)");
  rg.addColorStop(1, "rgba(90,100,140,0)");
  g.fillStyle = rg;
  g.beginPath();
  g.arc(0, 0, 1, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
