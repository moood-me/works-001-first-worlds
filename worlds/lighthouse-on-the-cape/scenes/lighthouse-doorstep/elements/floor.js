var S = e.state,
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow)),
  dop = Math.max(0, Math.min(1, S.door_open == null ? 1 : S.door_open));
g.fillStyle = "#2c2733";
g.fillRect(-6, -1.5, 12, 3);
var pw = 0.17;
for (var i = -36; i < 36; i++) {
  var x = i * pw,
    v = e.rnd(),
    jy = -1.5 + e.rnd() * 3,
    jy2 = jy - 1.2 - e.rnd() * 0.6;
  var c = Math.round(46 + v * 14),
    wear = Math.max(0, 1 - Math.abs(x + pw / 2) / 0.6);
  g.fillStyle =
    "rgb(" +
    (c + Math.round(wear * 14)) +
    "," +
    (Math.round(c * 0.86) + Math.round(wear * 12)) +
    "," +
    (Math.round(c * 0.95) + Math.round(wear * 12)) +
    ")";
  g.fillRect(x, -1.5, pw, 3);
  g.strokeStyle = "rgba(16,13,22,0.35)";
  g.lineWidth = 0.004;
  for (var k = 0; k < 3; k++) {
    var gx = x + 0.03 + e.rnd() * 0.11;
    g.beginPath();
    g.moveTo(gx, -1.5);
    g.bezierCurveTo(gx + 0.02, -0.6, gx - 0.02, 0.3, gx + 0.01, 1.5);
    g.stroke();
  }
  g.strokeStyle = "rgba(10,8,16,0.7)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(x, jy);
  g.lineTo(x + pw, jy);
  if (jy2 > -1.5) {
    g.moveTo(x, jy2);
    g.lineTo(x + pw, jy2);
  }
  g.stroke();
  g.fillStyle = "rgba(20,18,26,0.8)";
  g.beginPath();
  g.moveTo(x + 0.037, jy + 0.03);
  g.arc(x + 0.03, jy + 0.03, 0.007, 0, 6.283);
  g.moveTo(x + pw - 0.023, jy + 0.03);
  g.arc(x + pw - 0.03, jy + 0.03, 0.007, 0, 6.283);
  g.fill();
}
g.strokeStyle = "rgba(8,6,12,0.85)";
g.lineWidth = 0.011;
g.beginPath();
for (var i = -36; i <= 36; i++) {
  g.moveTo(i * pw, -1.5);
  g.lineTo(i * pw, 1.5);
}
g.stroke();
g.fillStyle = "rgba(8,6,12,0.5)";
g.fillRect(-6, -1.5, 5.35, 0.06);
g.fillRect(0.65, -1.5, 5.35, 0.06);
var L = 0.25 + 1.6 * dop;
g.save();
g.beginPath();
g.moveTo(-0.66, -1.5);
g.lineTo(0.66, -1.5);
g.lineTo(0.66 + 0.35 * L, -1.5 + L);
g.lineTo(-0.66 - 0.25 * L, -1.5 + L);
g.closePath();
g.clip();
var sg = g.createLinearGradient(0, -1.5, 0, -1.5 + L);
sg.addColorStop(0, "rgba(130,145,205," + (0.3 * Math.min(1, dop * 1.5 + 0.15)).toFixed(3) + ")");
sg.addColorStop(1, "rgba(130,145,205,0)");
g.globalCompositeOperation = "lighter";
g.fillStyle = sg;
g.fillRect(-3, -1.5, 6, L);
g.restore();
g.save();
g.globalCompositeOperation = "lighter";
var wp = g.createRadialGradient(1.15, -1.45, 0, 1.15, -1.45, 2.6);
wp.addColorStop(0, "rgba(235,150,90," + (0.24 * gl).toFixed(3) + ")");
wp.addColorStop(0.5, "rgba(200,110,70," + (0.08 * gl).toFixed(3) + ")");
wp.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = wp;
g.fillRect(-2, -1.5, 7, 3);
g.restore();
for (var i = 0; i < 40; i++) {
  var sx = (e.rnd() - 0.5) * 1.4,
    sy = -1.5 + Math.pow(e.rnd(), 2) * 0.9,
    sr = 0.004 + e.rnd() * 0.01,
    sa = e.rnd();
  g.fillStyle = "rgba(214,220,236," + ((0.25 + 0.5 * sa) * dop).toFixed(3) + ")";
  g.beginPath();
  g.arc(sx, sy, sr, 0, 6.283);
  g.fill();
}
var dg = g.createLinearGradient(-6, 0, 6, 0);
dg.addColorStop(0, "rgba(10,9,16,0.75)");
dg.addColorStop(0.3, "rgba(10,9,16,0.1)");
dg.addColorStop(0.5, "rgba(10,9,16,0)");
dg.addColorStop(0.7, "rgba(10,9,16,0.1)");
dg.addColorStop(1, "rgba(10,9,16,0.75)");
g.fillStyle = dg;
g.fillRect(-6, -1.5, 12, 3);
var ng = g.createLinearGradient(0, -1.5, 0, 1.5);
ng.addColorStop(0, "rgba(10,9,16,0)");
ng.addColorStop(0.5, "rgba(10,9,16,0.2)");
ng.addColorStop(1, "rgba(10,9,16,0.6)");
g.fillStyle = ng;
g.fillRect(-6, -1.5, 12, 3);
