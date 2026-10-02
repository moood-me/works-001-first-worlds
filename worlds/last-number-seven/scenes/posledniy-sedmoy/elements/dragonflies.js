const d = e.state.dusk || 0,
  t = e.t,
  k = Math.max(0, 1 - d / 0.6);
if (k <= 0) return;
g.globalAlpha = k;
for (let i = 0; i < 3; i++) {
  const bx = [-2.6, 1.2, 3.1][i],
    by = [-1.5, -1.9, -1.1][i];
  const j = Math.floor(t * 0.4 + i * 1.7);
  const r1 = Math.sin(j * 12.9 + i) * 0.5,
    r2 = Math.sin(j * 7.3 + i * 3) * 0.3;
  const x = bx + r1 + Math.sin(t * 0.9 + i) * 0.05,
    y = by + r2 + Math.sin(t * 1.3 + i * 2) * 0.04;
  g.save();
  g.translate(x, y);
  g.rotate(Math.sin(j * 3.1) * 0.3);
  g.strokeStyle = "rgba(196,58,40,0.95)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(-0.045, 0);
  g.lineTo(0.035, 0);
  g.stroke();
  const f = Math.sin(t * 60 + i) * 0.01;
  g.strokeStyle = "rgba(230,230,240,0.45)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(0.015, 0);
  g.lineTo(0.0, -0.035 - f);
  g.moveTo(0.015, 0);
  g.lineTo(0.03, -0.035 + f);
  g.moveTo(0.015, 0);
  g.lineTo(0.0, 0.03 + f);
  g.moveTo(0.015, 0);
  g.lineTo(0.03, 0.03 - f);
  g.stroke();
  g.restore();
}
g.globalAlpha = 1;
