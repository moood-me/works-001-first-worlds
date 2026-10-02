const w = e.aspect,
  s = e.state,
  t = e.t;
const T = Number.isFinite(s.time) ? s.time : 320;
const d = Math.min(1, Math.max(0, (T - 305) / 110));
function mx(a, b, k) {
  const p = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)];
  const A = p(a),
    B = p(b);
  return "rgb(" + A.map((v, i) => Math.round(v + (B[i] - v) * k)).join(",") + ")";
}
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, mx("#070a16", "#222b44", d));
gr.addColorStop(0.33, mx("#121831", "#46506e", d));
gr.addColorStop(0.56, mx("#2c2a42", "#a98078", d));
gr.addColorStop(0.63, mx("#3a3245", "#d59e80", d));
gr.addColorStop(0.7, mx("#1a1a22", "#2c2b33", d));
gr.addColorStop(1, mx("#121218", "#1e1e24", d));
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
let cg = g.createRadialGradient(w * 0.8, 0.63, 0, w * 0.8, 0.63, 0.9);
cg.addColorStop(0, "rgba(230,150,110," + (0.1 + 0.3 * d) + ")");
cg.addColorStop(1, "rgba(230,150,110,0)");
g.fillStyle = cg;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
for (let i = 0; i < 80; i++) {
  const x = -0.3 + e.rnd() * (w + 0.6),
    y = -0.35 + e.rnd() * 0.8,
    r = 0.0012 + e.rnd() * 0.0022,
    f = 0.5 + e.rnd();
  const tw = 0.6 + 0.4 * Math.sin(t * f + i);
  const a = 0.75 * (1 - d) * tw * Math.max(0, 1 - Math.max(0, y) / 0.45);
  if (a <= 0.01) continue;
  g.fillStyle = "rgba(220,225,240," + a + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
}
g.globalAlpha = 0.22 + 0.12 * d;
for (let i = 0; i < 8; i++) {
  const sp = 0.002 + e.rnd() * 0.002;
  const x = ((e.rnd() * (w + 1) + t * sp) % (w + 1)) - 0.5;
  const y = 0.32 + e.rnd() * 0.24;
  const r = 0.1 + e.rnd() * 0.15;
  g.save();
  g.translate(x, y);
  g.scale(3.5, 0.35);
  let c = g.createRadialGradient(0, 0, 0, 0, 0, r);
  c.addColorStop(0, mx("#3c3a52", "#d29484", d));
  c.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = c;
  g.beginPath();
  g.arc(0, 0, r, 0, 7);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
