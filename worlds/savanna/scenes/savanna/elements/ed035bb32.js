const A = e.aspect;
for (let i = 0; i < 3; i++) {
  const R = 0.05 + i * 0.022,
    sp = 0.05 + i * 0.013,
    a = e.t * sp + i * 2.1;
  const cx = A * 0.6 + Math.sin(e.t * 0.01) * 0.02,
    cy = 0.2 + i * 0.015;
  const x = cx + Math.cos(a) * R,
    y = cy + Math.sin(a) * R * 0.35;
  const s = 0.0045 - i * 0.0005;
  const tilt = Math.cos(a) * 0.25;
  const fl = Math.sin(e.t * 0.7 + i) * 0.15;
  g.save();
  g.translate(x, y);
  g.rotate(tilt * 0.3);
  g.fillStyle = "#3a332e";
  g.globalAlpha = 0.8;
  g.beginPath();
  g.moveTo(-s * 2.2, -s * (0.3 + fl));
  g.quadraticCurveTo(-s, -s * 0.6, 0, 0);
  g.quadraticCurveTo(s, -s * 0.6, s * 2.2, -s * (0.3 + fl));
  g.quadraticCurveTo(s, -s * 0.1, 0, s * 0.35);
  g.quadraticCurveTo(-s, -s * 0.1, -s * 2.2, -s * (0.3 + fl));
  g.fill();
  g.restore();
}
