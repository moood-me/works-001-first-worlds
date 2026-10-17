const S = e.state,
  str = (v) => String(v == null ? "" : v),
  W = str(S.weather),
  windy = /wind|storm/.test(W),
  bp = S.beam_pass !== false && !/^no|off|false/i.test(str(S.beam_pass)),
  ba = e.t * 0.3,
  sweep = bp ? Math.pow(Math.abs(Math.cos(ba)), 10) : 0,
  t = e.t;
const u = Math.sin(ba) * Math.sign(Math.cos(ba)),
  xs = u * 1.4;
for (let i = 0; i < 46; i++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd();
  const x = -0.55 + ((r1 + t * 0.004 * (0.5 + r3) * (windy ? 3 : 1)) % 1) * 1.1,
    y = -0.28 + ((r2 + Math.sin(t * 0.3 + i) * 0.02 + 1) % 1) * 0.7,
    inb = Math.max(0, 1 - Math.abs(x - xs - y * -0.36) / 0.12) * sweep,
    a = 0.06 + 0.08 * Math.sin(t * 0.9 + i * 2.1) + 0.5 * inb;
  if (a < 0.02) continue;
  g.fillStyle = "rgba(205,215,236," + a + ")";
  g.fillRect(x, y, 0.0012, 0.0012);
}
if (sweep > 0.01) {
  g.globalCompositeOperation = "lighter";
  g.save();
  g.translate(xs, 0);
  g.rotate(-0.35);
  const gr = g.createLinearGradient(-0.12, 0, 0.12, 0);
  gr.addColorStop(0, "rgba(255,232,190,0)");
  gr.addColorStop(0.5, "rgba(255,232,190," + 0.07 * sweep + ")");
  gr.addColorStop(1, "rgba(255,232,190,0)");
  g.fillStyle = gr;
  g.fillRect(-0.12, -0.6, 0.24, 1.3);
  g.restore();
  g.globalCompositeOperation = "source-over";
}
