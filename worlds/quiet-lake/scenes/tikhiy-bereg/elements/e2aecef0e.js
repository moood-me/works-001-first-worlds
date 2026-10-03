var t = e.t,
  S = 67;
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
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var cR = C("#1a1218", "#0c0910", "#3c3e4a"),
  rim = "rgba(255,170,110," + (0.24 * sw).toFixed(3) + ")",
  rg = Math.max(0, Math.min(1, st.rings == null ? 0.12 : st.rings)),
  cW = C("#ffd2a8", "#a86a60", "#f4f2f6");
var N = 12,
  K = 1,
  ar = [],
  i;
for (i = 0; i < N; i++) {
  ar.push({
    bx: (-0.7 + R() * 1.6) * K,
    hg: (0.45 + R() * 0.95) * K,
    wd: 0.012 + R() * 0.016,
    lean: (R() - 0.4) * 0.45,
    kink: R() < 0.18,
    ph: R() * 6.283,
    f: 0.3 + R() * 0.25,
    rim: R() < 0.5,
  });
}
function shp(o) {
  var w = Math.sin(t * o.f + o.ph) * 0.018 + Math.sin(t * o.f * 2.3 + o.ph * 1.7) * 0.006;
  var tx = o.bx + (o.lean + w) * o.hg,
    ty = -o.hg,
    cx = o.bx + o.lean * o.hg * 0.3,
    cy = -o.hg * 0.6;
  if (o.kink) {
    tx = o.bx + (o.lean + 0.5 + w) * o.hg * 0.6;
    ty = -o.hg * 0.55;
    cx = o.bx + o.lean * o.hg * 0.2;
    cy = -o.hg * 0.9;
  }
  return [tx, ty, cx, cy];
}
function pth(o, q) {
  g.beginPath();
  g.moveTo(o.bx - o.wd / 2, 0);
  g.quadraticCurveTo(q[2] - o.wd * 0.3, q[3], q[0], q[1]);
  g.quadraticCurveTo(q[2] + o.wd * 0.3, q[3], o.bx + o.wd / 2, 0);
  g.closePath();
}
g.save();
g.scale(1, -1);
g.globalAlpha = 0.2;
g.fillStyle = cR;
for (i = 0; i < N; i++) {
  g.save();
  g.translate(Math.sin(t * 0.5 + i) * 0.006, 0);
  pth(ar[i], shp(ar[i]));
  g.fill();
  g.restore();
}
g.restore();
g.globalAlpha = 1;
g.lineWidth = e.px;
for (i = 0; i < N; i += 4) {
  var o1 = ar[i],
    rr = 0.05 + 0.03 * Math.sin(t * 0.4 + i);
  g.globalAlpha = 0.12 + 0.25 * rg;
  g.strokeStyle = cW;
  g.beginPath();
  g.ellipse(o1.bx, 0.004, rr, rr * 0.2, 0, 0, 6.283);
  g.stroke();
}
g.globalAlpha = 1;
for (i = 0; i < N; i++) {
  var o2 = ar[i],
    q2 = shp(o2);
  g.fillStyle = cR;
  pth(o2, q2);
  g.fill();
  if (o2.rim) {
    g.strokeStyle = rim;
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(o2.bx + o2.wd / 2, 0);
    g.quadraticCurveTo(q2[2] + o2.wd * 0.3, q2[3], q2[0], q2[1]);
    g.stroke();
  }
}
for (var c = 0; c < 2; c++) {
  var bx2 = (0.1 + R() * 0.6) * K,
    hh = (0.8 + R() * 0.35) * K,
    ph3 = R() * 6.283,
    sw2 = Math.sin(t * 0.35 + ph3) * 0.02 + Math.sin(t * 0.9 + ph3) * 0.006,
    tx2 = bx2 + (0.05 + sw2) * hh,
    ty2 = -hh,
    qx = bx2 + 0.02,
    qy = -hh * 0.5;
  g.strokeStyle = cR;
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(bx2, 0);
  g.quadraticCurveTo(qx, qy, tx2, ty2);
  g.stroke();
  g.save();
  g.scale(1, -1);
  g.globalAlpha = 0.2;
  g.beginPath();
  g.moveTo(bx2, 0);
  g.quadraticCurveTo(qx, qy, tx2, ty2);
  g.stroke();
  g.restore();
  g.globalAlpha = 1;
  var hx = 0.04 * bx2 + 0.32 * qx + 0.64 * tx2,
    hy = 0.32 * qy + 0.64 * ty2;
  g.save();
  g.translate(hx, hy);
  g.rotate(Math.atan2(tx2 - qx, qy - ty2));
  g.fillStyle = cR;
  g.beginPath();
  g.ellipse(0, 0, 0.02, 0.07, 0, 0, 6.283);
  g.fill();
  g.fillStyle = rim;
  g.fillRect(0.013, -0.055, e.px, 0.1);
  g.restore();
}
