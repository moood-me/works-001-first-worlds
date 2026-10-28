let s = 19;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const t = e.t,
  c = e.color;
g.fillStyle = c;
g.beginPath();
g.moveTo(-0.24, 0.12);
g.bezierCurveTo(-0.17, -3, -0.1, -6, -0.02, -9.6);
g.lineTo(0.03, -9.6);
g.bezierCurveTo(0.1, -6, 0.16, -3, 0.26, 0.12);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-0.7, 0.14);
g.quadraticCurveTo(-0.28, 0.02, -0.22, -0.35);
g.lineTo(0.24, -0.35);
g.quadraticCurveTo(0.32, 0.02, 0.8, 0.14);
g.closePath();
g.fill();
g.strokeStyle = "rgba(60,70,90,0.25)";
g.lineWidth = e.px;
for (let i = 0; i < 9; i++) {
  const y = -0.4 - R() * 3;
  g.beginPath();
  g.moveTo(-0.1 + R() * 0.2, y);
  g.lineTo(-0.1 + R() * 0.2, y - 0.2 - R() * 0.4);
  g.stroke();
}
g.strokeStyle = c;
g.lineCap = "round";
let y0 = 0.8;
while (y0 < 9.4) {
  const Lb0 = (0.6 + R() * 0.7) * (1 - y0 / 12);
  for (const dir of [1, -1]) {
    const skip = R() < 0.06;
    const Lb = Lb0 * (dir > 0 ? 1 : 1.2) * (0.8 + R() * 0.4);
    const ph = R() * 6.283;
    if (skip) continue;
    const wv = (Math.sin(t * 0.7 + ph) * 0.6 + Math.sin(t * 0.31 + ph * 1.3) * 0.4) * 0.025 * Lb;
    const N = 12,
      top = [],
      bot = [];
    for (let i = 0; i <= N; i++) {
      const u = i / N,
        x = dir * Lb * u,
        yt = -y0 - 0.2 * Lb * u + 0.45 * Lb * u * u + wv * u * u;
      top.push([x, yt]);
      bot.push([x, yt + 0.06 + 0.26 * (1 - u) * (0.7 + R() * 0.6) + (i % 2 ? R() * 0.07 : 0)]);
    }
    g.beginPath();
    g.moveTo(0, top[0][1]);
    top.forEach((p) => g.lineTo(p[0], p[1]));
    for (let i = N; i >= 0; i--) g.lineTo(bot[i][0], bot[i][1]);
    g.closePath();
    g.fill();
    g.lineWidth = 0.014;
    for (let k = 0; k < 14; k++) {
      const i = 1 + Math.floor(R() * 11),
        p = bot[i],
        ln = 0.04 + R() * 0.08;
      g.beginPath();
      g.moveTo(p[0], p[1] - 0.03);
      g.lineTo(p[0] + dir * ln * 0.6 - wv * 0.2, p[1] + ln);
      g.stroke();
    }
    for (let k = 0; k < 6; k++) {
      const i = 2 + Math.floor(R() * 10),
        p = top[i],
        ln = 0.03 + R() * 0.05;
      g.beginPath();
      g.moveTo(p[0], p[1] + 0.02);
      g.lineTo(p[0] + dir * ln, p[1] - ln * 0.7);
      g.stroke();
    }
  }
  y0 += 0.26 + R() * 0.3;
}
