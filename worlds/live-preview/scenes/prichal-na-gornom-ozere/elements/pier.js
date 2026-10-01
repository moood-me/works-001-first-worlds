var R = e.rnd;
g.fillStyle = "#1f1b21";
g.fillRect(0.8, -7.5, 1.8, 15);
for (var y = -7.5; y < 7.5; y += 0.24) {
  var s = R();
  var c = 48 + Math.floor(s * 16);
  g.fillStyle = "rgb(" + c + "," + (c - 6) + "," + (c - 2) + ")";
  var j = (R() - 0.5) * 0.06;
  g.fillRect(0.8 + j, y + 0.02, 1.8 + (R() - 0.5) * 0.05, 0.2);
  if (R() < 0.5) {
    g.strokeStyle = "rgba(20,18,22,0.35)";
    g.lineWidth = 0.01;
    g.beginPath();
    g.moveTo(0.85 + R() * 0.6, y + 0.06 + R() * 0.1);
    g.lineTo(1.4 + R() * 1.1, y + 0.08 + R() * 0.08);
    g.stroke();
  }
}
g.fillStyle = "rgba(18,16,20,0.55)";
for (var y = -7.3; y < 7.5; y += 2.2) {
  g.beginPath();
  g.arc(0.95, y, 0.025, 0, 6.283);
  g.arc(2.45, y, 0.025, 0, 6.283);
  g.fill();
}
var lg = g.createRadialGradient(2.5, -7, 0, 2.5, -7, 6);
lg.addColorStop(0, "rgba(255,184,112,0.42)");
lg.addColorStop(0.4, "rgba(255,170,100,0.14)");
lg.addColorStop(1, "rgba(255,170,100,0)");
g.fillStyle = lg;
g.fillRect(0.8, -7.5, 1.8, 15);
var cg = g.createLinearGradient(0, -7.5, 0, 7.5);
cg.addColorStop(0, "rgba(120,120,160,0)");
cg.addColorStop(1, "rgba(40,44,70,0.35)");
g.fillStyle = cg;
g.fillRect(0.8, -7.5, 1.8, 15);
