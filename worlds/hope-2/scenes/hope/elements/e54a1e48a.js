const A = e.aspect || 1.7778,
  t = e.t;
let s = 31;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const blob = (x, y, w, h, c, a) => {
  if (a < 0.004) return;
  g.save();
  g.translate(x, y);
  g.scale(w, h);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(" + c + "," + a + ")");
  gr.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
};
for (let i = 0; i < 6; i++) {
  const by = 0.05 + R() * 0.27,
    len = 0.35 + R() * 0.6,
    th = 0.006 + R() * 0.012,
    sp = 0.0012 + R() * 0.0018,
    x0 = R() * (A + 1.2);
  const x = ((x0 + t * sp) % (A + 1.2)) - 0.6;
  for (let k = 0; k < 6; k++) {
    const cx = x + R() * len,
      cy = by + (R() - 0.5) * th * 2.5,
      w = len * (0.25 + R() * 0.35),
      h = th * (0.6 + R() * 0.9);
    const lit = Math.max(0, 1 - Math.hypot(cx - 0.7 * A, cy - 0.18) / 0.35);
    blob(cx, cy, w, h, "52,62,84", 0.32 * (0.4 + 0.6 * (by / 0.32)));
    blob(cx, cy - h * 0.3, w * 0.9, h * 0.6, "170,180,205", 0.22 * lit);
  }
}
