var t = e.t,
  S = e.state.surf_height || 0,
  C = e.state.crash || 0;
function hr(n) {
  var s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}
for (var i = 0; i < 28; i++) {
  var y0 = -0.05 + e.rnd() * 1.4,
    x0 = -20 + e.rnd() * 34,
    L = 1.5 + e.rnd() * 5,
    ph = e.rnd() * 6.283,
    f = 0.3 + e.rnd() * 0.3;
  var a = (0.12 + 0.25 * S) * (0.5 + 0.5 * Math.sin(t * f + ph));
  g.fillStyle = "rgba(185,198,222," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x0 + Math.sin(t * 0.4 + ph) * 0.6, y0, L / 2, 0.04 + y0 * 0.03, 0, 0, 6.283);
  g.fill();
}
function blob(x, y, r, a) {
  if (a < 0.01 || r <= 0) return;
  var gr = g.createRadialGradient(x, y, 0, x, y, r);
  gr.addColorStop(0, "rgba(218,228,244," + a.toFixed(3) + ")");
  gr.addColorStop(0.55, "rgba(200,214,236," + (a * 0.5).toFixed(3) + ")");
  gr.addColorStop(1, "rgba(190,205,230,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
}
function plume(x, y, H, w, u, n, amp) {
  if (u > 0.5) return;
  var p = u / 0.5,
    rise = Math.sin((p * Math.PI) / 2),
    fade = 1 - p * p;
  for (var j = 0; j < n; j++) {
    var v = j / (n - 1),
      q1 = hr(j + x * 3.1),
      q2 = hr(j * 3 + x),
      q3 = hr(j * 7 + x * 1.7);
    var bx = x + (q1 - 0.5) * w * (0.7 + v * 0.6) + v * H * 0.55 * rise,
      by = y - v * H * rise * (0.8 + 0.3 * q2),
      r = (0.25 + v * 0.55) * Math.max(0.5, H * 0.32) * (0.6 + 0.6 * q3);
    blob(bx, by, r, amp * fade * (0.6 - 0.35 * v));
  }
  for (var j = 0; j < 10; j++) {
    var q1 = hr(j * 11 + x),
      q2 = hr(j * 5 + x * 2);
    var dx = (q1 - 0.3) * H * 0.9 * rise,
      dy = -H * (0.6 + q2 * 0.6) * Math.sin(p * Math.PI);
    g.fillStyle = "rgba(225,232,246," + (amp * fade * 0.7).toFixed(3) + ")";
    g.beginPath();
    g.arc(x + dx, y + dy, 0.05 + q2 * 0.06, 0, 6.283);
    g.fill();
  }
}
var R = [
  [-13, 1.1, 1.6],
  [-9.5, 0.6, 1.1],
  [-6.5, 1.6, 1.8],
  [-3, 0.8, 1.2],
  [0.5, 1.3, 1.5],
  [4, 0.9, 1.4],
  [7, 1.9, 2.0],
  [10, 1.2, 1.6],
];
for (var i = 0; i < R.length; i++) {
  var r = R[i];
  var per = 7 + e.rnd() * 6,
    ph = e.rnd() * per,
    k1 = e.rnd();
  var u = ((t + ph) % per) / per;
  var Hm = ((0.5 + S * 3.2) * (0.7 + 0.6 * k1) * r[1]) / 1.3;
  plume(r[0] - r[2] * 0.3, -r[1] * 0.5, Hm * 0.7, r[2], u + 0.05, 8, 0.35 + 0.3 * S);
}
for (var i = 0; i < R.length; i++) {
  var r = R[i],
    x = r[0],
    h = r[1],
    w = r[2];
  var pts = [];
  for (var k = 0; k <= 6; k++) {
    var an = Math.PI - (k * Math.PI) / 6;
    pts.push([x + Math.cos(an) * w * (0.85 + e.rnd() * 0.3), -Math.sin(an) * h * (0.75 + e.rnd() * 0.35)]);
  }
  g.beginPath();
  g.moveTo(pts[0][0], 0.3);
  for (var k = 0; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
  g.lineTo(pts[6][0], 0.3);
  g.closePath();
  var gr = g.createLinearGradient(0, -h, 0, 0.3);
  gr.addColorStop(0, "#1a2134");
  gr.addColorStop(1, "#090c15");
  g.fillStyle = gr;
  g.fill();
  g.strokeStyle = "rgba(170,186,216,0.55)";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(pts[1][0], pts[1][1] + 0.02);
  g.lineTo(pts[2][0], pts[2][1] + 0.02);
  g.lineTo(pts[3][0], pts[3][1] + 0.02);
  g.stroke();
  g.fillStyle = "rgba(175,192,224,0.18)";
  g.beginPath();
  g.ellipse(
    pts[2][0] * 0.5 + pts[3][0] * 0.5,
    pts[2][1] * 0.5 + pts[3][1] * 0.5 + h * 0.18,
    w * 0.25,
    h * 0.05,
    -0.2,
    0,
    6.283,
  );
  g.fill();
}
for (var i = 0; i < R.length; i++) {
  var r = R[i];
  var per = 7 + e.rnd() * 6,
    ph = e.rnd() * per,
    k1 = e.rnd();
  var u = ((t + ph) % per) / per;
  var Hm = ((0.5 + S * 3.2) * (0.7 + 0.6 * k1) * r[1]) / 1.3;
  plume(r[0], -r[1] * 0.6, Hm, r[2], u, 14, 0.55 + 0.3 * S);
}
if (C > 0.02) {
  var Hc = (3 + S * 6) * Math.sqrt(C);
  for (var j = 0; j < 26; j++) {
    var v = j / 25,
      q1 = hr(j + 50),
      q2 = hr(j * 3 + 51),
      q3 = hr(j * 7 + 52);
    var bx = 6 + (q1 - 0.5) * 3.5 * (0.6 + v) + v * Hc * 0.45,
      by = -0.4 - v * Hc * (0.8 + 0.3 * q2),
      rr = (0.35 + v * 0.7) * Math.max(0.8, Hc * 0.3) * (0.6 + 0.6 * q3);
    blob(bx, by, rr, C * (0.75 - 0.4 * v));
  }
  for (var j = 0; j < 24; j++) {
    var q1 = hr(j * 13 + 90),
      q2 = hr(j * 17 + 91);
    g.fillStyle = "rgba(228,236,248," + (C * 0.8).toFixed(3) + ")";
    g.beginPath();
    g.arc(6 + (q1 - 0.35) * Hc * 1.2, -Hc * (0.3 + q2 * 0.9), 0.06 + q2 * 0.08, 0, 6.283);
    g.fill();
  }
}
for (var i = 0; i < 44; i++) {
  var x = -18 + e.rnd() * 32,
    y = 0.15 + e.rnd() * 1.3,
    w = 0.6 + e.rnd() * 2.4,
    ph = e.rnd() * 6.283,
    f = 0.25 + e.rnd() * 0.35;
  var a = Math.max(0, Math.sin(t * f + ph)) * (0.3 + 0.45 * S);
  if (a < 0.02) continue;
  g.fillStyle = "rgba(205,216,238," + Math.min(0.85, a).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.45 + ph) * 0.4, y, w / 2, 0.05 + y * 0.03, 0, 0, 6.283);
  g.fill();
}
