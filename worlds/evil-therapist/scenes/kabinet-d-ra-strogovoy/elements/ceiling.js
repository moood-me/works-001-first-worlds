g.fillStyle = "#dfe6e1";
g.fillRect(-7, -2.25, 14, 4.5);
g.strokeStyle = "#c7d1cb";
g.lineWidth = 0.012;
for (var x = -6.9; x < 7; x += 0.6) {
  g.beginPath();
  g.moveTo(x, -2.25);
  g.lineTo(x, 2.25);
  g.stroke();
}
for (var y = -2.25; y < 2.3; y += 0.6) {
  g.beginPath();
  g.moveTo(-7, y);
  g.lineTo(7, y);
  g.stroke();
}
var f = e.state.flicker || 0,
  s = Math.sin(e.t * 0.61) + Math.sin(e.t * 1.37 + 1),
  dip = s > 1.75 ? 0.5 + 0.5 * Math.sin(e.t * 47) : 0,
  br = 1 - f * dip * 0.8;
var P = function (px, py) {
  var rg = g.createRadialGradient(px, py, 0.2, px, py, 1.4);
  rg.addColorStop(0, "rgba(245,255,248," + 0.45 * br + ")");
  rg.addColorStop(1, "rgba(245,255,248,0)");
  g.fillStyle = rg;
  g.fillRect(px - 1.5, py - 1.5, 3, 3);
  g.fillStyle = "#b9c5be";
  g.fillRect(px - 0.64, py - 0.34, 1.28, 0.68);
  g.fillStyle = "rgba(246,255,250," + (0.55 + 0.45 * br) + ")";
  g.fillRect(px - 0.6, py - 0.3, 1.2, 0.6);
  g.strokeStyle = "rgba(200,220,210,0.7)";
  g.lineWidth = 0.01;
  for (var i = 1; i < 4; i++) {
    g.beginPath();
    g.moveTo(px - 0.6 + i * 0.3, py - 0.3);
    g.lineTo(px - 0.6 + i * 0.3, py + 0.3);
    g.stroke();
  }
};
P(0, -0.85);
P(-2.4, -0.85);
P(2.4, -0.85);
P(0, 1.25);
