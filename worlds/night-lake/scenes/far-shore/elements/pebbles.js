const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const v = e.state.tracks ?? 0.7,
  wet = e.state.tracksWet ?? true;
const gr = g.createLinearGradient(0, -3, 0, 3);
gr.addColorStop(0, "#0e1422");
gr.addColorStop(0.25, "#171f30");
gr.addColorStop(0.75, "#1e283b");
gr.addColorStop(1, "#182239");
g.fillStyle = gr;
g.fillRect(-50, -3, 100, 6);
for (let i = 0; i < 1600; i++) {
  const x = -50 + 100 * h(i + 1);
  const y = -2.9 + 5.8 * Math.pow(h(i + 2), 0.8);
  const r = 0.02 + 0.03 + 0.09 * h(i + 3) * h(i + 4);
  const c = h(i + 5);
  const sh = Math.round(26 + 30 * c);
  const dk = y < -2 ? 0.6 : 1;
  g.fillStyle = "rgb(" + Math.round(sh * dk) + "," + Math.round((sh + 6) * dk) + "," + Math.round((sh + 18) * dk) + ")";
  g.beginPath();
  g.ellipse(x, y, r, r * (0.6 + 0.3 * h(i + 6)), h(i + 7) * 3, 0, 6.283);
  g.fill();
  if (c > 0.45 && y > -2.4) {
    g.fillStyle = "rgba(170,188,225," + (0.12 + 0.2 * h(i + 8)) + ")";
    g.beginPath();
    g.ellipse(x + r * 0.25, y - r * 0.3, r * 0.35, r * 0.22, 0, 0, 6.283);
    g.fill();
  }
}
const eg = g.createLinearGradient(0, -3, 0, -1.6);
eg.addColorStop(0, "rgba(9,14,26,0.95)");
eg.addColorStop(1, "rgba(9,14,26,0)");
g.fillStyle = eg;
g.fillRect(-50, -3, 100, 1.4);
if (v > 0.01) {
  for (let s = 0; s < 9; s++) {
    const y = 2.3 - s * 0.62;
    const side = s % 2 ? 1 : -1;
    const x = 0.35 * Math.sin(y * 0.5 + 0.8) - 0.1 * y + side * 0.11;
    const an = -0.08 * side + 0.05;
    const fade = v * (s < 1 ? 0.6 : 1) * (y < -2.2 ? Math.max(0, (y + 2.9) / 0.7) : 1);
    g.save();
    g.translate(x, y);
    g.rotate(an);
    if (wet) {
      g.fillStyle = "rgba(8,12,24," + 0.25 * fade + ")";
      g.beginPath();
      g.ellipse(0, 0.03, 0.11, 0.22, 0, 0, 6.283);
      g.fill();
    }
    g.fillStyle = "rgba(5,8,16," + 0.6 * fade + ")";
    g.beginPath();
    g.ellipse(0, -0.05, 0.065, 0.11, 0, 0, 6.283);
    g.fill();
    g.beginPath();
    g.ellipse(0, 0.12, 0.05, 0.06, 0, 0, 6.283);
    g.fill();
    if (wet) {
      g.strokeStyle = "rgba(150,172,215," + 0.3 * fade + ")";
      g.lineWidth = 0.012;
      g.beginPath();
      g.ellipse(0, -0.05, 0.065, 0.11, 0, 3.6, 5.8);
      g.stroke();
    }
    g.restore();
  }
}
