g.fillStyle = "#bccbc2";
g.fillRect(-7, -2.5, 14, 5);
g.fillStyle = "#c9d7ce";
for (var i = -14; i < 14; i++)
  for (var j = -5; j < 5; j++) if ((i + j) % 2 === 0) g.fillRect(i * 0.5, j * 0.5, 0.5, 0.5);
g.strokeStyle = "rgba(150,170,160,0.35)";
g.lineWidth = 0.006;
for (var i = -14; i <= 14; i++) {
  g.beginPath();
  g.moveTo(i * 0.5, -2.5);
  g.lineTo(i * 0.5, 2.5);
  g.stroke();
}
for (var j = -5; j <= 5; j++) {
  g.beginPath();
  g.moveTo(-7, j * 0.5);
  g.lineTo(7, j * 0.5);
  g.stroke();
}
var rg = g.createRadialGradient(0, -1.2, 0.2, 0, -1.2, 3.2);
rg.addColorStop(0, "rgba(246,255,250,0.4)");
rg.addColorStop(1, "rgba(246,255,250,0)");
g.fillStyle = rg;
g.fillRect(-7, -2.5, 14, 5);
var wg = g.createLinearGradient(0, -2, 0, -1.6);
wg.addColorStop(0, "rgba(70,95,82,0.25)");
wg.addColorStop(1, "rgba(70,95,82,0)");
g.fillStyle = wg;
g.fillRect(-7, -2.5, 14, 0.9);
g.fillStyle = "rgba(70,95,82,0.12)";
g.fillRect(-1.05, -1.85, 2.1, 1.1);
g.fillStyle = "rgba(70,95,82,0.16)";
g.fillRect(-0.92, -1.72, 1.84, 0.85);
g.fillStyle = "rgba(70,95,82,0.16)";
[
  [-2.3, -1.4, 0.55, 0.35],
  [2.3, -1.4, 0.55, 0.35],
  [-1.45, -1.85, 0.2, 0.15],
  [1.45, -1.85, 0.2, 0.15],
].forEach(function (s) {
  g.beginPath();
  g.ellipse(s[0], s[1], s[2], s[3], 0, 0, 6.283);
  g.fill();
});
