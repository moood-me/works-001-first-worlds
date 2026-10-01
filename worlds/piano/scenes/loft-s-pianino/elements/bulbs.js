var Lt = e.state.lights == null ? 1 : e.state.lights;
var t = e.t;
var B = [
  [-0.5, 0.05, 0],
  [0, 0.3, 1.3],
  [0.48, -0.12, 2.6],
];
for (var i = 0; i < 3; i++) {
  var bx = B[i][0],
    by = B[i][1],
    ph = B[i][2];
  var sw = Math.sin(t * 0.37 + ph) * 0.012 + Math.sin(t * 0.23 + ph * 1.7) * 0.008;
  var x = bx + sw * (by + 2.4) * 0.5;
  g.strokeStyle = "#141010";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(bx, -2.4);
  g.quadraticCurveTo(bx, (by - 2.4) / 2, x, by - 0.1);
  g.stroke();
  g.fillStyle = "#1a1514";
  g.fillRect(x - 0.025, by - 0.12, 0.05, 0.07);
  var rg = g.createRadialGradient(x, by + 0.04, 0, x, by + 0.04, 0.08);
  rg.addColorStop(0, "rgba(255,230,180," + (0.25 + 0.7 * Lt) + ")");
  rg.addColorStop(0.6, "rgba(255,170,90," + (0.15 + 0.5 * Lt) + ")");
  rg.addColorStop(1, "rgba(160,110,70,0.35)");
  g.fillStyle = rg;
  g.beginPath();
  g.moveTo(x - 0.02, by - 0.05);
  g.bezierCurveTo(x - 0.07, by - 0.02, x - 0.07, by + 0.1, x, by + 0.11);
  g.bezierCurveTo(x + 0.07, by + 0.1, x + 0.07, by - 0.02, x + 0.02, by - 0.05);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(255,220,150," + (0.3 + 0.7 * Lt) + ")";
  g.lineWidth = 0.005;
  g.beginPath();
  g.moveTo(x - 0.015, by);
  g.lineTo(x - 0.008, by + 0.05);
  g.lineTo(x, by + 0.02);
  g.lineTo(x + 0.008, by + 0.05);
  g.lineTo(x + 0.015, by);
  g.stroke();
  var fl = 1 + 0.03 * Math.sin(t * 7.1 + ph) * Math.sin(t * 2.3);
  if (Lt > 0.01) {
    e.light(x, by + 0.04, 2.2, "#ffa955", 0.55 * Lt * fl);
  }
}
