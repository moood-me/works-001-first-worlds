var t = e.t,
  S = e.state || {};
var X = S.tw_x;
if (X == null) X = 20;
if (X > 19.5 || X < -17.5) return;
var R = 0.36,
  rest = 1.3;
var m = Math.min(1, Math.abs(X - rest) / 1.2);
var hop = Math.abs(Math.sin(X * 0.85)) * 0.16 * (0.6 + 0.4 * Math.sin(X * 0.37)) * m;
var cy = -R - hop + 0.04 * (1 - m);
var ang = X / R + (1 - m) * (0.07 * Math.sin(t * 1.3) * (0.6 + 0.4 * Math.sin(t * 0.41)) + 0.03 * Math.sin(t * 2.7));
g.fillStyle = "rgba(26,18,14," + Math.max(0.05, 0.28 - hop * 0.6).toFixed(3) + ")";
g.beginPath();
g.ellipse(X - 0.35, 0.03, R * 1.2, R * 0.13, 0, 0, 6.283);
g.fill();
g.save();
g.translate(X, cy);
g.rotate(ang);
g.lineCap = "round";
for (var i = 0; i < 46; i++) {
  var a1 = e.rnd() * 6.283,
    r1 = e.rnd() * R * 0.5,
    a2 = a1 + (e.rnd() - 0.5) * 2.6,
    r2 = R * (0.75 + e.rnd() * 0.25),
    bend = (e.rnd() - 0.5) * 0.9;
  var x1 = Math.cos(a1) * r1,
    y1 = Math.sin(a1) * r1,
    x2 = Math.cos(a2) * r2,
    y2 = Math.sin(a2) * r2;
  g.strokeStyle = i % 3 ? "rgba(120,94,62,0.85)" : "rgba(160,126,84,0.8)";
  g.lineWidth = 0.012 + e.rnd() * 0.01;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2 - (y2 - y1) * bend, (y1 + y2) / 2 + (x2 - x1) * bend, x2, y2);
  g.stroke();
}
g.strokeStyle = "rgba(110,86,58,0.6)";
g.lineWidth = 0.01;
for (var j = 0; j < 5; j++) {
  var a0 = e.rnd() * 6.283;
  g.beginPath();
  g.arc(0, 0, R * (0.82 + e.rnd() * 0.18), a0, a0 + 1.2 + e.rnd() * 1.5);
  g.stroke();
}
g.restore();
g.strokeStyle = "rgba(255,190,120," + (0.12 + 0.33 * m).toFixed(3) + ")";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.arc(X, cy, R * 0.92, -1.3, 0.3);
g.stroke();
