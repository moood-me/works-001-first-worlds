const s = e.state,
  t = e.t,
  fr = s.frost_density ?? 0.9,
  R = e.rnd;
g.save();
g.scale(0.8, 1);
const shell = () => {
  g.beginPath();
  g.moveTo(-0.55, -0.2);
  g.lineTo(-0.58, -1.85);
  g.bezierCurveTo(-0.58, -2.3, -0.3, -2.4, 0, -2.4);
  g.bezierCurveTo(0.3, -2.4, 0.58, -2.3, 0.58, -1.85);
  g.lineTo(0.55, -0.2);
  g.closePath();
};
const win = () => {
  g.beginPath();
  g.moveTo(-0.4, -0.62);
  g.lineTo(-0.42, -1.7);
  g.bezierCurveTo(-0.42, -2.0, -0.2, -2.06, 0, -2.06);
  g.bezierCurveTo(0.2, -2.06, 0.42, -2.0, 0.42, -1.7);
  g.lineTo(0.4, -0.62);
  g.quadraticCurveTo(0, -0.57, -0.4, -0.62);
  g.closePath();
};
g.fillStyle = "#090c10";
g.fillRect(-0.64, -0.24, 1.28, 0.24);
let gr = g.createLinearGradient(-0.6, 0, 0.6, 0);
gr.addColorStop(0, "#0e1218");
gr.addColorStop(0.35, "#1a2129");
gr.addColorStop(0.7, "#151b22");
gr.addColorStop(1, "#1e2731");
g.fillStyle = gr;
shell();
g.fill();
win();
g.fillStyle = "#040609";
g.fill();
g.save();
win();
g.clip();
for (let i = 0; i < 500; i++) {
  const x = (R() - 0.5) * 0.84,
    y = -0.6 - R() * 1.46,
    z = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(190,212,232," + (0.03 + 0.08 * z) + ")";
  g.fillRect(x, y, 0.006, 0.006);
}
g.strokeStyle = "#0d1116";
g.lineWidth = 0.035;
const sw = Math.sin(t * 0.31) * 0.02 + Math.sin(t * 0.13) * 0.015;
g.beginPath();
g.moveTo(-0.15, -2.0);
g.quadraticCurveTo(-0.12 + sw, -1.5, -0.1 + sw * 1.6, -1.05);
g.moveTo(0.16, -2.0);
g.quadraticCurveTo(0.14 + sw * 0.7, -1.6, 0.12 + sw, -1.25);
g.stroke();
g.restore();
g.save();
g.translate(-0.43, 0);
g.scale(0.2, 1);
g.translate(0.43, 0);
win();
g.fillStyle = "rgba(185,210,232," + (0.12 + 0.3 * fr) + ")";
g.fill();
g.strokeStyle = "#222a34";
g.lineWidth = 0.06;
win();
g.stroke();
g.restore();
g.save();
shell();
g.clip();
for (let i = 0; i < 700; i++) {
  const sd = R() < 0.5 ? -1 : 1,
    u = R(),
    x = sd * (0.6 - Math.pow(u, 2.2) * 0.5),
    y = -0.22 - R() * 2.2,
    a = R(),
    k = R();
  if (k > fr) continue;
  g.fillStyle = "rgba(205,225,242," + (0.04 + 0.14 * a) + ")";
  g.fillRect(x, y, 0.004 + a * 0.008, 0.004 + a * 0.008);
}
g.restore();
g.save();
g.translate(0, -0.47);
g.scale(0.0035, 0.0035);
g.font = "bold 24px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(150,170,190,0.25)";
g.fillText(tr('CRYO-2'), 0, 0);
g.restore();
g.restore();
