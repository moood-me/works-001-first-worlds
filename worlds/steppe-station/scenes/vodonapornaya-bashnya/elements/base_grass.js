var t = e.t,
  S = e.state || {};
var H = S.hatch_amount || 0;
var gust = 0.5 + 0.5 * Math.sin(t * 0.31) * Math.sin(t * 0.17 + 1);
var cols = ["#6e5f3e", "#5c4e33", "#7f6c45", "#4e4230"];
for (var i = 0; i < 36; i++) {
  var bx = -3.4 + e.rnd() * 6.9,
    n = 3 + Math.floor(e.rnd() * 4),
    h0 = 0.3 + e.rnd() * 0.7,
    ph = e.rnd() * 6.28,
    ci = Math.floor(e.rnd() * 4),
    dz = e.rnd() * 0.22;
  var lit = bx > 2.0;
  var push = bx > -0.15 && bx < 1.0 ? H * 0.9 : 0;
  for (var k = 0; k < n; k++) {
    var ox = (e.rnd() - 0.5) * 0.3,
      h = h0 * (0.6 + e.rnd() * 0.4),
      lean = (e.rnd() - 0.4) * 0.25;
    var ang =
      lean + 0.1 + 0.12 * gust + 0.05 * Math.sin(t * 1.3 + ph + k) + 0.025 * Math.sin(t * 2.9 + ph * 1.7) + push;
    var x0 = bx + ox;
    var tx = x0 + Math.sin(ang) * h,
      ty = dz - Math.cos(ang) * h;
    g.strokeStyle = cols[ci];
    g.lineWidth = 0.014;
    g.beginPath();
    g.moveTo(x0, dz);
    g.quadraticCurveTo(x0 + Math.sin(ang) * h * 0.3, dz - h * 0.55, tx, ty);
    g.stroke();
    if (lit) {
      g.strokeStyle = "rgba(255,196,130,0.45)";
      g.lineWidth = e.px;
      g.beginPath();
      g.moveTo(x0 + Math.sin(ang) * h * 0.6, dz - Math.cos(ang) * h * 0.6);
      g.lineTo(tx, ty);
      g.stroke();
    }
  }
}
var ta = 0.05 + 0.05 * gust + 0.03 * Math.sin(t * 0.9) + 0.015 * Math.sin(t * 2.3 + 1);
var bx = 2.55,
  bh = 1.15;
var tx = bx + Math.sin(ta) * bh,
  ty = 0.05 - Math.cos(ta) * bh;
var sx2 = bx + 0.3 + Math.sin(ta) * 0.8;
g.strokeStyle = "#3a2f22";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(bx, 0.05);
g.quadraticCurveTo(bx + Math.sin(ta) * bh * 0.4, 0.05 - bh * 0.5, tx, ty);
g.moveTo(bx + Math.sin(ta) * 0.6, -0.57);
g.quadraticCurveTo(bx + 0.2, -0.75, sx2, -0.85);
g.stroke();
[
  [tx, ty, 0.07],
  [sx2, -0.85, 0.055],
].forEach(function (h) {
  g.fillStyle = "#3a2f22";
  g.beginPath();
  g.ellipse(h[0], h[1], h[2], h[2] * 1.2, 0, 0, 6.283);
  g.fill();
  g.strokeStyle = "#4a3c2a";
  g.lineWidth = 0.012;
  g.beginPath();
  for (var j = 0; j < 9; j++) {
    var a = -Math.PI + (j * Math.PI) / 8;
    g.moveTo(h[0], h[1] - h[2] * 0.6);
    g.lineTo(h[0] + Math.cos(a) * h[2] * 1.9, h[1] - h[2] * 0.6 + Math.sin(a) * h[2] * 1.9);
  }
  g.stroke();
  g.strokeStyle = "rgba(255,196,130,0.55)";
  g.lineWidth = e.px * 1.2;
  g.beginPath();
  g.arc(h[0], h[1], h[2], -1.4, 0.5);
  g.stroke();
});
