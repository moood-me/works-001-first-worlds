g.fillStyle = "#24252b";
g.fillRect(-45, -7, 90, 14);
g.fillStyle = "#1b1c21";
g.fillRect(-45, -6.6, 90, 4.5);
g.fillStyle = "#34353b";
g.fillRect(-45, -2.15, 90, 0.15);
g.fillRect(-45, -6.75, 90, 0.15);
g.fillStyle = "rgba(150,148,135,0.08)";
for (let x = -45; x < 45; x += 3.2) g.fillRect(x, -4.4, 1.7, 0.1);
for (let i = 0; i < 20; i++) {
  const x = -44 + e.rnd() * 88,
    y = -6.5 + e.rnd() * 13,
    r = 0.6 + e.rnd() * 2;
  let c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(46,46,54,0.5)");
  c.addColorStop(1, "rgba(46,46,54,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
