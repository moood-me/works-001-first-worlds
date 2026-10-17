const t = e.t;
const te = (x) => -0.8 * Math.pow(Math.max(0, (x + 6) / 16), 0.7),
  wl = (x) => 0.05 + Math.pow(Math.max(0, (x + 6) / 16), 2) * 3;
const rot = Math.sin(t * 0.5) * 0.006 + Math.sin(t * 1.13 + 1) * 0.003;
const tree = () => {
  let s = 77;
  const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
  g.save();
  g.translate(2, -0.1);
  g.rotate(rot);
  g.fillStyle = "#10151e";
  g.strokeStyle = "#10151e";
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(-0.14, 0);
  g.bezierCurveTo(-0.26, -2.2, 0.36, -4.3, -0.05, -6.6);
  g.lineTo(0.08, -6.6);
  g.bezierCurveTo(0.5, -4.3, -0.04, -2.2, 0.15, 0);
  g.closePath();
  g.fill();
  [
    [0.05, -5.1, -4.1, -5.9],
    [0.12, -6.0, 1.8, -6.8],
    [0.22, -4.4, 1.7, -4.9],
    [-0.04, -3.6, -1.9, -4.2],
    [0.0, -6.4, -1.3, -7.3],
  ].forEach((b) => {
    g.lineWidth = 0.1;
    g.beginPath();
    g.moveTo(b[0], b[1]);
    g.quadraticCurveTo((b[0] + b[2]) / 2, Math.min(b[1], b[3]) - 0.35, b[2], b[3]);
    g.stroke();
    const n = 4 + Math.floor(R() * 4);
    for (let i = 0; i < n; i++) {
      g.beginPath();
      g.ellipse(
        b[2] + (R() - 0.6) * 1.6,
        b[3] + (R() - 0.5) * 0.5,
        0.45 + R() * 0.6,
        0.2 + R() * 0.2,
        (R() - 0.5) * 0.4,
        0,
        6.283,
      );
      g.fill();
    }
  });
  for (let i = 0; i < 7; i++) {
    g.beginPath();
    g.ellipse(
      (R() - 0.5) * 2.2,
      -7.1 + (R() - 0.5) * 0.7,
      0.5 + R() * 0.7,
      0.25 + R() * 0.25,
      (R() - 0.5) * 0.5,
      0,
      6.283,
    );
    g.fill();
  }
  g.restore();
};
g.save();
g.translate(0, 1.6);
g.scale(1, -1);
g.globalAlpha = 0.2;
tree();
g.restore();
g.globalAlpha = 1;
for (let i = 0; i < 26; i++) {
  const y = 1.2 + i * 0.3 + Math.sin(t * 0.4 + i) * 0.05;
  g.strokeStyle = "rgba(38,48,66,0.5)";
  g.lineWidth = 0.05 + (i % 3) * 0.03;
  g.beginPath();
  g.moveTo(-4.5 + Math.sin(i * 1.7) * 0.8, y);
  g.lineTo(6 + Math.sin(i * 2.3) * 0.8, y);
  g.stroke();
}
g.fillStyle = "#131922";
g.beginPath();
g.moveTo(-6, 0.04);
for (let x = -6; x <= 11; x += 0.5) g.lineTo(x, te(x) + 0.04 * Math.sin(x * 2.1));
g.lineTo(11, 3.5);
for (let x = 11; x >= -6; x -= 0.5) g.lineTo(x, wl(x));
g.closePath();
g.fill();
g.strokeStyle = "rgba(150,160,186," + (0.1 + 0.05 * Math.sin(t * 0.7)) + ")";
g.lineWidth = e.px * 1.2;
g.beginPath();
for (let x = -6; x <= 11; x += 0.5) g.lineTo(x, wl(x) - 0.02);
g.stroke();
g.strokeStyle = "#10151e";
g.lineWidth = e.px * 1.3;
for (let i = 0; i < 9; i++) {
  const x = -5.6 + i * 0.21 + Math.sin(i * 3.1) * 0.08,
    h = 0.5 + (((i * 37) % 10) / 10) * 0.7,
    sw = -(Math.sin(t * 0.6 + i) * 0.04 + 0.03) * h;
  g.beginPath();
  g.moveTo(x, wl(x) - 0.02);
  g.quadraticCurveTo(x + sw * 0.3, wl(x) - h * 0.5, x + sw, wl(x) - h);
  g.stroke();
}
tree();
