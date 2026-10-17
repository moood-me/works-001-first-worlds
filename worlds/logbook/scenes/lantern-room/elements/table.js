const lamp = e.state.lamp ?? 0.7,
  lit = lamp * (1 - 0.7 * (e.state.shutter || 0));
g.fillStyle = "#24170d";
g.fillRect(-0.45, -0.3, 0.9, 0.6);
for (let i = 0; i < 4; i++) {
  g.fillStyle = `rgba(${70 + e.rnd() * 25},${44 + e.rnd() * 14},${22 + e.rnd() * 8},0.5)`;
  g.fillRect(-0.45, -0.3 + i * 0.15 + 0.003, 0.9, 0.144);
}
g.strokeStyle = "rgba(0,0,0,0.25)";
g.lineWidth = 0.002;
for (let i = 0; i < 40; i++) {
  const y = -0.3 + e.rnd() * 0.6,
    x = -0.45 + e.rnd() * 0.7;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + 0.1, y + (e.rnd() - 0.5) * 0.01, x + 0.2 + e.rnd() * 0.2, y);
  g.stroke();
}
let gr = g.createLinearGradient(-0.45, 0, 0.45, 0);
gr.addColorStop(0, "rgba(0,0,0,0.45)");
gr.addColorStop(1, `rgba(255,170,90,${0.25 * lit})`);
g.fillStyle = gr;
g.fillRect(-0.45, -0.3, 0.9, 0.6);
g.strokeStyle = "rgba(15,8,4,0.35)";
g.lineWidth = 0.004;
for (const [x, y] of [
  [0.3, 0.12],
  [0.33, 0.15],
  [-0.36, -0.2],
]) {
  g.beginPath();
  g.arc(x, y, 0.042, 0, 7);
  g.stroke();
}
g.fillStyle = "#4a3820";
g.beginPath();
g.arc(-0.34, 0.17, 0.05, 0, 7);
g.fill();
g.fillStyle = "#7a6038";
g.beginPath();
g.arc(-0.345, 0.165, 0.03, 0, 7);
g.fill();
g.strokeStyle = "#4a3820";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.3, 0.15);
g.lineTo(-0.22, 0.1);
g.stroke();
g.fillStyle = "#5e5547";
g.beginPath();
g.arc(0.3, -0.14, 0.045, 0, 7);
g.fill();
g.fillStyle = "#1a0e07";
g.beginPath();
g.arc(0.3, -0.14, 0.036, 0, 7);
g.fill();
g.fillStyle = `rgba(255,200,130,${0.3 * lit})`;
g.beginPath();
g.arc(0.31, -0.145, 0.008, 0, 7);
g.fill();
g.strokeStyle = "#5e5547";
g.lineWidth = 0.008;
g.beginPath();
g.arc(0.35, -0.14, 0.018, -1.2, 1.2);
g.stroke();
g.save();
g.translate(-0.06, 0.02);
g.rotate(-0.06);
g.fillStyle = "#1a0f09";
g.fillRect(-0.225, -0.165, 0.45, 0.33);
const pg = (x0, c0, c1) => {
  const p = g.createLinearGradient(x0, 0, x0 + 0.215, 0);
  p.addColorStop(0, c0);
  p.addColorStop(1, c1);
  g.fillStyle = p;
  g.fillRect(x0, -0.155, 0.215, 0.31);
};
pg(-0.217, "#8f7f62", "#b8a67f");
pg(0.002, "#a8966f", "#d6c49a");
g.fillStyle = `rgba(255,190,110,${0.18 * lit})`;
g.fillRect(-0.217, -0.155, 0.434, 0.31);
g.strokeStyle = "rgba(60,70,110,0.25)";
g.lineWidth = 0.0012;
for (let y = -0.13; y < 0.15; y += 0.018) {
  g.beginPath();
  g.moveTo(-0.205, y);
  g.lineTo(-0.012, y);
  g.moveTo(0.014, y);
  g.lineTo(0.205, y);
  g.stroke();
}
g.strokeStyle = "rgba(40,20,10,0.4)";
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(0, -0.155);
g.lineTo(0, 0.155);
g.stroke();
const scrib = (x0, y, w) => {
  g.beginPath();
  g.moveTo(x0, y);
  for (let x = x0; x < x0 + w; x += 0.004)
    g.lineTo(x, y - 0.004 * Math.abs(Math.sin(x * 900 + y * 50)) - (e.rnd() < 0.08 ? 0.004 : 0));
  g.stroke();
};
g.strokeStyle = "rgba(40,40,70,0.55)";
g.lineWidth = 0.0013;
for (let y = -0.112; y < 0.15; y += 0.018) scrib(-0.2, y, 0.08 + e.rnd() * 0.1);
for (let y = -0.112; y < -0.04; y += 0.018) scrib(0.02, y, 0.1 + e.rnd() * 0.08);
const line = e.state.line;
if (line) {
  g.save();
  g.scale(0.001, 0.001);
  g.fillStyle = "rgba(52,44,40,0.85)";
  g.font = "italic 13px Georgia, serif";
  const words = String(line).split(" ");
  let cur = "",
    y = -24,
    rows = 0;
  for (const w of words) {
    const t = cur ? cur + " " + w : w;
    if (g.measureText(t).width > 180 && cur) {
      g.fillText(cur, 20, y);
      y += 18;
      cur = w;
      if (++rows > 8) {
        cur = "";
        break;
      }
    } else cur = t;
  }
  if (cur) g.fillText(cur, 20, y);
  g.restore();
}
g.save();
g.translate(0.1, 0.11);
g.rotate(-0.5);
g.fillStyle = "#7a5a2e";
g.fillRect(-0.085, -0.004, 0.16, 0.008);
g.fillStyle = "#c9a879";
g.beginPath();
g.moveTo(0.075, -0.004);
g.lineTo(0.095, 0);
g.lineTo(0.075, 0.004);
g.fill();
g.fillStyle = "#333";
g.beginPath();
g.moveTo(0.089, -0.0013);
g.lineTo(0.095, 0);
g.lineTo(0.089, 0.0013);
g.fill();
g.restore();
g.restore();
g.fillStyle = "rgba(0,0,0,0.3)";
g.fillRect(-0.45, 0.285, 0.9, 0.015);
