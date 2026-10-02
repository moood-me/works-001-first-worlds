var S = e.state || {},
  L = S.lamp == null ? 0.75 : S.lamp;
g.lineCap = "round";
var C = "#100f17";
function br(x0, y0, a, l, w, d) {
  if (d > 7 || w < 0.025) return;
  var x1 = x0 + Math.cos(a) * l,
    y1 = y0 + Math.sin(a) * l;
  g.strokeStyle = C;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, y0);
  g.quadraticCurveTo((x0 + x1) / 2 + (e.rnd() - 0.5) * l * 0.2, (y0 + y1) / 2, x1, y1);
  g.stroke();
  br(x1, y1, a - 0.25 - e.rnd() * 0.35, l * 0.74, w * 0.66, d + 1);
  br(x1, y1, a + 0.2 + e.rnd() * 0.35, l * 0.7, w * 0.62, d + 1);
  if (d > 3 && e.rnd() < 0.5) {
    var lx = x1 + (e.rnd() - 0.5) * 0.3,
      ly = y1 + (e.rnd() - 0.5) * 0.3;
    var nr = Math.max(0, 1 - Math.hypot(lx + 1.4, ly + 3.9) / 3.5) * L;
    g.fillStyle =
      "rgba(" +
      Math.round(110 + 110 * nr) +
      "," +
      Math.round(75 + 70 * nr) +
      "," +
      Math.round(45 + 35 * nr) +
      "," +
      (0.4 + 0.35 * nr) +
      ")";
    g.beginPath();
    g.ellipse(lx, ly, 0.09, 0.06, e.rnd() * 3, 0, Math.PI * 2);
    g.fill();
  }
}
function trunk(x, w, top) {
  g.fillStyle = C;
  g.beginPath();
  g.moveTo(x - w * 0.75, 0.05);
  g.quadraticCurveTo(x - w * 0.45, -2, x - w * 0.4, top);
  g.lineTo(x + w * 0.4, top);
  g.quadraticCurveTo(x + w * 0.45, -2, x + w * 0.75, 0.05);
  g.closePath();
  g.fill();
}
trunk(-5.3, 0.55, -6.5);
br(-5.3, -6.4, -1.75, 2.2, 0.3, 1);
br(-5.3, -3.6, -0.55, 2.6, 0.2, 1);
br(-5.25, -4.6, -0.9, 2.4, 0.18, 2);
br(-5.35, -5.2, -2.4, 2, 0.18, 2);
trunk(5.7, 0.45, -6);
br(5.7, -5.9, -1.4, 2, 0.26, 1);
br(5.7, -3.9, -2.6, 2.4, 0.17, 1);
br(5.65, -4.8, -2.2, 2.2, 0.15, 2);
g.strokeStyle = "rgba(255,180,110," + 0.14 * L + ")";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-5.3 + 0.41 - 0.02, 0);
g.quadraticCurveTo(-5.3 + 0.25 - 0.02, -2, -5.3 + 0.22 - 0.02, -6.2);
g.stroke();
g.fillStyle = "rgba(6,6,12,0.4)";
g.beginPath();
g.ellipse(-5.3, 0.02, 0.7, 0.08, 0, 0, Math.PI * 2);
g.fill();
g.beginPath();
g.ellipse(5.7, 0.02, 0.6, 0.07, 0, 0, Math.PI * 2);
g.fill();
