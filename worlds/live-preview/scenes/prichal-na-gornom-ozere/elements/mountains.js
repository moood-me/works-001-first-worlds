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
g.fillStyle = "rgba(205,198,222,0.22)";
for (var i = 1; i < pts.length - 1; i++) {
  var p = pts[i];
  if (p[1] < -290) {
    g.beginPath();
    g.moveTo(p[0] - 30, p[1] + 8);
    g.lineTo(p[0], p[1]);
    g.lineTo(p[0] + 35, p[1] + 10);
    g.lineTo(p[0] + 8 + R() * 20, p[1] + 70 + R() * 90);
    g.lineTo(p[0] - 12, p[1] + 40 + R() * 60);
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
