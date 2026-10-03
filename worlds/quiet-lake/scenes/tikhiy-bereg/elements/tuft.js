var t = e.t,
  S = 97;
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
var cG = C("#1e161a", "#0e0a0e", "#3a3a40"),
  rim = "rgba(255,180,120," + (0.3 * sw).toFixed(3) + ")";
g.globalAlpha = 0.4;
g.fillStyle = cG;
g.beginPath();
g.ellipse(0, 0.01, 0.45, 0.05, 0, 0, 6.283);
g.fill();
g.globalAlpha = 1;
for (var i = 0; i < 26; i++) {
  var bx = (R() - 0.5) * 0.7,
    hg = 0.25 + R() * 0.45,
    lean = (R() - 0.5) * 0.9,
    ph = R() * 6.283,
    f = 0.35 + R() * 0.3,
    wd = 0.006 + R() * 0.006,
    hasRim = R() < 0.4;
  var w = Math.sin(t * f + ph) * 0.03 + Math.sin(t * f * 2.1 + ph) * 0.01;
  var tx = bx + (lean + w) * hg,
    ty = -hg * (1 - 0.25 * Math.abs(lean)),
    cx = bx + lean * hg * 0.25,
    cy = -hg * 0.6;
  g.fillStyle = cG;
  g.beginPath();
  g.moveTo(bx - wd, 0.02);
  g.quadraticCurveTo(cx, cy, tx, ty);
  g.quadraticCurveTo(cx + wd, cy, bx + wd, 0.02);
  g.closePath();
  g.fill();
  if (hasRim) {
    g.strokeStyle = rim;
    g.lineWidth = e.px;
    g.beginPath();
    g.moveTo(bx + wd, 0.02);
    g.quadraticCurveTo(cx + wd, cy, tx, ty);
    g.stroke();
  }
}
