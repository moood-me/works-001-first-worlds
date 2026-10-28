const f = e.state.fog;
if (!(f > 0.01)) return;
const t = e.t;
for (let i = 0; i < 12; i++) {
  const y = -0.3 - e.rnd() * 1.4;
  const sp = 0.12 + e.rnd() * 0.2;
  const x = -60 + ((e.rnd() * 120 + t * sp) % 120);
  const w = 8 + e.rnd() * 14,
    h = 0.6 + e.rnd() * 0.9;
  g.save();
  g.translate(x, y);
  g.scale(1, h / w);
  let gr = g.createRadialGradient(0, 0, 0, 0, 0, w);
  gr.addColorStop(0, "rgba(120,135,135," + 0.32 * f + ")");
  gr.addColorStop(1, "rgba(120,135,135,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, w, 0, 7);
  g.fill();
  g.restore();
}
