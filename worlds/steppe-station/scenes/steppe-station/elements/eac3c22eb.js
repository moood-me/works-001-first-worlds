var t = e.t;
g.fillStyle = "rgba(26,18,14,0.3)";
g.beginPath();
g.moveTo(-1.6, 0);
g.lineTo(1.6, 0);
g.lineTo(-1.6, 0.75);
g.lineTo(-4.8, 0.75);
g.closePath();
g.fill();
g.save();
g.transform(1, 0, -0.06, 1, 0, 0);
g.fillStyle = "#16110d";
g.fillRect(-1.5, -2.3, 3, 2.3);
var bc = ["#5a4c3e", "#4e4236", "#665846", "#534639", "#5f5040", "#483d33"];
var x = -1.5;
while (x < 1.48) {
  var w = 0.15 + e.rnd() * 0.09,
    dh = e.rnd() * 0.14,
    c = bc[Math.floor(e.rnd() * 6)],
    miss = e.rnd() < 0.1;
  var h = 2.28 - (x + 1.5) * 0.13 - dh;
  if (!miss) {
    g.fillStyle = c;
    g.fillRect(x, -h, w - 0.018, h);
    g.fillStyle = "rgba(18,13,10,0.3)";
    g.fillRect(x + w - 0.05, -h, 0.03, h);
  }
  x += w;
}
g.fillStyle = "#100c09";
g.fillRect(-1.15, -1.9, 0.78, 1.9);
g.save();
g.translate(-1.15, -1.9);
g.rotate(0.1 + 0.015 * Math.sin(t * 0.6));
g.fillStyle = "#6a5a47";
g.fillRect(0, 0, 0.74, 1.84);
g.strokeStyle = "rgba(20,15,10,0.4)";
g.lineWidth = 0.02;
for (var i = 1; i < 4; i++) {
  g.beginPath();
  g.moveTo(i * 0.185, 0);
  g.lineTo(i * 0.185, 1.84);
  g.stroke();
}
g.beginPath();
g.moveTo(0.05, 0.2);
g.lineTo(0.69, 1.6);
g.stroke();
g.restore();
g.fillStyle = "#2e2721";
g.beginPath();
g.moveTo(-1.75, -2.3);
g.lineTo(0.1, -2.06);
g.lineTo(0.1, -1.98);
g.lineTo(-1.75, -2.22);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,182,112,0.5)";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(-1.75, -2.3);
g.lineTo(0.1, -2.06);
g.moveTo(1.47, -1.95);
g.lineTo(1.47, 0);
g.stroke();
var la = -(
  0.05 +
  0.04 * Math.sin(t * 0.6) +
  0.06 * Math.max(0, Math.sin(t * 0.37 + 1)) * (0.6 + 0.4 * Math.sin(t * 6.3))
);
g.save();
g.translate(0.1, -2.06);
g.rotate(0.13 + la);
g.fillStyle = "#3a312a";
g.fillRect(0, -0.02, 1.75, 0.08);
g.strokeStyle = "rgba(20,15,10,0.35)";
g.lineWidth = 0.015;
for (var i = 1; i < 9; i++) {
  g.beginPath();
  g.moveTo(i * 0.2, -0.02);
  g.lineTo(i * 0.2, 0.06);
  g.stroke();
}
g.strokeStyle = "rgba(255,182,112,0.5)";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(0, -0.02);
g.lineTo(1.75, -0.02);
g.stroke();
g.restore();
g.restore();
g.strokeStyle = "#6f5e40";
g.lineWidth = 0.015;
for (var i = 0; i < 14; i++) {
  var bx = -1.6 + e.rnd() * 3.3,
    h = 0.12 + e.rnd() * 0.25,
    l = 0.05 + 0.03 * Math.sin(t * 1.2 + i);
  g.beginPath();
  g.moveTo(bx, 0.02);
  g.quadraticCurveTo(bx + l * 0.3, -h * 0.6, bx + l + 0.04, -h);
  g.stroke();
}
