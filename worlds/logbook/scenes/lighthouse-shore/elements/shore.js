const T = e.state.tide ?? 0.35,
  sp = (u) => (Math.sqrt(u * u + 0.2) + u) / 2;
const D0 = (x) => 7.6 - 0.12 * (x - 1) + 2.52 * sp(1 - x),
  Dw = (x) => D0(x) - 3.2 * (T - 0.35),
  Yw = (x) => Math.max(-21, 20 - Dw(x));
g.beginPath();
g.moveTo(-50, 20.5);
g.lineTo(50, 20.5);
for (let x = 50; x >= -50; x -= 0.25) g.lineTo(x, Yw(x));
g.closePath();
const gr = g.createLinearGradient(0, -20, 0, 20);
gr.addColorStop(0, "#0e121b");
gr.addColorStop(1, "#090c12");
g.fillStyle = gr;
g.fill();
g.save();
g.clip();
for (let i = 0; i < 500; i++) {
  const D = 14 + e.rnd() * 28,
    x = -50 + e.rnd() * 46;
  g.fillStyle = e.rnd() < 0.4 ? "rgba(95,108,135,0.06)" : "rgba(0,0,0,0.3)";
  g.beginPath();
  g.ellipse(x, 20 - D, 0.4 + e.rnd() * 1.4, 0.3 + e.rnd() * 0.9, e.rnd() * 3, 0, 7);
  g.fill();
}
for (let i = 0; i < 2800; i++) {
  const D = 2 + 30 * Math.pow(e.rnd(), 2.2),
    y = 20 - D,
    x = (e.rnd() - 0.5) * (D * 2.3 + 4),
    r = (0.02 + 0.05 * e.rnd()) * (1 + D * 0.06),
    c = e.rnd(),
    rot = e.rnd() * 3;
  if (y < Yw(x) + 0.05) continue;
  g.fillStyle = c < 0.5 ? "rgba(22,27,37,0.9)" : c < 0.8 ? "rgba(6,8,12,0.9)" : "rgba(34,38,48,0.8)";
  g.beginPath();
  g.ellipse(x, y, r * 1.35, r, rot, 0, 7);
  g.fill();
  g.fillStyle = "rgba(150,165,198,0.16)";
  g.beginPath();
  g.ellipse(x + r * 0.45, y - r * 0.4, r * 0.4, r * 0.25, rot, 0, 7);
  g.fill();
}
g.lineCap = "round";
for (let x = -12; x < 14; x += 0.05) {
  if (e.rnd() < 0.45) continue;
  const y = 20 - (D0(x) - 2.6) + (e.rnd() - 0.5) * 0.7 + Math.sin(x * 0.7) * 0.25,
    l = 0.1 + e.rnd() * 0.35;
  g.strokeStyle = `rgba(${28 + e.rnd() * 10},${26 + e.rnd() * 8},18,0.75)`;
  g.lineWidth = 0.025 + e.rnd() * 0.04;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + l / 2, y + (e.rnd() - 0.5) * 0.2, x + l, y + (e.rnd() - 0.5) * 0.15);
  g.stroke();
}
g.beginPath();
for (let x = 50; x >= -50; x -= 0.25) g.lineTo(x, Yw(x));
g.lineJoin = "round";
g.strokeStyle = "rgba(3,5,9,0.45)";
g.lineWidth = 3.4;
g.stroke();
g.strokeStyle = "rgba(110,128,168,0.10)";
g.lineWidth = 1.4;
g.stroke();
g.strokeStyle = "rgba(140,158,195,0.10)";
g.lineWidth = 0.5;
g.stroke();
g.restore();
