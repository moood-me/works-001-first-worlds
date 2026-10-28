var t = e.t;
g.lineCap = "round";
for (var i = 0; i < 900; i++) {
  var x = -200 + e.rnd() * 400,
    y = -70 + e.rnd() * 140,
    l = 0.5 + e.rnd() * 2.4,
    b = e.rnd();
  var s = 0.5 + 0.5 * Math.sin(t * (0.25 + b * 0.4) + i * 1.7);
  g.globalAlpha = 0.04 + 0.11 * s;
  g.strokeStyle = x > 5 && b < 0.45 ? "#d0a894" : "#7f86a6";
  g.lineWidth = 0.03 + 0.05 * b;
  var dx = Math.sin(t * 0.13 + i) * 0.4;
  g.beginPath();
  g.moveTo(x + dx, y);
  g.lineTo(x + dx + l, y);
  g.stroke();
}
for (var k = 0; k < 3; k++) {
  var cyc = Math.floor((t + k * 7) / 21);
  var p = ((t + k * 7) % 21) / 21;
  var h1 = Math.abs(Math.sin(cyc * 127.1 + k * 31.7) * 43758.5) % 1,
    h2 = Math.abs(Math.sin(cyc * 311.7 + k * 17.3) * 24634.6) % 1;
  var rx = -25 + h1 * 40,
    ry = -45 + h2 * 35;
  for (var r = 0; r < 3; r++) {
    var pr = p - r * 0.08;
    if (pr <= 0) continue;
    g.globalAlpha = 0.22 * (1 - pr) * (1 - pr);
    g.strokeStyle = "#a9a9c4";
    g.lineWidth = 0.04;
    g.beginPath();
    g.arc(rx, ry, 0.2 + pr * 3.2, 0, 6.283);
    g.stroke();
  }
}
g.globalAlpha = 1;
