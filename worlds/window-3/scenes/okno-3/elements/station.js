const t = e.t;
const gr = g.createLinearGradient(-60, 0, 22, 0);
gr.addColorStop(0, "#0c0e15");
gr.addColorStop(0.8, "#22262f");
gr.addColorStop(1, "#3a3f4a");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-60, -55);
g.lineTo(8, -55);
g.lineTo(16, -46);
g.lineTo(16, -30);
g.lineTo(20, -28);
g.lineTo(20, 8);
g.lineTo(14, 24);
g.lineTo(-60, 24);
g.closePath();
g.fill();
g.strokeStyle = "rgba(0,0,0,0.4)";
g.lineWidth = 0.4;
for (let y = -50; y < 22; y += 6) {
  g.beginPath();
  g.moveTo(-60, y);
  g.lineTo(18, y);
  g.stroke();
}
g.strokeStyle = "rgba(255,235,210,0.3)";
g.lineWidth = 0.3;
g.beginPath();
g.moveTo(8, -55);
g.lineTo(16, -46);
g.lineTo(16, -30);
g.lineTo(20, -28);
g.lineTo(20, 8);
g.stroke();
for (let i = 0; i < 140; i++) {
  const x = -58 + e.rnd() * 72,
    y = -52 + e.rnd() * 72,
    lit = e.rnd() < 0.22;
  g.fillStyle = lit ? "rgba(255,200,130,0.75)" : "rgba(8,10,16,0.85)";
  g.fillRect(x, y, 1.2, 0.7);
}
g.save();
g.translate(13, -10);
g.rotate(-Math.PI / 2);
g.fillStyle = "rgba(220,215,200,0.3)";
g.font = "bold 3.4px sans-serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText("ПОЯС-ВОСТОК", 0, 0);
g.restore();
g.strokeStyle = "#2a2e38";
g.lineWidth = 0.5;
g.beginPath();
g.moveTo(4, -55);
g.lineTo(4, -68);
g.moveTo(-1, -63);
g.lineTo(9, -63);
g.stroke();
const b = Math.pow(Math.max(0, Math.sin(t * 1.1)), 10);
e.light(4, -68.5, 6, "#ff4030", 0.2 + 0.6 * b);
e.light(16, -46, 4, "#ffb070", 0.35);
e.light(20, -28, 3, "#ffb070", 0.3);
