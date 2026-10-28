const w = e.state.woman,
  L = e.state.lamp || 0;
const br = Math.sin(e.t * 1.1) * 0.012 + Math.sin(e.t * 0.37) * 0.008;
g.fillStyle = L > 0 ? "rgba(34,22,16,0.93)" : "rgba(70,78,90,0.35)";
if (w === "window") {
  g.save();
  g.beginPath();
  g.rect(1.4, -3.4, 1.6, 1.5);
  g.clip();
  const cx = 2.05 + Math.sin(e.t * 0.13) * 0.03;
  g.beginPath();
  g.moveTo(cx - 0.45, -1.9);
  g.quadraticCurveTo(cx - 0.42, -2.33 + br, cx - 0.12, -2.42 + br);
  g.lineTo(cx + 0.12, -2.42 + br);
  g.quadraticCurveTo(cx + 0.42, -2.33 + br, cx + 0.45, -1.9);
  g.fill();
  g.beginPath();
  g.ellipse(cx + 0.02, -2.63 + br, 0.13, 0.17, 0.15, 0, 7);
  g.fill();
  g.beginPath();
  g.moveTo(cx - 0.1, -2.76 + br);
  g.quadraticCurveTo(cx - 0.24, -2.45, cx - 0.2, -2.22);
  g.lineTo(cx - 0.02, -2.4);
  g.closePath();
  g.fill();
  g.beginPath();
  g.ellipse(cx + 0.4, -2.56 + br * 0.5, 0.06, 0.09, 0, 0, 7);
  g.fill();
  g.restore();
  e.at(cx, -2.85);
} else if (w === "door" && e.state.door) {
  const cx = -2.12;
  g.beginPath();
  g.ellipse(cx, -1.52 + br, 0.11, 0.14, 0.1, 0, 7);
  g.fill();
  g.beginPath();
  g.moveTo(cx - 0.17, -1.36 + br);
  g.quadraticCurveTo(cx - 0.28, -0.8, cx - 0.24, 0);
  g.lineTo(cx + 0.24, 0);
  g.quadraticCurveTo(cx + 0.28, -0.8, cx + 0.17, -1.36 + br);
  g.closePath();
  g.fill();
  e.at(cx, -1.75);
}
