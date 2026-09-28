g.fillStyle = "#252c37";
g.beginPath();
g.moveTo(-3, 0.1);
g.lineTo(-3, -3);
g.lineTo(0, -5);
g.lineTo(3, -3);
g.lineTo(3, 0.1);
g.closePath();
g.fill();
g.fillRect(1.4, -5.2, 0.55, 1.6);
g.fillStyle = "#2b3340";
g.fillRect(-3.6, -0.3, 7.2, 0.4);
var f = 0.82 + 0.1 * Math.sin(e.t * 0.7) + 0.06 * Math.sin(e.t * 1.93 + 1.3);
var wg = g.createRadialGradient(-1.05, -1.9, 0.05, -1.05, -1.9, 1.2);
wg.addColorStop(0, "rgba(255,214,150," + f.toFixed(3) + ")");
wg.addColorStop(1, "rgba(240,170,90," + (f * 0.75).toFixed(3) + ")");
g.fillStyle = wg;
g.fillRect(-1.6, -2.45, 1.1, 1.05);
g.fillStyle = "#252c37";
g.fillRect(-1.08, -2.45, 0.07, 1.05);
g.fillRect(-1.6, -1.96, 1.1, 0.07);
e.light(-1.05, -1.9, 10, "#f0b870", 0.95);
g.globalAlpha = 0.18;
g.fillStyle = "#f0b870";
for (var i = 0; i < 6; i++) {
  var w = 1.2 + i * 0.5;
  g.fillRect(-1.05 - w / 2, 0.35 + i * 0.35 + Math.sin(e.t * 0.6 + i) * 0.05, w, 0.06);
}
g.globalAlpha = 1;
