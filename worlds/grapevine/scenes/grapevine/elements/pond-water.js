g.save();
g.beginPath();
g.ellipse(0, 0, 6.9, 4.4, 0, 0, 7);
g.clip();
const w = g.createLinearGradient(0, -4.4, 0, 4.4);
w.addColorStop(0, "#6aa9b6");
w.addColorStop(1, "#3d7f8e");
g.fillStyle = w;
g.fillRect(-7, -4.5, 14, 9);
// the willow reflected, soft
g.fillStyle = "rgba(70,110,50,0.35)";
g.beginPath();
g.ellipse(0.8, -3.6, 3.5, 1.4, 0, 0, 7);
g.fill();
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 40; i++) {
  const x = -6 + ((i * 3.77 + e.t * (0.3 + (i % 4) * 0.1)) % 12),
    y = -3.8 + ((i * 1.93) % 7.6);
  const a = (0.5 + 0.5 * Math.sin(e.t * 3 + i)) * 0.35;
  g.strokeStyle = `rgba(255,250,230,${a})`;
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + 0.4 + (i % 3) * 0.2, y);
  g.stroke();
}
g.globalCompositeOperation = "source-over";
const rr = (e.t * 0.7) % 3;
g.strokeStyle = `rgba(255,255,255,${0.45 * (1 - rr / 3)})`;
g.lineWidth = 0.05;
g.beginPath();
g.ellipse(2.4, 1.2, 0.2 + rr, 0.2 + rr, 0, 0, 7);
g.stroke();
g.restore();
for (const [x, y, r, i] of [
  [-4.2, 1.6, 0.8, 0],
  [-3.1, 2.4, 0.55, 1],
  [4.4, -1.3, 0.7, 2],
]) {
  const b = Math.sin(e.t * 1.1 + i) * 0.05;
  g.fillStyle = "#4f8f45";
  g.beginPath();
  g.ellipse(x, y + b, r, r, 0, 0.25, Math.PI * 2 - 0.1);
  g.lineTo(x, y + b);
  g.fill();
}
g.fillStyle = "#f7c5d6";
g.beginPath();
g.arc(-4.2, 1.5, 0.28, 0, 7);
g.fill();
g.fillStyle = "#ffe07a";
g.beginPath();
g.arc(-4.2, 1.5, 0.1, 0, 7);
g.fill();
