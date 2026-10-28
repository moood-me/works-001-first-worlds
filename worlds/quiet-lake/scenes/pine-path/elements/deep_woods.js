var st = e.state,
  lf = st.light_fade || 0,
  pd = st.path_depth == null ? 0.55 : st.path_depth,
  S = 101;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var pc = -0.85,
  x,
  i;
g.beginPath();
g.moveTo(-170, 10);
for (x = -170; x <= 170; x += 4) {
  g.lineTo(x, -34 - 4 * Math.sin(x / 23 + 1) - 2.5 * Math.sin(x / 7.3) - R() * 2);
}
g.lineTo(170, 10);
g.closePath();
var bg = g.createLinearGradient(0, -40, 0, 0);
bg.addColorStop(0, "#2a1e32");
bg.addColorStop(0.6, "#4a3450");
bg.addColorStop(1, "#6e4658");
g.fillStyle = bg;
g.fill();
g.save();
g.clip();
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(-40, -6, 0, -40, -6, 80);
gl.addColorStop(0, "rgba(255,160,95," + (0.55 * (1 - lf * 0.85)).toFixed(3) + ")");
gl.addColorStop(0.35, "rgba(200,100,80," + (0.2 * (1 - lf * 0.8)).toFixed(3) + ")");
gl.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gl;
g.fillRect(-170, -46, 340, 56);
var pg = g.createRadialGradient(pc, -1.5, 0, pc, -1.5, 6);
pg.addColorStop(0, "rgba(255,190,140," + (0.35 * pd).toFixed(3) + ")");
pg.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = pg;
g.fillRect(pc - 7, -8, 14, 10);
g.restore();
for (i = 0; i < 170; i++) {
  x = -165 + R() * 330;
  var w = 0.4 + R() * 0.6,
    h = 26 + R() * 10,
    al = 0.55 + R() * 0.4;
  if (Math.abs(x - pc) < 1.6) continue;
  g.globalAlpha = al;
  g.fillStyle = "#33243a";
  g.fillRect(x - w / 2, -h, w, h + 0.5);
}
g.globalAlpha = 1;
g.fillStyle = "#2a1e32";
for (i = 0; i < 300; i++) {
  var cx = -165 + R() * 330,
    cy = -25 - R() * 11,
    rx = 1 + R() * 2.6;
  g.beginPath();
  g.ellipse(cx, cy, rx, rx * 0.35, 0, 0, 6.283);
  g.fill();
}
var fg = g.createLinearGradient(0, 0, 0, 10);
fg.addColorStop(0, "#3e2c3c");
fg.addColorStop(1, "#2a1e2a");
g.fillStyle = fg;
g.fillRect(-170, 0, 340, 10);
g.globalAlpha = (1 - pd) * 0.8;
var mg = g.createRadialGradient(pc, -2, 0, pc, -2, 5);
mg.addColorStop(0, "#160f1c");
mg.addColorStop(1, "rgba(22,15,28,0)");
g.fillStyle = mg;
g.fillRect(pc - 6, -8, 12, 10);
g.globalAlpha = 1;
var fb = g.createLinearGradient(0, -6, 0, 3);
fb.addColorStop(0, "rgba(210,140,125,0)");
fb.addColorStop(0.6, "rgba(210,140,125," + (0.22 * (1 - lf * 0.6)).toFixed(3) + ")");
fb.addColorStop(1, "rgba(210,140,125,0)");
g.fillStyle = fb;
g.fillRect(-170, -6, 340, 9);
g.fillStyle = "rgba(16,12,26," + (lf * 0.45).toFixed(3) + ")";
g.fillRect(-170, -46, 340, 56);
