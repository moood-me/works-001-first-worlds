var S = e.state || {},
  t = e.t,
  L = S.lamps == null ? 1 : S.lamps,
  F = S.flicker || 0;
function br(i) {
  var n = Math.sin(t * 23.1 + i * 4.7) * Math.sin(t * 3.7 + i * 2.1) * Math.sin(t * 0.71 + i * 1.3);
  var drop = n > 1 - F * 0.7 ? 0.2 : 1;
  return L * drop * (1 - F * 0.2 * (0.5 + 0.5 * Math.sin(t * 41 + i * 9)));
}
var X = [-8, -1.5];
for (var i = 0; i < X.length; i++) {
  var x = X[i],
    b = br(i);
  g.fillStyle = "#141218";
  g.fillRect(x - 0.05, -3.4, 0.1, 3.4);
  g.fillRect(x - 0.14, -0.1, 0.28, 0.1);
  g.beginPath();
  g.moveTo(x - 0.18, -3.4);
  g.lineTo(x + 0.18, -3.4);
  g.lineTo(x + 0.1, -3.75);
  g.lineTo(x - 0.1, -3.75);
  g.closePath();
  g.fill();
  var lg = g.createRadialGradient(x, -3.55, 0, x, -3.55, 0.2);
  lg.addColorStop(0, b > 0.5 ? "#fff0c8" : "#6a5038");
  lg.addColorStop(1, b > 0.5 ? "#e8a050" : "#3a2a20");
  g.fillStyle = lg;
  g.fillRect(x - 0.12, -3.68, 0.24, 0.24);
  g.fillStyle = "#141218";
  g.beginPath();
  g.moveTo(x - 0.24, -3.75);
  g.lineTo(x, -3.95);
  g.lineTo(x + 0.24, -3.75);
  g.fill();
  g.fillStyle = "rgba(255,190,120," + 0.25 * b + ")";
  g.fillRect(x + 0.03, -3.35, 0.015, 3.2);
  e.light(x, -3.55, 3.2, "#ffc070", 0.8 * b);
  var pool = g.createRadialGradient(x, 0, 0, x, 0, 2.6);
  pool.addColorStop(0, "rgba(255,196,120," + 0.2 * b + ")");
  pool.addColorStop(1, "rgba(255,196,120,0)");
  g.save();
  g.translate(x, 0);
  g.scale(1, 0.18);
  g.fillStyle = pool;
  g.beginPath();
  g.arc(0, 0, 2.6, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
