const t = e.t;
g.fillStyle = "#0d0f13";
g.fillRect(-4.5, -48.3, 9, 96.6);
g.fillStyle = "#16181d";
g.fillRect(-4.5, -48.3, 1.2, 96.6);
g.fillRect(3.3, -48.3, 1.2, 96.6);
for (const d of [32, 55, 90]) {
  const y = 62 - d;
  for (let k = 0; k < 14; k++) {
    const yy = y + k * 0.9;
    const a = 0.25 * (1 - k / 14) * (0.6 + 0.4 * Math.sin(k * 1.7 + t * 1.3));
    g.fillStyle = "rgba(224,160,96," + a + ")";
    g.fillRect(-3.4, yy, 0.6, 0.35);
  }
}
