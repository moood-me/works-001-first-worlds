const A = e.aspect,
  t = e.t,
  f = e.state.fog;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#04060d");
gr.addColorStop(0.42, "#0d1729");
gr.addColorStop(0.6, "#1f3046");
gr.addColorStop(0.75, "#16233a");
gr.addColorStop(1, "#0a0f1a");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, 1.6);
for (let i = 0; i < 190; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = -0.35 + e.rnd() * 0.85,
    s = e.rnd(),
    ph = e.rnd() * 6.28;
  const tw = 0.55 + 0.25 * Math.sin(t * (0.5 + s * 1.1) + ph) + 0.2 * Math.sin(t * (0.23 + s * 0.7) + ph * 2);
  g.globalAlpha = Math.max(0, (0.12 + 0.6 * s) * tw * (1 - (y + 0.35) / 0.9));
  g.fillStyle = s > 0.9 ? "#ffe9c8" : "#cdd8ff";
  const r = 0.0012 + s * 0.0016;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.globalAlpha = 1;
const mx = A * 0.27,
  my = 0.16,
  r = 0.032;
let h = g.createRadialGradient(mx, my, 0, mx, my, 0.34);
h.addColorStop(0, "rgba(170,195,230,0.25)");
h.addColorStop(0.3, "rgba(120,150,200,0.08)");
h.addColorStop(1, "rgba(120,150,200,0)");
g.fillStyle = h;
g.fillRect(mx - 0.4, my - 0.4, 0.8, 0.8);
g.save();
g.beginPath();
g.arc(mx, my, r, 0, Math.PI * 2);
g.clip();
g.fillStyle = "#dfe6f2";
g.fillRect(mx - r, my - r, 2 * r, 2 * r);
g.fillStyle = "rgba(14,24,42,0.93)";
g.beginPath();
g.arc(mx + r * 0.45, my - r * 0.2, r * 0.95, 0, Math.PI * 2);
g.fill();
g.restore();
for (let i = 0; i < 6; i++) {
  const sp = 0.004 + 0.002 * (i % 3);
  let x = ((e.rnd() * (A + 1.2) + t * sp) % (A + 1.2)) - 0.6;
  const y = 0.08 + e.rnd() * 0.28,
    w = 0.25 + e.rnd() * 0.35;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.18);
  let c = g.createRadialGradient(0, 0, 0, 0, 0, w);
  c.addColorStop(0, "rgba(40,55,80," + (0.45 + 0.3 * f) + ")");
  c.addColorStop(1, "rgba(40,55,80,0)");
  g.fillStyle = c;
  g.beginPath();
  g.arc(0, 0, w, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
