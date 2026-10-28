var A = e.aspect,
  H = 0.5,
  L = -0.35,
  R = A + 0.35,
  d = e.state.dawn || 0;
function h(c) {
  return [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16)];
}
function m(a, b) {
  var p = h(a),
    q = h(b);
  return (
    "rgb(" +
    Math.round(p[0] + (q[0] - p[0]) * d) +
    "," +
    Math.round(p[1] + (q[1] - p[1]) * d) +
    "," +
    Math.round(p[2] + (q[2] - p[2]) * d) +
    ")"
  );
}
var s = g.createLinearGradient(0, -0.35, 0, H);
s.addColorStop(0, m("#141a33", "#4d5f8c"));
s.addColorStop(0.55, m("#3a3f68", "#8e93b6"));
s.addColorStop(0.88, m("#8a6d86", "#d9aea6"));
s.addColorStop(1, m("#c98f86", "#f2c49a"));
g.fillStyle = s;
g.fillRect(L, -0.35, R - L, H + 0.351);
var w = g.createLinearGradient(0, H, 0, 1.25);
w.addColorStop(0, m("#5b5372", "#b89a9c"));
w.addColorStop(0.25, m("#2f3352", "#636c8c"));
w.addColorStop(1, m("#151a2e", "#2c3350"));
g.fillStyle = w;
g.fillRect(L, H, R - L, 1.25 - H);
if (d > 0) {
  var sg = g.createRadialGradient(0.3 * A, H, 0, 0.3 * A, H, 0.7);
  sg.addColorStop(0, "rgba(255,200,150," + 0.5 * d + ")");
  sg.addColorStop(1, "rgba(255,200,150,0)");
  g.fillStyle = sg;
  g.fillRect(L, H - 0.7, R - L, 0.72);
}
g.fillStyle = "#ffffff";
for (var i = 0; i < 140; i++) {
  var x = L + e.rnd() * (R - L),
    y = -0.35 + Math.pow(e.rnd(), 1.4) * 0.62,
    a = (0.2 + e.rnd() * 0.6) * (1 - d);
  if (a < 0.02) continue;
  g.globalAlpha = a;
  g.fillRect(x, y, e.px * 1.4, e.px * 1.4);
}
g.globalAlpha = 1 - d * 0.6;
var mx = 0.62 * A,
  my = 0.2 + d * 0.06;
var mg = g.createRadialGradient(mx, my, 0, mx, my, 0.22);
mg.addColorStop(0, "rgba(240,232,214,0.35)");
mg.addColorStop(1, "rgba(240,232,214,0)");
g.fillStyle = mg;
g.fillRect(mx - 0.22, my - 0.22, 0.44, 0.44);
g.fillStyle = "#efe7d4";
g.beginPath();
g.arc(mx, my, 0.018, 0, 6.283);
g.fill();
g.globalAlpha = 1;
