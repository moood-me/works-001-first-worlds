const t = e.t,
  d = e.state.dusk || 0;
const C = "#5a3f5e";
for (let x = -900; x < 900; ) {
  const w = 8 + e.rnd() * 26,
    h = 12 + Math.pow(e.rnd(), 2) * 70;
  g.fillStyle = C;
  g.fillRect(x, -h, w + 0.5, h + 30);
  for (let k = 0; k < 6; k++) {
    const wx = x + 1 + e.rnd() * (w - 3),
      wy = -h + 2 + e.rnd() * (h - 4);
    if (e.rnd() < 0.25 + 0.5 * d) {
      g.fillStyle = "rgba(255,200,130," + (0.3 + 0.5 * d) + ")";
      g.fillRect(wx, wy, 1.6, 1.4);
    }
  }
  x += w;
}
g.fillStyle = "#4a3450";
g.beginPath();
g.moveTo(112, 0);
g.lineTo(119, -140);
g.lineTo(122, -140);
g.lineTo(129, 0);
g.fill();
g.fillRect(117, -112, 8, 6);
const b = Math.pow(Math.max(0, Math.sin(t * 1.4)), 10);
e.light(120.5, -142, 10, "#ff4040", 0.2 + 0.6 * b);
