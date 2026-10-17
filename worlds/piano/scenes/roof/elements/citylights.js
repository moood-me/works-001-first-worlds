var t = e.t,
  G = e.state.cityGlow == null ? 0.6 : e.state.cityGlow;
var B = [
  [150, -125],
  [-260, -79],
  [380, -71],
  [-520, -61],
];
for (var i = 0; i < B.length; i++) {
  var b = Math.pow(Math.max(0, Math.sin(t * 1.3 + i * 1.9)), 10);
  g.fillStyle = "rgba(255,90,74," + (0.25 + 0.75 * b) + ")";
  g.fillRect(B[i][0] - 0.8, B[i][1] - 0.8, 1.6, 1.6);
  if (b > 0.02) e.light(B[i][0], B[i][1], 9, "#ff5a4a", 0.3 * b);
}
for (var j = 0; j < 44; j++) {
  var dir = j % 2 ? 1 : -1,
    sp = 3 + e.rnd() * 4,
    x0 = e.rnd() * 1600,
    yy = dir > 0 ? 27 : 29.5;
  var x = ((((x0 + t * sp * dir) % 1600) + 1600) % 1600) - 800;
  g.fillStyle = dir > 0 ? "rgba(255,226,176," + (0.25 + 0.5 * G) + ")" : "rgba(255,100,80," + (0.2 + 0.45 * G) + ")";
  g.fillRect(x, yy, 1.8, 0.8);
}
