const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t;
const bg = g.createLinearGradient(0, -9, 0, 3);
bg.addColorStop(0, "rgba(120,140,185,0)");
bg.addColorStop(0.65, "rgba(120,140,185,0.12)");
bg.addColorStop(1, "rgba(120,140,185,0)");
g.fillStyle = bg;
g.fillRect(-700, -9, 1400, 12);
for (let k = 0; k < 11; k++) {
  const w = 110 + 170 * h(k + 3);
  let cx = -700 + 1400 * h(k + 1) + t * (0.4 + 0.5 * h(k + 5));
  cx = ((((cx + 700) % 1400) + 1400) % 1400) - 700;
  const cy = -2 - 4 * h(k + 7) + 0.8 * Math.sin(t * 0.04 + k);
  const th = 3.5 + 4 * h(k + 9);
  g.save();
  g.translate(cx, cy);
  g.scale(w / th, 1);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, th);
  gr.addColorStop(0, "rgba(140,160,200," + (0.05 + 0.05 * h(k + 11)) + ")");
  gr.addColorStop(0.5, "rgba(140,160,200," + (0.025 + 0.025 * h(k + 11)) + ")");
  gr.addColorStop(1, "rgba(140,160,200,0)");
  g.fillStyle = gr;
  g.fillRect(-th, -th, 2 * th, 2 * th);
  g.restore();
}
