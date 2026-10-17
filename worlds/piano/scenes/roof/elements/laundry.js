var t = e.t,
  w = e.state.wind == null ? 0.4 : e.state.wind;
var gw = w * (0.6 + 0.4 * Math.sin(t * 0.53) * Math.sin(t * 0.21 + 0.7)) + 0.04 * Math.sin(t * 0.9);
function ly(x) {
  return -2.02 + 0.14 * (1 - (x * x) / 5.29) + 0.015 * gw * Math.sin(t * 1.3 + x);
}
g.fillStyle = "rgba(5,5,12,0.4)";
g.beginPath();
g.ellipse(-2.3, 0, 0.25, 0.035, 0, 0, 6.283);
g.ellipse(2.3, 0, 0.25, 0.035, 0, 0, 6.283);
g.fill();
g.strokeStyle = "#1c1d2a";
g.lineCap = "round";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-2.3, 0);
g.lineTo(-2.3, -2.15);
g.moveTo(2.3, 0);
g.lineTo(2.3, -2.15);
g.moveTo(-2.5, -2.08);
g.lineTo(-2.1, -2.08);
g.moveTo(2.1, -2.08);
g.lineTo(2.5, -2.08);
g.stroke();
g.strokeStyle = "rgba(160,170,220,0.22)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(-2.32, 0);
g.lineTo(-2.32, -2.1);
g.moveTo(2.28, 0);
g.lineTo(2.28, -2.1);
g.stroke();
g.strokeStyle = "#2c2d3e";
g.lineWidth = 0.012;
g.beginPath();
for (var i = 0; i <= 46; i++) {
  var x = -2.3 + i * 0.1;
  if (i) g.lineTo(x, ly(x));
  else g.moveTo(x, ly(x));
}
g.stroke();
function cloth(xa, xb, L, col, ph) {
  var f1 = Math.sin(t * 2.1 * (0.8 + ph * 0.1) + ph),
    f2 = Math.sin(t * 1.37 + ph * 2.3);
  var dx = gw * L * 0.45 + f1 * 0.05 * w * L;
  var lift = gw * gw * L * 0.35;
  var ya = ly(xa),
    yb = ly(xb);
  g.beginPath();
  for (var i = 0; i <= 8; i++) {
    var x = xa + ((xb - xa) * i) / 8;
    if (i) g.lineTo(x, ly(x));
    else g.moveTo(x, ly(x));
  }
  var bx1 = xb + dx,
    by1 = yb + L - lift,
    bx0 = xa + dx * 0.9,
    by0 = ya + L - lift * 1.1;
  g.bezierCurveTo(xb + dx * 0.2, yb + L * 0.4, xb + dx * 0.7 + f2 * 0.03, yb + L * 0.75, bx1, by1);
  for (var j = 1; j <= 6; j++) {
    var u = j / 6;
    var xx = bx1 + (bx0 - bx1) * u,
      yy = by1 + (by0 - by1) * u + Math.sin(u * 6.283 + t * 2.4 + ph) * 0.025 * (0.3 + w);
    var cx = bx1 + (bx0 - bx1) * (u - 0.083),
      cy = yy + Math.sin(u * 9 + t * 3 + ph) * 0.03 * w;
    g.quadraticCurveTo(cx, cy, xx, yy);
  }
  g.bezierCurveTo(xa + dx * 0.7 + f1 * 0.03, ya + L * 0.75, xa + dx * 0.2, ya + L * 0.4, xa, ya);
  g.closePath();
  g.fillStyle = col;
  g.fill();
  g.save();
  g.clip();
  var gr = g.createLinearGradient(xa, 0, xb + Math.max(0.05, dx), 0);
  for (var k = 0; k <= 6; k++) {
    var s = 0.5 + 0.5 * Math.sin(k * 1.9 + t * 1.1 * w + ph + f2);
    gr.addColorStop(k / 6, "rgba(20,22,45," + (0.06 + 0.24 * s) + ")");
  }
  g.fillStyle = gr;
  g.fillRect(xa - 1, ya - 0.4, xb - xa + 3, L + 0.8);
  var vg = g.createLinearGradient(0, ya, 0, ya + L);
  vg.addColorStop(0, "rgba(205,190,230,0.16)");
  vg.addColorStop(0.7, "rgba(10,10,30,0.15)");
  vg.addColorStop(1, "rgba(220,150,140,0.1)");
  g.fillStyle = vg;
  g.fillRect(xa - 1, ya - 0.4, xb - xa + 3, L + 0.8);
  g.restore();
  g.fillStyle = "#1f2030";
  g.fillRect(xa + 0.03, ly(xa + 0.04) - 0.04, 0.022, 0.07);
  g.fillRect(xb - 0.05, ly(xb - 0.04) - 0.04, 0.022, 0.07);
}
cloth(-1.95, -0.95, 1.1, "#6f6678", 0.3);
cloth(-0.55, 0.55, 1.3, "#9a9fb8", 1.7);
cloth(0.8, 1.35, 0.8, "#626c8c", 2.9);
cloth(1.55, 2.0, 0.55, "#a8aabd", 4.1);
