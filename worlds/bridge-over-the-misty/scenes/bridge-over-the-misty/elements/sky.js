const L = Math.max(0, Math.min(1, e.state.light)),
  A = e.aspect,
  s = 1 - L;
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return "rgb(" + p.join(",") + ")";
};
const gr = g.createLinearGradient(0, -0.35, 0, 0.8);
gr.addColorStop(0, m("#090d20", "#2b2d50"));
gr.addColorStop(0.45, m("#151b38", "#62557a"));
gr.addColorStop(0.78, m("#262b4a", "#c48f7c"));
gr.addColorStop(1, m("#2b3050", "#e6b68c"));
g.fillStyle = gr;
g.fillRect(-0.4, -0.4, A + 0.8, 1.7);
const sx = A * 0.7,
  sy = 0.6;
const rg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.75);
rg.addColorStop(0, "rgba(255,190,140," + (0.5 * L + 0.04) + ")");
rg.addColorStop(1, "rgba(255,190,140,0)");
g.fillStyle = rg;
g.fillRect(-0.4, -0.4, A + 0.8, 1.7);
for (let i = 0; i < 170; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = -0.35 + e.rnd() * 0.85,
    r = 0.0006 + e.rnd() * 0.0016,
    f = 0.3 + e.rnd() * 0.9,
    tw = 0.65 + 0.35 * Math.sin(e.t * f + i * 1.7);
  g.globalAlpha = Math.max(0, s * s * tw * (0.2 + 0.7 * (1 - (y + 0.35) / 0.9)));
  g.fillStyle = "#e8e4ff";
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
}
g.globalAlpha = 1;
const mx = A * 0.24,
  my = 0.13 + 0.12 * L,
  R = 0.026;
const mg = g.createRadialGradient(mx, my, 0, mx, my, 0.2);
mg.addColorStop(0, "rgba(215,222,255," + (0.1 + 0.2 * s) + ")");
mg.addColorStop(1, "rgba(215,222,255,0)");
g.fillStyle = mg;
g.beginPath();
g.arc(mx, my, 0.2, 0, 7);
g.fill();
g.save();
g.beginPath();
g.arc(mx, my, R, 0, 7);
g.clip();
g.globalAlpha = 0.5 + 0.5 * s;
g.fillStyle = "#ece8f2";
g.beginPath();
g.rect(mx - R, my - R, 2 * R, 2 * R);
g.arc(mx + R * 0.45, my - R * 0.25, R * 0.9, 0, 7);
g.fill("evenodd");
g.restore();
g.globalAlpha = 1;
for (let i = 0; i < 7; i++) {
  const cy = 0.3 + e.rnd() * 0.17,
    cw = 0.25 + e.rnd() * 0.45,
    cx = ((e.rnd() * (A + 0.9) + e.t * 0.0025 * (0.5 + e.rnd())) % (A + 0.9)) - 0.45;
  g.globalAlpha = 0.14 + 0.08 * e.rnd();
  g.fillStyle = m("#3a3c62", "#e2a98e");
  g.beginPath();
  g.ellipse(cx, cy, cw / 2, 0.005 + e.rnd() * 0.005, 0, 0, 7);
  g.fill();
}
g.globalAlpha = 1;
