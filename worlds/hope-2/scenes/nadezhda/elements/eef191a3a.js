let s = 5;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const ridge = (H, col, step) => {
  const p = [R() * 6, R() * 6, R() * 6, R() * 6];
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(-9000, 6);
  for (let x = -9000; x <= 9000; x += step) {
    const h =
      H *
      (0.5 +
        0.28 * Math.sin(x / 1900 + p[0]) +
        0.14 * Math.sin(x / 640 + p[1]) +
        0.06 * Math.sin(x / 210 + p[2]) +
        0.025 * Math.sin(x / 70 + p[3]));
    g.lineTo(x, -h);
  }
  g.lineTo(9000, 6);
  g.closePath();
  g.fill();
};
ridge(330, "#5a6b82", 45);
ridge(200, "#4b5a70", 35);
const m = g.createLinearGradient(0, -160, 0, 6);
m.addColorStop(0, "rgba(107,100,120,0)");
m.addColorStop(1, "rgba(107,100,120,0.55)");
g.fillStyle = m;
g.fillRect(-9000, -160, 18000, 166);
