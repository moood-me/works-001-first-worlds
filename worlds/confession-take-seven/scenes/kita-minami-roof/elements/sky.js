const A = e.aspect,
  t = e.t,
  d = Math.min(1, Math.max(0, e.state.dusk || 0)),
  hz = 0.62;
const mix = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const T = [
    [52, 56, 124],
    [128, 96, 166],
    [244, 146, 112],
    [255, 214, 152],
  ],
  N = [
    [12, 14, 38],
    [44, 34, 78],
    [140, 66, 84],
    [214, 116, 92],
  ];
let gr = g.createLinearGradient(0, -0.35, 0, hz);
[0, 0.45, 0.82, 1].forEach((s, i) => gr.addColorStop(s, mix(T[i], N[i], d)));
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
g.fillStyle = mix([70, 50, 74], [26, 20, 40], d);
g.fillRect(-0.35, hz, A + 0.7, 1.3 - hz);
for (let i = 0; i < 140; i++) {
  const x = e.rnd() * (A + 0.6) - 0.3,
    y = -0.35 + e.rnd() * 0.6,
    b = e.rnd(),
    f = e.rnd() * 6;
  const a = Math.max(0, d - 0.55) * 2.2 * (0.2 + 0.6 * b) * (0.7 + 0.3 * Math.sin(t * (0.7 + b) + f));
  if (a > 0.01) {
    g.fillStyle = "rgba(255,236,226," + a + ")";
    g.fillRect(x, y, 0.0016, 0.0016);
  }
}
const sx = A * 0.47,
  sy = 0.36 + d * 0.3;
let sg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.6);
sg.addColorStop(0, "rgba(255,232,176,0.95)");
sg.addColorStop(0.07, "rgba(255,192,128,0.55)");
sg.addColorStop(0.3, "rgba(255,142,108,0.2)");
sg.addColorStop(1, "rgba(255,120,100,0)");
g.fillStyle = sg;
g.fillRect(sx - 0.6, sy - 0.6, 1.2, 1.2);
g.save();
g.globalCompositeOperation = "lighter";
for (let k = 0; k < 10; k++) {
  const a = -Math.PI * 0.95 + k * Math.PI * 0.1 + Math.sin(t * 0.05 + k * 1.7) * 0.03,
    w = 0.025 + 0.015 * Math.sin(k * 2.3);
  g.fillStyle = "rgba(255,200,150," + 0.03 * (1 - d) + ")";
  g.beginPath();
  g.moveTo(sx, sy);
  g.lineTo(sx + Math.cos(a - w) * 1.8, sy + Math.sin(a - w) * 1.8);
  g.lineTo(sx + Math.cos(a + w) * 1.8, sy + Math.sin(a + w) * 1.8);
  g.fill();
}
g.restore();
g.fillStyle = "rgba(255,248,222,0.97)";
g.beginPath();
g.arc(sx, sy, 0.046, 0, 7);
g.fill();
const cloud = (bx, cy, w, h, n, v, st) => {
  const span = A + 1.6,
    cx = ((((bx + t * v) % span) + span) % span) - 0.8;
  const P = [];
  for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n - 0.5 + (e.rnd() - 0.5) * 0.08,
      r = h * (0.3 + 0.45 * e.rnd()) * Math.max(0.25, 1 - 3 * u * u);
    P.push([cx + u * w, cy - r * 0.55, r]);
  }
  const shape = (dy, col) => {
    g.save();
    g.beginPath();
    g.ellipse(cx, cy - h * 1.4 + dy, w * 0.62, h * 1.45, 0, 0, 7);
    g.clip();
    g.fillStyle = col;
    g.beginPath();
    for (const [x, y, r] of P) {
      g.moveTo(x + r * st, y + dy);
      g.ellipse(x, y + dy, r * st, r, 0, 0, 7);
    }
    g.fill();
    g.restore();
  };
  shape(0.008, mix([255, 176, 134], [196, 92, 96], d));
  shape(0, mix([136, 100, 162], [44, 32, 70], d));
};
cloud(A * 0.15, 0.14, 0.6, 0.1, 14, 0.003, 1.1);
cloud(A * 0.8, 0.24, 0.6, 0.08, 14, 0.0025, 1.2);
cloud(A * 1.05, 0.03, 0.5, 0.1, 12, 0.002, 1.1);
cloud(A * 0.32, 0.33, 0.5, 0.025, 8, 0.004, 3);
cloud(A * 0.08, 0.46, 0.8, 0.016, 9, 0.0035, 4);
cloud(A * 0.7, 0.51, 0.9, 0.013, 9, 0.003, 5);
