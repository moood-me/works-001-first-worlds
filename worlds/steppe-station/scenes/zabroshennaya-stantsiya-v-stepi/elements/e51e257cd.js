var t = e.t;
g.fillStyle = "rgba(26,18,14,0.3)";
g.beginPath();
g.moveTo(-2.2, 0);
g.lineTo(2.2, 0);
g.lineTo(-1.4, 0.85);
g.lineTo(-4.8, 0.85);
g.closePath();
g.fill();
g.fillStyle = "#3b3631";
g.fillRect(-1.6, -0.42, 0.55, 0.42);
g.fillStyle = "#34302b";
g.fillRect(1.0, -0.4, 0.6, 0.4);
var cg = g.createLinearGradient(0, -2.2, 0, -0.3);
cg.addColorStop(0, "#8c5030");
cg.addColorStop(0.15, "#5c3423");
cg.addColorStop(0.6, "#40261a");
cg.addColorStop(1, "#26170f");
g.fillStyle = cg;
g.beginPath();
g.moveTo(-1.85, -2.15);
g.lineTo(1.85, -2.15);
g.ellipse(1.85, -1.25, 0.32, 0.9, 0, -Math.PI / 2, Math.PI / 2);
g.lineTo(-1.85, -0.35);
g.ellipse(-1.85, -1.25, 0.32, 0.9, 0, Math.PI / 2, Math.PI * 1.5);
g.closePath();
g.fill();
for (var i = 0; i < 7; i++) {
  var px = -1.8 + e.rnd() * 3.6,
    py = -1.9 + e.rnd() * 1.3,
    r = 0.1 + e.rnd() * 0.25;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(130,66,36,0.35)" : "rgba(30,18,12,0.3)";
  g.beginPath();
  g.ellipse(px, py, r * 1.4, r * 0.7, e.rnd() - 0.5, 0, 6.283);
  g.fill();
}
g.strokeStyle = "rgba(22,13,9,0.45)";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-0.7, -2.14);
g.lineTo(-0.7, -0.36);
g.moveTo(0.65, -2.14);
g.lineTo(0.65, -0.36);
g.stroke();
g.strokeStyle = "rgba(24,14,10,0.25)";
g.lineWidth = 0.05;
for (var i = 0; i < 6; i++) {
  var px = -1.6 + e.rnd() * 3.2;
  g.beginPath();
  g.moveTo(px, -2.1);
  g.lineTo(px + 0.02, -1.4 - e.rnd() * 0.7);
  g.stroke();
}
g.fillStyle = "rgba(196,168,128,0.16)";
g.fillRect(-1.55, -1.45, 0.14, 0.3);
g.fillRect(-1.33, -1.45, 0.14, 0.3);
g.fillRect(-1.11, -1.45, 0.05, 0.3);
g.fillRect(-0.99, -1.45, 0.14, 0.3);
g.fillStyle = "#3a2217";
g.beginPath();
g.ellipse(0.2, -2.18, 0.28, 0.1, 0, Math.PI, 0);
g.fill();
g.fillRect(-0.08, -2.3, 0.56, 0.14);
g.save();
g.translate(0.48, -2.3);
g.rotate(-1.15 + 0.03 * Math.sin(t * 0.9));
g.fillStyle = "#4a2c1d";
g.fillRect(0, -0.03, 0.55, 0.05);
g.restore();
g.strokeStyle = "rgba(255,185,115,0.6)";
g.lineWidth = e.px * 1.8;
g.beginPath();
g.moveTo(-1.85, -2.15);
g.lineTo(1.85, -2.15);
g.ellipse(1.85, -1.25, 0.32, 0.9, 0, -Math.PI / 2, 0.3);
g.stroke();
g.strokeStyle = "#6f5e40";
g.lineWidth = 0.015;
for (var i = 0; i < 12; i++) {
  var bx = -2 + e.rnd() * 4,
    h = 0.12 + e.rnd() * 0.3,
    l = 0.05 + 0.03 * Math.sin(t * 1.1 + i * 0.8);
  g.beginPath();
  g.moveTo(bx, 0.02);
  g.quadraticCurveTo(bx + l * 0.3, -h * 0.6, bx + l + 0.04, -h);
  g.stroke();
}
