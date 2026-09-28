const W = e.aspect,
  cx = W * 0.86,
  b = 0.605,
  hw = 0.15,
  h = 0.115;
g.fillStyle = "#aaaea9";
g.beginPath();
g.moveTo(cx - hw, b);
g.bezierCurveTo(cx - hw, b - h * 0.78, cx - hw * 0.55, b - h, cx, b - h);
g.bezierCurveTo(cx + hw * 0.55, b - h, cx + hw, b - h * 0.78, cx + hw, b);
g.closePath();
g.fill();
const lg = g.createLinearGradient(cx - hw, 0, cx + hw, 0);
lg.addColorStop(0, "rgba(228,228,220,0.22)");
lg.addColorStop(0.45, "rgba(228,228,220,0)");
lg.addColorStop(1, "rgba(90,96,94,0.14)");
g.fillStyle = lg;
g.fill();
g.strokeStyle = "rgba(125,131,128,0.3)";
g.lineWidth = 0.0011;
for (let k = 1; k < 4; k++) {
  const s = 1 - k * 0.07;
  g.beginPath();
  g.moveTo(cx - hw * s, b);
  g.bezierCurveTo(cx - hw * s, b - h * s * 0.78, cx - hw * s * 0.55, b - h * s, cx, b - h * s);
  g.bezierCurveTo(cx + hw * s * 0.55, b - h * s, cx + hw * s, b - h * s * 0.78, cx + hw * s, b);
  g.stroke();
}
const fg = g.createLinearGradient(0, b - 0.07, 0, b);
fg.addColorStop(0, "rgba(188,192,182,0)");
fg.addColorStop(1, "rgba(188,192,182,0.7)");
g.fillStyle = fg;
g.fillRect(cx - hw - 0.02, b - 0.07, 2 * hw + 0.04, 0.07);
