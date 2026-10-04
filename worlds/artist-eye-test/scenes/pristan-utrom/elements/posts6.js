[-0.85, 0.85].forEach((px) => {
  const top = -0.62 - e.rnd() * 0.12;
  g.fillStyle = "#2c2826";
  g.fillRect(px - 0.08, top, 0.16, -top + 0.05);
  g.fillStyle = "rgba(236,222,204,0.28)";
  g.fillRect(px - 0.08, top, 0.035, -top);
  g.fillStyle = "rgba(20,22,26,0.35)";
  g.fillRect(px - 0.08, -0.12, 0.16, 0.17);
});
g.fillStyle = "#2c2826";
g.fillRect(-0.95, -0.5, 1.9, 0.12);
