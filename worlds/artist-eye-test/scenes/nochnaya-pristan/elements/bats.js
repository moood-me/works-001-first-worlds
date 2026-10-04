const L = e.state.lantern ?? 1,
  T = e.t;
const P = (i, t) => {
  const s = i ? 1.3 : 0;
  return [
    (i ? -2.2 : 1.6) +
      3.4 * Math.sin(t * 0.29 + s) +
      1.5 * Math.sin(t * 0.83 + s * 2) +
      0.6 * Math.sin(t * 2.3 + s * 3) +
      0.15 * Math.sin(t * 6.1 + s),
    -3.4 + 1.1 * Math.sin(t * 0.43 + s) + 0.55 * Math.sin(t * 1.37 + s * 1.7) + 0.25 * Math.sin(t * 3.4 + s),
  ];
};
const bat = (f) => {
  g.beginPath();
  [-1, 1].forEach((k) => {
    const ty = -0.2 - f * 0.55;
    g.moveTo(k * 0.05, -0.06);
    g.quadraticCurveTo(k * 0.45, -0.28 + ty * 0.4, k * 1, ty);
    g.quadraticCurveTo(k * 0.88, ty * 0.55 + 0.02, k * 0.7, ty * 0.45 + 0.13);
    g.quadraticCurveTo(k * 0.56, ty * 0.25 + 0.03, k * 0.4, ty * 0.2 + 0.15);
    g.quadraticCurveTo(k * 0.24, 0.05, k * 0.06, 0.1);
    g.closePath();
  });
  g.moveTo(0.07, 0.02);
  g.ellipse(0, 0.02, 0.07, 0.14, 0, 0, 7);
  g.moveTo(0.06, -0.12);
  g.arc(0, -0.12, 0.06, 0, 7);
  g.moveTo(-0.055, -0.15);
  g.lineTo(-0.065, -0.25);
  g.lineTo(-0.01, -0.17);
  g.closePath();
  g.moveTo(0.055, -0.15);
  g.lineTo(0.065, -0.25);
  g.lineTo(0.01, -0.17);
  g.closePath();
};
for (let i = 0; i < 2; i++) {
  const t = T * (i ? 1.07 : 1) + i * 11;
  const [x, y] = P(i, t);
  const [x0] = P(i, t - 0.1);
  const dir = x >= x0 ? 1 : -1;
  const fl = Math.sin(t * (i ? 44 : 51) + Math.sin(t * 1.3) * 0.8);
  const s = i ? 0.27 : 0.31;
  const rim = L * Math.max(0, 1 - Math.hypot(x - 0.7, y + 2.25) / 3.2);
  g.save();
  g.translate(x, y);
  g.rotate(dir * 0.18 + 0.12 * Math.sin(t * 1.9 + i));
  g.scale(s, s);
  bat(fl);
  g.fillStyle = "#0b0a0e";
  g.fill();
  if (rim > 0.02) {
    g.fillStyle = "rgba(150,90,50," + rim * 0.55 + ")";
    g.fill();
  }
  g.restore();
}
