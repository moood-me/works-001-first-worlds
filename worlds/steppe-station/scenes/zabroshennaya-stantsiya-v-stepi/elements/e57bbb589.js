var t = e.t;
var gust = 0.5 + 0.5 * Math.sin(t * 0.31) * Math.sin(t * 0.17 + 1);
for (var i = 0; i < 14; i++) {
  var bx = (e.rnd() - 0.5) * 0.35,
    h = 0.35 + e.rnd() * 0.4,
    ph = e.rnd() * 6.28,
    c = e.rnd();
  var ang = 0.12 + 0.14 * gust + 0.05 * Math.sin(t * 1.4 + ph) + 0.03 * Math.sin(t * 3.1 + ph * 1.7) + bx * 0.6;
  var tx = bx + Math.sin(ang) * h,
    ty = -Math.cos(ang) * h;
  g.strokeStyle = c < 0.33 ? "#8a7a52" : c < 0.66 ? "#76663f" : "#9c8a5c";
  g.lineWidth = 0.012 + c * 0.006;
  g.beginPath();
  g.moveTo(bx, 0);
  g.quadraticCurveTo(bx + Math.sin(ang) * h * 0.3, -h * 0.55, tx, ty);
  g.stroke();
  if (c > 0.55) {
    g.fillStyle = "#b89a66";
    g.save();
    g.translate(tx, ty);
    g.rotate(ang);
    g.beginPath();
    g.ellipse(0, -0.03, 0.012, 0.05, 0, 0, 6.283);
    g.fill();
    g.restore();
  }
  g.strokeStyle = "rgba(255,196,130,0.5)";
  g.lineWidth = e.px;
  g.beginPath();
  g.moveTo(bx + Math.sin(ang) * h * 0.6 + 0.004, -h * 0.6);
  g.lineTo(tx + 0.004, ty);
  g.stroke();
}
