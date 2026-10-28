const A = e.aspect,
  H = 0.42,
  mx = A * 0.78,
  t = e.t;
const S = e.state || {};
const tremble = Math.min(1, (S.waterTremble ?? 0.25) + (S.gust || 0) * 0.5);
const h = (i) => {
  const s = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};
const gr = g.createLinearGradient(0, H, 0, 1.25);
gr.addColorStop(0, "#2a3b5e");
gr.addColorStop(0.05, "#1b2947");
gr.addColorStop(0.35, "#0f1a33");
gr.addColorStop(1, "#060b19");
g.fillStyle = gr;
g.fillRect(-0.1, H, A + 0.2, 0.72);
g.save();
g.translate(mx, H);
g.scale(0.32, 1);
const sg = g.createRadialGradient(0, 0.2, 0, 0, 0.2, 0.75);
sg.addColorStop(0, "rgba(120,145,195,0.20)");
sg.addColorStop(1, "rgba(90,115,170,0)");
g.fillStyle = sg;
g.fillRect(-0.8, 0, 1.6, 0.72);
g.restore();
g.lineCap = "round";
for (let i = 0; i < 240; i++) {
  const y = H + 0.002 + Math.pow(h(i + 11), 2.3) * 0.7;
  const d = y - H;
  const len = 0.008 + d * 0.4 * (0.3 + h(i + 31));
  const x0 =
    h(i + 51) * (A + 0.4) -
    0.2 +
    Math.sin(t * (0.05 + 0.05 * h(i + 71)) + i) * d * (0.2 + 0.5 * tremble) +
    Math.sin(t * (1.1 + 0.8 * h(i + 73)) + i) * d * 0.02 * tremble;
  g.globalAlpha =
    (0.05 + 0.12 * h(i + 91)) * (0.6 + 0.4 * Math.sin(t * (0.2 + 0.3 * h(i + 13)) + i * 1.7)) * (0.8 + 0.7 * tremble);
  g.strokeStyle = h(i + 33) < 0.55 ? "#3b5079" : "#040914";
  g.lineWidth = Math.max(e.px, d * 0.01);
  g.beginPath();
  g.moveTo(x0, y);
  g.lineTo(x0 + len, y);
  g.stroke();
}
g.fillStyle = "#e2eaf8";
for (let i = 0; i < 180; i++) {
  const y = H + 0.002 + Math.pow(h(i + 400), 1.7) * 0.69;
  const d = y - H;
  const sp = 0.01 + d * 0.17;
  const x =
    mx +
    (h(i + 600) - 0.5) * 2 * sp * (0.25 + 0.75 * h(i + 800)) +
    Math.sin(t * (0.3 + 0.4 * h(i + 1000)) + i) * d * (0.025 + 0.05 * tremble);
  const on = 0.5 + 0.5 * Math.sin(t * (0.4 + 0.7 * h(i + 1200)) + i * 2.3);
  const w = (0.003 + d * 0.07) * (0.35 + h(i + 1400));
  g.globalAlpha = Math.max(0, (0.12 + 0.6 * on * on) * (1 - (0.6 * Math.abs(x - mx)) / sp));
  g.fillRect(x - w / 2, y, w, Math.max(e.px, d * 0.005));
}
const ry = 2 * H - 0.17;
for (let s = 0; s < 9; s++) {
  const k = (s - 4) / 4.5;
  const y = ry + k * 0.03;
  const w = 0.028 * Math.sqrt(Math.max(0, 1 - k * k)) * (0.7 + 0.3 * Math.sin(t * 0.5 + s * 1.9));
  const dx = Math.sin(t * 0.35 + s * 1.3) * (0.006 + 0.012 * tremble);
  g.globalAlpha = 0.35 + 0.15 * Math.sin(t * 0.6 + s);
  g.fillRect(mx + dx - w, y, 2 * w, Math.max(e.px, 0.003));
}
g.globalAlpha = 1;
