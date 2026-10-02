const t = e.t,
  W = e.state.wind ?? 1,
  p = e.state.petals ?? 1;
const n = p > 0 ? Math.round(26 + 30 * Math.min(1, p * 4)) : 0;
for (let i = 0; i < 56; i++) {
  const s = e.rnd(),
    s2 = e.rnd(),
    s3 = e.rnd();
  if (i >= n) continue;
  const L = 5 + s2 * 3;
  const ph = (t / L + s) % 1;
  const drift = W * (ph * 7.5 + s3 * 2 * ph) + Math.sin(t * 1.3 + s * 20) * 0.25 * ph;
  const x = 0.62 + drift,
    y = -4.85 + ph * 4.85 + Math.sin(t * 2 + s * 9) * 0.12 * W;
  const a = Math.min(1, ph * 8) * (1 - Math.pow(ph, 6));
  const fl = Math.cos(t * (3 + s3 * 3) + s * 30);
  g.save();
  g.translate(x, y);
  g.rotate(s * 6 + t * (0.5 + s2));
  g.scale(1, 0.3 + 0.7 * Math.abs(fl));
  g.fillStyle = "rgba(" + (fl > 0 ? "250,196,208" : "232,160,180") + "," + 0.9 * a + ")";
  g.beginPath();
  g.ellipse(0, 0, 0.045, 0.028, 0, 0, 7);
  g.fill();
  g.restore();
}
