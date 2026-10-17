var X = [-17, 9, 24];
for (var i = 0; i < 3; i++) {
  var x = X[i];
  g.fillStyle = "#14152a";
  g.fillRect(x - 0.06, -3.4, 0.12, 3.4);
  g.fillStyle = "#ffd9a0";
  g.beginPath();
  g.arc(x, -3.55, 0.13, 0, Math.PI * 2);
  g.fill();
  e.light(x, -3.55, 1.8, "#ffc878", 0.45);
  g.save();
  g.translate(x, 0);
  g.scale(1, 0.15);
  var p = g.createRadialGradient(0, 0, 0, 0, 0, 2.4);
  p.addColorStop(0, "rgba(255,200,130,0.14)");
  p.addColorStop(1, "rgba(255,200,130,0)");
  g.fillStyle = p;
  g.beginPath();
  g.arc(0, 0, 2.4, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
