const A = e.aspect,
  H = 0.6,
  d = e.state.dawn ?? 0.3,
  f = e.state.fog ?? 0.85;
const L = (a, b) => "rgb(" + a.map((v, i) => Math.round(v + (b[i] - v) * d)).join(",") + ")";
const sx = A * 0.34,
  sy = 0.5 - d * 0.14;
let gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, L([74, 90, 112], [112, 140, 170]));
gr.addColorStop(0.5, L([152, 160, 172], [186, 200, 214]));
gr.addColorStop(0.85, L([214, 198, 188], [228, 222, 212]));
gr.addColorStop(1, L([228, 212, 200], [236, 232, 224]));
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, H + 0.36);
let rg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.8);
rg.addColorStop(0, "rgba(255,226,194,0.5)");
rg.addColorStop(0.3, "rgba(246,204,174,0.16)");
rg.addColorStop(1, "rgba(240,200,170,0)");
g.fillStyle = rg;
g.fillRect(-0.3, -0.35, A + 0.6, H + 0.35);
for (let i = 0; i < 10; i++) {
  const x = -0.3 + ((e.rnd() * (A + 0.6) + e.t * 0.0015 * (0.5 + e.rnd())) % (A + 0.6));
  const y = -0.2 + e.rnd() * 0.5;
  const w = 0.25 + e.rnd() * 0.4;
  g.save();
  g.translate(x, y);
  g.scale(1, 0.06);
  let cg = g.createRadialGradient(0, 0, 0, 0, 0, w);
  cg.addColorStop(0, "rgba(244,232,222,0.16)");
  cg.addColorStop(1, "rgba(244,232,222,0)");
  g.fillStyle = cg;
  g.beginPath();
  g.arc(0, 0, w, 0, 7);
  g.fill();
  g.restore();
}
let wg = g.createLinearGradient(0, H, 0, 1.25);
wg.addColorStop(0, L([212, 202, 196], [222, 220, 216]));
wg.addColorStop(0.1, L([156, 160, 166], [172, 184, 194]));
wg.addColorStop(0.5, L([96, 106, 118], [112, 128, 144]));
wg.addColorStop(1, L([62, 72, 86], [80, 96, 112]));
g.fillStyle = wg;
g.fillRect(-0.3, H, A + 0.6, 0.66);
g.save();
g.translate(sx, H + 0.03);
g.scale(1, 0.35);
let wr = g.createRadialGradient(0, 0, 0, 0, 0, 0.6);
wr.addColorStop(0, "rgba(255,230,200,0.35)");
wr.addColorStop(1, "rgba(255,230,200,0)");
g.fillStyle = wr;
g.beginPath();
g.arc(0, 0, 0.6, 0, 7);
g.fill();
g.restore();
for (let i = 0; i < 140; i++) {
  const r = e.rnd();
  const yy = H + 0.004 + Math.pow(r, 1.7) * 0.64;
  const dd = yy - H;
  const w = (0.03 + dd * 0.9) * (0.3 + e.rnd());
  const x = -0.3 + e.rnd() * (A + 0.6) + Math.sin(e.t * 0.08 + i) * 0.01;
  g.globalAlpha = 0.07 + 0.04 * Math.sin(e.t * 0.27 + i * 2.1);
  g.fillStyle = i % 2 ? "#e8e4de" : "#4a5562";
  g.fillRect(x, yy, w, Math.max(e.px, dd * 0.006));
}
const sp0 = 1 - f * 0.45;
for (let i = 0; i < 170; i++) {
  const r = e.rnd();
  const yy = H + 0.003 + Math.pow(r, 1.6) * 0.6;
  const dd = yy - H;
  const w = (0.01 + dd * 0.2) * (0.3 + e.rnd());
  const sp = 0.02 + dd * 0.3;
  const ox = (e.rnd() - 0.5) * 2 * sp + Math.sin(e.t * 0.4 + i * 1.7) * sp * 0.25;
  const a = 0.5 + 0.5 * Math.sin(e.t * (0.5 + e.rnd() * 1.2) + i * 2.3);
  g.globalAlpha = sp0 * a * 0.5 * (1 - dd * 1.2) * Math.max(0, 1 - Math.abs(ox) / (sp * 1.1));
  g.fillStyle = "#fff0da";
  g.fillRect(sx + ox - w / 2, yy, w, Math.max(e.px, dd * 0.01));
}
g.globalAlpha = 1;
