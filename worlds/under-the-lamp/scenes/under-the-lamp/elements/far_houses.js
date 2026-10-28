const slab = (x0, x1, top) => {
  g.fillStyle = "#141b20";
  g.fillRect(x0, top, x1 - x0, -top + 0.3);
  g.fillStyle = "#1b2329";
  g.fillRect(x0, top, x1 - x0, 0.4);
  for (let y = top + 2; y < -2; y += 3.2)
    for (let x = x0 + 0.8; x < x1 - 1; x += 2.2) {
      const r = e.rnd();
      g.fillStyle = r > 0.93 ? "rgba(196,150,96,0.5)" : "rgba(30,40,47,0.9)";
      g.fillRect(x, y, 1, 1.6);
    }
};
slab(-17, -4.8, -19);
slab(4.2, 17, -22);
g.fillStyle = "#10161a";
g.fillRect(-4.8, -8, 0.3, 8);
