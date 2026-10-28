const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const t = e.t;
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 8; i++) {
  const bx = -4 + 10 * h(i + 1),
    by = -0.5 - 2.2 * h(i + 2);
  const x = bx + 0.6 * Math.sin(t * (0.07 + 0.05 * h(i + 3)) + i) + 0.2 * Math.sin(t * (0.23 + 0.1 * h(i + 4)) + i * 2);
  const y = by + 0.3 * Math.sin(t * (0.09 + 0.05 * h(i + 5)) + i * 3) + 0.08 * Math.sin(t * 0.37 + i);
  const bl = Math.max(0, Math.sin(t * (0.3 + 0.25 * h(i + 6)) + i * 5));
  const a = bl * bl * bl;
  if (a < 0.02) continue;
  const r = 0.1;
  for (let m = 0; m < 2; m++) {
    const yy = m ? -y : y,
      al = m ? a * 0.3 : a;
    const gr = g.createRadialGradient(x, yy, 0, x, yy, r);
    gr.addColorStop(0, "rgba(255,228,160," + 0.9 * al + ")");
    gr.addColorStop(0.18, "rgba(255,210,125," + 0.3 * al + ")");
    gr.addColorStop(1, "rgba(255,200,110,0)");
    g.fillStyle = gr;
    g.fillRect(x - r, yy - r, 2 * r, 2 * r);
  }
}
g.globalCompositeOperation = "source-over";
