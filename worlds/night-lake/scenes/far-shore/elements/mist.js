const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  F = e.state.fog ?? 0.6,
  S = e.state.shafts ?? 0.35,
  L = e.state.lantern ?? 0.55,
  o = e.state.fogX || 0;
g.globalCompositeOperation = "lighter";
if (S > 0.01) {
  for (let i = 0; i < 7; i++) {
    const x0 = -50 + 110 * h(i + 1);
    const w = 1.5 + 3 * h(i + 2);
    const dx = -10;
    const a = S * (0.05 + 0.05 * h(i + 3)) * (0.7 + 0.3 * Math.sin(t * 0.05 + i * 2));
    const gr = g.createLinearGradient(0, -22, 0, 1);
    gr.addColorStop(0, "rgba(140,160,210,0)");
    gr.addColorStop(0.5, "rgba(140,160,210," + a + ")");
    gr.addColorStop(1, "rgba(140,160,210," + a * 0.4 + ")");
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(x0, -22);
    g.lineTo(x0 + w, -22);
    g.lineTo(x0 + w + dx, 1);
    g.lineTo(x0 + dx, 1);
    g.closePath();
    g.fill();
  }
}
for (let k = 0; k < 14; k++) {
  const w = 25 + 50 * h(k + 20);
  let cx = -170 + 340 * h(k + 21) + o * (0.5 + 0.8 * h(k + 22)) + 3 * Math.sin(t * 0.03 + k);
  cx = ((((cx + 170) % 340) + 340) % 340) - 170;
  const cy = -0.5 - 5 * h(k + 23) + 0.5 * Math.sin(t * 0.05 + k * 1.3);
  const th = 1.5 + 2.5 * h(k + 24);
  const a = F * (0.05 + 0.06 * h(k + 25));
  g.save();
  g.translate(cx, cy);
  g.scale(w / th, 1);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, th);
  gr.addColorStop(0, "rgba(120,140,185," + a + ")");
  gr.addColorStop(1, "rgba(120,140,185,0)");
  g.fillStyle = gr;
  g.fillRect(-th, -th, 2 * th, 2 * th);
  g.restore();
}
if (L > 0.01) {
  g.save();
  g.translate(0, -1);
  g.scale(1.6, 1);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 9);
  gr.addColorStop(0, "rgba(255,180,110," + 0.07 * L * (0.4 + F) + ")");
  gr.addColorStop(1, "rgba(255,170,100,0)");
  g.fillStyle = gr;
  g.fillRect(-9, -9, 18, 18);
  g.restore();
}
g.globalCompositeOperation = "source-over";
