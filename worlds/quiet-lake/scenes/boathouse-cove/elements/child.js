var t = e.t,
  st = e.state || {},
  p = st.child_position == null ? 0 : st.child_position;
if (p <= 0.001) return;
var L = st.light_level == null ? 0.7 : st.light_level,
  pose = st.child_pose == "sit" && (st.bench_legs || 0) > 0.4 ? "stand" : st.child_pose || "stand",
  arr = p >= 0.999,
  mov = !!st.child_walking && !arr;
var C = "#0f1322",
  SC = "#7a2a30",
  RIM = "rgba(180,196,236," + (0.45 * L).toFixed(3) + ")";
var X;
if (arr && pose == "sit") X = 0.45;
else if (arr && pose == "crouch") X = 0.62;
else X = 1.15 + (1 - p) * 7.5;
var br = Math.sin(t * 1.4) * 0.005 + Math.sin(t * 0.53 + 1) * 0.003,
  fl = Math.sin(t * 0.9) * 0.02 + Math.sin(t * 2.3 + 1) * 0.01;
g.fillStyle = "rgba(3,4,9,0.5)";
g.beginPath();
g.ellipse(X - 0.18, 0.03, 0.34, 0.05, 0, 0, 6.283);
g.fill();
g.save();
g.translate(X, 0);
g.scale(-1, 1);
function ln(x1, y1, x2, y2, w) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.lineTo(x2, y2);
  g.stroke();
}
function shoe(x, y) {
  g.beginPath();
  g.ellipse(x + 0.025, y, 0.055, 0.025, 0, 0, 6.283);
  g.fill();
}
g.strokeStyle = C;
g.fillStyle = C;
g.lineCap = "round";
g.lineJoin = "round";
var hx,
  hy,
  bob = 0;
if (arr && pose == "sit") {
  var a1 = Math.sin(t * 1.1) * 0.14 + Math.sin(t * 0.43) * 0.05,
    a2 = Math.sin(t * 1.1 + 2.2) * 0.14 + Math.sin(t * 0.61 + 1) * 0.05;
  ln(0, -0.5, 0.28, -0.5, 0.085);
  var f1x = 0.28 + Math.sin(a1) * 0.32,
    f1y = -0.5 + Math.cos(a1) * 0.32,
    f2x = 0.3 + Math.sin(a2) * 0.32,
    f2y = -0.5 + Math.cos(a2) * 0.32;
  ln(0.28, -0.5, f1x, f1y, 0.065);
  ln(0.3, -0.5, f2x, f2y, 0.065);
  shoe(f1x, f1y);
  shoe(f2x, f2y);
  g.beginPath();
  g.moveTo(-0.11, -0.46);
  g.bezierCurveTo(-0.13, -0.62, -0.09, -0.8, 0.0, -0.88 - br);
  g.lineTo(0.12, -0.87 - br);
  g.bezierCurveTo(0.16, -0.75, 0.16, -0.6, 0.13, -0.47);
  g.closePath();
  g.fill();
  ln(0.08, -0.83 - br, 0.26, -0.56, 0.05);
  hx = 0.12;
  hy = -0.98 - br;
} else if (arr && pose == "crouch") {
  shoe(-0.02, -0.01);
  shoe(0.1, -0.01);
  ln(0.0, -0.02, 0.17, -0.33, 0.07);
  ln(0.12, -0.02, 0.2, -0.3, 0.065);
  ln(0.18, -0.32, -0.08, -0.3, 0.09);
  g.beginPath();
  g.moveTo(-0.15, -0.24);
  g.bezierCurveTo(-0.17, -0.42, -0.12, -0.58, -0.02, -0.64 - br);
  g.lineTo(0.1, -0.62 - br);
  g.bezierCurveTo(0.14, -0.5, 0.13, -0.4, 0.1, -0.3);
  g.closePath();
  g.fill();
  var rc = Math.sin(t * 0.7) * 0.02 + Math.sin(t * 0.29) * 0.01;
  ln(0.06, -0.58 - br, 0.3 + rc, -0.16, 0.045);
  hx = 0.17;
  hy = -0.73 - br;
} else {
  var ws = mov ? Math.sin(t * 5.2) : 0;
  bob = mov ? Math.abs(Math.cos(t * 5.2)) * 0.025 : 0;
  var hip = -0.55 - bob,
    fa = 0.2 * ws,
    fb = -0.2 * ws;
  ln(0, hip, fa, -0.03, 0.075);
  ln(0, hip, fb, -0.03, 0.075);
  shoe(fa, -0.025);
  shoe(fb, -0.025);
  ln(-0.02, -0.88 - bob, 0.03 + 0.16 * ws, -0.6 - bob, 0.05);
  g.beginPath();
  g.moveTo(-0.13, hip + 0.1);
  g.bezierCurveTo(-0.15, -0.75 - bob, -0.12, -0.9 - bob, -0.04, -0.94 - bob - br);
  g.lineTo(0.08, -0.94 - bob - br);
  g.bezierCurveTo(0.13, -0.88 - bob, 0.14, -0.7 - bob, 0.15, hip + 0.1);
  g.closePath();
  g.fill();
  ln(0.0, -0.88 - bob, -0.03 - 0.16 * ws, -0.6 - bob, 0.05);
  g.strokeStyle = RIM;
  g.lineWidth = e.px * 1.2;
  g.beginPath();
  g.moveTo(-0.13, hip + 0.1);
  g.bezierCurveTo(-0.15, -0.75 - bob, -0.12, -0.9 - bob, -0.04, -0.94 - bob - br);
  g.stroke();
  g.strokeStyle = C;
  hx = mov ? 0.04 : 0.07;
  hy = -1.05 - bob - br + (mov ? 0 : 0.012) + Math.sin(t * 0.21) * 0.006;
}
g.fillStyle = SC;
g.beginPath();
g.ellipse(hx - 0.02, hy + 0.11, 0.085, 0.032, 0, 0, 6.283);
g.fill();
var tx = hx - 0.17 + fl - (mov ? 0.07 : 0),
  ty = hy + (mov ? 0.26 : 0.32);
g.beginPath();
g.moveTo(hx - 0.08, hy + 0.1);
g.quadraticCurveTo(hx - 0.13, hy + 0.2, tx, ty);
g.lineTo(tx + 0.035, ty + 0.005);
g.quadraticCurveTo(hx - 0.09, hy + 0.2, hx - 0.04, hy + 0.12);
g.closePath();
g.fill();
g.fillStyle = C;
g.beginPath();
g.arc(hx, hy, 0.095, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(hx - 0.07, hy - 0.06);
g.quadraticCurveTo(hx - 0.13, hy - 0.01, hx - 0.1, hy + 0.04);
g.lineTo(hx - 0.06, hy);
g.closePath();
g.fill();
g.strokeStyle = RIM;
g.lineWidth = e.px * 1.2;
g.beginPath();
g.arc(hx, hy, 0.095, Math.PI * 0.75, Math.PI * 1.45);
g.stroke();
g.restore();
e.at(X - hx, hy - 0.12);
