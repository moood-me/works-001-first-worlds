const A = e.aspect || 1.7778,
  t = e.t;
let s = 7;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const gr = g.createLinearGradient(0, -0.35, 0, 0.4);
gr.addColorStop(0, "#060b15");
gr.addColorStop(0.3, "#0a1220");
gr.addColorStop(0.68, "#2c3b52");
gr.addColorStop(0.9, "#555a70");
gr.addColorStop(1, "#6b6478");
g.fillStyle = gr;
g.fillRect(-0.35, -0.35, A + 0.7, 0.75);
g.fillStyle = "#5d5a6e";
g.fillRect(-0.35, 0.4, A + 0.7, 0.85);
const hg = g.createRadialGradient(A * 0.12, 0.42, 0, A * 0.12, 0.42, 0.7);
hg.addColorStop(0, "rgba(165,125,135,0.22)");
hg.addColorStop(1, "rgba(165,125,135,0)");
g.fillStyle = hg;
g.fillRect(-0.35, -0.3, A + 0.7, 0.72);
for (let i = 0; i < 240; i++) {
  const x = R() * A,
    y = -0.35 + Math.pow(R(), 1.3) * 0.7,
    m = R(),
    ph = R() * 6.283,
    sp = 0.3 + R() * 1.1;
  const fade = Math.max(0, Math.min(1, (0.36 - y) / 0.22));
  const dm = Math.hypot(x - 0.7 * A, y - 0.18);
  const tw = 0.65 + 0.35 * Math.sin(t * sp + ph) * Math.sin(t * sp * 0.37 + ph * 1.7);
  const a = (0.12 + 0.6 * m * m * m) * fade * tw * Math.min(1, dm / 0.28);
  if (a < 0.01) continue;
  g.globalAlpha = a;
  g.fillStyle = m > 0.94 ? "#efe4d6" : "#cdd6e8";
  g.beginPath();
  g.arc(x, y, e.px * (0.5 + m * m * 1.3), 0, 6.283);
  g.fill();
}
g.globalAlpha = 1;
