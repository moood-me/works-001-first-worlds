var t = e.t,
  s = e.state || {},
  rn = s.rain == null ? 0.6 : s.rain,
  on = s.lamp == null ? 1 : s.lamp;
g.fillStyle = "rgba(120,135,160,0.06)";
g.fillRect(-0.9, -2.6, 1.8, 1.75);
var rg = g.createRadialGradient(0.45, -1.55, 0, 0.45, -1.55, 0.35);
rg.addColorStop(0, "rgba(255,190,120," + (0.16 * on).toFixed(3) + ")");
rg.addColorStop(1, "rgba(255,190,120,0)");
g.fillStyle = rg;
g.fillRect(-0.9, -2.6, 1.8, 1.75);
g.save();
g.beginPath();
g.rect(-0.9, -2.6, 1.8, 1.75);
g.clip();
for (var i = 0; i < 90; i++) {
  var bx = -0.88 + e.rnd() * 1.76,
    by = -2.6 + e.rnd() * 1.75,
    br = 0.003 + e.rnd() * 0.005;
  if (e.rnd() < rn) {
    g.fillStyle = "rgba(190,200,215,0.22)";
    g.beginPath();
    g.arc(bx, by, br, 0, 6.283);
    g.fill();
  }
}
for (var j = 0; j < 40; j++) {
  var x0 = -0.86 + e.rnd() * 1.72,
    sp = 0.012 + e.rnd() * 0.035,
    y0 = e.rnd(),
    r = 0.005 + e.rnd() * 0.006,
    wob = e.rnd() * 6;
  if (j >= 40 * rn) continue;
  var f = (y0 + t * sp) % 1,
    yy = -2.65 + f * 1.9,
    xx = x0 + Math.sin(f * 5 + wob) * 0.008;
  g.strokeStyle = "rgba(180,195,215,0.1)";
  g.lineWidth = r * 0.9;
  g.beginPath();
  g.moveTo(xx, yy - 0.12 * f - 0.02);
  g.lineTo(xx, yy);
  g.stroke();
  g.fillStyle = "rgba(200,212,228,0.38)";
  g.beginPath();
  g.arc(xx, yy, r, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(255,210,160," + (0.35 * on).toFixed(2) + ")";
  g.beginPath();
  g.arc(xx + r * 0.35, yy - r * 0.35, r * 0.3, 0, 6.283);
  g.fill();
}
g.restore();
g.strokeStyle = "#5e564b";
g.lineWidth = 0.07;
g.strokeRect(-0.9, -2.6, 1.8, 1.75);
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(0, -2.6);
g.lineTo(0, -0.85);
g.moveTo(-0.9, -2.0);
g.lineTo(0.9, -2.0);
g.stroke();
g.strokeStyle = "rgba(255,200,150,0.15)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(0.02, -2.58);
g.lineTo(0.02, -0.86);
g.stroke();
g.fillStyle = "#6c6357";
g.fillRect(-1.02, -0.89, 2.04, 0.06);
g.fillStyle = "rgba(0,0,0,0.35)";
g.fillRect(-1.0, -0.83, 2.0, 0.04);
g.strokeStyle = "#2a2119";
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-1.35, -2.82);
g.lineTo(1.35, -2.82);
g.stroke();
function curtain(x0, x1, dir) {
  var cg = g.createLinearGradient(x0, 0, x1, 0);
  for (var k = 0; k <= 6; k++) {
    cg.addColorStop(k / 6, k % 2 ? "#4f4234" : "#6b5a46");
  }
  g.fillStyle = cg;
  g.beginPath();
  g.moveTo(x0, -2.8);
  g.lineTo(x1, -2.8);
  g.bezierCurveTo(x1 + dir * 0.02, -2.0, x1 - dir * 0.05, -1.2, x1 + dir * 0.03, -0.5);
  g.lineTo(x0 - dir * 0.04, -0.5);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(10,8,6,0.25)";
  g.fillRect(Math.min(x0, x1), -0.62, Math.abs(x1 - x0) + 0.05, 0.12);
}
curtain(-1.3, -0.72, 1);
curtain(1.3, 0.74, -1);
g.fillStyle = "rgba(255,180,110," + (0.12 * on).toFixed(3) + ")";
g.fillRect(0.74, -2.8, 0.56, 2.3);
