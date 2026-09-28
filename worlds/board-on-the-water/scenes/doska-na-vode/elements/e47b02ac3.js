var W = e.aspect,
  cx = W / 2,
  H0 = 0.47,
  t = e.t,
  sx = W / 2 - 0.463,
  i,
  x;
g.save();
g.beginPath();
g.rect(-0.2, H0, W + 0.4, 0.85);
g.clip();
var gr = g.createLinearGradient(0, H0, 0, 1.25);
gr.addColorStop(0, "#e6b89c");
gr.addColorStop(0.04, "#cf9f93");
gr.addColorStop(0.15, "#a17f8c");
gr.addColorStop(0.35, "#7a6179");
gr.addColorStop(0.65, "#54435e");
gr.addColorStop(1, "#342841");
g.fillStyle = gr;
g.fillRect(-0.2, H0, W + 0.4, 0.85);
g.save();
g.translate(sx, H0);
g.scale(0.5, 1.7);
var rg = g.createRadialGradient(0, 0, 0, 0, 0, 0.2);
rg.addColorStop(0, "rgba(255,222,184,0.5)");
rg.addColorStop(0.4, "rgba(245,192,162,0.16)");
rg.addColorStop(1, "rgba(245,192,162,0)");
g.fillStyle = rg;
g.fillRect(-0.2, 0, 0.4, 0.2);
g.restore();
function rr(x0, x1, amp, f, ph, col, a) {
  g.beginPath();
  g.moveTo(x0, H0);
  for (x = x0; x <= x1; x += 0.006) {
    var u = (x - x0) / (x1 - x0),
      h =
        amp *
        Math.pow(Math.max(0, Math.sin(Math.PI * u)), 0.5) *
        (0.62 + 0.22 * Math.sin(u * f + ph) + 0.1 * Math.sin(u * f * 2.7 + ph * 1.3) + 0.04 * Math.sin(u * f * 7.1));
    g.lineTo(x, H0 + h * 0.95);
  }
  g.lineTo(x1, H0);
  g.closePath();
  g.globalAlpha = a;
  g.fillStyle = col;
  g.fill();
  g.globalAlpha = 1;
}
rr(cx + 0.08, W + 0.5, 0.035, 7, 0.8, "#9a7684", 0.35);
rr(cx + 0.35, cx + 0.95, 0.018, 5, 2.1, "#7f6378", 0.4);
rr(cx - 0.72, cx - 0.56, 0.009, 4, 0.3, "#977583", 0.35);
g.lineCap = "round";
for (i = 0; i < 200; i++) {
  var d = 0.002 + 0.78 * Math.pow(e.rnd(), 2.1),
    y = H0 + d,
    L = 0.008 + d * (0.25 + e.rnd() * 0.5),
    x0 = e.rnd() * (W + 0.4) - 0.2,
    ph = e.rnd() * 6.283,
    w = 0.25 + e.rnd() * 0.5,
    lt = e.rnd() < 0.55,
    xx = x0 + Math.sin(t * 0.05 * w + ph) * 0.02 * (0.3 + d * 3),
    a = (0.5 + 0.5 * Math.sin(t * w + ph * 1.3)) * (lt ? 0.22 : 0.3);
  g.globalAlpha = a;
  g.strokeStyle = lt ? (d < 0.12 ? "#f2cdb2" : "#b48d9a") : "#3a2c45";
  g.lineWidth = e.px * (0.8 + d * 7);
  g.beginPath();
  g.moveTo(xx - L / 2, y);
  g.lineTo(xx + L / 2, y);
  g.stroke();
}
for (i = 0; i < 120; i++) {
  var d2 = 0.002 + Math.pow(e.rnd(), 1.7) * 0.32,
    sp = 0.004 + d2 * 0.33,
    x2 = sx + (e.rnd() + e.rnd() - 1) * sp,
    L2 = 0.003 + d2 * 0.1 * (0.3 + e.rnd()),
    w2 = 0.5 + e.rnd() * 1.3,
    p2 = e.rnd() * 6.283,
    f = Math.sin(t * w2 + p2) * 0.6 + Math.sin(t * w2 * 1.73 + p2 * 0.7) * 0.4;
  if (f <= 0.1) continue;
  g.globalAlpha = Math.min(1, f * f * 1.3) * (1 - d2 * 2.2);
  g.strokeStyle = d2 < 0.03 ? "#fff3dc" : "#ffdcb4";
  g.lineWidth = e.px * (1 + d2 * 9);
  g.beginPath();
  g.moveTo(x2 - L2 / 2, H0 + d2);
  g.lineTo(x2 + L2 / 2, H0 + d2);
  g.stroke();
}
g.globalAlpha = 0.75;
var hg = g.createLinearGradient(sx - 0.07, 0, sx + 0.07, 0);
hg.addColorStop(0, "rgba(255,240,215,0)");
hg.addColorStop(0.5, "rgba(255,240,215,1)");
hg.addColorStop(1, "rgba(255,240,215,0)");
g.fillStyle = hg;
g.fillRect(sx - 0.07, H0, 0.14, 0.0025);
g.globalAlpha = 1;
g.restore();
