var r = e.state.raise || 0,
  d = e.state.dawn || 0,
  t = e.t,
  k = 1 - 0.85 * d;
var c = "#1a1d2d";
g.fillStyle = c;
var P = [26, 86, 146, 206, 266, 326, 386, 446];
for (var s = -1; s <= 1; s += 2) {
  for (var i = 0; i < P.length - 1; i++) {
    var a = P[i] * s,
      b = P[i + 1] * s,
      x0 = Math.min(a, b),
      x1 = Math.max(a, b),
      cx = (x0 + x1) / 2,
      rx = (x1 - x0) / 2 - 3;
    g.beginPath();
    g.rect(x0 - 0.3, -14.5, x1 - x0 + 0.6, 14.6);
    g.moveTo(x0 + 3, 0.1);
    g.lineTo(x0 + 3, -3);
    g.ellipse(cx, -3, rx, 8.5, 0, Math.PI, 0, false);
    g.lineTo(x1 - 3, 0.1);
    g.closePath();
    g.fill("evenodd");
  }
}
g.fillRect(-430, -15.8, 404, 0.35);
g.fillRect(26, -15.8, 404, 0.35);
for (var q = -1; q <= 1; q += 2) {
  var tx = q * 26;
  g.fillRect(tx - 3, -22, 6, 22);
  g.beginPath();
  g.moveTo(tx - 3.4, -22);
  g.lineTo(tx, -26.5);
  g.lineTo(tx + 3.4, -22);
  g.closePath();
  g.fill();
}
function leaf(px, dir) {
  g.save();
  g.translate(px, -12.5);
  g.rotate(-dir * r * 1.2);
  g.fillStyle = c;
  var x0 = dir > 0 ? 0 : -23;
  g.fillRect(x0, -2, 23, 2.4);
  g.fillRect(x0, -3.3, 23, 0.3);
  for (var u = 0; u <= 23; u += 2.3) {
    g.fillRect(x0 + u, -3.3, 0.15, 1.3);
  }
  var lg = g.createRadialGradient(dir * 11.5, -4.2, 0, dir * 11.5, -4.2, 2.2);
  lg.addColorStop(0, "rgba(255,214,160," + 0.9 * k + ")");
  lg.addColorStop(1, "rgba(255,214,160,0)");
  g.fillStyle = lg;
  g.fillRect(dir * 11.5 - 2.2, -6.4, 4.4, 4.4);
  if (r > 0.02) {
    g.fillStyle = "rgba(255,90,70," + (0.55 + 0.45 * Math.sin(t * 3)) + ")";
    g.beginPath();
    g.arc(dir * 22, -2.6, 0.6, 0, 6.283);
    g.fill();
  }
  g.restore();
}
leaf(-23, 1);
leaf(23, -1);
for (var lx = -420; lx <= 420; lx += 20) {
  if (Math.abs(lx) < 30) continue;
  g.fillStyle = c;
  g.fillRect(lx - 0.15, -19.3, 0.3, 4);
  var gg = g.createRadialGradient(lx, -19.6, 0, lx, -19.6, 2.4);
  gg.addColorStop(0, "rgba(255,214,160," + 0.9 * k + ")");
  gg.addColorStop(0.25, "rgba(255,200,140," + 0.35 * k + ")");
  gg.addColorStop(1, "rgba(255,200,140,0)");
  g.fillStyle = gg;
  g.fillRect(lx - 2.4, -22, 4.8, 4.8);
}
for (var q2 = -1; q2 <= 1; q2 += 2) {
  var gl = g.createRadialGradient(q2 * 26, -23, 0, q2 * 26, -23, 1.6);
  gl.addColorStop(0, "rgba(255,220,170," + 0.8 * k + ")");
  gl.addColorStop(1, "rgba(255,220,170,0)");
  g.fillStyle = gl;
  g.fillRect(q2 * 26 - 1.6, -24.6, 3.2, 3.2);
}
for (var n = 0; n < 4; n++) {
  var dirc = n % 2 ? 1 : -1,
    cx2 = ((((t * (9 + n * 2) * dirc + n * 230) % 860) + 860) % 860) - 430;
  if (Math.abs(cx2) < 26 && r > 0.03) continue;
  g.fillStyle = n % 2 ? "rgba(255,240,220,0.9)" : "rgba(255,120,90,0.8)";
  g.fillRect(cx2, -15.2, 1.2, 0.6);
}
