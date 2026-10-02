const S = e.state || {},
  A = e.aspect,
  t = e.t;
const g0 = typeof S.lamp_glow === "number" ? S.lamp_glow : 0.8;
const glow = Math.max(0, Math.min(1, g0)) * (1 + Math.sin(t * 1.7) * 0.012 + Math.sin(t * 4.3 + 1) * 0.008);
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#0c0705");
gr.addColorStop(0.45, "#1e130b");
gr.addColorStop(0.62, "#2a1a0e");
gr.addColorStop(1, "#1c1209");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, 1.7);
const blob = (x, y, r, col, a) => {
  const q = g.createRadialGradient(x, y, 0, x, y, r);
  q.addColorStop(0, `rgba(${col},${a})`);
  q.addColorStop(1, `rgba(${col},0)`);
  g.fillStyle = q;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
};
// the table under the hands, out of focus, and the pool of lamplight on it
gr = g.createLinearGradient(0, 0.6, 0, 1.25);
gr.addColorStop(0, "rgba(70,44,24,0)");
gr.addColorStop(0.15, "rgba(70,44,24,0.7)");
gr.addColorStop(1, "rgba(40,24,12,0.9)");
g.fillStyle = gr;
g.fillRect(-0.1, 0.6, A + 0.2, 0.7);
blob(A * 0.62, 0.9, 0.75, "255,184,110", 0.26 * glow);
gr = g.createLinearGradient(0, 0.6, 0, 0.68);
gr.addColorStop(0, "rgba(255,200,140,0)");
gr.addColorStop(0.5, `rgba(255,200,140,${0.1 * glow})`);
gr.addColorStop(1, "rgba(255,200,140,0)");
g.fillStyle = gr;
g.fillRect(-0.1, 0.6, A + 0.2, 0.08);
// the lamp itself, a big soft disc beyond focus, up and to the right
blob(A * 0.86, 0.06, 0.55, "255,196,120", 0.35 * glow);
blob(A * 0.86, 0.06, 0.16, "255,232,186", 0.55 * glow);
e.light(A * 0.86, 0.06, 0.4, "#ffcf8a", 0.45 * glow);
// the window's cold, far left
blob(A * 0.06, 0.18, 0.3, "140,160,210", 0.07);
// out-of-focus glints: the brass of the box, the radio's dial
const bk = [
  [0.93, 0.78, 0.05, "230,190,120", 0.16],
  [0.97, 0.83, 0.03, "240,200,130", 0.12],
  [0.7, 0.2, 0.035, "255,210,150", 0.08],
  [0.12, 0.72, 0.04, "200,150,100", 0.06],
  [0.04, 0.9, 0.06, "255,190,120", 0.05],
];
for (const b of bk) {
  g.fillStyle = `rgba(${b[3]},${b[4] * (0.4 + 0.6 * glow)})`;
  g.beginPath();
  g.arc(A * b[0], b[1], b[2], 0, 7);
  g.fill();
  g.strokeStyle = `rgba(${b[3]},${b[4] * 0.8 * glow})`;
  g.lineWidth = 0.002;
  g.stroke();
}
g.fillStyle = `rgba(6,4,6,${Math.max(0, 1 - glow) * 0.65})`;
g.fillRect(-0.1, -0.4, A + 0.2, 1.7);
