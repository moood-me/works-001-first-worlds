const W = e.state.weather || "clear",
  fog = W === "fog" ? 1 : W === "storm" ? 0.65 : W === "rain" ? 0.5 : W === "drizzle" ? 0.3 : 0,
  K = 1 - fog * 0.75;
for (let j = 1; j <= 130; j++) {
  const p = j / 130,
    y = -1.6 + 30 * p * p,
    w = 0.3 + 6 * p;
  for (let k = 0; k < 5; k++) {
    const s = Math.sin(j * 12.99 + k * 78.2) * 43758.5,
      h = s - Math.floor(s);
    const x = (h - 0.5) * (1.5 + 18 * p) + Math.sin(e.t * (0.45 + p * 0.6) + j) * 0.7 * p;
    const a = Math.pow(0.5 + 0.5 * Math.sin(e.t * (1.3 + h) + k * 3.1 + j * 1.3), 2) * (0.08 + 0.3 * p) * K;
    if (a < 0.015) continue;
    g.fillStyle = `rgba(215,225,245,${a})`;
    g.beginPath();
    g.ellipse(x, y, w / 2, 0.03 + 0.32 * p, 0, 0, 7);
    g.fill();
  }
}
