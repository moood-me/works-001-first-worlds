const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const T = [];
let x = -900,
  i = 0;
while (x < -40) {
  const r = h(i * 7 + 1);
  const fall = x > -170 ? Math.max(0.1, 1 - (x + 170) / 130) : 1;
  const ht = (11 + 15 * h(i * 7 + 2)) * fall * (0.85 + 0.2 * Math.sin(x * 0.011) + 0.12 * Math.sin(x * 0.037 + 1));
  T.push({ x: x, h: ht, c: r < 0.65, w: 0.2 + 0.14 * h(i * 7 + 3), l: (h(i * 7 + 4) - 0.5) * 0.08, i: i });
  x += (r < 0.65 ? 1.4 : 3) + 3 * h(i * 7 + 5);
  i++;
}
const tree = (t, sg, col) => {
  const H = t.h,
    X = t.x,
    L = t.l * H;
  g.fillStyle = col;
  if (t.c) {
    const n = 6 + Math.floor(h(t.i * 13) * 6);
    g.beginPath();
    g.moveTo(X + L, -H * sg);
    for (let k = 1; k <= n; k++) {
      const f = k / n,
        yy = -H + H * 0.9 * f,
        ww = H * t.w * Math.pow(f, 0.85) * (0.75 + 0.5 * h(t.i * 13 + k));
      g.lineTo(X + L * (1 - f) - ww * 0.35, (yy - (H * 0.5) / n) * sg);
      g.lineTo(X + L * (1 - f) - ww, yy * sg);
    }
    g.lineTo(X - 0.3, 1.5 * sg);
    g.lineTo(X + 0.3, 1.5 * sg);
    for (let k = n; k >= 1; k--) {
      const f = k / n,
        yy = -H + H * 0.9 * f,
        ww = H * t.w * Math.pow(f, 0.85) * (0.75 + 0.5 * h(t.i * 13 + k + 40));
      g.lineTo(X + L * (1 - f) + ww, yy * sg);
      g.lineTo(X + L * (1 - f) + ww * 0.35, (yy - (H * 0.5) / n) * sg);
    }
    g.closePath();
    g.fill();
  } else {
    g.beginPath();
    g.moveTo(X - 0.35, 1.5 * sg);
    g.lineTo(X + L * 0.5 - 0.2, -H * 0.5 * sg);
    g.lineTo(X + L * 0.5 + 0.2, -H * 0.5 * sg);
    g.lineTo(X + 0.35, 1.5 * sg);
    g.closePath();
    g.fill();
    g.beginPath();
    const m = 4 + Math.floor(h(t.i * 13 + 3) * 4);
    for (let b = 0; b < m; b++) {
      const q = t.i * 31 + b * 3;
      const r = H * (0.13 + 0.12 * h(q + 2));
      const cx = X + L * 0.7 + (h(q) - 0.5) * H * 0.42;
      const cy = -(H - r) * (0.55 + 0.45 * h(q + 1));
      g.moveTo(cx + r, cy * sg);
      g.arc(cx, cy * sg, r, 0, 6.283);
    }
    g.fill();
  }
};
const bank = (sg) => {
  g.beginPath();
  g.moveTo(-900, 1.5 * sg);
  for (let u = -900; u <= -20; u += 10)
    g.lineTo(
      u,
      (-1.2 - 0.5 * Math.sin(u * 0.05) - 0.3 * h(Math.round(u) + 999)) *
        (u > -60 ? Math.max(0, (-20 - u) / 40) : 1) *
        sg,
    );
  g.lineTo(-20, 0);
  g.lineTo(-20, 1.5 * sg);
  g.closePath();
  g.fill();
};
g.globalAlpha = 0.42;
for (const t of T) tree(t, -1, "#0b1325");
g.fillStyle = "#0b1325";
bank(-1);
g.globalAlpha = 1;
g.strokeStyle = "rgba(75,95,140,0.28)";
g.lineWidth = 0.3;
g.beginPath();
for (let j = 0; j < 46; j++) {
  const y = 0.6 + Math.pow(h(j + 700), 1.5) * 24;
  const x0 = -900 + 880 * h(j + 800);
  g.moveTo(x0, y);
  g.lineTo(x0 + 15 + 70 * h(j + 900), y);
}
g.stroke();
for (const t of T) {
  const v = h(t.i * 7 + 6);
  tree(
    t,
    1,
    "rgb(" + (14 + Math.round(v * 8)) + "," + (22 + Math.round(v * 9)) + "," + (38 + Math.round(v * 12)) + ")",
  );
}
g.fillStyle = "#0d1425";
bank(1);
