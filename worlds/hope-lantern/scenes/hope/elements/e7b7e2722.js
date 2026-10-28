var W = e.aspect,
  mx = 0.74 * W,
  my = 0.3,
  R = 0.022;
var h = g.createRadialGradient(mx, my, R, mx, my, R * 10);
h.addColorStop(0, "rgba(236,226,206,0.26)");
h.addColorStop(0.18, "rgba(200,198,215,0.11)");
h.addColorStop(0.5, "rgba(160,166,200,0.04)");
h.addColorStop(1, "rgba(150,160,200,0)");
g.fillStyle = h;
g.fillRect(mx - R * 10, my - R * 10, R * 20, R * 20);
var d = g.createRadialGradient(mx - R * 0.35, my - R * 0.35, R * 0.1, mx, my, R);
d.addColorStop(0, "#f8f0de");
d.addColorStop(0.75, "#ede1c6");
d.addColorStop(1, "#d9cbb0");
g.fillStyle = d;
g.beginPath();
g.arc(mx, my, R, 0, 6.2832);
g.fill();
g.save();
g.beginPath();
g.arc(mx, my, R, 0, 6.2832);
g.clip();
g.fillStyle = "rgba(140,138,150,0.22)";
var m = [
  [-0.3, -0.25, 0.32, 0.22, 0.4],
  [0.2, -0.1, 0.26, 0.3, -0.3],
  [-0.05, 0.3, 0.36, 0.2, 0.2],
  [0.38, 0.35, 0.16, 0.14, 0],
  [-0.45, 0.15, 0.14, 0.18, 0.5],
];
for (var i = 0; i < m.length; i++) {
  g.beginPath();
  g.ellipse(mx + m[i][0] * R, my + m[i][1] * R, m[i][2] * R, m[i][3] * R, m[i][4], 0, 6.2832);
  g.fill();
}
var sh = g.createLinearGradient(mx - R, my - R, mx + R, my + R);
sh.addColorStop(0, "rgba(40,44,80,0.25)");
sh.addColorStop(0.4, "rgba(40,44,80,0)");
g.fillStyle = sh;
g.fillRect(mx - R, my - R, 2 * R, 2 * R);
g.restore();
