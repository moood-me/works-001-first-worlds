var t = e.t,
  h = 0.38,
  CX = -1.155,
  Dc = 9.533;
function W(s, o, H) {
  var X = -4.1 + 0.288 * s + 0.958 * o,
    z = 1.3 + 0.958 * s - 0.288 * o;
  return [(X * Dc) / z, ((1.7 - H) * Dc) / z - (1.7 - h)];
}
var A = W(9.08, 0.7, 0),
  B = W(6, 0.7, 0),
  C = W(3, 0.7, 0);
function clipR() {
  g.beginPath();
  g.moveTo(A[0], -1);
  g.lineTo(A[0], A[1]);
  g.lineTo(B[0], B[1]);
  g.lineTo(C[0], C[1]);
  g.lineTo(3, C[1]);
  g.lineTo(3, -1);
  g.closePath();
  g.clip();
}
var rp = (t / 9) % 1,
  dip = Math.pow(Math.max(0, Math.cos(rp * 6.283)), 10) * 0.05,
  br = Math.sin(t * 1.3) * 0.004 + Math.sin(t * 0.47 + 1.3) * 0.002,
  nod = Math.sin(t * 0.19) * 0.025 + Math.sin(t * 0.071 + 2) * 0.015,
  aA = 0.18 + 0.2 * Math.sin(t * 0.83) + 0.06 * Math.sin(t * 0.31 + 1),
  aB = 0.12 + 0.18 * Math.sin(t * 0.71 + 2.1) + 0.05 * Math.sin(t * 0.27 + 0.4),
  fl = 0.012 * Math.sin(t * 0.9) + 0.007 * Math.sin(t * 2.1 + 1) + 0.004 * Math.sin(t * 3.7);
function leg(kx, ky, ang, len, col, rim) {
  var fx = kx + Math.sin(ang) * len,
    fy = ky + Math.cos(ang) * len;
  g.strokeStyle = col;
  g.fillStyle = col;
  g.lineCap = "round";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(kx, ky);
  g.lineTo(fx, fy);
  g.stroke();
  g.beginPath();
  g.ellipse(fx + 0.02, fy + 0.012, 0.042, 0.019, ang * 0.5, 0, 6.283);
  g.fill();
  if (rim) {
    var ox = Math.cos(ang) * 0.026,
      oy = -Math.sin(ang) * 0.026;
    g.strokeStyle = "rgba(255,178,115,0.5)";
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(kx + ox, ky + oy);
    g.lineTo(fx + ox, fy + oy);
    g.stroke();
  }
}
function fig(col, scol, rim) {
  leg(0.25, -0.015, aA, 0.3, col, false);
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(-0.09, 0.005);
  g.bezierCurveTo(-0.11, -0.13, -0.085, -0.27, -0.035, -0.345 - br);
  g.bezierCurveTo(-0.005, -0.385 - br, 0.06, -0.385 - br, 0.085, -0.34 - br);
  g.bezierCurveTo(0.105, -0.25, 0.1, -0.13, 0.085, -0.066);
  g.lineTo(0.262, -0.064);
  g.bezierCurveTo(0.296, -0.06, 0.306, -0.02, 0.285, 0.004);
  g.lineTo(-0.02, 0.012);
  g.closePath();
  g.fill();
  leg(0.268, -0.01, aB, 0.3 + dip, col, rim);
  g.strokeStyle = col;
  g.lineWidth = 0.04;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(0.035, -0.325 - br);
  g.bezierCurveTo(0.085, -0.24, 0.14, -0.13, 0.19, -0.075);
  g.stroke();
  g.save();
  g.translate(0.065, -0.395 - br);
  g.rotate(nod);
  g.fillStyle = col;
  g.fillRect(-0.02, -0.02, 0.04, 0.035);
  g.beginPath();
  g.arc(0.012, -0.068, 0.076, 0, 6.283);
  g.fill();
  g.beginPath();
  g.moveTo(-0.05, -0.1);
  g.quadraticCurveTo(-0.088, -0.06, -0.062, -0.028);
  g.lineTo(-0.04, -0.06);
  g.closePath();
  g.fill();
  if (rim) {
    g.save();
    g.beginPath();
    g.arc(0.012, -0.068, 0.076, 0, 6.283);
    g.clip();
    g.fillStyle = "rgba(255,176,112,0.85)";
    g.fillRect(-0.1, -0.16, 0.2, 0.2);
    g.fillStyle = col;
    g.beginPath();
    g.arc(0.0, -0.061, 0.076, 0, 6.283);
    g.fill();
    g.restore();
  }
  g.restore();
  g.fillStyle = scol;
  g.beginPath();
  g.moveTo(-0.035, -0.392 - br);
  g.quadraticCurveTo(0.03, -0.37 - br, 0.092, -0.384 - br);
  g.lineTo(0.088, -0.35 - br);
  g.quadraticCurveTo(0.03, -0.332 - br, -0.04, -0.356 - br);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(-0.03, -0.385 - br);
  g.bezierCurveTo(-0.075, -0.34, -0.08 + fl * 0.5, -0.28, -0.092 + fl, -0.215);
  g.lineTo(-0.066 + fl, -0.21);
  g.bezierCurveTo(-0.058 + fl * 0.5, -0.28, -0.045, -0.33, -0.008, -0.36 - br);
  g.closePath();
  g.fill();
  if (rim) {
    g.strokeStyle = "rgba(255,178,115,0.55)";
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(0.1, -0.07);
    g.lineTo(0.262, -0.068);
    g.stroke();
    g.fillStyle = "rgba(235,120,95,0.8)";
    g.fillRect(0.075, -0.384 - br, 0.016, 0.012);
  }
}
g.save();
clipR();
for (var k = 0; k < 8; k++) {
  var y0 = h + k * 0.12;
  g.save();
  g.beginPath();
  g.rect(-3, y0, 4, 0.121);
  g.clip();
  var jx = Math.sin(t * 0.9 + k * 1.3) * 0.012 * (1 + k * 0.5);
  g.translate(CX + jx, 2 * h);
  g.scale(1, -1);
  g.globalAlpha = 0.3 * (1 - k * 0.08);
  fig("#1d1520", "#6a2a2c", false);
  g.restore();
}
g.globalAlpha = 1;
var rx0 = CX + 0.32;
for (var n = 0; n < 3; n++) {
  var ag = rp - n * 0.1;
  if (ag < 0) ag += 1;
  var rr = 0.03 + ag * 0.45,
    al = Math.pow(1 - ag, 2) * 0.42;
  g.lineWidth = e.px * 1.2;
  g.strokeStyle = "rgba(255,214,172," + al.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(rx0, h + 0.005, rr, rr * 0.18, 0, 0, 6.283);
  g.stroke();
  g.strokeStyle = "rgba(30,20,36," + (al * 0.6).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(rx0, h + 0.005 + rr * 0.03, rr * 0.96, rr * 0.17, 0, 0, 6.283);
  g.stroke();
}
g.restore();
g.save();
g.translate(CX, 0);
fig("#1d1520", "#9c2e2a", true);
g.restore();
