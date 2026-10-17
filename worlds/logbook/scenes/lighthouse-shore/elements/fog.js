const W = e.state.weather || "clear",
  k = W === "fog" ? 0.85 : W === "storm" ? 0.42 : W === "rain" ? 0.36 : W === "drizzle" ? 0.26 : 0.12;
for (let i = 0; i < 7; i++) {
  const y = -1.7 + (i - 2.5) * (W === "fog" ? 1.4 : 0.7) + 0.25 * Math.sin(e.t * 0.05 + i * 1.7),
    dx = ((((e.t * (0.12 + 0.05 * i) * (i % 2 ? 1 : -1) + i * 37) % 180) + 180) % 180) - 90;
  for (const ox of [dx - 180, dx, dx + 180]) {
    const r = 30 + i * 6,
      f = g.createRadialGradient(ox, y, 0, ox, y, r);
    f.addColorStop(0, `rgba(58,70,96,${k * 0.32})`);
    f.addColorStop(1, "rgba(58,70,96,0)");
    g.save();
    g.translate(ox, y);
    g.scale(1, 0.05 + (W === "fog" ? 0.07 : 0));
    g.translate(-ox, -y);
    g.fillStyle = f;
    g.fillRect(ox - r, y - r, 2 * r, 2 * r);
    g.restore();
  }
}
