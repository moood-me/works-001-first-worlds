const s = e.state,
  t = e.t,
  L = s.pod3_light ?? 0.2,
  fr = s.frost_density ?? 0.9,
  R = e.rnd;
let gr = g.createLinearGradient(0, -4.6, 0, 0.2);
gr.addColorStop(0, "#05070a");
gr.addColorStop(0.55, "#111820");
gr.addColorStop(1, "#080a0e");
g.fillStyle = gr;
g.fillRect(-8, -4.6, 16, 4.8);
let rg = g.createRadialGradient(0, -1.4, 0.3, 0, -1.4, 4.5);
rg.addColorStop(0, "rgba(90,150,205," + (0.05 + 0.16 * L) + ")");
rg.addColorStop(1, "rgba(90,150,205,0)");
g.fillStyle = rg;
g.fillRect(-8, -4.6, 16, 4.8);
for (let i = 0; i < 13; i++) {
  const x = -6.6 + i * 1.1;
  if (Math.abs(x + 1.45) < 0.5) continue;
  const q = g.createLinearGradient(x - 0.1, 0, x + 0.1, 0);
  q.addColorStop(0, "#1c242e");
  q.addColorStop(1, "#06080b");
  g.fillStyle = q;
  g.fillRect(x - 0.1, -4.6, 0.2, 4.8);
  g.fillStyle = "rgba(150,175,200,0.12)";
  for (let y = -4.3; y < 0; y += 0.45) g.fillRect(x - 0.03, y, 0.025, 0.025);
}
g.fillStyle = "#0b0f14";
g.fillRect(-8, -2.74, 16, 0.1);
g.fillRect(-8, -2.58, 16, 0.07);
g.fillRect(-8, -0.42, 16, 0.08);
g.fillStyle = "rgba(140,170,200,0.1)";
g.fillRect(-8, -2.74, 16, 0.012);
g.fillRect(-8, -2.58, 16, 0.01);
for (let i = 0; i < 1700; i++) {
  const u = R(),
    x = -7 + R() * 14,
    a = R(),
    k = R(),
    v = R();
  let y;
  if (u < 0.4) y = -2.78 + v * 0.28;
  else if (u < 0.6) y = -0.46 + v * 0.12;
  else if (u < 0.8) y = -4.5 + Math.pow(v, 3) * 1.6;
  else y = -v * 4.5;
  if (k > fr) continue;
  g.fillStyle = "rgba(205,225,242," + (0.04 + 0.13 * a) + ")";
  const z = 0.006 + a * 0.011;
  g.fillRect(x, y, z, z);
}
g.strokeStyle = "rgba(215,232,248,0.22)";
g.lineWidth = 0.008;
for (let i = 0; i < 40; i++) {
  const x = -6 + R() * 12,
    w = R(),
    w2 = R(),
    y = -2.8 + R() * 0.35 - (w < 0.3 ? w2 * 1.2 : 0),
    r = 0.03 + R() * 0.05,
    k = R();
  if (k > fr) continue;
  for (let j = 0; j < 3; j++) {
    const a = (j * Math.PI) / 3;
    g.beginPath();
    g.moveTo(x - Math.cos(a) * r, y - Math.sin(a) * r);
    g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r);
    g.stroke();
  }
}
const dx = -1.45;
const door = () => {
  g.beginPath();
  g.moveTo(dx - 0.45, 0);
  g.lineTo(dx - 0.45, -1.72);
  g.quadraticCurveTo(dx - 0.45, -2.02, dx - 0.15, -2.02);
  g.lineTo(dx + 0.15, -2.02);
  g.quadraticCurveTo(dx + 0.45, -2.02, dx + 0.45, -1.72);
  g.lineTo(dx + 0.45, 0);
  g.closePath();
};
door();
const dg = g.createLinearGradient(0, -2, 0, 0);
dg.addColorStop(0, "#020304");
dg.addColorStop(1, "#140707");
g.fillStyle = dg;
g.fill();
g.strokeStyle = "#1a2129";
g.lineWidth = 0.12;
door();
g.stroke();
g.strokeStyle = "rgba(200,160,60,0.18)";
g.lineWidth = 0.05;
g.setLineDash([0.12, 0.12]);
door();
g.stroke();
g.setLineDash([]);
const ang = (t * 1.3) % (Math.PI * 2),
  Rb = Math.pow(Math.max(0, Math.cos(ang)), 3);
g.fillStyle = "#14171c";
g.fillRect(dx - 0.12, -2.42, 0.24, 0.26);
const lg = g.createRadialGradient(dx, -2.3, 0, dx, -2.3, 0.11);
lg.addColorStop(0, "rgba(255,110,90," + (0.3 + 0.7 * Rb) + ")");
lg.addColorStop(1, "rgba(120,20,20," + (0.3 + 0.4 * Rb) + ")");
g.fillStyle = lg;
g.beginPath();
g.ellipse(dx, -2.3, 0.08, 0.11, 0, 0, 7);
g.fill();
e.light(dx, -2.3, 2.4, "#ff3a30", 0.08 + 0.4 * Rb);
