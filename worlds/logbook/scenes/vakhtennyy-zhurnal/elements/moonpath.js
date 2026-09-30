for (let j = 1; j <= 70; j++) {
  const p = j / 70,
    y = 112 * p * p + 0.2,
    w = 0.8 + 18 * p;
  for (let k = 0; k < 6; k++) {
    const s = Math.sin(j * 12.99 + k * 78.2) * 43758.5,
      h = s - Math.floor(s);
    const x = (h - 0.5) * (2 + 45 * p) + Math.sin(e.t * (0.6 + p) + j) * 1.5 * p;
    const a = (0.5 + 0.5 * Math.sin(e.t * 2.2 + k * 3.1 + j * 1.3)) * (0.35 - p * 0.18);
    if (a < 0.02) continue;
    g.fillStyle = `rgba(215,225,245,${a})`;
    g.fillRect(x - w / 2, y, w, 0.2 + 1.5 * p);
  }
}
