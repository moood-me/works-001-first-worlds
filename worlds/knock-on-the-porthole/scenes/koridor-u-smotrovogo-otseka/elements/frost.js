const s = e.state,
  t = e.t,
  f = Math.max(0, Math.min(1, s.frost_trail ?? 0.45));
const n = 14;
const bg = g.createRadialGradient(0, -6.5, 0, 0, -6.5, 1.2 + 3 * f);
bg.addColorStop(0, "rgba(215,232,248,0.22)");
bg.addColorStop(1, "rgba(215,232,248,0)");
g.fillStyle = bg;
g.fillRect(-1, -6.5, 2, 5);
for (let i = 0; i < n; i++) {
  const z = 9.5 - i * 0.58,
    u = i / (n - 1),
    cx = -0.05 + 0.5 * Math.pow(u, 1.5),
    side = i % 2 ? 1 : -1,
    x = cx + side * 0.11,
    y = 3.5 - z,
    rt = side * 0.08;
  const v = Math.max(0, Math.min(1, f * n - i));
  const sp = [];
  for (let k = 0; k < 40; k++) sp.push([e.rnd(), e.rnd(), e.rnd()]);
  if (v <= 0) continue;
  g.save();
  g.translate(x, y);
  g.rotate(rt);
  g.fillStyle = "rgba(218,234,250," + 0.45 * v + ")";
  g.beginPath();
  g.ellipse(0, 0.05, 0.055, 0.1, 0, 0, 6.2832);
  g.fill();
  g.beginPath();
  g.ellipse(0, -0.11, 0.045, 0.05, 0, 0, 6.2832);
  g.fill();
  g.strokeStyle = "rgba(10,14,20," + 0.5 * v + ")";
  g.lineWidth = 0.008;
  for (let k = 0; k < 4; k++) {
    g.beginPath();
    g.moveTo(-0.045, k * 0.04);
    g.lineTo(0.045, k * 0.04);
    g.stroke();
  }
  for (const [a, b, c] of sp) {
    const ang = a * 6.2832,
      rr = 0.06 + b * 0.12;
    g.fillStyle = "rgba(230,242,252," + 0.3 * c * v + ")";
    g.fillRect(Math.cos(ang) * rr * 0.8, Math.sin(ang) * rr * 1.3, 0.008, 0.008);
  }
  g.restore();
}
for (let i = 0; i < 30; i++) {
  const x = (e.rnd() - 0.5) * 1.4,
    y = -6.5 + e.rnd() * f * 9,
    ph = e.rnd() * 6;
  const a = Math.pow(Math.max(0, Math.sin(t * 0.5 + ph)), 8) * 0.7;
  if (a > 0.02) {
    g.fillStyle = "rgba(255,230,225," + a + ")";
    g.fillRect(x, y, 0.012, 0.012);
  }
}
