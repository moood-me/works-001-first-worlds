g.fillStyle = "#1a1d1d";
g.fillRect(-3.25, -150, 6.5, 300);
g.fillStyle = "#111514";
for (let i = 0; i < 500; i++) {
  const y = -150 + e.rnd() * 300;
  const side = e.rnd() < 0.5 ? -1 : 1;
  const w = e.rnd() * 0.5;
  g.fillRect(side > 0 ? 3.25 - w : -3.25, y, w, 0.3 + e.rnd() * 1.5);
}
g.strokeStyle = "#111313";
g.lineWidth = 0.04;
for (let i = 0; i < 80; i++) {
  let x = -3 + e.rnd() * 6,
    y = -150 + e.rnd() * 300;
  g.beginPath();
  g.moveTo(x, y);
  for (let j = 0; j < 4; j++) {
    x += (e.rnd() - 0.5) * 0.8;
    y += (e.rnd() - 0.5) * 0.8;
    g.lineTo(x, y);
  }
  g.stroke();
}
g.fillStyle = "rgba(125,122,100,0.3)";
for (let y = -150; y < 150; y += 9) {
  g.fillRect(-0.06, y, 0.12, 3);
}
