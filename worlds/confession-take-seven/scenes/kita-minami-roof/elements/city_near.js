const t = e.t,
  d = e.state.dusk || 0;
const C = "#3d2a44";
for (let x = -320; x < 320; ) {
  const w = 6 + e.rnd() * 14,
    h = 8 + Math.pow(e.rnd(), 1.5) * 30;
  g.fillStyle = C;
  g.fillRect(x, -h, w + 0.3, h + 25);
  if (e.rnd() < 0.3) {
    g.fillRect(x + w * 0.3, -h - 2.2, 2, 2.2);
  }
  if (e.rnd() < 0.3) {
    g.fillRect(x + w * 0.7, -h - 5, 0.25, 5);
  }
  for (let k = 0; k < 5; k++) {
    const wx = x + 0.8 + e.rnd() * (w - 2),
      wy = -h + 1.5 + e.rnd() * (h - 3);
    if (e.rnd() < 0.2 + 0.5 * d) {
      g.fillStyle = "rgba(255,196,128," + (0.35 + 0.5 * d) + ")";
      g.fillRect(wx, wy, 0.9, 0.8);
    }
  }
  x += w;
}
g.fillStyle = "#2e2036";
g.fillRect(-320, -6.8, 640, 0.9);
for (let x = -320; x < 320; x += 18) g.fillRect(x, -6, 1, 30);
const L = 26,
  tx = ((t * 9) % 760) - 380;
g.fillStyle = "#2a1e34";
g.fillRect(tx, -9.6, L, 2.8);
g.fillStyle = "rgba(255,214,150," + (0.35 + 0.5 * d) + ")";
for (let k = 0; k < 8; k++) g.fillRect(tx + 1 + k * 3.1, -9, 1.8, 0.9);
e.light(tx + L, -8.2, 3, "#fff0c8", 0.5);
