let s = 11;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const gy = (x) => -1.5 - 1.3 * Math.sin(x / 140 + 1) - 0.8 * Math.sin(x / 53 + 2);
g.fillStyle = "#1e2834";
g.beginPath();
g.moveTo(-1300, 2);
for (let x = -1300; x <= 1300; x += 10) g.lineTo(x, gy(x));
g.lineTo(1300, 2);
g.closePath();
g.fill();
for (let row = 0; row < 2; row++) {
  g.fillStyle = row ? "#18212c" : "#222c39";
  let x = -1300 + R() * 8;
  while (x < 1300) {
    const k = R(),
      h = (row ? 9 : 13) + R() * 11,
      w = h * (0.24 + R() * 0.16),
      b = gy(x) + (row ? 0.6 : -0.4),
      ln = (R() - 0.5) * 0.1;
    if (k < 0.55) {
      const n = 5 + Math.floor(R() * 4);
      g.beginPath();
      g.moveTo(x - w * 0.5, b);
      for (let i = 1; i <= n; i++) {
        const f = i / n,
          cx = x + ln * h * f,
          ww = w * 0.5 * (1 - f) + 0.15;
        g.lineTo(cx - ww * (1 + R() * 0.3), b - h * (f - 0.5 / n) + R() * 0.4);
        g.lineTo(cx - ww * 0.5, b - h * f);
      }
      g.lineTo(x + ln * h, b - h - 0.8);
      for (let i = n; i >= 1; i--) {
        const f = i / n,
          cx = x + ln * h * f,
          ww = w * 0.5 * (1 - f) + 0.15;
        g.lineTo(cx + ww * 0.5, b - h * f);
        g.lineTo(cx + ww * (1 + R() * 0.3), b - h * (f - 0.5 / n) + R() * 0.4);
      }
      g.lineTo(x + w * 0.5, b);
      g.closePath();
      g.fill();
    } else if (k < 0.82) {
      g.fillRect(x - 0.25, b - h * 0.5, 0.5, h * 0.5 + 0.5);
      const c = 3 + Math.floor(R() * 4);
      for (let i = 0; i < c; i++) {
        g.beginPath();
        g.ellipse(
          x + (R() - 0.5) * w * 1.1,
          b - h * (0.5 + R() * 0.35),
          w * (0.25 + R() * 0.3),
          h * (0.13 + R() * 0.12),
          (R() - 0.5) * 0.6,
          0,
          6.283,
        );
        g.fill();
      }
    } else {
      const tx = x + ln * h * 2;
      g.beginPath();
      g.moveTo(x - 0.3, b);
      g.lineTo(tx - 0.12, b - h * 0.85);
      g.lineTo(tx + 0.12, b - h * 0.85);
      g.lineTo(x + 0.3, b);
      g.closePath();
      g.fill();
      const c = 2 + Math.floor(R() * 3);
      for (let i = 0; i < c; i++) {
        g.beginPath();
        g.ellipse(
          tx + (R() - 0.5) * w * 0.9,
          b - h * (0.83 + R() * 0.15),
          w * (0.3 + R() * 0.25),
          0.6 + R() * 0.9,
          (R() - 0.5) * 0.3,
          0,
          6.283,
        );
        g.fill();
      }
    }
    x += w * (0.45 + R() * 0.6) + (R() < 0.05 ? 12 + R() * 30 : 0);
  }
}
