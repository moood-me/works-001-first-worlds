const s = e.state || {};
const L = s.lamp != null ? s.lamp : 1;
g.fillStyle = "#1d2221";
g.fillRect(-2.0, -2.55, 4.0, 2.5);
for (let i = 0; i < 90; i++) {
  const x = -1.8 + e.rnd() * 3.5,
    y = -2.4 + e.rnd() * 1.5;
  const c = e.rnd();
  g.fillStyle = c < 0.4 ? "#2a3534" : c < 0.8 ? "#33302c" : "#3b2a26";
  g.globalAlpha = 0.45;
  g.fillRect(x, y, 0.09, 0.09);
}
g.globalAlpha = 1;
let gr = g.createLinearGradient(2.1, 0, -2, 0);
gr.addColorStop(0, "rgba(210,135,65," + 0.3 * L + ")");
gr.addColorStop(1, "rgba(210,135,65,0)");
g.fillStyle = gr;
g.fillRect(-2.0, -2.55, 4.0, 2.5);
g.fillStyle = "#171b1a";
g.fillRect(-2.05, -2.55, 0.18, 2.55);
g.fillRect(1.87, -2.55, 0.18, 2.55);
g.fillStyle = "#232827";
g.fillRect(-2.25, -2.88, 4.5, 0.33);
g.fillStyle = "rgba(220,140,70," + 0.22 * L + ")";
g.fillRect(-2.25, -2.58, 4.5, 0.03);
g.fillStyle = "#141817";
g.fillRect(-1.5, -0.52, 3, 0.08);
g.fillRect(-1.4, -0.44, 0.07, 0.44);
g.fillRect(1.33, -0.44, 0.07, 0.44);
const fx = 0.9,
  fy = -1.6;
const fl = Math.sin(e.t * 1.1) * 0.5 + Math.sin(e.t * 2.7) * 0.3;
g.fillStyle = "rgba(170,165,145," + (0.25 + 0.3 * L) + ")";
g.beginPath();
g.moveTo(fx, fy);
g.lineTo(fx + 0.32, fy);
g.lineTo(fx + 0.32, fy + 0.3 + fl * 0.03);
g.lineTo(fx + 0.32 - 0.08 - fl * 0.04, fy + 0.4);
g.lineTo(fx, fy + 0.4);
g.closePath();
g.fill();
g.strokeStyle = "#2a2826";
g.lineWidth = 0.012;
for (let i = 0; i < 5; i++) {
  g.beginPath();
  g.moveTo(fx + 0.04, fy + 0.06 + i * 0.06);
  g.lineTo(fx + 0.24, fy + 0.06 + i * 0.06);
  g.stroke();
}
g.fillStyle = "#141918";
g.fillRect(2.4, -2.6, 0.06, 2.6);
g.fillStyle = "rgba(150,152,140," + (0.3 + 0.35 * L) + ")";
g.fillRect(2.13, -2.75, 0.6, 0.38);
g.fillStyle = "#1a1f1e";
g.font = "bold 0.15px sans-serif";
g.textAlign = "center";
g.fillText(tr('41 km'), 2.43, -2.5);
