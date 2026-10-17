var T = Math.PI * 2,
  b = (e.t * 118) / 60,
  pl = Math.pow(1 - (b % 1), 2.5),
  cols = ["#ff2fd6", "#29e0ff", "#fff23d", "#8a4dff", "#ff7a3d"],
  U = [1, 1.111, 1.25, 1.4286, 1.6667, 2, 2.5, 3.333, 5];
g.fillStyle = "#170a26";
g.beginPath();
g.moveTo(-7.1, -0.03);
g.lineTo(7.1, -0.03);
g.lineTo(7.1 * 5.1, 1.7 * 5.1 - 1.7);
g.lineTo(-7.1 * 5.1, 1.7 * 5.1 - 1.7);
g.closePath();
g.fill();
for (var j = 0; j < 8; j++) {
  var y0 = 1.7 * U[j] - 1.7,
    y1 = 1.7 * U[j + 1] - 1.7,
    ya = y0 + (y1 - y0) * 0.05,
    yb = y1 - (y1 - y0) * 0.05,
    ua = (ya + 1.7) / 1.7,
    ub = (yb + 1.7) / 1.7;
  for (var i = 0; i < 10; i++) {
    var X0 = -7 + i * 1.4 + 0.06,
      X1 = X0 + 1.28,
      ci = (i * 3 + j * 7 + Math.floor(b / 8)) % 5,
      wv = Math.sin(b * Math.PI * 0.25 + i * 0.9 - j * 1.3) + 0.4 * Math.sin(e.t * 0.37 + i * 1.7 + j * 0.6),
      a = 0.1 + 0.4 * Math.max(0, wv - 0.2) + 0.22 * pl * ((i + j + Math.floor(b)) % 2);
    g.globalAlpha = Math.min(0.85, a);
    g.fillStyle = cols[ci];
    g.beginPath();
    g.moveTo(X0 * ua, ya);
    g.lineTo(X1 * ua, ya);
    g.lineTo(X1 * ub, yb);
    g.lineTo(X0 * ub, yb);
    g.closePath();
    g.fill();
  }
}
g.globalAlpha = 1;
g.globalCompositeOperation = "lighter";
g.save();
g.translate(0, 0.4);
g.scale(1, 0.18);
var sg = g.createRadialGradient(0, 0, 0, 0, 0, 6);
sg.addColorStop(0, "rgba(255,47,214,0.3)");
sg.addColorStop(1, "rgba(255,47,214,0)");
g.globalAlpha = 0.7 + 0.3 * pl;
g.fillStyle = sg;
g.beginPath();
g.arc(0, 0, 6, 0, T);
g.fill();
g.restore();
for (var k = 0; k < 28; k++) {
  var a0 = e.rnd() * T,
    rr = 1.5 + e.rnd() * 5.5,
    fd = e.rnd(),
    sp = 0.06 + e.rnd() * 0.05,
    ang = a0 + e.t * sp,
    X = Math.cos(ang) * rr,
    fr = Math.min(0.9, Math.max(0, fd + 0.15 * Math.sin(ang))),
    u = 1 / (1 - 0.78 * fr),
    yb2 = 1.7 * u - 1.7,
    xb = X * u,
    rx = 0.1 * u,
    ry = rx * (0.15 + 0.1 * u),
    tw = 0.6 + 0.4 * Math.sin(e.t * 1.7 + k);
  g.globalAlpha = 0.35 * tw;
  g.fillStyle = "#ffe8fb";
  g.beginPath();
  g.ellipse(xb, yb2, rx, ry, 0, 0, T);
  g.fill();
  g.globalAlpha = 0.6 * tw;
  g.beginPath();
  g.ellipse(xb, yb2, rx * 0.4, ry * 0.4, 0, 0, T);
  g.fill();
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
