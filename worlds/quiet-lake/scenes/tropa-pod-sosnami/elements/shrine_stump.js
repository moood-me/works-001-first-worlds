var t = e.t,
  st = e.state,
  lf = st.light_fade || 0,
  sl = 1 - lf,
  rm = Math.min(1.2, (st.ribbons_move == null ? 0.25 : st.ribbons_move) + (st.gust || 0) * 0.6),
  S = 509;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var X = 2.0,
  i;
g.save();
g.translate(X, 0);
g.fillStyle = "rgba(12,8,14,0.5)";
g.beginPath();
g.ellipse(0.15, 0.02, 0.65, 0.08, 0, 0, 6.283);
g.fill();
g.fillStyle = "#22171f";
g.beginPath();
g.moveTo(-0.52, 0.04);
g.quadraticCurveTo(-0.33, -0.04, -0.29, -0.26);
g.lineTo(0.28, -0.28);
g.quadraticCurveTo(0.34, -0.04, 0.58, 0.05);
g.closePath();
g.fill();
g.fillStyle = "#2a1d24";
g.beginPath();
g.moveTo(-0.29, -0.05);
g.lineTo(-0.27, -0.72);
g.lineTo(0.27, -0.62);
g.lineTo(0.29, -0.05);
g.closePath();
g.fill();
g.strokeStyle = "#19111a";
g.lineWidth = 0.012;
for (i = 0; i < 9; i++) {
  var bx = -0.24 + i * 0.06 + (R() - 0.5) * 0.02,
    bj = (R() - 0.5) * 0.03;
  g.beginPath();
  g.moveTo(bx, -0.06);
  g.lineTo(bx + bj, -0.68 + (bx + 0.27) * 0.18);
  g.stroke();
}
g.save();
g.translate(0, -0.67);
g.rotate(0.18);
g.fillStyle = "#5a4038";
g.beginPath();
g.ellipse(0, 0, 0.275, 0.06, 0, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(40,28,32,0.7)";
g.lineWidth = 0.006;
for (var r = 1; r < 5; r++) {
  g.beginPath();
  g.ellipse(0.02, 0, 0.055 * r, 0.012 * r, 0, 0, 6.283);
  g.stroke();
}
g.restore();
if (sl > 0.02) {
  g.strokeStyle = "rgba(255,170,110," + (0.5 * sl).toFixed(3) + ")";
  g.lineWidth = e.px * 1.5;
  g.beginPath();
  g.moveTo(-0.29, -0.06);
  g.lineTo(-0.27, -0.72);
  g.lineTo(-0.05, -0.71);
  g.stroke();
}
function rb(x, y, len, wd, col, ph) {
  g.strokeStyle = col;
  g.lineWidth = wd;
  g.lineCap = "butt";
  g.lineJoin = "round";
  g.beginPath();
  g.moveTo(x, y);
  var px = x,
    py = y,
    n = 12,
    dl = len / n;
  for (var j = 1; j <= n; j++) {
    var s = j / n,
      th =
        rm * (0.55 + 0.5 * s) +
        (0.015 + rm * 0.35) * s * Math.sin(t * (0.9 + rm * 1.8) + ph - s * 4) +
        0.12 * rm * Math.sin(t * 0.37 + ph * 2);
    px += Math.sin(th) * dl;
    py += Math.cos(th) * dl;
    g.lineTo(px, py);
  }
  g.stroke();
}
function fea(x, y, l, a, c) {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(0, -l);
  g.quadraticCurveTo(l * 0.22, -l * 0.5, 0.006, 0);
  g.quadraticCurveTo(-l * 0.16, -l * 0.5, 0, -l);
  g.fill();
  g.restore();
}
g.strokeStyle = "#7e3430";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.285, -0.42);
g.quadraticCurveTo(0, -0.38, 0.285, -0.4);
g.stroke();
rb(0.27, -0.4, 0.32, 0.03, "#7e3430", 2.2);
rb(0.25, -0.41, 0.26, 0.022, "#b9ac9e", 0.6);
fea(0.22, -0.42, 0.16, 0.5, "#cdbfb8");
g.fillStyle = "#2e2026";
g.fillRect(-0.12, -0.95, 0.24, 0.27);
g.fillStyle = "#1e1419";
g.fillRect(-0.13, -0.95, 0.025, 0.3);
g.fillRect(0.105, -0.95, 0.025, 0.29);
g.beginPath();
g.moveTo(-0.19, -0.92);
g.lineTo(0, -1.05);
g.lineTo(0.19, -0.92);
g.lineTo(0.17, -0.9);
g.lineTo(0, -1.01);
g.lineTo(-0.17, -0.9);
g.closePath();
g.fill();
g.fillStyle = "#a49490";
g.beginPath();
g.ellipse(0, -0.715, 0.05, 0.035, 0, 0, 6.283);
g.fill();
fea(-0.07, -0.69, 0.15, -0.2, "#d6cac4");
fea(0, -0.7, 0.18, 0.05, "#cfc3bd");
fea(0.07, -0.69, 0.14, 0.25, "#3a2c34");
var rx0 = -0.2,
  ry0 = -0.7,
  cxr = -0.21,
  cyr = -1.2,
  rx1 = -0.28 + Math.sin(t * 0.5) * 0.01 * rm,
  ry1 = -1.62;
g.strokeStyle = "#1c1318";
g.lineWidth = 0.022;
g.lineCap = "round";
g.beginPath();
g.moveTo(rx0, ry0);
g.quadraticCurveTo(cxr, cyr, rx1, ry1);
g.stroke();
function rp(u) {
  var a0 = (1 - u) * (1 - u),
    a1 = 2 * (1 - u) * u,
    a2 = u * u;
  return [a0 * rx0 + a1 * cxr + a2 * rx1, a0 * ry0 + a1 * cyr + a2 * ry1];
}
var RB = [
  [0.92, 0.5, "#8e3b35", 0.035, 0],
  [0.85, 0.62, "#c9bcae", 0.028, 1.7],
  [0.74, 0.42, "#9a7a48", 0.03, 3.1],
  [0.62, 0.5, "#7d7890", 0.025, 4.4],
  [0.97, 0.35, "#c9bcae", 0.02, 5.3],
];
for (i = 0; i < RB.length; i++) {
  var q = rp(RB[i][0]);
  rb(q[0], q[1], RB[i][1], RB[i][3], RB[i][2], RB[i][4]);
  g.fillStyle = "#1c1318";
  g.beginPath();
  g.arc(q[0], q[1], 0.018, 0, 6.283);
  g.fill();
}
var bp = rp(0.5),
  bs = Math.sin(t * (0.6 + rm * 2)) * 0.08 * rm;
g.strokeStyle = "#1c1318";
g.lineWidth = 0.005;
g.beginPath();
g.moveTo(bp[0], bp[1]);
var bxx = bp[0] + Math.sin(bs) * 0.06,
  byy = bp[1] + Math.cos(bs) * 0.06;
g.lineTo(bxx, byy);
g.stroke();
g.fillStyle = "#4a3a26";
g.beginPath();
g.moveTo(bxx - 0.012, byy);
g.lineTo(bxx + 0.012, byy);
g.lineTo(bxx + 0.022, byy + 0.035);
g.lineTo(bxx - 0.022, byy + 0.035);
g.closePath();
g.fill();
g.restore();
if (sl > 0.05) e.light(X + bxx - 0.01, byy + 0.02, 0.06, "#ffcf90", 0.25 * sl * (0.6 + 0.4 * Math.sin(t * 0.7)));
