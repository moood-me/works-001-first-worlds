const A = e.aspect,
  mx = A * 0.72,
  my = 0.36;
const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const C = [
  [0.2, 0.24, 0.55, 0.014],
  [0.7, 0.43, 0.4, 0.01],
  [1.25, 0.2, 0.32, 0.009],
  [1.6, 0.31, 0.5, 0.013],
];
const span = A + 1;
for (let k = 0; k < 4; k++) {
  const c = C[k];
  const cx = ((((c[0] + e.t * 0.0008 * (1 + 0.35 * k)) % span) + span) % span) - 0.5;
  for (let j = 0; j < 16; j++) {
    const q = k * 100 + j;
    const px = cx + (h(q) - 0.5) * c[2];
    const py = c[1] + (h(q + 20) - 0.5) * c[3] * 2.5;
    const rx = c[2] * (0.1 + 0.16 * h(q + 40));
    const ry = c[3] * (0.6 + 0.9 * h(q + 60));
    const lit = Math.max(0, 1 - Math.hypot(px - mx, py - my) / 0.55);
    const a = 0.07 + 0.2 * lit;
    const col = Math.round(40 + 95 * lit) + "," + Math.round(54 + 105 * lit) + "," + Math.round(90 + 115 * lit);
    g.save();
    g.translate(px, py);
    g.scale(rx / ry, 1);
    const gr = g.createRadialGradient(0, 0, 0, 0, 0, ry);
    gr.addColorStop(0, "rgba(" + col + "," + a + ")");
    gr.addColorStop(1, "rgba(" + col + ",0)");
    g.fillStyle = gr;
    g.fillRect(-ry, -ry, 2 * ry, 2 * ry);
    g.restore();
  }
}
