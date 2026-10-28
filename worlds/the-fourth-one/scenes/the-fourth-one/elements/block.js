const t = e.t;
g.fillStyle = "#141319";
g.fillRect(-38, -27, 52, 27.4);
g.fillStyle = "#0f0e13";
g.fillRect(-38.3, -27.6, 52.6, 0.6);
for (let f = 0; f < 9; f++) {
  const y = -27 + f * 3 + 1;
  for (let c = 0; c < 18; c++) {
    const x = -37 + c * 2.85;
    const r = e.rnd();
    let col = "rgba(9,9,12,0.8)";
    if (r < 0.05) col = "rgba(200,140,80,0.45)";
    else if (r < 0.065) {
      const fl = 0.5 + 0.5 * Math.sin(t * 3.1 + c) * Math.sin(t * 1.7 + f);
      col = "rgba(110,135,180," + (0.15 + 0.25 * fl) + ")";
    }
    g.fillStyle = col;
    g.fillRect(x, y, 1.1, 1.2);
  }
}
