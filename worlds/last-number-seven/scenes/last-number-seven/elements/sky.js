const A = e.aspect,
  hz = 0.6,
  d = e.state.dusk || 0,
  t = e.t;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const h = (n) => {
  const s = Math.sin(n * 12.9898) * 43758.5453;
  return s - Math.floor(s);
};
const G = [
    [70, 104, 160],
    [160, 146, 178],
    [246, 172, 128],
    [255, 214, 160],
  ],
  N = [
    [14, 18, 44],
    [48, 42, 88],
    [146, 78, 104],
    [214, 116, 92],
  ];
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, mx(G[0], N[0], d));
gr.addColorStop(0.5, mx(G[1], N[1], d));
gr.addColorStop(0.86, mx(G[2], N[2], d));
gr.addColorStop(1, mx(G[3], N[3], d));
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.42);
if (d > 0.45) {
  const s = Math.min(1, (d - 0.45) * 2);
  for (let i = 0; i < 160; i++) {
    const x = -0.3 + h(i + 0.1) * (A + 0.6),
      y = -0.35 + Math.pow(h(i + 0.7), 1.6) * 0.6,
      tw = 0.6 + 0.4 * Math.sin(t * (0.7 + h(i + 0.3)) + i);
    g.fillStyle = "rgba(255,246,230," + s * tw * (0.25 + h(i + 0.9) * 0.5) + ")";
    const r = 0.0009 + h(i + 0.5) * 0.0012;
    g.fillRect(x, y, r, r);
  }
}
const sx = A * 0.27,
  sy = hz - 0.12 + d * 0.15;
let sg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.75);
sg.addColorStop(0, "rgba(255,214,150," + 0.65 * (1 - d * 0.7) + ")");
sg.addColorStop(0.14, "rgba(255,170,120," + 0.3 * (1 - d * 0.6) + ")");
sg.addColorStop(1, "rgba(255,150,120,0)");
g.fillStyle = sg;
g.fillRect(sx - 0.8, sy - 0.8, 1.6, 1.6);
g.save();
g.beginPath();
g.rect(-0.35, -0.4, A + 0.7, hz + 0.4);
g.clip();
g.fillStyle = "rgba(255,242,214," + (1 - d * 0.6) + ")";
g.beginPath();
g.arc(sx, sy, 0.028, 0, 7);
g.fill();
g.restore();
const rim = mx([255, 198, 150], [226, 112, 108], d),
  lit = mx([226, 178, 190], [92, 66, 110], d),
  shade = mx([170, 146, 180], [50, 42, 82], d),
  top = mx([246, 214, 214], [110, 84, 128], d);
const cloud = (cx, cy, w, ch, n, seed) => {
  cx += Math.sin(t * 0.01 + seed) * 0.01 + t * 0.0008;
  const P = [];
  for (let k = 0; k < n; k++) {
    const u = h(seed + k * 3.1),
      v = h(seed + k * 7.7),
      q = h(seed + k * 1.3);
    const bul = 1 - Math.pow((u - 0.5) * 2, 2);
    P.push([cx + (u - 0.5) * w, cy - (0.15 + v * 0.8) * ch * bul, ch * (0.22 + q * 0.24) * (0.45 + 0.55 * bul)]);
  }
  const path = (dx, dy, sc) => {
    g.beginPath();
    for (const [x, y, r] of P) {
      g.moveTo(x + r * dx + r * sc, y + r * dy);
      g.arc(x + r * dx, y + r * dy, r * sc, 0, 7);
    }
  };
  g.save();
  g.beginPath();
  g.rect(cx - w, cy - ch * 3, w * 2, ch * 3 + ch * 0.04);
  g.clip();
  g.fillStyle = rim;
  path(0, 0, 1);
  g.fill();
  let bg = g.createLinearGradient(cx - w * 0.5, cy, cx + w * 0.5, cy - ch);
  bg.addColorStop(0, lit);
  bg.addColorStop(1, shade);
  g.fillStyle = bg;
  path(0.12, -0.1, 0.95);
  g.fill();
  g.globalAlpha = 0.4;
  g.fillStyle = top;
  path(-0.12, -0.22, 0.62);
  g.fill();
  g.restore();
  g.globalAlpha = 1;
};
const streak = (cx, cy, w, hh, n, seed) => {
  cx += t * 0.0012;
  const E = [];
  for (let k = 0; k < n; k++)
    E.push([
      cx + (h(seed + k) - 0.5) * w,
      cy + (h(seed + k * 2.3) - 0.5) * hh * 1.6,
      w * (0.18 + h(seed + k * 4.1) * 0.22),
      hh * (0.6 + h(seed + k * 5.7) * 0.5),
    ]);
  const path = (dy, sc) => {
    g.beginPath();
    for (const [x, y, a, b] of E) {
      g.moveTo(x + a * sc, y + dy);
      g.ellipse(x, y + dy, a * sc, b * sc, 0, 0, 7);
    }
  };
  g.fillStyle = rim;
  path(0, 1);
  g.fill();
  g.fillStyle = lit;
  path(-hh * 0.3, 0.97);
  g.fill();
};
cloud(A * 0.74, 0.5, 0.62, 0.42, 40, 11);
cloud(A * 1.08, 0.47, 0.4, 0.2, 20, 31);
streak(A * 0.06, 0.3, 0.5, 0.018, 7, 51);
streak(A * 0.4, 0.16, 0.42, 0.012, 6, 71);
streak(A * 0.2, 0.06, 0.36, 0.01, 5, 91);
for (let i = 0; i < 9; i++) {
  const y = 0.47 + h(i + 3.3) * 0.1,
    x = -0.3 + h(i + 8.1) * (A + 0.6) + t * 0.001,
    w = 0.25 + h(i + 5.5) * 0.5;
  g.fillStyle = i % 2 ? "rgba(255,176,150," + 0.3 * (1 - d * 0.5) + ")" : mx([196, 140, 170], [80, 56, 96], d);
  g.globalAlpha = 0.5;
  g.beginPath();
  g.ellipse(x, y, w, 0.004 + h(i + 2.2) * 0.005, 0, 0, 7);
  g.fill();
}
g.globalAlpha = 1;
g.fillStyle = mx([70, 80, 70], [20, 22, 34], d);
g.fillRect(-0.35, hz, A + 0.7, 0.7);
