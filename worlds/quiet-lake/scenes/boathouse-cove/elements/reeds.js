var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  Rp = st.ripples == null ? 0.35 : st.ripples,
  wind = 0.5 + Rp,
  S = 83;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
g.fillStyle = "rgba(20,28,50,0.85)";
g.beginPath();
g.ellipse(-0.1, 0.1, 1.6, 0.17, 0, 0, 6.283);
g.fill();
for (var j = 0; j < 6; j++) {
  var ph0 = (t * 0.07 * (0.6 + Rp) + j / 6) % 1,
    rr = 0.2 + ph0 * 1.1;
  g.strokeStyle = "rgba(160,180,225," + (Math.sin(Math.PI * ph0) * 0.18 * L).toFixed(3) + ")";
  g.lineWidth = e.px;
  g.beginPath();
  g.ellipse(-0.3 + j * 0.12 - 0.3, 0.1, rr, rr * 0.1, 0, 0, 6.283);
  g.stroke();
  j += 2;
}
for (var i = 0; i < 34; i++) {
  var bx = -1.3 + R() * 2.6,
    by = 0.02 + R() * 0.12,
    hg = 0.6 + R() * 1.1,
    wd = 0.014 + R() * 0.018,
    lean = (R() - 0.6) * 0.4,
    kink = R() < 0.18,
    ph = R() * 6.283,
    f = 0.35 + R() * 0.3,
    rimOn = R() < 0.5;
  var sw =
    (Math.sin(t * f + ph) * 0.04 + Math.sin(t * f * 2.3 + ph * 1.7) * 0.014 + Math.sin(t * 0.13 + bx) * 0.02) * wind;
  var tx = bx + (lean + sw) * hg,
    ty = by - hg,
    cx = bx + lean * hg * 0.3,
    cy = by - hg * 0.6;
  if (kink) {
    tx = bx + (lean - 0.5 + sw) * hg * 0.6;
    ty = by - hg * 0.55;
    cx = bx + lean * hg * 0.2;
    cy = by - hg * 0.9;
  }
  g.globalAlpha = 0.25;
  g.fillStyle = "#0c0f1a";
  g.save();
  g.translate(Math.sin(t * 0.7 + i) * 0.01, 2 * by);
  g.scale(1, -0.6);
  g.beginPath();
  g.moveTo(bx - wd / 2, by);
  g.quadraticCurveTo(cx - wd * 0.3, cy, tx, ty);
  g.quadraticCurveTo(cx + wd * 0.3, cy, bx + wd / 2, by);
  g.closePath();
  g.fill();
  g.restore();
  g.globalAlpha = 1;
  g.beginPath();
  g.moveTo(bx - wd / 2, by);
  g.quadraticCurveTo(cx - wd * 0.3, cy, tx, ty);
  g.quadraticCurveTo(cx + wd * 0.3, cy, bx + wd / 2, by);
  g.closePath();
  g.fill();
  if (rimOn) {
    g.strokeStyle = "rgba(175,192,235," + (0.3 * L).toFixed(3) + ")";
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(bx + wd / 2, by);
    g.quadraticCurveTo(cx + wd * 0.3, cy, tx, ty);
    g.stroke();
  }
}
for (var c = 0; c < 4; c++) {
  var bx2 = -0.9 + R() * 1.6,
    hh = 1.2 + R() * 0.45,
    ph3 = R() * 6.283,
    sw2 = (Math.sin(t * 0.45 + ph3) * 0.03 + Math.sin(t * 1.07 + ph3) * 0.01) * wind,
    by2 = 0.05,
    tx2 = bx2 + (-0.04 + sw2) * hh,
    ty2 = by2 - hh,
    qx = bx2 - 0.02,
    qy = by2 - hh * 0.5;
  g.strokeStyle = "#0c0f1a";
  g.lineWidth = 0.013;
  g.beginPath();
  g.moveTo(bx2, by2);
  g.quadraticCurveTo(qx, qy, tx2, ty2);
  g.stroke();
  var hx = 0.04 * bx2 + 0.32 * qx + 0.64 * tx2,
    hy = 0.04 * by2 + 0.32 * qy + 0.64 * ty2;
  g.save();
  g.translate(hx, hy);
  g.rotate(Math.atan2(tx2 - qx, qy - ty2));
  g.fillStyle = "#10131e";
  g.beginPath();
  g.ellipse(0, 0, 0.022, 0.075, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(180,196,236," + (0.3 * L).toFixed(3) + ")";
  g.fillRect(0.014, -0.06, e.px, 0.11);
  g.restore();
}
