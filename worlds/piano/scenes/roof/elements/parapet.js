var G = e.state.cityGlow == null ? 0.6 : e.state.cityGlow;
g.fillStyle = "#2a2130";
g.fillRect(-16, -0.92, 32, 0.95);
var cols = ["#3a2a30", "#40303a", "#33262c", "#45333a", "#2f242b"];
var ps = cols.map(function () {
  return new Path2D();
});
for (var r = 0; r < 12; r++) {
  var y = -0.92 + r * 0.077;
  var off = (r % 2) * 0.12;
  for (var x = -16 + off; x < 16; x += 0.24) {
    ps[Math.floor(e.rnd() * 5)].rect(x, y + 0.006, 0.228, 0.066);
  }
}
for (var k = 0; k < 5; k++) {
  g.fillStyle = cols[k];
  g.fill(ps[k]);
}
var sg = g.createLinearGradient(0, -0.92, 0, 0);
sg.addColorStop(0, "rgba(14,14,28,0.35)");
sg.addColorStop(1, "rgba(10,10,20,0.6)");
g.fillStyle = sg;
g.fillRect(-16, -0.92, 32, 0.95);
var hg = g.createLinearGradient(-16, 0, 16, 0);
hg.addColorStop(0, "rgba(6,6,14,0.6)");
hg.addColorStop(0.3, "rgba(6,6,14,0)");
hg.addColorStop(0.7, "rgba(6,6,14,0)");
hg.addColorStop(1, "rgba(6,6,14,0.6)");
g.fillStyle = hg;
g.fillRect(-16, -0.92, 32, 0.95);
g.fillStyle = "#363849";
g.fillRect(-16, -1.0, 32, 0.09);
g.fillStyle = "rgba(190,180,220,0.4)";
g.fillRect(-16, -1.0, 32, 0.012);
g.fillStyle = "rgba(255,170,120," + 0.18 * G + ")";
g.fillRect(-16, -1.0, 32, 0.005);
g.fillStyle = "rgba(0,0,0,0.35)";
g.fillRect(-16, -0.91, 32, 0.03);
g.fillStyle = "rgba(5,5,12,0.45)";
g.fillRect(-16, 0, 32, 0.06);
g.fillStyle = "#4a3029";
g.beginPath();
g.moveTo(-4.6, -1.0);
g.lineTo(-4.62, -1.2);
g.lineTo(-4.28, -1.2);
g.lineTo(-4.3, -1.0);
g.closePath();
g.fill();
g.strokeStyle = "#2a2422";
g.lineWidth = 0.012;
g.beginPath();
for (var j = 0; j < 5; j++) {
  var a = -0.5 + j * 0.25 + (e.rnd() - 0.5) * 0.1;
  g.moveTo(-4.45, -1.2);
  g.quadraticCurveTo(-4.45 + a * 0.1, -1.35, -4.45 + a * 0.3, -1.42 - e.rnd() * 0.1);
}
g.stroke();
g.fillStyle = "rgba(200,180,215,0.25)";
g.fillRect(-4.62, -1.2, 0.04, 0.2);
