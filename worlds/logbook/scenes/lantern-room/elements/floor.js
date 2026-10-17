const lamp = e.state.lamp ?? 0.7,
  sh = e.state.shutter || 0,
  fl = lamp * (1 - 0.75 * sh);
g.save();
g.beginPath();
g.arc(0, 0, 2.82, 0, 7);
g.clip();
g.fillStyle = "#16100b";
g.fillRect(-2.9, -2.9, 5.8, 5.8);
for (let i = -14; i <= 14; i++) {
  const x = i * 0.2;
  g.fillStyle = `rgba(${60 + e.rnd() * 20},${40 + e.rnd() * 12},${24 + e.rnd() * 8},0.35)`;
  g.fillRect(x + 0.006, -2.9, 0.188, 5.8);
  for (let k = 0; k < 5; k++) {
    g.strokeStyle = "rgba(0,0,0,0.25)";
    g.lineWidth = 0.004;
    const y = -2.9 + e.rnd() * 5.8;
    g.beginPath();
    g.moveTo(x + 0.02 + e.rnd() * 0.15, y);
    g.lineTo(x + 0.02 + e.rnd() * 0.15, y + 0.4 + e.rnd());
    g.stroke();
  }
}
g.strokeStyle = "rgba(120,90,60,0.12)";
g.lineWidth = 0.5;
g.beginPath();
g.arc(0, 0, 1.3, 0, 7);
g.stroke();
for (let i = 0; i < 6; i++) {
  const x = (e.rnd() - 0.5) * 3,
    y = (e.rnd() - 0.5) * 3,
    r = 0.05 + e.rnd() * 0.18;
  g.fillStyle = "rgba(10,6,3,0.3)";
  g.beginPath();
  g.ellipse(x, y, r, r * 0.7, e.rnd() * 3, 0, 7);
  g.fill();
}
const gr = g.createRadialGradient(0, 0, 0.3, 0, 0, 2.8);
gr.addColorStop(0, `rgba(255,170,90,${0.38 * fl})`);
gr.addColorStop(0.5, `rgba(200,120,60,${0.14 * fl})`);
gr.addColorStop(1, "rgba(0,0,0,0.35)");
g.fillStyle = gr;
g.fillRect(-2.9, -2.9, 5.8, 5.8);
g.fillStyle = "rgba(8,6,4,0.7)";
g.beginPath();
g.arc(0, 0, 0.45, 0, 7);
g.fill();
const hx = -1.7,
  hy = 1.5;
g.fillStyle = "#060403";
g.beginPath();
g.arc(hx, hy, 0.45, 0, 7);
g.fill();
const hg = g.createRadialGradient(hx, hy, 0, hx, hy, 0.45);
hg.addColorStop(0, "rgba(255,170,80,0.16)");
hg.addColorStop(1, "rgba(255,170,80,0)");
g.fillStyle = hg;
g.fill();
g.strokeStyle = "rgba(150,110,60,0.35)";
g.lineWidth = 0.03;
g.stroke();
g.restore();
