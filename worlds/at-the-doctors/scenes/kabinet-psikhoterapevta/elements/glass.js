var s = e.state || {},
  lv = s.water == null ? 0.8 : s.water,
  t = e.t,
  h = 0.12,
  w = 0.032;
g.fillStyle = "rgba(200,210,215,0.12)";
g.beginPath();
g.moveTo(-w, -h);
g.lineTo(-w * 0.85, 0);
g.lineTo(w * 0.85, 0);
g.lineTo(w, -h);
g.closePath();
g.fill();
var wy = -h * lv * 0.95;
if (lv > 0.02) {
  g.fillStyle = "rgba(150,170,175,0.24)";
  g.beginPath();
  g.moveTo(-w + 0.003, wy);
  g.lineTo(-w * 0.85 + 0.003, -0.004);
  g.lineTo(w * 0.85 - 0.003, -0.004);
  g.lineTo(w - 0.003, wy);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(220,230,235,0.35)";
  g.lineWidth = 0.0025;
  g.beginPath();
  g.ellipse(0, wy, w - 0.003, 0.006, 0, 0, 6.283);
  g.stroke();
  g.fillStyle = "rgba(255,210,150,0.55)";
  g.beginPath();
  g.ellipse(0.012 + Math.sin(t * 0.4) * 0.003, wy, 0.008, 0.002, 0, 0, 6.283);
  g.fill();
}
g.strokeStyle = "rgba(225,230,235,0.4)";
g.lineWidth = 0.003;
g.beginPath();
g.ellipse(0, -h, w, 0.007, 0, 0, 6.283);
g.stroke();
g.beginPath();
g.moveTo(-w, -h);
g.lineTo(-w * 0.85, 0);
g.moveTo(w, -h);
g.lineTo(w * 0.85, 0);
g.stroke();
var gl = 0.5 + 0.2 * Math.sin(t * 0.7);
g.strokeStyle = "rgba(255,215,160," + gl.toFixed(2) + ")";
g.lineWidth = 0.005;
g.beginPath();
g.moveTo(w * 0.75, -h * 0.85);
g.lineTo(w * 0.68, -h * 0.15);
g.stroke();
g.strokeStyle = "rgba(200,210,215,0.4)";
g.lineWidth = 0.003;
g.beginPath();
g.ellipse(0, 0, w * 0.85, 0.006, 0, 0, 6.283);
g.stroke();
