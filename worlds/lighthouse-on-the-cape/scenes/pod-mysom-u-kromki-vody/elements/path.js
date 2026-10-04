var S = [
  [-21, -0.6],
  [8, -4.8],
  [-13, -9.6],
  [18, -14.6],
  [7, -19.6],
  [11, -20.3],
];
var W = e.state.path_wetness || 0,
  t = e.t;
g.lineCap = "round";
g.lineJoin = "round";
function L(a, b, u) {
  return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
}
function seg(a, b, u0, u1, dy) {
  var p = L(a, b, u0),
    q = L(a, b, u1);
  g.beginPath();
  g.moveTo(p[0], p[1] + dy);
  g.lineTo(q[0], q[1] + dy);
  g.stroke();
}
function all(dy) {
  for (var k = 0; k < S.length - 1; k++) {
    if (k == 1) {
      seg(S[k], S[k + 1], 0, 0.42, dy);
      seg(S[k], S[k + 1], 0.57, 1, dy);
    } else seg(S[k], S[k + 1], 0, 1, dy);
  }
}
g.strokeStyle = "rgba(6,8,14,0.7)";
g.lineWidth = 0.9;
all(0.45);
g.strokeStyle = "rgba(92,104,132,0.9)";
g.lineWidth = 0.38;
all(0);
g.strokeStyle = "rgba(170,185,212," + (0.2 + 0.35 * W).toFixed(3) + ")";
g.lineWidth = 0.08;
all(-0.15);
var gp = L(S[1], S[2], 0.5);
g.fillStyle = "rgba(20,24,36,0.9)";
for (var j = 0; j < 5; j++) {
  var rx = gp[0] + (e.rnd() - 0.5) * 2,
    ry = gp[1] + 0.6 + e.rnd() * 3;
  g.beginPath();
  g.arc(rx, ry, 0.12 + e.rnd() * 0.15, 0, 6.283);
  g.fill();
}
for (var k = 0; k < S.length - 1; k++) {
  var a = S[k],
    b = S[k + 1];
  for (var j = 0; j < 6; j++) {
    var u = e.rnd(),
      len = 0.8 + e.rnd() * 2.4,
      f = 0.25 + e.rnd() * 0.4,
      ph = e.rnd();
    var p = L(a, b, u);
    var al = W * 0.35;
    if (al < 0.02) continue;
    var pos = ((t * f + ph) % 1) * len;
    g.strokeStyle = "rgba(150,170,205," + (al * 0.5).toFixed(3) + ")";
    g.lineWidth = 0.06;
    g.beginPath();
    g.moveTo(p[0], p[1] + 0.6);
    g.lineTo(p[0] + 0.05, p[1] + 0.6 + len);
    g.stroke();
    g.fillStyle = "rgba(200,215,240," + al.toFixed(3) + ")";
    g.beginPath();
    g.arc(p[0] + (0.04 * pos) / len, p[1] + 0.6 + pos, 0.07, 0, 6.283);
    g.fill();
  }
}
for (var k = 0; k < S.length - 1; k++) {
  var a = S[k],
    b = S[k + 1];
  for (var j = 0; j < 12; j++) {
    var u = e.rnd(),
      ph = e.rnd() * 6.283,
      f = 0.6 + e.rnd() * 1.2,
      r1 = e.rnd(),
      r2 = e.rnd(),
      r3 = e.rnd();
    var p = L(a, b, u);
    if (k == 1 && u > 0.42 && u < 0.57) continue;
    var warm = Math.max(0, 1 - Math.hypot(p[0] - 13, p[1] + 20) / 16);
    var al = W * (0.15 + 0.7 * Math.max(0, Math.sin(t * f + ph))) * (0.5 + 0.5 * r1);
    if (al < 0.03) continue;
    g.fillStyle = r2 < warm ? "rgba(255,190,130," + al.toFixed(3) + ")" : "rgba(205,218,242," + al.toFixed(3) + ")";
    g.beginPath();
    g.ellipse(p[0], p[1] - 0.06, 0.3 + r3 * 0.6, 0.07, 0, 0, 6.283);
    g.fill();
  }
}
g.strokeStyle = "#10131e";
g.lineWidth = 0.12;
var posts = [];
for (var k = 2; k < S.length - 1; k++) {
  var a = S[k],
    b = S[k + 1];
  var d = Math.hypot(b[0] - a[0], b[1] - a[1]),
    n = Math.floor(d / 3);
  for (var j = 0; j <= n; j++) {
    var u = j / Math.max(1, n);
    if (e.rnd() < 0.2) {
      e.rnd();
      continue;
    }
    var p = L(a, b, u),
      lean = (e.rnd() - 0.5) * 0.5;
    var top = [p[0] + lean, p[1] - 1.05];
    g.beginPath();
    g.moveTo(p[0], p[1]);
    g.lineTo(top[0], top[1]);
    g.stroke();
    posts.push(top);
  }
}
g.strokeStyle = "rgba(20,24,36,0.75)";
g.lineWidth = 0.05;
for (var i = 0; i < posts.length - 1; i++) {
  var a = posts[i],
    b = posts[i + 1];
  if (Math.hypot(b[0] - a[0], b[1] - a[1]) > 5) continue;
  var sw = Math.sin(t * 1.3 + i) * 0.08;
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.quadraticCurveTo((a[0] + b[0]) / 2 + sw, (a[1] + b[1]) / 2 + 0.35, b[0], b[1]);
  g.stroke();
}
