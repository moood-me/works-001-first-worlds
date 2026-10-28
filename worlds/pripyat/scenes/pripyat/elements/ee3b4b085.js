g.lineCap = "round";
const t = e.t;
const tg = g.createLinearGradient(-0.2, 0, 0.3, 0);
tg.addColorStop(0, "#b6b8ad");
tg.addColorStop(0.6, "#9a9c92");
tg.addColorStop(1, "#666861");
g.fillStyle = tg;
g.beginPath();
g.moveTo(-0.24, 0.3);
g.bezierCurveTo(-0.2, -4, -0.05, -8, 0.32, -13.5);
g.lineTo(0.48, -13.5);
g.bezierCurveTo(0.14, -8, 0.06, -4, 0.2, 0.3);
g.closePath();
g.fill();
g.save();
g.clip();
g.fillStyle = "#2f322d";
for (let i = 0; i < 26; i++) {
  const y = -0.2 - e.rnd() * 13;
  const f = -y / 13.5;
  const c = f * f * 0.38;
  const w = 0.44 - 0.28 * f;
  g.globalAlpha = 0.6 + e.rnd() * 0.4;
  g.fillRect(c - w * 0.5 + e.rnd() * w * 0.3, y, w * (0.25 + e.rnd() * 0.5), 0.04 + e.rnd() * 0.07);
}
g.restore();
g.globalAlpha = 1;
for (let i = 0; i < 5; i++) {
  const y0 = -5.6 - e.rnd() * 2.6;
  const f = -y0 / 13.5;
  const x0 = f * f * 0.38 + 0.3;
  const bl = 0.5 + e.rnd() * 1.2;
  const bx = x0 + bl,
    by = y0 - 0.3 - e.rnd() * 0.5;
  g.strokeStyle = "#3d3f38";
  g.lineWidth = 0.04;
  g.globalAlpha = 1;
  g.beginPath();
  g.moveTo(x0, y0);
  g.quadraticCurveTo(x0 + bl * 0.5, y0 - 0.1, bx, by);
  g.stroke();
  for (let k = 0; k < 7; k++) {
    const s = 0.15 + e.rnd() * 0.85;
    const sx = x0 + (bx - x0) * s,
      sy = y0 + (by - y0) * s;
    const len = 1.2 + e.rnd() * 2.4;
    const w = Math.sin(t * 0.55 + i * 1.3 + k * 0.7) * 0.06 * len + Math.sin(t * 0.31 + k * 2.1) * 0.04 * len;
    const ex = sx + 0.15 + w,
      ey = sy + len;
    const qx = sx + 0.25,
      qy = sy + len * 0.25;
    g.strokeStyle = "#4a4b40";
    g.lineWidth = 0.013;
    g.globalAlpha = 0.85;
    g.beginPath();
    g.moveTo(sx, sy);
    g.quadraticCurveTo(qx, qy, ex, ey);
    g.stroke();
    const nl = 5 + Math.floor(e.rnd() * 5);
    for (let j = 0; j < nl; j++) {
      const u = 0.25 + e.rnd() * 0.75;
      const a = 1 - u;
      const lx = a * a * sx + 2 * a * u * qx + u * u * ex;
      const ly = a * a * sy + 2 * a * u * qy + u * u * ey;
      g.fillStyle = e.rnd() < 0.5 ? "#b09345" : "#c4a44f";
      g.globalAlpha = 0.9;
      g.beginPath();
      g.ellipse(lx + 0.04, ly, 0.045, 0.07, 0.3 + e.rnd() * 0.6, 0, 6.2832);
      g.fill();
    }
  }
}
g.globalAlpha = 1;
