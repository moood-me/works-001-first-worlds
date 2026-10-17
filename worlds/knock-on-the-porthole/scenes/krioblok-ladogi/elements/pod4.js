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
gr.addColorStop(0, "#1e2731");
gr.addColorStop(0.3, "#18202a");
gr.addColorStop(0.65, "#11161d");
gr.addColorStop(1, "#07090c");
g.fillStyle = gr;
shell();
g.fill();
g.save();
win();
g.clip();
g.fillStyle = "#0a1018";
g.fillRect(-0.45, -2.1, 0.9, 1.55);
let fg = g.createLinearGradient(0, -2.06, 0, -0.6);
fg.addColorStop(0, "rgba(150,175,198,0.5)");
fg.addColorStop(1, "rgba(190,212,232,0.75)");
g.globalAlpha = 0.35 + 0.6 * fr;
g.fillStyle = fg;
g.fillRect(-0.45, -2.1, 0.9, 1.55);
g.globalAlpha = 1;
g.strokeStyle = "rgba(225,238,250,0.18)";
g.lineWidth = 0.005;
for (let i = 0; i < 20; i++) {
  const x = R() < 0.5 ? -0.41 : 0.41,
    y = -0.7 - R() * 1.2,
    a = (x < 0 ? 0 : Math.PI) + (R() - 0.5) * 0.8,
    l = 0.08 + R() * 0.2;
  g.beginPath();
  for (let j = 1; j < 6; j++) {
    const f = j / 5,
      px = x + Math.cos(a) * l * (f - 0.2),
      py = y + Math.sin(a) * l * (f - 0.2),
      cx = x + Math.cos(a) * l * f,
      cy = y + Math.sin(a) * l * f,
      b = l * 0.25 * (1 - f);
    g.moveTo(px, py);
    g.lineTo(cx, cy);
    g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(a + 1) * b, cy + Math.sin(a + 1) * b);
    g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(a - 1) * b, cy + Math.sin(a - 1) * b);
  }
  g.stroke();
}
g.restore();
g.strokeStyle = "#202832";
g.lineWidth = 0.05;
win();
g.stroke();
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
g.fillText(tr('CRYO-4'), 0, 0);
g.restore();
const b = Math.pow(Math.max(0, Math.sin(t * 0.35)), 20);
g.fillStyle = "rgba(200,50,40," + (0.08 + 0.4 * b) + ")";
g.fillRect(0.47, -0.9, 0.035, 0.05);
g.restore();
if (b > 0.05) e.light(0.39, -0.88, 0.2, "#ff4030", 0.3 * b);
