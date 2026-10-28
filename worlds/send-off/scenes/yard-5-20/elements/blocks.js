const s = e.state,
  T = Number.isFinite(s.time) ? s.time : 320,
  d = Math.min(1, Math.max(0, (T - 305) / 110));
let x = -200;
while (x < 200) {
  const w = 14 + e.rnd() * 22,
    h = 20 + e.rnd() * 28,
    gap = 4 + e.rnd() * 14;
  g.fillStyle = "#1c1e2c";
  g.fillRect(x, -h, w, h + 0.5);
  for (let fy = -h + 2; fy < -1; fy += 3)
    for (let fx = x + 1.5; fx < x + w - 1.5; fx += 2.6) {
      if (e.rnd() < 0.04) {
        g.fillStyle = "rgba(225,170,100," + (0.75 - 0.45 * d) + ")";
        g.fillRect(fx, fy, 1.1, 1.4);
      }
    }
  x += w + gap;
}
