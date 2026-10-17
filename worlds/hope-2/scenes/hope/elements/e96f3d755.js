const t = e.t;
let s = 41;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const b = g.createLinearGradient(0, -2.4, 0, -0.9);
b.addColorStop(0, "rgba(139,150,168,0)");
b.addColorStop(0.5, "rgba(139,150,168,0.16)");
b.addColorStop(1, "rgba(139,150,168,0)");
g.fillStyle = b;
g.fillRect(-200, -2.4, 400, 1.5);
for (let i = 0; i < 36; i++) {
  const x0 = -200 + R() * 400,
    y = -1.75 + (R() - 0.35) * 0.9,
    w = 8 + R() * 26,
    h = 0.18 + R() * 0.35,
    a = 0.08 + R() * 0.1,
    sp = 0.06 + R() * 0.1,
    ph = R() * 6.283;
  const x = ((((x0 + t * sp + 200) % 400) + 400) % 400) - 200;
  const aa = a * (0.7 + 0.3 * Math.sin(t * 0.05 + ph)) * Math.min(1, (200 - Math.abs(x)) / 40);
  g.save();
  g.translate(x, y + Math.sin(t * 0.07 + ph) * 0.04);
  g.scale(w, h);
  const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  gr.addColorStop(0, "rgba(139,150,168," + aa + ")");
  gr.addColorStop(1, "rgba(139,150,168,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 1, 0, 6.283);
  g.fill();
  g.restore();
}
