var P = [];
var a1 = e.rnd() * 6.28,
  a2 = e.rnd() * 6.28,
  a3 = e.rnd() * 6.28,
  a4 = e.rnd() * 6.28;
for (var i = 0; i <= 180; i++) {
  var x = -4400 + (i * 8800) / 180;
  var u = x / 1000;
  var h =
    40 +
    17 * Math.sin(u * 0.8 + a1) +
    11 * Math.sin(u * 2.1 + a2) +
    5 * Math.sin(u * 4.7 + a3) +
    2.4 * Math.sin(u * 10.3 + a4) +
    (e.rnd() - 0.5) * 2;
  h += 28 * Math.exp(-Math.pow((x + 1300) / 650, 2)) + 14 * Math.exp(-Math.pow((x - 2200) / 500, 2));
  P.push([x, -Math.max(10, h)]);
}
g.beginPath();
g.moveTo(-4400, 8);
for (var j = 0; j < P.length; j++) g.lineTo(P[j][0], P[j][1]);
g.lineTo(4400, 8);
g.closePath();
g.fillStyle = "#596373";
g.fill();
g.save();
g.clip();
for (var k = 1; k < P.length; k++) {
  var dy = P[k][1] - P[k - 1][1];
  if (dy <= 0) continue;
  g.fillStyle = "rgba(165,172,190," + (0.1 * Math.min(1, dy / 8)).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(P[k - 1][0], P[k - 1][1]);
  g.lineTo(P[k][0], P[k][1]);
  g.lineTo(P[k][0], P[k][1] + 28);
  g.lineTo(P[k - 1][0], P[k - 1][1] + 28);
  g.closePath();
  g.fill();
}
var m = g.createLinearGradient(0, -45, 0, 8);
m.addColorStop(0, "rgba(126,134,147,0)");
m.addColorStop(1, "rgba(126,134,147,0.6)");
g.fillStyle = m;
g.fillRect(-4400, -45, 8800, 53);
g.restore();
