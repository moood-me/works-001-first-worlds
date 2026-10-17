var t = e.t,
  st = e.state,
  wg = st.water_glimpse == null ? 0.6 : st.water_glimpse,
  lf = st.light_fade || 0,
  S = 303;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
if (wg < 0.01) return;
var x0 = -95,
  x1 = -10,
  top = -1.28,
  x,
  i;
g.globalAlpha = wg;
g.fillStyle = "#3e2c42";
g.beginPath();
g.moveTo(x0, top + 0.02);
for (x = x0; x <= x1; x += 1) g.lineTo(x, top - 0.45 - 0.3 * Math.sin(x / 6) - 0.15 * Math.sin(x / 1.9) - R() * 0.12);
g.lineTo(x1, top + 0.02);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(x0, top);
g.lineTo(x1, top);
g.quadraticCurveTo(x1 - 3, -0.4, x1 - 9, 0.3);
g.lineTo(x0, 0.3);
g.closePath();
var wgr = g.createLinearGradient(0, top, 0, 0.3);
wgr.addColorStop(0, "#eaa676");
wgr.addColorStop(0.35, "#c47a66");
wgr.addColorStop(1, "#6a4456");
g.fillStyle = wgr;
g.fill();
g.save();
g.clip();
g.globalCompositeOperation = "lighter";
for (i = 0; i < 70; i++) {
  var y = top + 0.05 + Math.pow(R(), 1.5) * 1.4,
    gx = x0 + R() * (x1 - x0),
    L = 0.6 + R() * 2.5,
    p = R() * 6.283,
    f = 0.4 + R() * 1.2,
    w = Math.sin(t * f + p) + 0.5 * Math.sin(t * f * 1.7 + p);
  if (w > 0.4) {
    g.globalAlpha = wg * Math.min(1, w - 0.4) * 0.6 * (1 - lf * 0.7);
    g.fillStyle = "#ffe0b0";
    g.fillRect(gx + Math.sin(t * 0.2 + p) * 0.4, y, L, e.px * 1.2);
  }
}
g.globalCompositeOperation = "source-over";
g.globalAlpha = wg * lf * 0.55;
g.fillStyle = "#1a1428";
g.fillRect(x0, top - 1, x1 - x0, 2);
g.restore();
g.globalAlpha = wg;
g.fillStyle = "#2a1e2c";
g.beginPath();
g.moveTo(x0, 0.4);
for (x = x0; x <= x1 - 8; x += 0.7) g.lineTo(x, 0.12 - 0.08 * Math.sin(x / 2.3) - R() * 0.1);
g.lineTo(x1 - 8, 0.4);
g.closePath();
g.fill();
g.globalAlpha = 1;
