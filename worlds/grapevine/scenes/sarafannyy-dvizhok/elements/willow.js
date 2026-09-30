const w = g.createLinearGradient(-0.5, 0, 0.5, 0);
w.addColorStop(0, "#6b4a2e");
w.addColorStop(1, "#4a321f");
g.fillStyle = w;
g.beginPath();
g.moveTo(-0.7, 0);
g.bezierCurveTo(-0.3, -1.5, -0.5, -3.5, -1.2, -5.5);
g.lineTo(-0.7, -5.6);
g.bezierCurveTo(0, -4, 0.2, -5, 0.8, -5.8);
g.lineTo(1.2, -5.6);
g.bezierCurveTo(0.5, -4, 0.4, -1.5, 0.9, 0);
g.closePath();
g.fill();
const layers = [
  ["#4f7a34", 0],
  ["#628f3e", 0.2],
  ["#7aa84a", 0.4],
  ["#98c15e", 0.6],
  ["#b8d77c", 0.8],
];
layers.forEach(([col, lift], li) => {
  for (let i = 0; i < 26 - li * 3; i++) {
    const a = 0.15 + e.rnd() * (Math.PI - 0.3),
      rr = 0.35 + e.rnd() * 0.65,
      x = Math.cos(a) * 4.6 * rr,
      y = -5.8 - Math.sin(a) * 3 * rr - lift + li * 0.1,
      s = 0.55 + e.rnd() * 0.5 - li * 0.05;
    g.fillStyle = col;
    g.beginPath();
    g.ellipse(x, y, s * 1.25, s * 0.85, (e.rnd() - 0.5) * 0.6, 0, 7);
    g.fill();
  }
});
// hanging strands, swaying
for (let i = 0; i < 40; i++) {
  const u = i / 39,
    x = -4.2 + u * 8.6,
    y0 = -5.2 + Math.sin(u * Math.PI) * -1.4 + e.rnd() * 0.8,
    len = 2.2 + Math.sin(u * Math.PI) * 2.6 + e.rnd() * 1.2,
    sw = Math.sin(e.t * 0.8 + i) * 0.15;
  g.strokeStyle = e.rnd() < 0.5 ? "rgba(122,168,74,0.8)" : "rgba(152,193,94,0.8)";
  g.lineWidth = 0.08;
  g.beginPath();
  g.moveTo(x, y0);
  g.quadraticCurveTo(x + sw * 0.5, y0 + len * 0.5, x + sw, y0 + len);
  g.stroke();
}
