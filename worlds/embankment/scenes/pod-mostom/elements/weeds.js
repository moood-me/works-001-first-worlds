var t = e.t,
  L = e.state.lamp ? 1 : 0;
g.lineCap = "round";
for (var i = 0; i < 9; i++) {
  var a = Math.PI * (1.12 + e.rnd() * 0.76),
    px = 3.4 * Math.cos(a),
    py = -1.4 + 2.9 * Math.sin(a),
    len = 0.25 + e.rnd() * 0.8,
    ph = e.rnd() * 6.28,
    sw = Math.sin(t * 0.55 + ph) * 0.06 + Math.sin(t * 0.23 + ph * 2) * 0.04;
  g.strokeStyle = "rgba(30,38,32,0.95)";
  g.lineWidth = 0.015 + e.rnd() * 0.02;
  g.beginPath();
  g.moveTo(px, py);
  g.quadraticCurveTo(px + sw * 0.4, py + len * 0.5, px + sw, py + len);
  g.stroke();
}
var cy = (t * 0.55) % 1,
  dx = 0.35,
  dy = -4.25 + cy * cy * 4.25;
if (cy < 0.08) {
  g.fillStyle = "rgba(200,206,230,0.6)";
  g.beginPath();
  g.arc(dx, -4.27, 0.025 + cy * 0.2, 0, 6.283);
  g.fill();
} else {
  g.fillStyle = L ? "rgba(255,220,170,0.75)" : "rgba(190,200,230,0.6)";
  g.beginPath();
  g.ellipse(dx, dy, 0.014, 0.035, 0, 0, 6.283);
  g.fill();
}
