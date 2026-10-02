const l = e.state.lantern ?? 1,
  s = e.state.keeper,
  t = e.t;
let ox = 0,
  oy = 0;
if (s === "stand") {
  ox = 0.8;
  oy = -1.62 + Math.sin(t * 1.1) * 0.01;
}
g.save();
g.translate(ox, oy);
if (s === "stand") g.rotate(Math.sin(t * 0.9) * 0.06 + Math.sin(t * 0.37) * 0.03);
g.strokeStyle = "#14121c";
g.lineWidth = 0.02;
g.beginPath();
g.arc(0, -0.36, 0.06, Math.PI, 0);
g.stroke();
const f = l * (0.85 + 0.1 * Math.sin(t * 7.3) + 0.05 * Math.sin(t * 13.1));
if (l > 0.02) {
  const gr = g.createRadialGradient(0, -0.19, 0, 0, -0.19, 0.14);
  gr.addColorStop(0, "rgba(255,220,160," + f + ")");
  gr.addColorStop(1, "rgba(220,130,70," + f * 0.7 + ")");
  g.fillStyle = gr;
} else g.fillStyle = "#2a2533";
g.fillRect(-0.08, -0.32, 0.16, 0.26);
g.fillStyle = "#14121c";
g.fillRect(-0.1, -0.36, 0.2, 0.04);
g.fillRect(-0.1, -0.07, 0.2, 0.07);
g.fillRect(-0.1, -0.32, 0.02, 0.25);
g.fillRect(0.08, -0.32, 0.02, 0.25);
g.fillRect(-0.01, -0.32, 0.02, 0.25);
if (l > 0.02) {
  for (let i = 0; i < 6; i++) {
    const p = (t * 0.09 + i / 6 + e.rnd() * 0.1) % 1;
    g.fillStyle = "rgba(255,190,120," + (1 - p) * 0.6 * l + ")";
    g.beginPath();
    g.arc(Math.sin(t * 0.5 + i * 2.1) * 0.12 * p, -0.4 - p * 1.1, 0.012 * (1 - p * 0.5), 0, 6.283);
    g.fill();
  }
}
g.restore();
if (l > 0.02) e.light(ox, oy - 0.2, 2.4 * l, "#f0b06a", 0.9 * f);
