const s = e.state,
  t = e.t,
  L = s.corridor_light || "emergency";
const W =
  L === "on"
    ? 1
    : L === "flicker"
      ? Math.sin(t * 31) * Math.sin(t * 4.7) + 0.6 * Math.sin(t * 0.9) > 0.3
        ? 0.85
        : 0.06
      : 0;
const R = L === "emergency" ? 0.75 + 0.25 * Math.sin(t * 1.3) : L === "flicker" ? 0.45 : L === "on" ? 0.12 : 0;
const txt = (s0, x, y, sz, a, c) => {
  g.save();
  g.translate(x, y);
  g.scale(0.01, 0.01);
  g.font = "bold " + sz + "px monospace";
  g.textAlign = "center";
  g.fillStyle = "rgba(" + (c || "190,170,120") + "," + a + ")";
  g.fillText(s0, 0, 0);
  g.restore();
};
let gr = g.createLinearGradient(0, -2.55, 0, 0);
gr.addColorStop(0, "#08090d");
gr.addColorStop(0.6, "#11151b");
gr.addColorStop(1, "#090b0e");
g.fillStyle = gr;
g.fillRect(-1.05, -2.55, 2.1, 2.6);
if (W > 0) {
  const w = g.createLinearGradient(0, -2.55, 0, -0.8);
  w.addColorStop(0, "rgba(205,222,255," + 0.2 * W + ")");
  w.addColorStop(1, "rgba(205,222,255,0)");
  g.fillStyle = w;
  g.fillRect(-1.05, -2.55, 2.1, 1.8);
}
const rl = g.createRadialGradient(0, -2.35, 0, 0, -2.35, 1.5);
rl.addColorStop(0, "rgba(255,40,30," + 0.22 * R + ")");
rl.addColorStop(1, "rgba(255,40,30,0)");
g.fillStyle = rl;
g.fillRect(-1.05, -2.55, 2.1, 2.6);
g.fillStyle = "#05070a";
for (const x of [-0.75, 0.75]) g.fillRect(x - 0.05, -2.55, 0.1, 2.6);
const hp = (m) => {
  g.beginPath();
  g.moveTo(-0.4 - m, -0.08);
  g.lineTo(-0.4 - m, -1.55);
  g.quadraticCurveTo(-0.4 - m, -1.92 - m, 0, -1.92 - m);
  g.quadraticCurveTo(0.4 + m, -1.92 - m, 0.4 + m, -1.55);
  g.lineTo(0.4 + m, -0.08);
  g.closePath();
};
hp(0.08);
g.fillStyle = "#06080b";
g.fill();
hp(0);
let dg = g.createLinearGradient(-0.4, 0, 0.4, 0);
dg.addColorStop(0, "#181e26");
dg.addColorStop(1, "#0e1116");
g.fillStyle = dg;
g.fill();
g.strokeStyle = "#272c34";
g.lineWidth = 0.028;
g.beginPath();
g.arc(0, -1.0, 0.17, 0, 6.2832);
g.stroke();
g.lineWidth = 0.018;
for (let k = 0; k < 6; k++) {
  const a = k * 1.0472 + 0.2;
  g.beginPath();
  g.moveTo(0, -1.0);
  g.lineTo(Math.cos(a) * 0.17, -1.0 + Math.sin(a) * 0.17);
  g.stroke();
}
g.fillStyle = "rgba(150,45,40,0.35)";
g.save();
g.translate(0, -1.0);
g.rotate(-0.5);
g.fillRect(-0.6, -0.03, 1.2, 0.06);
g.rotate(1.0);
g.fillRect(-0.6, -0.03, 1.2, 0.06);
g.restore();
txt(tr('AFT · HOLD 1'), 0, -2.1, 10, 0.22);
txt(tr('SEALED'), 0, -0.5, 7, 0.22, "200,90,80");
g.fillStyle = "#0c0d10";
g.fillRect(-0.08, -2.45, 0.16, 0.1);
g.fillStyle = "rgba(255,60,40," + (0.15 + 0.85 * R) + ")";
g.fillRect(-0.06, -2.43, 0.12, 0.06);
if (R > 0.02) e.light(0, -2.4, 1.0, "#ff2a20", 0.4 * R);
for (let i = 0; i < 200; i++) {
  const x = -1.05 + e.rnd() * 2.1,
    y = -Math.pow(e.rnd(), 2) * 0.4,
    a = e.rnd();
  g.fillStyle = "rgba(215,232,248," + (0.03 + 0.1 * a) + ")";
  g.fillRect(x, y - 0.01, 0.012, 0.012);
}
