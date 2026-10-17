const A = e.aspect,
  hz = 0.46,
  W = e.state.weather || "clear";
const fog = W === "fog" ? 1 : W === "storm" ? 0.65 : W === "rain" ? 0.5 : W === "drizzle" ? 0.3 : 0;
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#02040a");
gr.addColorStop(0.5, "#070e1d");
gr.addColorStop(0.85, "#111a2f");
gr.addColorStop(1, "#1b253d");
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
g.globalAlpha = 1 - fog * 0.92;
for (let i = 0; i < 340; i++) {
  const x = e.rnd() * (A + 0.7) - 0.35,
    y = -0.35 + Math.pow(e.rnd(), 1.3) * (hz + 0.3),
    big = e.rnd() < 0.07,
    c = e.rnd();
  const dm = Math.hypot(x - A * 0.72, y - 0.1),
    near = Math.min(1, dm / 0.3);
  g.fillStyle =
    (c < 0.15 ? "rgba(255,220,190," : c < 0.3 ? "rgba(190,210,255," : "rgba(240,240,255,") +
    (0.2 + e.rnd() * 0.55) * near * (1 - Math.max(0, (y - hz + 0.25) / 0.25)) +
    ")";
  const s = big ? 0.0022 : 0.0008 + e.rnd() * 0.0009;
  g.fillRect(x, y, s, s);
}
g.globalAlpha = 1;
const mx = A * 0.72,
  my = 0.1;
gr = g.createRadialGradient(mx, my, 0, mx, my, 0.3 + fog * 0.15);
gr.addColorStop(0, `rgba(215,225,245,${0.5 - fog * 0.15})`);
gr.addColorStop(0.07, `rgba(200,212,240,${0.24})`);
gr.addColorStop(0.25, "rgba(180,195,230,0.07)");
gr.addColorStop(1, "rgba(180,195,230,0)");
g.fillStyle = gr;
g.fillRect(mx - 0.5, my - 0.5, 1, 1);
g.fillStyle = `rgba(236,240,250,${0.92 - fog * 0.55})`;
g.beginPath();
g.arc(mx, my, 0.017, 0, 7);
g.fill();
g.fillStyle = `rgba(150,160,185,${0.25 - fog * 0.15})`;
[
  [-0.005, -0.004, 0.005],
  [0.004, 0.003, 0.004],
  [-0.002, 0.007, 0.003],
].forEach(([dx, dy, r]) => {
  g.beginPath();
  g.arc(mx + dx, my + dy, r, 0, 7);
  g.fill();
});
const cloud = (cx, cy, w, h, lit) => {
  for (let k = 0; k < 26; k++) {
    const x = cx + (e.rnd() - 0.5) * w,
      y = cy + (e.rnd() - 0.5) * h * 0.6,
      r = h * (0.25 + e.rnd() * 0.4);
    const c = g.createRadialGradient(x, y - r * 0.3, r * 0.1, x, y, r);
    c.addColorStop(0, `rgba(${lit ? "78,88,115" : "28,36,56"},0.33)`);
    c.addColorStop(0.6, "rgba(15,20,33,0.22)");
    c.addColorStop(1, "rgba(14,19,32,0)");
    g.save();
    g.translate(x, y);
    g.scale(2.4, 1);
    g.translate(-x, -y);
    g.fillStyle = c;
    g.beginPath();
    g.arc(x, y, r, 0, 7);
    g.fill();
    g.restore();
  }
};
cloud(A * 0.58, 0.05, 0.45, 0.1, true);
cloud(A * 0.92, 0.17, 0.4, 0.08, true);
cloud(A * 0.18, 0.02, 0.6, 0.14, false);
cloud(A * 0.35, 0.28, 0.8, 0.08, false);
cloud(A * 0.85, 0.34, 0.7, 0.06, false);
cloud(A * 0.05, 0.38, 0.5, 0.05, false);
if (fog > 0) {
  g.fillStyle = `rgba(42,52,74,${fog * 0.45})`;
  g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
}
gr = g.createLinearGradient(0, hz - 0.12, 0, hz + 0.01);
gr.addColorStop(0, "rgba(40,52,78,0)");
gr.addColorStop(1, `rgba(62,74,100,${0.5 + fog * 0.3})`);
g.fillStyle = gr;
g.fillRect(-0.35, hz - 0.12, A + 0.7, 0.13);
g.fillStyle = "#0a1220";
g.fillRect(-0.35, hz, A + 0.7, 1.3 - hz);
