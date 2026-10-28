const s = e.state,
  t = e.t,
  k = s.suit ?? 0.3,
  near = k >= 0.98,
  kn = s.knocking;
const sc = 0.4 + 0.6 * k;
const dx = (1 - k) * 1.8 + Math.sin(t * 0.13) * 0.15 * (1 - k) - 0.1,
  dy = -2.05 + Math.sin(t * 0.29) * 0.07 - (1 - k) * 0.4;
const rot = near ? 0.05 * Math.sin(t * 0.37) : (1 - k) * (0.5 + 0.6 * Math.sin(t * 0.07));
e.at(dx, dy - 0.95 * sc);
g.save();
g.translate(dx, dy);
g.rotate(rot);
g.scale(sc, sc);
g.strokeStyle = "rgba(120,115,110,0.35)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.15, 0.25);
g.bezierCurveTo(-0.8, 0.35 + Math.sin(t * 0.4) * 0.1, -0.6, 1.0, -1.5 + Math.sin(t * 0.23) * 0.1, 0.85);
g.stroke();
const body = (x0, x1) => {
  const gr = g.createLinearGradient(x0, 0, x1, 0);
  gr.addColorStop(0, "#6e4440");
  gr.addColorStop(0.35, "#3c3f45");
  gr.addColorStop(1, "#141519");
  return gr;
};
const lg = Math.sin(t * 0.31) * 0.05;
g.fillStyle = body(-0.3, 0.3);
g.beginPath();
g.moveTo(-0.24, 0.3);
g.lineTo(-0.3 + lg, 0.95);
g.lineTo(-0.1 + lg, 0.97);
g.lineTo(-0.02, 0.32);
g.fill();
g.beginPath();
g.moveTo(0.02, 0.32);
g.lineTo(0.12 - lg, 0.92);
g.lineTo(0.3 - lg, 0.9);
g.lineTo(0.24, 0.3);
g.fill();
g.fillStyle = "#101114";
g.fillRect(-0.32 + lg, 0.9, 0.24, 0.09);
g.fillRect(0.1 - lg, 0.86, 0.23, 0.09);
g.fillStyle = "#24262b";
g.fillRect(-0.38, -0.5, 0.76, 0.7);
g.fillStyle = body(-0.32, 0.32);
g.beginPath();
g.moveTo(-0.32, -0.5);
g.quadraticCurveTo(-0.36, 0.1, -0.26, 0.34);
g.lineTo(0.26, 0.34);
g.quadraticCurveTo(0.36, 0.1, 0.32, -0.5);
g.closePath();
g.fill();
g.fillStyle = "rgba(10,10,12,0.6)";
g.fillRect(-0.16, -0.3, 0.32, 0.2);
g.fillStyle = "rgba(120,35,30,0.7)";
g.fillRect(-0.27, -0.42, 0.08, 0.05);
g.fillStyle = "rgba(255,170,80," + (0.2 + 0.2 * Math.sin(t * 3.1)) + ")";
g.fillRect(0.06, -0.26, 0.03, 0.03);
g.strokeStyle = "#3a3c42";
g.lineWidth = 0.14;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.3, -0.4);
g.quadraticCurveTo(-0.5, -0.05, -0.42 + Math.sin(t * 0.5) * 0.04, 0.25);
g.stroke();
const tap = kn ? Math.pow(Math.max(0, Math.sin(t * 11.8)), 3) : 0;
const hx = near ? 0.24 : 0.55,
  hy = near ? -0.2 : -0.1;
g.strokeStyle = "#45474d";
g.beginPath();
g.moveTo(0.3, -0.4);
g.quadraticCurveTo(0.42, -0.3, hx, hy);
g.stroke();
const gs = near ? 1.45 - 0.18 * tap : 0.8;
g.save();
g.translate(hx, hy);
g.scale(gs, gs);
const gg = g.createRadialGradient(-0.03, -0.04, 0, 0, 0, 0.16);
gg.addColorStop(0, "#77655f");
gg.addColorStop(1, "#3a3c41");
g.fillStyle = gg;
g.beginPath();
g.ellipse(0, 0, 0.1, 0.12, 0, 0, 7);
g.fill();
g.strokeStyle = "#4f5157";
g.lineWidth = 0.045;
for (let f = 0; f < 4; f++) {
  g.beginPath();
  g.moveTo(-0.06 + f * 0.04, -0.08);
  g.lineTo(-0.08 + f * 0.045, -0.2 - (f === 1 || f === 2 ? 0.03 : 0));
  g.stroke();
}
g.beginPath();
g.moveTo(0.08, -0.02);
g.lineTo(0.16, -0.1);
g.stroke();
g.restore();
if (near && tap > 0.3) {
  g.strokeStyle = "rgba(220,220,230," + 0.2 * tap + ")";
  g.lineWidth = 0.01;
  for (let r = 1; r < 4; r++) {
    g.beginPath();
    g.arc(hx, hy - 0.05, 0.08 * r * gs * (1 + tap * 0.3), 0, 7);
    g.stroke();
  }
}
const hg = g.createRadialGradient(-0.12, -0.88, 0.02, 0, -0.78, 0.28);
hg.addColorStop(0, "#7a5550");
hg.addColorStop(0.5, "#45474d");
hg.addColorStop(1, "#1a1b1f");
g.fillStyle = hg;
g.beginPath();
g.arc(0, -0.78, 0.26, 0, 7);
g.fill();
const v = g.createLinearGradient(-0.2, -0.95, 0.2, -0.6);
v.addColorStop(0, "#2a1212");
v.addColorStop(0.5, "#050507");
v.addColorStop(1, "#0c0d12");
g.fillStyle = v;
g.beginPath();
g.ellipse(0, -0.77, 0.2, 0.17, 0, 0, 7);
g.fill();
g.strokeStyle = "rgba(220,90,60,0.5)";
g.lineWidth = 0.012;
g.beginPath();
g.arc(-0.04, -0.8, 0.13, 3.6, 4.3);
g.stroke();
g.fillStyle = "rgba(230,240,255,0.18)";
g.beginPath();
g.ellipse(0.08, -0.87, 0.03, 0.014, -0.5, 0, 7);
g.fill();
const lamp = Math.max(0, Math.sin(t * 7.3) * Math.sin(t * 1.1));
g.fillStyle = "#1d1e22";
g.fillRect(0.2, -0.98, 0.08, 0.06);
g.restore();
if (lamp > 0.4) e.light(dx + 0.24 * sc, dy - 0.95 * sc, 0.5, "#d8e6ff", 0.3 * lamp);
