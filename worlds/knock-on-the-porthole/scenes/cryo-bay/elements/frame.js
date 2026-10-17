const s = e.state,
  t = e.t,
  R = e.rnd,
  fr = s.frost_density ?? 0.9,
  cd = s.condensation ?? 0.15,
  L = s.pod3_light ?? 0.2;
let gr = g.createLinearGradient(-1.5, 0, -0.95, 0);
gr.addColorStop(0, "#05070a");
gr.addColorStop(0.8, "#0d1218");
gr.addColorStop(1, "#1a2430");
g.fillStyle = gr;
g.fillRect(-1.6, -2.8, 0.65, 2.8);
g.fillStyle = "rgba(120,180,230," + (0.1 + 0.2 * L) + ")";
g.fillRect(-0.965, -2.8, 0.012, 2.8);
g.fillStyle = "#07090c";
for (let y = -2.5; y < 0; y += 0.7) g.fillRect(-1.1, y, 0.1, 0.04);
for (let i = 0; i < 500; i++) {
  const x = -0.96 - Math.pow(R(), 2) * 0.3,
    y = -R() * 2.8,
    a = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(215,232,248," + (0.04 + 0.16 * a) + ")";
  const z = 0.002 + a * 0.005;
  g.beginPath();
  g.arc(x, y, z, 0, 7);
  g.fill();
}
const py = -2.12;
let pg = g.createLinearGradient(0, py - 0.08, 0, py + 0.08);
pg.addColorStop(0, "#1c2530");
pg.addColorStop(0.5, "#0e1319");
pg.addColorStop(1, "#05070a");
g.fillStyle = pg;
g.fillRect(-2.6, py - 0.08, 5.2, 0.16);
g.fillStyle = "#090c10";
for (let x = -2.2; x < 2.6; x += 0.9) g.fillRect(x, py - 0.1, 0.05, 0.2);
for (let i = 0; i < 500; i++) {
  const x = -2.6 + R() * 5.2,
    a = R(),
    k = R(),
    y = py - 0.08 - R() * 0.03;
  if (k > fr) continue;
  g.fillStyle = "rgba(220,235,250," + (0.08 + 0.25 * a) + ")";
  const z = 0.003 + a * 0.006;
  g.fillRect(x, y, z, z);
}
for (let i = 0; i < 34; i++) {
  const x = -2.4 + R() * 4.8,
    l = (0.02 + Math.pow(R(), 2) * 0.16) * (0.3 + 0.8 * fr),
    w = 0.008 + R() * 0.012,
    ph = R() * 20;
  g.fillStyle = "rgba(190,215,238,0.35)";
  g.beginPath();
  g.moveTo(x - w, py + 0.07);
  g.lineTo(x + w, py + 0.07);
  g.lineTo(x, py + 0.07 + l);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(240,248,255,0.4)";
  g.fillRect(x - w * 0.4, py + 0.075, w * 0.3, l * 0.6);
  if (i % 5 === 0 && cd > 0.1) {
    const per = 3 + ((i * 1.7) % 4),
      p = ((t + ph) % per) / per;
    const dy = p < 0.6 ? 0 : Math.pow((p - 0.6) / 0.4, 2) * 2.2;
    const al = p < 0.6 ? (p / 0.6) * 0.6 : 0.6 * (1 - (p - 0.6) / 0.4);
    g.fillStyle = "rgba(225,240,255," + al * Math.min(1, cd * 2) + ")";
    g.beginPath();
    g.ellipse(x, py + 0.076 + l + dy, 0.006, p > 0.6 ? 0.016 : 0.009, 0, 0, 7);
    g.fill();
  }
}
const sw = Math.sin(t * 0.37) * 0.03 + Math.sin(t * 0.13) * 0.02;
g.strokeStyle = "#06080b";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(1.5, py);
g.quadraticCurveTo(1.5 + sw * 0.5, py + 0.35, 1.52 + sw, py + 0.62);
g.stroke();
