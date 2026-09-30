const A = e.aspect,
  hz = 0.56;
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#02040b");
gr.addColorStop(0.5, "#070c1a");
gr.addColorStop(0.85, "#10182b");
gr.addColorStop(1, "#1a2438");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
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
// the moon, veiled
const mx = A * 0.8,
  my = 0.06;
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
// torn clouds: soft dark masses with a moonlit rim
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
cloud(A * 0.62, 0.09, 0.5, 0.13, true);
cloud(A * 0.95, 0.16, 0.45, 0.1, true);
cloud(A * 0.2, 0.05, 0.6, 0.14, false);
cloud(A * 0.4, 0.3, 0.8, 0.09, false);
cloud(A * 0.85, 0.36, 0.7, 0.07, false);
cloud(A * 0.1, 0.4, 0.5, 0.06, false);
gr = g.createLinearGradient(0, hz - 0.1, 0, hz + 0.01);
gr.addColorStop(0, "rgba(40,52,78,0)");
gr.addColorStop(1, "rgba(60,72,98,0.55)");
g.fillStyle = gr;
g.fillRect(-0.1, hz - 0.1, A + 0.2, 0.11);
g.fillStyle = "#0a1220";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
