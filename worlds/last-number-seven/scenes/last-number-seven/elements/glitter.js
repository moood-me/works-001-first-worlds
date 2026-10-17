const d = e.state.dusk || 0,
  t = e.t,
  k = Math.max(0, 1 - d * 1.1);
if (k <= 0) return;
for (let j = 1; j <= 60; j++) {
  const p = j / 60,
    y = 125 * p * p + 0.3,
    w = 0.6 + 9 * p;
  for (let m = 0; m < 4; m++) {
    const s = Math.sin(j * 12.99 + m * 78.2) * 43758.5,
      hh = s - Math.floor(s);
    const x = (hh - 0.5) * (2 + 22 * p) + Math.sin(t * (0.5 + p) + j) * 0.8 * p;
    const a = (0.5 + 0.5 * Math.sin(t * 1.8 + m * 3.1 + j * 1.7)) * (0.12 + 0.3 * (1 - p)) * k;
    if (a < 0.02) continue;
    g.fillStyle = "rgba(255,220,168," + a + ")";
    g.fillRect(x - w / 2, y, w, 0.25 + 1.1 * p);
  }
}
