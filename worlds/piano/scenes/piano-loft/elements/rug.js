g.fillStyle = "#4b3436";
g.fillRect(-1.6, -1.2, 3.2, 2.4);
g.strokeStyle = "#7a4c3c";
g.lineWidth = 0.06;
g.strokeRect(-1.45, -1.05, 2.9, 2.1);
g.strokeStyle = "#a68a6a";
g.lineWidth = 0.02;
g.strokeRect(-1.33, -0.93, 2.66, 1.86);
g.fillStyle = "#6e4438";
for (var i = -2; i <= 2; i++) {
  var cx = i * 0.52;
  g.beginPath();
  g.moveTo(cx, -0.45);
  g.lineTo(cx + 0.2, 0);
  g.lineTo(cx, 0.45);
  g.lineTo(cx - 0.2, 0);
  g.closePath();
  g.fill();
}
g.fillStyle = "#a68a6a";
for (var j = -2; j <= 2; j++) {
  var c2 = j * 0.52;
  g.beginPath();
  g.moveTo(c2, -0.15);
  g.lineTo(c2 + 0.07, 0);
  g.lineTo(c2, 0.15);
  g.lineTo(c2 - 0.07, 0);
  g.closePath();
  g.fill();
}
g.strokeStyle = "#cbb99a";
g.lineWidth = 0.012;
g.globalAlpha = 0.6;
g.beginPath();
for (var x = -1.58; x < 1.6; x += 0.04) {
  g.moveTo(x, -1.2);
  g.lineTo(x + (e.rnd() - 0.5) * 0.02, -1.28);
  g.moveTo(x, 1.2);
  g.lineTo(x + (e.rnd() - 0.5) * 0.02, 1.28);
}
g.stroke();
g.globalAlpha = 1;
var sh = g.createRadialGradient(0.2, -0.6, 0, 0.2, -0.6, 2.4);
sh.addColorStop(0, "rgba(255,170,100,0.12)");
sh.addColorStop(1, "rgba(0,0,0,0.3)");
g.fillStyle = sh;
g.fillRect(-1.6, -1.2, 3.2, 2.4);
