var t = e.t,
  S = e.state.surf_height || 0,
  W = e.state.path_wetness || 0;
function rock(x, base, h, w, dark) {
  var pts = [];
  for (var k = 0; k <= 6; k++) {
    var an = Math.PI - (k * Math.PI) / 6;
    pts.push([x + Math.cos(an) * w * (0.85 + e.rnd() * 0.3), base - Math.sin(an) * h * (0.8 + e.rnd() * 0.3)]);
  }
  g.beginPath();
  g.moveTo(pts[0][0], base + 0.4);
  for (var k = 0; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
  g.lineTo(pts[6][0], base + 0.4);
  g.closePath();
  var gr = g.createLinearGradient(0, base - h, 0, base + 0.4);
  gr.addColorStop(0, dark ? "#1e2538" : "#283149");
  gr.addColorStop(1, "#0c1019");
  g.fillStyle = gr;
  g.fill();
  g.strokeStyle = "rgba(160,178,210," + (0.25 + 0.3 * W).toFixed(3) + ")";
  g.lineWidth = 0.07;
  g.beginPath();
  g.moveTo(pts[1][0], pts[1][1] + 0.03);
  g.lineTo(pts[2][0], pts[2][1] + 0.03);
  g.lineTo(pts[3][0], pts[3][1] + 0.03);
  g.stroke();
  var sx = pts[2][0] * 0.6 + pts[3][0] * 0.4,
    sy = pts[2][1] * 0.6 + pts[3][1] * 0.4 + h * 0.15;
  g.fillStyle = "rgba(170,188,220," + (0.03 + 0.07 * W).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(sx, sy, w * 0.2, h * 0.04, -0.2, 0, 6.283);
  g.fill();
}
for (var i = 0; i < 16; i++) {
  var x = -12 + i * 3 + (e.rnd() - 0.5) * 1.5,
    h = 0.8 + (Math.max(0, x + 6) / 40) * 4 + e.rnd() * 1.2,
    w = 1.4 + e.rnd() * 1.6;
  rock(x, -0.25, h, w, true);
}
for (var i = 0; i < 14; i++) {
  var x = -15 + i * 3.6 + (e.rnd() - 0.5) * 2,
    h = 0.4 + e.rnd() * 0.9,
    w = 0.9 + e.rnd() * 1.3;
  rock(x, 0.25, h, w, false);
}
var T = [
  [-8.6, 0.05],
  [-7.7, -0.25],
  [-6.9, -0.55],
  [-6.0, -0.8],
  [-5.2, -1.05],
  [-4.4, -1.3],
  [-3.7, -1.5],
];
for (var i = 0; i < T.length; i++) {
  var p = T[i];
  g.fillStyle = "#3a4560";
  g.beginPath();
  g.ellipse(p[0], p[1], 0.42, 0.09, 0, 0, 6.283);
  g.fill();
  g.fillStyle = "rgba(8,10,18,0.7)";
  g.fillRect(p[0] - 0.38, p[1] + 0.05, 0.76, 0.12);
  g.fillStyle = "rgba(190,205,232," + (0.1 + 0.45 * W * (0.6 + 0.4 * Math.sin(t * 1.1 + i * 1.7))).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(p[0] - 0.05, p[1] - 0.02, 0.25, 0.035, 0, 0, 6.283);
  g.fill();
}
for (var i = 0; i < 34; i++) {
  var x = -16 + e.rnd() * 50,
    y = 0.3 + e.rnd() * 0.35,
    w = 0.5 + e.rnd() * 2,
    ph = e.rnd() * 6.283,
    f = 0.3 + e.rnd() * 0.4;
  var a = Math.max(0, Math.sin(t * f + ph)) * 0.5 * (0.35 + S);
  if (a < 0.02) continue;
  g.fillStyle = "rgba(200,212,235," + Math.min(0.8, a).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.5 + ph) * 0.3, y, w / 2, 0.07, 0, 0, 6.283);
  g.fill();
}
