const t = e.t;
let s = 43;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
for (let i = 0; i < 22; i++) {
  const x0 = -40 + R() * 80,
    y = 0.6 + R() * 3,
    w = 3 + R() * 7,
    h = 0.15 + R() * 0.35,
    a = 0.05 + R() * 0.07,
    sp = 0.05 + R() * 0.08,
    ph = R() * 6.283;
  const x = ((((x0 - t * sp + 40) % 80) + 80) % 80) - 40;
  const aa = a * (0.7 + 0.3 * Math.sin(t * 0.09 + ph)) * Math.min(1, (40 - Math.abs(x)) / 8);
  g.save();
  g.translate(x, y + Math.sin(t * 0.11 + ph) * 0.05);
  g.scale(w, h);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(92,102,122," + aa + ")");
  gr.addColorStop(1, "rgba(92,102,122,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
