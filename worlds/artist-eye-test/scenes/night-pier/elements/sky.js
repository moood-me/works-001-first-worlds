const A = e.aspect,
  H = 0.6;
const mx = A * 0.38,
  my = 0.3;
let gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#04070d");
gr.addColorStop(0.55, "#0b1322");
gr.addColorStop(1, "#223042");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, A + 0.6, H + 0.36);
let rg = g.createRadialGradient(mx, my, 0, mx, my, 0.6);
rg.addColorStop(0, "rgba(190,205,220,0.22)");
rg.addColorStop(0.25, "rgba(110,130,160,0.08)");
rg.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = rg;
g.fillRect(-0.3, -0.35, A + 0.6, H + 0.35);
for (let i = 0; i < 240; i++) {
  const x = -0.3 + e.rnd() * (A + 0.6),
    y = -0.35 + e.rnd() * (H + 0.25);
  const b = e.rnd();
  const tw = 0.65 + 0.35 * Math.sin(e.t * (0.4 + b * 1.1) + i * 1.3);
  const dm = Math.hypot(x - mx, y - my);
  const fade = Math.min(1, Math.max(0, (dm - 0.08) / 0.3)) * Math.min(1, Math.max(0, (H - 0.05 - y) / 0.25));
  g.globalAlpha = (0.12 + 0.6 * b * b) * tw * fade;
  g.fillStyle = "#dfe6f0";
  g.beginPath();
  g.arc(x, y, (0.6 + b * 1.3) * e.px, 0, 7);
  g.fill();
}
g.globalAlpha = 1;
let wg = g.createLinearGradient(0, H, 0, 1.25);
wg.addColorStop(0, "#2a3644");
wg.addColorStop(0.08, "#18222e");
wg.addColorStop(0.5, "#0c121b");
wg.addColorStop(1, "#060a10");
g.fillStyle = wg;
g.fillRect(-0.3, H, A + 0.6, 0.66);
let wr = g.createRadialGradient(mx, H + 0.05, 0, mx, H + 0.05, 0.5);
wr.addColorStop(0, "rgba(150,170,190,0.12)");
wr.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = wr;
g.fillRect(-0.3, H, A + 0.6, 0.66);
for (let i = 0; i < 120; i++) {
  const r = e.rnd();
  const yy = H + 0.004 + Math.pow(r, 1.7) * 0.64;
  const d = yy - H;
  const w = (0.03 + d * 0.9) * (0.3 + e.rnd());
  const x = -0.3 + e.rnd() * (A + 0.6) + Math.sin(e.t * 0.1 + i) * 0.01;
  g.globalAlpha = 0.06 + 0.05 * Math.sin(e.t * 0.3 + i * 2.1);
  g.fillStyle = "#8fa2b5";
  g.fillRect(x, yy, w, Math.max(e.px, d * 0.006));
}
for (let i = 0; i < 190; i++) {
  const r = e.rnd();
  const yy = H + 0.003 + Math.pow(r, 1.6) * 0.64;
  const d = yy - H;
  const w = (0.01 + d * 0.22) * (0.3 + e.rnd());
  const sp = 0.016 + d * 0.36;
  const ox = (e.rnd() - 0.5) * 2 * sp + Math.sin(e.t * 0.5 + i * 1.7) * sp * 0.25;
  const a = 0.5 + 0.5 * Math.sin(e.t * (0.6 + e.rnd() * 1.4) + i * 2.3);
  g.globalAlpha = a * 0.6 * (1 - d * 1.1) * Math.max(0, 1 - Math.abs(ox) / (sp * 1.1));
  g.fillStyle = "#d4dce3";
  g.fillRect(mx + ox - w / 2, yy, w, Math.max(e.px, d * 0.01));
}
g.globalAlpha = 1;
