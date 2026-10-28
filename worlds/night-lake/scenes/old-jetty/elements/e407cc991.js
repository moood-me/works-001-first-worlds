const A = e.aspect,
  H = 0.5,
  mx = A * 0.72,
  my = 0.36,
  t = e.t,
  S = Math.max(0, Math.min(1, e.state.waterShiver ?? 0.35));
const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const gr = g.createLinearGradient(0, H, 0, 1.3);
gr.addColorStop(0, "#2a3b5e");
gr.addColorStop(0.05, "#1a2846");
gr.addColorStop(0.3, "#0d172e");
gr.addColorStop(1, "#03070f");
g.fillStyle = gr;
g.fillRect(-0.1, H, A + 0.2, 0.82);
g.save();
g.translate(mx, H);
g.scale(0.3, 1);
const sg = g.createRadialGradient(0, 0.25, 0, 0, 0.25, 0.85);
sg.addColorStop(0, "rgba(120,145,195,0.18)");
sg.addColorStop(1, "rgba(90,115,170,0)");
g.fillStyle = sg;
g.fillRect(-0.9, 0, 1.8, 0.82);
g.restore();
const wob = 0.4 + 1.6 * S,
  sp = 0.7 + 0.8 * S;
g.lineCap = "round";
for (let i = 0; i < 280; i++) {
  const y = H + 0.002 + Math.pow(h(i + 11), 2.2) * 0.78;
  const d = y - H;
  const len = 0.008 + d * 0.4 * (0.3 + h(i + 31));
  const x0 = h(i + 51) * (A + 0.4) - 0.2 + Math.sin(t * (0.05 + 0.06 * h(i + 71)) * sp + i) * d * 0.2 * wob;
  g.globalAlpha = (0.05 + 0.12 * h(i + 91)) * (0.6 + 0.4 * Math.sin(t * (0.2 + 0.3 * h(i + 13)) * sp + i * 1.7));
  g.strokeStyle = h(i + 33) < 0.55 ? "#3b5079" : "#030812";
  g.lineWidth = Math.max(e.px, d * 0.01);
  g.beginPath();
  g.moveTo(x0, y + Math.sin(t * 0.7 * sp + i) * d * 0.004 * wob);
  g.lineTo(x0 + len, y);
  g.stroke();
}
g.fillStyle = "#e2eaf8";
for (let i = 0; i < 220; i++) {
  const y = H + 0.002 + Math.pow(h(i + 400), 1.6) * 0.78;
  const d = y - H;
  const spr = 0.01 + d * 0.15 * (0.8 + 0.4 * S);
  const x =
    mx +
    (h(i + 600) - 0.5) * 2 * spr * (0.25 + 0.75 * h(i + 800)) +
    Math.sin(t * (0.3 + 0.4 * h(i + 1000)) * sp + i) * d * 0.03 * (0.4 + 2 * S);
  const on = 0.5 + 0.5 * Math.sin(t * (0.4 + 0.7 * h(i + 1200)) * (0.6 + 0.9 * S) + i * 2.3);
  const w = (0.003 + d * 0.06) * (0.35 + h(i + 1400)) * (1.2 - 0.4 * S);
  g.globalAlpha = Math.max(
    0,
    (0.12 + 0.6 * on * on) * (1 - (0.6 * Math.abs(x - mx)) / spr) * (1 - 0.35 * Math.max(0, d - 0.45)),
  );
  g.fillRect(x - w / 2, y, w, Math.max(e.px, d * 0.005));
}
const ry = 2 * H - my;
for (let s = 0; s < 9; s++) {
  const k = (s - 4) / 4.5;
  const y = ry + k * 0.03;
  const w = 0.028 * Math.sqrt(Math.max(0, 1 - k * k)) * (0.7 + 0.3 * Math.sin(t * 0.5 * sp + s * 1.9));
  const dx = Math.sin(t * 0.35 * sp + s * 1.3) * 0.004 * (0.5 + 3 * S);
  g.globalAlpha = 0.35 + 0.15 * Math.sin(t * 0.6 + s);
  g.fillRect(mx + dx - w, y, 2 * w, Math.max(e.px, 0.003));
}
g.globalAlpha = 1;
