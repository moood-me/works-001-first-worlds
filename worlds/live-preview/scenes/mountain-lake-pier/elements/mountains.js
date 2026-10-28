var R = e.rnd;
var pts = [];
for (var x = -4000; x <= 4000; x += 40) {
  var y = -(
    110 +
    60 * Math.sin(x / 900 + 1) +
    35 * Math.sin(x / 330 + 2.1) +
    14 * Math.sin(x / 120) +
    R() * 9 +
    210 * Math.exp(-Math.pow((x - 700) / 520, 2)) +
    80 * Math.exp(-Math.pow((x + 1500) / 600, 2))
  );
  if (y < -450) y = -450;
  if (y > -40) y = -40;
  pts.push([x, y]);
}
var gr = g.createLinearGradient(0, -450, 0, 0);
gr.addColorStop(0, "#5d5a76");
gr.addColorStop(0.6, "#43455f");
gr.addColorStop(1, "#353851");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-4000, 5);
for (var i = 0; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
g.lineTo(4000, 5);
g.closePath();
g.fill();
for (var i = 1; i < pts.length - 1; i++) {
  var p = pts[i];
  if (p[1] < -290 && R() < 0.6) {
    var a = 0.06 + R() * 0.08,
      dl = 20 + R() * 30,
      dr = 20 + R() * 35;
    g.fillStyle = "rgba(205,198,222," + a.toFixed(3) + ")";
    g.beginPath();
    g.moveTo(p[0] - dl, p[1] + 10);
    g.lineTo(p[0], p[1]);
    g.lineTo(p[0] + dr, p[1] + 12);
    g.quadraticCurveTo(p[0] + dr * 0.4, p[1] + 40 + R() * 40, p[0] + R() * 14, p[1] + 30 + R() * 70);
    g.quadraticCurveTo(p[0] - dl * 0.5, p[1] + 25 + R() * 30, p[0] - dl, p[1] + 10);
    g.closePath();
    g.fill();
  }
}
g.strokeStyle = "rgba(236,182,160,0.35)";
g.lineWidth = 4;
g.beginPath();
for (var i = 0; i < pts.length; i++) {
  if (i == 0) g.moveTo(pts[i][0], pts[i][1]);
  else g.lineTo(pts[i][0], pts[i][1]);
}
g.stroke();
