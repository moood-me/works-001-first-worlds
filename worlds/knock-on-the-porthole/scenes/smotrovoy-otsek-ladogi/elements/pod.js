const s = e.state,
  t = e.t,
  fr = s.frost ?? 1;
let gr = g.createLinearGradient(-0.5, 0, 0.5, 0);
gr.addColorStop(0, "#2a1a1c");
gr.addColorStop(0.4, "#232a33");
gr.addColorStop(1, "#0e1116");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-0.46, 0);
g.lineTo(-0.5, -1.8);
g.quadraticCurveTo(-0.48, -2.12, 0, -2.14);
g.quadraticCurveTo(0.48, -2.12, 0.5, -1.8);
g.lineTo(0.46, 0);
g.closePath();
g.fill();
const glass = () => {
  g.beginPath();
  g.moveTo(-0.32, -0.3);
  g.lineTo(-0.35, -1.75);
  g.quadraticCurveTo(-0.33, -1.97, 0, -1.98);
  g.quadraticCurveTo(0.33, -1.97, 0.35, -1.75);
  g.lineTo(0.32, -0.3);
  g.closePath();
};
g.save();
glass();
g.clip();
gr = g.createLinearGradient(0, -2, 0, -0.3);
gr.addColorStop(0, "#35607f");
gr.addColorStop(1, "#10202f");
g.fillStyle = gr;
g.fillRect(-0.4, -2, 0.8, 1.8);
const br = Math.sin(t * 0.11) * 0.004;
g.fillStyle = "rgba(8,16,26,0.7)";
g.beginPath();
g.ellipse(0, -1.62 + br, 0.1, 0.12, 0, 0, 7);
g.fill();
g.beginPath();
g.moveTo(-0.26, -0.3);
g.quadraticCurveTo(-0.27, -1.3, -0.2, -1.42);
g.quadraticCurveTo(0, -1.5, 0.2, -1.42);
g.quadraticCurveTo(0.27, -1.3, 0.26, -0.3);
g.fill();
let fg = g.createLinearGradient(0, -2, 0, -0.3);
fg.addColorStop(0, "rgba(200,225,245," + 0.12 * fr + ")");
fg.addColorStop(1, "rgba(220,238,250," + 0.45 * fr + ")");
g.fillStyle = fg;
g.fillRect(-0.4, -2, 0.8, 1.8);
for (let i = 0; i < 1400; i++) {
  const x = (e.rnd() - 0.5) * 0.72,
    y = -0.3 - Math.pow(e.rnd(), 1.6) * 1.7,
    a = e.rnd();
  g.fillStyle = "rgba(225,240,252," + fr * (0.04 + 0.12 * a) + ")";
  g.beginPath();
  g.arc(x, y, 0.003 + a * 0.006, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(225,240,252," + 0.1 * fr + ")";
g.lineWidth = 0.003;
for (let i = 0; i < 40; i++) {
  const x = (e.rnd() - 0.5) * 0.7,
    y = -0.3 - e.rnd() * 0.9,
    a = e.rnd() * 6.3,
    l = 0.03 + e.rnd() * 0.06;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l);
  g.stroke();
}
if (s.pod_hand) {
  g.fillStyle = "rgba(15,35,55,0.85)";
  g.strokeStyle = "rgba(15,35,55,0.85)";
  const hx = 0.04,
    hy = -1.25;
  g.beginPath();
  g.ellipse(hx, hy, 0.055, 0.065, 0, 0, 7);
  g.fill();
  g.lineCap = "round";
  g.lineWidth = 0.024;
  [
    [-0.045, -0.16],
    [-0.015, -0.18],
    [0.015, -0.175],
    [0.045, -0.15],
  ].forEach(([fx, fy]) => {
    g.beginPath();
    g.moveTo(hx + fx * 0.7, hy - 0.04);
    g.lineTo(hx + fx, hy + fy * 0.75);
    g.stroke();
  });
  g.beginPath();
  g.moveTo(hx + 0.05, hy);
  g.lineTo(hx + 0.1, hy - 0.05);
  g.stroke();
  for (let d = 0; d < 4; d++) {
    const dl = (t * 0.03 + d * 0.25) % 1;
    g.fillStyle = "rgba(30,60,90," + 0.5 * (1 - dl) + ")";
    g.fillRect(hx - 0.03 + d * 0.02, hy + 0.06 + dl * 0.3, 0.006, 0.04);
  }
}
g.restore();
g.strokeStyle = "rgba(150,180,210,0.35)";
g.lineWidth = 0.02;
glass();
g.stroke();
g.save();
g.translate(0, -0.12);
g.scale(0.004, 0.004);
g.font = "bold 22px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(170,200,225,0.55)";
g.fillText("КРИО-3", 0, 0);
g.restore();
const bl = Math.sin(t * 1.9) > 0.6 ? 1 : 0.15;
g.fillStyle = "rgba(120,220,255," + bl + ")";
g.beginPath();
g.arc(0.36, -0.14, 0.022, 0, 7);
g.fill();
e.light(0, -1.1, 1.5, "#7fc4ff", 0.3);
for (let i = 0; i < 7; i++) {
  const ph = (t * 0.06 + i / 7) % 1,
    x = (i % 2 ? 1 : -1) * (0.2 + ph * 0.6) + Math.sin(t * 0.3 + i) * 0.05,
    r = 0.12 + ph * 0.25;
  const c = g.createRadialGradient(x, -0.04, 0, x, -0.04, r);
  c.addColorStop(0, "rgba(180,215,240," + 0.12 * (1 - ph) + ")");
  c.addColorStop(1, "rgba(180,215,240,0)");
  g.save();
  g.translate(x, -0.04);
  g.scale(1, 0.35);
  g.translate(-x, 0.04);
  g.fillStyle = c;
  g.fillRect(x - r, -0.04 - r, 2 * r, 2 * r);
  g.restore();
}
