g.fillStyle = "#110f10";
[-0.85, 0.85].forEach((px) => {
  const top = -0.58 - e.rnd() * 0.14;
  g.fillRect(px - 0.08, top, 0.16, -top + 0.05);
  g.fillStyle = "rgba(150,165,185,0.25)";
  g.fillRect(px - 0.08, top, 0.03, -top);
  g.fillStyle = "#110f10";
});
g.fillRect(-0.95, -0.5, 1.9, 0.12);
