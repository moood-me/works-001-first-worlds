const t = e.t,
  d = e.state.dusk || 0;
g.fillStyle = "#2a2326";
g.beginPath();
g.moveTo(-0.35, 0);
g.quadraticCurveTo(-0.2, -4, -0.25, -7);
g.lineTo(0.2, -7);
g.quadraticCurveTo(0.15, -4, 0.35, 0);
g.fill();
g.strokeStyle = "#2a2326";
g.lineWidth = 0.15;
g.beginPath();
g.moveTo(0, -5);
g.lineTo(2.2, -8.5);
g.moveTo(0, -6);
g.lineTo(-1.8, -9);
g.moveTo(0, -7);
g.lineTo(0.4, -11);
g.stroke();
for (let i = 0; i < 260; i++) {
  const a = e.rnd() * 6.28,
    r = Math.sqrt(e.rnd());
  const cx = Math.cos(a) * r * 4.0,
    cy = -10 + Math.sin(a) * r * 3.8;
  const sw = Math.sin(t * 0.6 + cx * 0.3) * 0.12 * (-cy / 12) + Math.sin(t * 1.7 + i) * 0.03;
  const rr = 0.25 + e.rnd() * 0.5;
  const lit = Math.max(0, (-cx / 4 - cy / 14 + 0.3) * 0.6) * (1 - d);
  const v = e.rnd() * 10;
  g.fillStyle =
    "rgba(" +
    Math.round(32 + v + 60 * lit) +
    "," +
    Math.round(42 + v + 40 * lit) +
    "," +
    Math.round(34 + 14 * lit) +
    ",0.9)";
  g.beginPath();
  g.ellipse(cx + sw, cy, rr * 1.2, rr, a, 0, 7);
  g.fill();
}
