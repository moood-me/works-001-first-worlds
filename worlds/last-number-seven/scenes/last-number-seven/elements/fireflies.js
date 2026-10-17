const d = e.state.dusk || 0,
  t = e.t;
const k = Math.max(0, Math.min(1, (d - 0.4) / 0.45));
if (k <= 0) return;
g.globalCompositeOperation = "lighter";
for (let i = 0; i < 36; i++) {
  const a = e.rnd(),
    b = e.rnd(),
    c = e.rnd();
  const x = -9.5 + a * 19 + Math.sin(t * 0.21 * (0.6 + c) + i) * 0.8 + Math.sin(t * 0.53 + i * 2) * 0.3;
  const y = -0.2 - b * 1.8 + Math.sin(t * 0.33 + i * 1.7) * 0.25;
  const bl = Math.pow(Math.max(0, Math.sin(t * (0.6 + c * 0.5) + i * 2.3)), 3);
  const al = k * bl * (0.4 + 0.6 * c);
  if (al < 0.02) continue;
  const r = 0.12;
  const gr = g.createRadialGradient(x, y, 0, x, y, r);
  gr.addColorStop(0, "rgba(226,255,150," + al + ")");
  gr.addColorStop(0.25, "rgba(190,240,110," + al * 0.4 + ")");
  gr.addColorStop(1, "rgba(160,220,90,0)");
  g.fillStyle = gr;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
