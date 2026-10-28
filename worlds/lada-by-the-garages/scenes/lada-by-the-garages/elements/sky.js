const A = e.aspect,
  hz = 0.62,
  t = e.t,
  d = e.state.dusk || 0;
const L = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
let gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, L([52, 50, 92], [12, 12, 28], d));
gr.addColorStop(0.5, L([140, 86, 120], [34, 30, 58], d));
gr.addColorStop(0.85, L([232, 146, 98], [96, 58, 72], d));
gr.addColorStop(1, L([250, 196, 130], [140, 82, 76], d));
g.fillStyle = gr;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
const sx = A * 0.1,
  sy = hz + 0.02;
let sg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.7);
sg.addColorStop(0, "rgba(255,196,124," + 0.6 * (1 - d) + ")");
sg.addColorStop(1, "rgba(255,160,110,0)");
g.fillStyle = sg;
g.fillRect(-0.35, -0.4, A + 0.7, hz + 0.41);
g.globalAlpha = Math.max(0, Math.min(1, (d - 0.3) * 1.4));
for (let i = 0; i < 140; i++) {
  const x = -0.35 + e.rnd() * (A + 0.7),
    y = -0.35 + e.rnd() * 0.6,
    s = 0.001 + e.rnd() * 0.0012;
  g.fillStyle = "rgba(240,235,255," + (0.4 + 0.5 * e.rnd()) + ")";
  g.fillRect(x, y, s, s);
}
g.globalAlpha = 1;
for (let k = 0; k < 8; k++) {
  const cy = 0.06 + e.rnd() * 0.36,
    sp = 0.0012 * (1 + e.rnd()),
    cx = ((e.rnd() * (A + 1.2) + t * sp) % (A + 1.2)) - 0.6,
    w = 0.25 + e.rnd() * 0.45,
    h = 0.01 + e.rnd() * 0.018;
  g.save();
  g.translate(cx, cy);
  g.scale(w / h, 1);
  let c = g.createRadialGradient(0, 0, 0, 0, 0, h);
  c.addColorStop(0, L([255, 168, 140], [62, 52, 80], d));
  c.addColorStop(1, "rgba(255,168,140,0)");
  g.globalAlpha = 0.6;
  g.fillStyle = c;
  g.beginPath();
  g.arc(0, 0, h, 0, 7);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
const px = ((t * 0.006) % (A + 0.8)) - 0.4,
  py = 0.14 + 0.02 * Math.sin(px);
g.fillStyle = "rgba(255,240,220,0.8)";
g.fillRect(px, py, 0.002, 0.002);
if (Math.sin(t * 4) > 0.85) {
  g.fillStyle = "rgba(255,80,70,0.9)";
  g.fillRect(px - 0.002, py + 0.001, 0.0025, 0.0025);
}
g.fillStyle = L([46, 38, 48], [18, 16, 22], d);
g.fillRect(-0.35, hz, A + 0.7, 1.3 - hz);
