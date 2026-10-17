var t = e.t,
  S = 61;
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
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var rg = Math.max(0, Math.min(1, st.rings == null ? 0.12 : st.rings)),
  wgl = Math.max(0, Math.min(1, st.waterGlow || 0));
function dw(a) {
  return 7 + 5 * (1 + Math.tanh((a - 2) / 4)) + 0.008 * a * a;
}
g.save();
g.beginPath();
g.moveTo(-8, -5);
for (var x = -8; x <= 8.01; x += 0.2) g.lineTo(x, Math.max(-5, Math.min(5, 12 - dw(x - 0.6) - 0.05)));
g.lineTo(8, -5);
g.closePath();
g.clip();
var cx = 0,
  cy = 1.8;
if (wgl > 0) {
  g.globalCompositeOperation = "lighter";
  var br = 1 + 0.1 * Math.sin(t * 0.5) + 0.06 * Math.sin(t * 1.3 + 2),
    gr2 = (0.6 + 3.2 * wgl) * br;
  var gg = g.createRadialGradient(cx, cy, 0, cx, cy, gr2);
  gg.addColorStop(0, "rgba(255,230,180," + (0.55 * wgl).toFixed(3) + ")");
  gg.addColorStop(0.35, "rgba(255,205,140," + (0.25 * wgl).toFixed(3) + ")");
  gg.addColorStop(1, "rgba(255,190,120,0)");
  g.fillStyle = gg;
  g.fillRect(cx - 5, cy - 5, 10, 10);
  g.globalCompositeOperation = "source-over";
}
var cL = C("#ffd6ac", "#c08a78", "#ffffff"),
  cD = C("#2a1c30", "#120c1c", "#4a5a78"),
  cs = [[cx, cy, 9, 0, 1]];
for (var k = 0; k < 3; k++)
  cs.push([(R() - 0.5) * 9, 0.3 + R() * 3.5, 7 + R() * 5, R(), Math.max(0, Math.min(1, rg * 2 - 0.8))]);
g.lineWidth = 0.06;
for (var c = 0; c < cs.length; c++) {
  var q = cs[c];
  for (var n = 0; n < 3; n++) {
    var age = (((t / q[2] + q[3] + n / 3) % 1) + 1) % 1,
      rr = 0.06 + age * 3.2,
      al = rg * q[4] * Math.pow(1 - age, 1.8) * Math.min(1, age * 12) * 0.9;
    if (al < 0.004) continue;
    g.globalAlpha = al;
    g.strokeStyle = cL;
    g.beginPath();
    g.arc(q[0], q[1], rr, 0, 6.283);
    g.stroke();
    g.globalAlpha = al * 0.6;
    g.strokeStyle = cD;
    g.beginPath();
    g.arc(q[0], q[1] + 0.06, rr * 0.97, 0, 6.283);
    g.stroke();
  }
}
g.globalAlpha = 1;
g.restore();
