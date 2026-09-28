g.strokeStyle = "#4e433a";
g.lineCap = "round";
function br(x, y, a, l, w, d) {
  const x2 = x + Math.cos(a) * l,
    y2 = y + Math.sin(a) * l;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + Math.cos(a + 0.3) * l * 0.5, y + Math.sin(a + 0.3) * l * 0.5, x2, y2);
  g.stroke();
  if (d > 0) {
    for (let i = 0; i < 2; i++) {
      br(x2, y2, a + (i ? 0.42 : -0.48) + (e.rnd() - 0.5) * 0.4, l * (0.62 + e.rnd() * 0.15), w * 0.62, d - 1);
    }
  }
}
br(0, 0, -Math.PI / 2 + 0.08, 2.8, 0.45, 5);
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(0.15, -2.3);
g.quadraticCurveTo(1.1, -2.5, 2.3, -3.1);
g.stroke();
const hm = Math.sin(e.t * 0.4) * 0.05 + Math.sin(e.t * 0.17) * 0.04;
g.save();
g.translate(1.49, -2.75);
g.fillStyle = "#352c26";
g.beginPath();
g.moveTo(-0.28, 0.1);
g.bezierCurveTo(-0.4, -0.35, -0.15, -0.7, 0.12, -0.62);
g.bezierCurveTo(0.3, -0.5, 0.3, -0.1, 0.12, 0.05);
g.lineTo(-0.05, 0.35);
g.lineTo(-0.2, 0.35);
g.closePath();
g.fill();
g.fillStyle = "#d8cbb8";
g.beginPath();
g.ellipse(0.1, -0.57, 0.09, 0.05, 0, 0, 6.2832);
g.fill();
g.strokeStyle = "#8a7466";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.1, -0.58);
g.quadraticCurveTo(0.28, -0.62 + hm, 0.3, -0.5 + hm);
g.stroke();
g.fillStyle = "#9b8474";
g.beginPath();
g.ellipse(0.32, -0.49 + hm, 0.06, 0.04, 0.3, 0, 6.2832);
g.fill();
g.restore();
