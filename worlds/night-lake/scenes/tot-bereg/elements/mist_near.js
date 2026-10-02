const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t,
  F = e.state.fog ?? 0.6,
  o = e.state.fogX || 0;
g.globalCompositeOperation = "lighter";
for (let k = 0; k < 12; k++) {
  const w = 12 + 22 * h(k + 40);
  let cx = -80 + 160 * h(k + 41) + o * (0.8 + 0.8 * h(k + 42)) + Math.sin(t * 0.07 + k) * 1.5;
  cx = ((((cx + 80) % 160) + 160) % 160) - 80;
  const cy = -0.3 - 1.4 * h(k + 43) + 0.15 * Math.sin(t * 0.09 + k * 2);
  const th = 0.5 + 0.9 * h(k + 44);
  const a = F * (0.04 + 0.05 * h(k + 45));
  g.save();
  g.translate(cx, cy);
  g.scale(w / th, 1);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, th);
  gr.addColorStop(0, "rgba(125,145,190," + a + ")");
  gr.addColorStop(1, "rgba(125,145,190,0)");
  g.fillStyle = gr;
  g.fillRect(-th, -th, 2 * th, 2 * th);
  g.restore();
}
g.globalCompositeOperation = "source-over";
