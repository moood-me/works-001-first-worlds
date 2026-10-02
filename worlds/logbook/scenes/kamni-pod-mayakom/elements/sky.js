const A = e.aspect,
  hz = 0.47,
  W = String(e.state.weather || ""),
  fog = /fog|туман/.test(W),
  rain = /rain|дожд|storm|шторм/.test(W);
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#02040b");
gr.addColorStop(0.5, "#070c1a");
gr.addColorStop(0.85, "#111a30");
gr.addColorStop(1, "#1d2741");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
g.globalAlpha = rain ? 0.25 : fog ? 0.12 : 1;
for (let i = 0; i < 320; i++) {
  const x = e.rnd() * A,
    y = -0.35 + Math.pow(e.rnd(), 1.3) * (hz + 0.3),
    big = e.rnd() < 0.07,
    c = e.rnd(),
    al = (0.25 + e.rnd() * 0.55) * (1 - Math.max(0, (y - hz + 0.25) / 0.25)),
    sz = big ? 0.0022 : 0.0008 + e.rnd() * 0.0009;
  g.fillStyle =
    (c < 0.15 ? "rgba(255,220,190," : c < 0.3 ? "rgba(190,210,255," : "rgba(240,240,255,") + Math.max(0, al) + ")";
  g.fillRect(x, y, sz, sz);
}
g.globalAlpha = 1;
const mx = A * 0.72,
  my = 0.1,
  mv = rain ? 0.45 : fog ? 0.35 : 1;
gr = g.createRadialGradient(mx, my, 0, mx, my, fog ? 0.4 : 0.26);
gr.addColorStop(0, `rgba(215,225,245,${0.55 * mv})`);
gr.addColorStop(0.06, `rgba(205,215,240,${0.3 * mv})`);
gr.addColorStop(0.22, `rgba(190,200,230,${0.08 * mv + (fog ? 0.06 : 0)})`);
gr.addColorStop(1, "rgba(190,200,230,0)");
g.fillStyle = gr;
g.fillRect(mx - 0.45, my - 0.45, 0.9, 0.9);
g.fillStyle = `rgba(236,240,252,${0.85 * mv})`;
g.beginPath();
g.arc(mx, my, 0.017, 0, 7);
g.fill();
g.fillStyle = `rgba(150,160,185,${0.25 * mv})`;
g.beginPath();
g.arc(mx - 0.004, my - 0.003, 0.006, 0, 7);
g.fill();
g.beginPath();
g.arc(mx + 0.005, my + 0.005, 0.004, 0, 7);
g.fill();
const cloud = (cx, cy, w, h, lit, dk) => {
  for (let k = 0; k < 26; k++) {
    const x = cx + (e.rnd() - 0.5) * w,
      y = cy + (e.rnd() - 0.5) * h * 0.6,
      r = h * (0.25 + e.rnd() * 0.4);
    const c = g.createRadialGradient(x, y - r * 0.3, r * 0.1, x, y, r);
    c.addColorStop(0, `rgba(${lit ? "70,80,105" : "30,38,58"},${0.35 * dk})`);
    c.addColorStop(0.6, `rgba(16,21,34,${0.22 * dk})`);
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
const dk = rain ? 1.6 : 1;
cloud(A * 0.6, 0.17, 0.5, 0.11, true, dk);
cloud(A * 0.9, 0.03, 0.45, 0.09, true, dk);
cloud(A * 0.2, 0.06, 0.6, 0.14, false, dk);
cloud(A * 0.4, 0.3, 0.8, 0.08, false, dk);
cloud(A * 0.85, 0.36, 0.7, 0.06, false, dk);
cloud(A * 0.1, 0.38, 0.5, 0.06, false, dk);
if (rain) {
  cloud(A * 0.5, -0.05, 1.4, 0.22, false, 1.8);
  cloud(A * 0.75, 0.2, 0.8, 0.12, true, 1.4);
}
gr = g.createLinearGradient(0, hz - 0.1, 0, hz + 0.01);
gr.addColorStop(0, "rgba(40,52,78,0)");
gr.addColorStop(1, "rgba(60,72,98,0.5)");
g.fillStyle = gr;
g.fillRect(-0.1, hz - 0.1, A + 0.2, 0.11);
if (fog) {
  gr = g.createLinearGradient(0, -0.35, 0, hz + 0.02);
  gr.addColorStop(0, "rgba(30,38,56,0.35)");
  gr.addColorStop(1, "rgba(52,62,84,0.8)");
  g.fillStyle = gr;
  g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.42);
}
g.fillStyle = "#0a1220";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
