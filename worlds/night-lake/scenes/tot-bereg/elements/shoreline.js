const t = e.t;
const E = (x) =>
  -0.25 + 0.18 * Math.sin(t * 0.55 + x * 0.21) + 0.07 * Math.sin(t * 0.9 + x * 0.63 + 1) + 0.04 * Math.sin(x * 1.7);
g.beginPath();
g.moveTo(-50, 0.8);
for (let x = -50; x <= 50; x += 1) g.lineTo(x, -0.7 + 0.05 * Math.sin(x * 0.8));
g.lineTo(50, 0.8);
g.closePath();
g.fillStyle = "rgba(8,12,24,0.22)";
g.fill();
g.beginPath();
g.moveTo(-50, 0.8);
for (let x = -50; x <= 50; x += 0.5) g.lineTo(x, E(x));
g.lineTo(50, 0.8);
g.closePath();
const gr = g.createLinearGradient(0, -0.6, 0, 0.8);
gr.addColorStop(0, "rgba(22,34,62,0.55)");
gr.addColorStop(1, "rgba(18,30,57,0.95)");
g.fillStyle = gr;
g.fill();
g.lineCap = "round";
g.lineWidth = 0.02;
for (let x = -50; x < 50; x += 0.5) {
  const a = Math.max(0, 0.32 * Math.sin(t * 0.4 + x * 0.37) * Math.sin(t * 0.23 + x * 0.11 + 2));
  if (a < 0.02) continue;
  g.strokeStyle = "rgba(170,190,230," + a + ")";
  g.beginPath();
  g.moveTo(x, E(x));
  g.lineTo(x + 0.5, E(x + 0.5));
  g.stroke();
}
