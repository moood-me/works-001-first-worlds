var S = e.state || {},
  t = e.t,
  L = S.lamps == null ? 1 : S.lamps,
  F = Math.min(1, (S.flicker || 0) * 1.3);
function br(i) {
  var n = Math.sin(t * 19.3 + i * 4.7) * Math.sin(t * 2.9 + i * 2.1) * Math.sin(t * 0.53 + i * 1.9);
  var drop = n > 1 - F * 0.8 ? 0.15 : 1;
  return L * drop * (1 - F * 0.25 * (0.5 + 0.5 * Math.sin(t * 37 + i * 7)));
}
var X = [5.2, 7.8];
for (var i = 0; i < 2; i++) {
  var x = X[i],
    b = br(i + 2),
    y = -3.1;
  g.fillStyle = "#121016";
  g.fillRect(x - 0.04, -2.95, 0.08, 0.1);
  g.beginPath();
  g.moveTo(x - 0.13, -2.95);
  g.lineTo(x + 0.13, -2.95);
  g.lineTo(x + 0.1, -3.28);
  g.lineTo(x - 0.1, -3.28);
  g.closePath();
  g.fill();
  var lg = g.createRadialGradient(x, y, 0, x, y, 0.16);
  lg.addColorStop(0, b > 0.5 ? "#fff0c8" : "#5a4434");
  lg.addColorStop(1, b > 0.5 ? "#e8a050" : "#30241c");
  g.fillStyle = lg;
  g.fillRect(x - 0.08, -3.22, 0.16, 0.22);
  g.fillStyle = "#121016";
  g.fillRect(x - 0.01, -3.22, 0.02, 0.22);
  g.beginPath();
  g.moveTo(x - 0.17, -3.28);
  g.lineTo(x, -3.42);
  g.lineTo(x + 0.17, -3.28);
  g.fill();
  e.light(x, y, 2.6, "#ffbe6a", 0.75 * b);
}
