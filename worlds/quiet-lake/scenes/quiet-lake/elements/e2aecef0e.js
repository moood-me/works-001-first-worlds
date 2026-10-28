var t = e.t,
  S = 67;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
g.fillStyle = "#17111a";
g.beginPath();
g.moveTo(-0.7, 0.5);
g.lineTo(-0.7, 0.06);
g.bezierCurveTo(-0.4, 0.02, -0.2, -0.1, 0.2, -0.13);
g.bezierCurveTo(0.8, -0.16, 1.5, -0.12, 2.4, -0.18);
g.lineTo(2.4, 0.5);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,170,110,0.16)";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(-0.7, 0.06);
g.bezierCurveTo(-0.4, 0.02, -0.2, -0.1, 0.2, -0.13);
g.bezierCurveTo(0.8, -0.16, 1.5, -0.12, 2.4, -0.18);
g.stroke();
g.fillStyle = "#1c151d";
g.beginPath();
g.moveTo(0.28, -0.12);
g.bezierCurveTo(0.31, -0.3, 0.62, -0.33, 0.72, -0.14);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,175,115,0.3)";
g.beginPath();
g.moveTo(0.45, -0.27);
g.bezierCurveTo(0.58, -0.27, 0.68, -0.22, 0.71, -0.15);
g.stroke();
for (var i = 0; i < 24; i++) {
  var bx = -0.6 + R() * 2.8,
    inW = bx < -0.15,
    by = inW ? 0.03 : bx < 0.2 ? -0.03 - (bx + 0.15) * 0.28 : -0.13,
    hg = 0.35 + R() * 0.7,
    wd = 0.012 + R() * 0.016,
    lean = (R() - 0.35) * 0.5,
    kink = R() < 0.2,
    ph = R() * 6.283,
    f = 0.45 + R() * 0.35,
    rimOn = R() < 0.45;
  var sw = Math.sin(t * f + ph) * 0.035 + Math.sin(t * f * 2.3 + ph * 1.7) * 0.012;
  var tx = bx + (lean + sw) * hg,
    ty = by - hg,
    cx = bx + lean * hg * 0.3,
    cy = by - hg * 0.6;
  if (kink) {
    tx = bx + (lean + 0.5 + sw) * hg * 0.6;
    ty = by - hg * 0.55;
    cx = bx + lean * hg * 0.2;
    cy = by - hg * 0.9;
  }
  g.fillStyle = "#150f18";
  g.beginPath();
  g.moveTo(bx - wd / 2, by);
  g.quadraticCurveTo(cx - wd * 0.3, cy, tx, ty);
  g.quadraticCurveTo(cx + wd * 0.3, cy, bx + wd / 2, by);
  g.closePath();
  g.fill();
  if (rimOn) {
    g.strokeStyle = "rgba(255,170,110,0.22)";
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(bx + wd / 2, by);
    g.quadraticCurveTo(cx + wd * 0.3, cy, tx, ty);
    g.stroke();
  }
  if (inW) {
    var jr = Math.sin(t * 0.7 + i) * 0.01;
    g.save();
    g.translate(jr, 2 * by);
    g.scale(1, -1);
    g.globalAlpha = 0.22;
    g.beginPath();
    g.moveTo(bx - wd / 2, by);
    g.quadraticCurveTo(cx - wd * 0.3, cy, tx, ty);
    g.quadraticCurveTo(cx + wd * 0.3, cy, bx + wd / 2, by);
    g.closePath();
    g.fill();
    g.restore();
  }
}
for (var c = 0; c < 3; c++) {
  var bx2 = 0.35 + R() * 1.5,
    hh = 0.75 + R() * 0.3,
    ph3 = R() * 6.283,
    sw2 = Math.sin(t * 0.5 + ph3) * 0.025 + Math.sin(t * 1.13 + ph3) * 0.008,
    by2 = -0.13,
    tx2 = bx2 + (0.05 + sw2) * hh,
    ty2 = by2 - hh,
    qx = bx2 + 0.02,
    qy = by2 - hh * 0.5;
  g.strokeStyle = "#150f18";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(bx2, by2);
  g.quadraticCurveTo(qx, qy, tx2, ty2);
  g.stroke();
  var hx = 0.04 * bx2 + 0.32 * qx + 0.64 * tx2,
    hy = 0.04 * by2 + 0.32 * qy + 0.64 * ty2;
  g.save();
  g.translate(hx, hy);
  g.rotate(Math.atan2(tx2 - qx, qy - ty2));
  g.fillStyle = "#1a1117";
  g.beginPath();
  g.ellipse(0, 0, 0.02, 0.07, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(255,170,110,0.25)";
  g.fillRect(0.013, -0.055, e.px, 0.1);
  g.restore();
}
