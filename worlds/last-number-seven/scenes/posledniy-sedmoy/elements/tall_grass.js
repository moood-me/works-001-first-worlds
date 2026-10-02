const s = e.state,
  d = s.dusk || 0,
  t = e.t,
  w = s.wind ?? 0.4;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const col = mx([30, 48, 40], [10, 14, 22], d),
  rim = "rgba(255,186,120," + 0.45 * (1 - d) + ")";
for (let i = 0; i < 240; i++) {
  const side = i % 2 ? 1 : -1;
  const u = e.rnd(),
    v = e.rnd(),
    ph = e.rnd() * 6,
    lw = 0.014 + e.rnd() * 0.02,
    seed = e.rnd();
  const bx = side * (1.9 + Math.pow(u, 0.9) * 4.9);
  const h = 0.3 + v * (0.35 + (0.95 * (Math.abs(bx) - 1.9)) / 4.9);
  const bend =
    (0.06 + 0.18 * w) *
    (Math.sin(t * 0.9 + ph + bx * 0.5) * 0.6 + Math.sin(t * 0.37 + ph) * 0.4 + 0.5) *
    h *
    side *
    (seed < 0.5 ? 1 : -0.6);
  g.strokeStyle = col;
  g.lineWidth = lw;
  g.beginPath();
  g.moveTo(bx, 0.15);
  g.quadraticCurveTo(bx + bend * 0.3, -h * 0.6, bx + bend, -h);
  g.stroke();
  g.strokeStyle = rim;
  g.lineWidth = lw * 0.35;
  g.beginPath();
  g.moveTo(bx - lw * 0.4, -h * 0.3);
  g.quadraticCurveTo(bx + bend * 0.3 - lw * 0.4, -h * 0.6, bx + bend - lw * 0.3, -h);
  g.stroke();
  if (seed < 0.16) {
    g.fillStyle = mx([168, 150, 104], [50, 48, 52], d);
    g.save();
    g.translate(bx + bend, -h);
    g.rotate(bend * 0.9);
    g.beginPath();
    g.ellipse(0, -0.07, 0.025, 0.08, 0, 0, 7);
    g.fill();
    g.restore();
  }
}
