var t = e.t,
  D = 6.2,
  S = 53;
var st = e.state || {},
  s = Math.max(0, Math.min(1, st.sunset || 0)),
  m = Math.max(0, Math.min(1, st.morning || 0));
function P(h) {
  var n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C(a, b, c, al) {
  var A = P(a),
    B = P(b),
    D = P(c),
    o = [];
  for (var i = 0; i < 3; i++) {
    var v = A[i] + (B[i] - A[i]) * s;
    o.push(Math.round(v + (D[i] - v) * m));
  }
  return al == null ? "rgb(" + o.join(",") + ")" : "rgba(" + o.join(",") + "," + Math.max(0, al).toFixed(3) + ")";
}
var sw = (1 - m) * (1 - 0.55 * s);
var sh = Math.max(-4, Math.min(4, st.benchShift || 0)),
  wk = Math.max(0, Math.min(1, st.benchWalk || 0));
var g0 = Math.min(1, wk / 0.35),
  grow = g0 * g0 * (3 - 2 * g0),
  wp = Math.max(0, (wk - 0.35) / 0.65),
  wd = 7.5 * wp,
  lift = 0.3 * grow,
  bob = wd > 0 ? 0.025 * Math.abs(Math.sin(wd * Math.PI * 2)) : 0,
  yb = lift + bob + 0.008 * grow * Math.sin(t * 1.1),
  ax = -3.2 + sh - wd;
function W(x, z, h) {
  var d = D + z;
  return [((ax + x) * D) / d + 3.2, ((1.7 - h) * D) / d - 1.7];
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var i = 1; i < a.length; i++) g.lineTo(a[i][0], a[i][1]);
  g.closePath();
}
function line(p, q) {
  g.beginPath();
  g.moveTo(p[0], p[1]);
  g.lineTo(q[0], q[1]);
  g.stroke();
}
var BL = 0.85,
  cWd = C("#2e2226", "#171016", "#5a5256"),
  cTp = C("#5e4238", "#2a1e22", "#8a8288"),
  cLg = C("#221a1e", "#120c10", "#4a4448"),
  cDk = C("#140e12", "#0a070a", "#3a3638"),
  rim = "rgba(255,192,138," + (0.5 * sw).toFixed(3) + ")";
var L = 1.2 + 1.6 * s,
  dx = -0.13 * L,
  sa = 0.4 * (1 - 0.5 * s) * (1 - 0.7 * m) * (1 - 0.4 * grow),
  n0 = W(0, 0, 0),
  n1 = W(dx, -0.25 - L, 0),
  sg = g.createLinearGradient(n0[0], n0[1], n1[0], n1[1]);
sg.addColorStop(0, C("#24161e", "#140c14", "#4e4856", sa));
sg.addColorStop(1, C("#24161e", "#140c14", "#4e4856", 0));
g.fillStyle = sg;
poly([W(-BL, 0.22, 0), W(BL, 0.22, 0), W(BL + dx, -0.25 - L, 0), W(-BL + dx, -0.25 - L, 0)]);
g.fill();
function leg(lx, lz, pk) {
  var hx = lx * 0.72,
    hz = lz * 0.18,
    H = W(hx, hz, yb + 0.42);
  var p = (((wd / 0.5 + pk) % 1) + 1) % 1,
    amp = Math.min(1, wd / 0.3),
    r = 0,
    fh = 0;
  if (p < 0.7) {
    r = -0.175 + 0.35 * (p / 0.7);
  } else {
    var q = (p - 0.7) / 0.3;
    r = 0.175 - 0.35 * q;
    fh = 0.1 * Math.sin(Math.PI * q);
  }
  r *= amp;
  fh *= amp;
  var fx = hx + lx * 0.28 * grow + r,
    fz = hz + lz * 0.22 * grow,
    F = W(fx, fz, fh);
  var tw = 0.01 * grow * Math.sin(t * 1.3 + lx * 2 + lz * 3),
    K = W((hx + fx) / 2 + lx * 0.14 * grow, (hz + fz) / 2 + lz * 0.06 * grow, (yb + 0.42 + fh) / 2 + 0.2 * grow + tw);
  g.strokeStyle = cLg;
  g.lineWidth = 0.06 - 0.015 * grow;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(H[0], H[1]);
  g.lineTo(K[0], K[1]);
  g.lineTo(F[0], F[1]);
  g.stroke();
  if (grow > 0.05) {
    g.strokeStyle = rim;
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(H[0] + 0.02, H[1]);
    g.lineTo(K[0] + 0.02, K[1]);
    g.stroke();
  }
  g.lineCap = "butt";
}
leg(-1, 1, 0);
leg(1, 1, 0.5);
var sl = [
  [-0.2, -0.08],
  [-0.06, 0.06],
  [0.08, 0.2],
];
for (var i = sl.length - 1; i >= 0; i--) {
  var z0 = sl[i][0],
    z1 = sl[i][1];
  poly([W(-BL, z0, yb + 0.45), W(BL, z0, yb + 0.45), W(BL, z1, yb + 0.45), W(-BL, z1, yb + 0.45)]);
  g.fillStyle = cTp;
  g.fill();
  poly([W(-BL, z0, yb + 0.41), W(BL, z0, yb + 0.41), W(BL, z0, yb + 0.45), W(-BL, z0, yb + 0.45)]);
  g.fillStyle = cWd;
  g.fill();
  poly([W(BL, z0, yb + 0.41), W(BL, z1, yb + 0.41), W(BL, z1, yb + 0.45), W(BL, z0, yb + 0.45)]);
  g.fill();
  g.strokeStyle = rim;
  g.lineWidth = e.px;
  line(W(-BL, z1, yb + 0.45), W(BL, z1, yb + 0.45));
}
leg(-1, -1, 0.5);
leg(1, -1, 0);
function zb(h) {
  return -0.22 - ((h - 0.45) / 0.45) * 0.06;
}
var bd = [
  [0.56, 0.68],
  [0.74, 0.86],
];
for (var b = 0; b < 2; b++) {
  var h0 = bd[b][0],
    h1 = bd[b][1],
    y0 = zb(h0),
    y1 = zb(h1);
  poly([
    W(-BL, y0 - 0.035, yb + h0),
    W(BL, y0 - 0.035, yb + h0),
    W(BL, y1 - 0.035, yb + h1),
    W(-BL, y1 - 0.035, yb + h1),
  ]);
  g.fillStyle = cWd;
  g.fill();
  g.globalAlpha = 0.2;
  g.strokeStyle = cDk;
  g.lineWidth = e.px;
  for (var j = 1; j < 3; j++) {
    var hj = h0 + ((h1 - h0) * j) / 3;
    line(W(-BL, zb(hj) - 0.035, yb + hj), W(BL, zb(hj) - 0.035, yb + hj));
  }
  g.globalAlpha = 1;
  poly([W(-BL, y1 - 0.035, yb + h1), W(BL, y1 - 0.035, yb + h1), W(BL, y1, yb + h1), W(-BL, y1, yb + h1)]);
  g.fillStyle = cTp;
  g.fill();
  poly([W(BL, y0 - 0.035, yb + h0), W(BL, y0, yb + h0), W(BL, y1, yb + h1), W(BL, y1 - 0.035, yb + h1)]);
  g.fill();
  g.strokeStyle = rim;
  g.lineWidth = e.px * 1.2;
  line(W(-BL, y1, yb + h1), W(BL, y1, yb + h1));
}
g.strokeStyle = cLg;
g.lineWidth = 0.055;
for (var k = -1; k <= 1; k += 2) {
  line(W(k * 0.72, -0.25, yb + 0.42), W(k * 0.72, -0.33, yb + 0.9));
}
g.strokeStyle = rim;
g.lineWidth = e.px;
line(W(0.72 + 0.03, -0.25, yb + 0.45), W(0.72 + 0.03, -0.33, yb + 0.9));
