const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const F = e.state.fog ?? 0.6;
g.beginPath();
g.moveTo(-300, 5);
for (let i = 0; i <= 200; i++) {
  const x = -300 + 3 * i;
  const b = -13 - 3 * Math.sin(x * 0.013 + 1) - 1.5 * Math.sin(x * 0.047 + 2);
  const tp = h(i) < 0.6 ? 3 + 5 * h(i + 700) : 0.5;
  g.lineTo(x - 1.4, b + 1.5);
  g.lineTo(x, b - tp);
}
g.lineTo(300, 5);
g.closePath();
const gr = g.createLinearGradient(0, -20, 0, 1);
gr.addColorStop(0, "#0c1427");
gr.addColorStop(0.55, "#111b31");
gr.addColorStop(1, "#1d2a45");
g.fillStyle = gr;
g.fill();
const mg = g.createLinearGradient(0, -9, 0, 1);
mg.addColorStop(0, "rgba(80,100,145,0)");
mg.addColorStop(0.7, "rgba(80,100,145," + 0.28 * F + ")");
mg.addColorStop(1, "rgba(80,100,145," + 0.1 * F + ")");
g.fillStyle = mg;
g.fillRect(-300, -9, 600, 10);
for (let i = 0; i < 190; i++) {
  const x = -300 + 600 * h(i + 1000);
  const w = 0.25 + 0.45 * h(i + 1100);
  const top = -11 - 4 * h(i + 1200);
  const ln = (h(i + 1300) - 0.5) * 0.03;
  g.globalAlpha = 0.45 + 0.45 * h(i + 1400);
  g.fillStyle = "#0a1222";
  g.beginPath();
  g.moveTo(x - w / 2, 0.6);
  g.lineTo(x - w / 4 - ln * top, top);
  g.lineTo(x + w / 4 - ln * top, top);
  g.lineTo(x + w / 2, 0.6);
  g.closePath();
  g.fill();
}
g.globalAlpha = 1;
g.fillStyle = "#0a101d";
g.beginPath();
g.moveTo(-300, 5);
for (let x = -300; x <= 300; x += 6) g.lineTo(x, 0.3 + 0.25 * Math.sin(x * 0.09) + 0.2 * h(x + 5000));
g.lineTo(300, 5);
g.closePath();
g.fill();
