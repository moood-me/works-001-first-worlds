var P = [];
var a1 = e.rnd() * 6.28,
  a2 = e.rnd() * 6.28,
  a3 = e.rnd() * 6.28;
for (var i = 0; i <= 260; i++) {
  var x = -1800 + (i * 3600) / 260;
  var u = x / 300;
  var h = 10 + 4 * Math.sin(u * 0.7 + a1) + 2.5 * Math.sin(u * 1.9 + a2) + 1.2 * Math.sin(u * 4.3 + a3) + e.rnd() * 0.8;
  P.push([x, -h]);
}
g.beginPath();
g.moveTo(-1800, 6);
for (var j = 0; j < P.length; j++) g.lineTo(P[j][0], P[j][1]);
g.lineTo(1800, 6);
g.closePath();
g.fillStyle = "#434c5b";
g.fill();
var m = g.createLinearGradient(0, -12, 0, 6);
m.addColorStop(0, "rgba(120,128,142,0)");
m.addColorStop(1, "rgba(120,128,142,0.45)");
g.save();
g.clip();
g.fillStyle = m;
g.fillRect(-1800, -12, 3600, 18);
g.restore();
