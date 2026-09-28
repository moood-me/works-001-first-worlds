var T = Math.PI * 2,
  cx = e.aspect * 0.66,
  cy = 0.13,
  r = 0.052;
var p = 0.5 + 0.3 * Math.sin(e.t * 0.6) + 0.2 * Math.sin(e.t * 0.23);
var gl = g.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 4.5);
gl.addColorStop(0, "rgba(255,220,250,0.35)");
gl.addColorStop(0.35, "rgba(230,120,230,0.12)");
gl.addColorStop(1, "rgba(120,40,160,0)");
g.fillStyle = gl;
g.globalAlpha = 0.8 + 0.2 * p;
g.beginPath();
g.arc(cx, cy, r * 4.5, 0, T);
g.fill();
g.globalAlpha = 1;
var d = g.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.1, cx, cy, r);
d.addColorStop(0, "#ffffff");
d.addColorStop(0.6, "#f2f2ff");
d.addColorStop(1, "#e2c6f0");
g.fillStyle = d;
g.beginPath();
g.arc(cx, cy, r, 0, T);
g.fill();
g.save();
g.beginPath();
g.arc(cx, cy, r, 0, T);
g.clip();
var cr = [
  [-0.35, -0.1, 0.18],
  [0.25, 0.3, 0.12],
  [0.1, -0.4, 0.09],
  [-0.1, 0.45, 0.07],
  [0.45, -0.15, 0.1],
  [-0.5, 0.3, 0.06],
];
for (var i = 0; i < cr.length; i++) {
  g.fillStyle = "rgba(190,160,215,0.33)";
  g.beginPath();
  g.arc(cx + cr[i][0] * r, cy + cr[i][1] * r, cr[i][2] * r, 0, T);
  g.fill();
}
var pk = g.createLinearGradient(0, cy - r, 0, cy + r);
pk.addColorStop(0.45, "rgba(255,80,190,0)");
pk.addColorStop(1, "rgba(255,80,190,0.38)");
g.fillStyle = pk;
g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
g.restore();
