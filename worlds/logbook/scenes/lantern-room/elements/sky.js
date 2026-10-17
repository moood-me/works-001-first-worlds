const A = e.aspect,
  hz = 0.52,
  d = e.state.dawn || 0;
const mix = (a, b, t) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * t)).join(",") + ")";
const N = [
    [2, 4, 11],
    [7, 12, 26],
    [16, 24, 43],
    [26, 36, 56],
  ],
  P = [
    [16, 22, 50],
    [52, 48, 88],
    [150, 100, 110],
    [226, 150, 130],
  ],
  D = [
    [62, 96, 156],
    [140, 150, 190],
    [230, 170, 160],
    [255, 206, 158],
  ];
const at = (i) => (d < 0.5 ? mix(N[i], P[i], d * 2) : mix(P[i], D[i], (d - 0.5) * 2));
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, at(0));
gr.addColorStop(0.5, at(1));
gr.addColorStop(0.85, at(2));
gr.addColorStop(1, at(3));
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
g.globalAlpha = Math.max(0, 1 - d * 1.6);
for (let i = 0; i < 320; i++) {
  const x = e.rnd() * A,
    y = -0.35 + Math.pow(e.rnd(), 1.3) * (hz + 0.3),
    big = e.rnd() < 0.07,
    c = e.rnd();
  g.fillStyle = c < 0.15 ? "rgba(255,220,190," : c < 0.3 ? "rgba(190,210,255," : "rgba(240,240,255,";
  g.fillStyle += (0.25 + e.rnd() * 0.55) * (1 - Math.max(0, (y - hz + 0.25) / 0.25)) + ")";
  const s = big ? 0.0022 : 0.0008 + e.rnd() * 0.0009;
  g.fillRect(x, y, s, s);
}
g.globalAlpha = 1;
if (d > 0.5) {
  const k = (d - 0.5) * 2,
    sx = A * 0.66,
    sy = hz + 0.01 - k * 0.05;
  const sg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.35);
  sg.addColorStop(0, `rgba(255,236,190,${0.9 * k})`);
  sg.addColorStop(0.08, `rgba(255,200,150,${0.5 * k})`);
  sg.addColorStop(1, "rgba(255,170,140,0)");
  g.fillStyle = sg;
  g.fillRect(sx - 0.4, sy - 0.4, 0.8, 0.8);
  g.fillStyle = `rgba(255,248,225,${k})`;
  g.beginPath();
  g.arc(sx, sy, 0.02, 0, 7);
  g.fill();
}
g.globalAlpha = Math.max(0, 1 - d);
const mx = A * 0.84,
  my = 0.24;
gr = g.createRadialGradient(mx, my, 0, mx, my, 0.26);
gr.addColorStop(0, "rgba(215,225,245,0.55)");
gr.addColorStop(0.06, "rgba(205,215,240,0.28)");
gr.addColorStop(0.2, "rgba(190,200,230,0.08)");
gr.addColorStop(1, "rgba(190,200,230,0)");
g.fillStyle = gr;
g.fillRect(mx - 0.3, my - 0.3, 0.6, 0.6);
g.fillStyle = "rgba(235,238,250,0.7)";
g.beginPath();
g.arc(mx, my, 0.018, 0, 7);
g.fill();
const cloud = (cx, cy, w, h, lit) => {
  for (let k = 0; k < 26; k++) {
    const x = cx + (e.rnd() - 0.5) * w,
      y = cy + (e.rnd() - 0.5) * h * 0.6,
      r = h * (0.25 + e.rnd() * 0.4);
    const c = g.createRadialGradient(x, y - r * 0.3, r * 0.1, x, y, r);
    c.addColorStop(0, `rgba(${lit ? "70,80,105" : "30,38,58"},0.35)`);
    c.addColorStop(0.6, "rgba(16,21,34,0.22)");
    c.addColorStop(1, "rgba(14,19,32,0)");
    g.save();
    g.translate(x, y);
    g.scale(2.2, 1);
    g.translate(-x, -y);
    g.fillStyle = c;
    g.beginPath();
    g.arc(x, y, r, 0, 7);
    g.fill();
    g.restore();
  }
};
cloud(A * 0.62, 0.12, 0.5, 0.13, true);
cloud(A * 0.95, 0.2, 0.45, 0.1, true);
cloud(A * 0.2, 0.08, 0.6, 0.14, false);
cloud(A * 0.4, 0.3, 0.8, 0.09, false);
cloud(A * 0.85, 0.36, 0.7, 0.07, false);
cloud(A * 0.1, 0.4, 0.5, 0.06, false);
g.globalAlpha = 1;
gr = g.createLinearGradient(0, hz - 0.1, 0, hz + 0.01);
gr.addColorStop(0, "rgba(40,52,78,0)");
gr.addColorStop(1, "rgba(60,72,98,0.55)");
g.fillStyle = gr;
g.fillRect(-0.1, hz - 0.1, A + 0.2, 0.11);
g.fillStyle = "#0a1220";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
