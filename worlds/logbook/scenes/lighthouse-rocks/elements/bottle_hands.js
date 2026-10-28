const S = e.state,
  bp = S.beam_pass !== false && !/^no|off|false/i.test(String(S.beam_pass)),
  sweep = bp ? Math.pow(Math.abs(Math.cos(e.t * 0.3)), 10) : 0;
if (!/hand/.test(String(S.bottle_state || ""))) return;
const bottle = (gl) => {
  g.beginPath();
  g.moveTo(-0.04, 0);
  g.lineTo(-0.04, -0.18);
  g.quadraticCurveTo(-0.04, -0.21, -0.016, -0.225);
  g.lineTo(-0.016, -0.275);
  g.lineTo(0.016, -0.275);
  g.lineTo(0.016, -0.225);
  g.quadraticCurveTo(0.04, -0.21, 0.04, -0.18);
  g.lineTo(0.04, 0);
  g.closePath();
  let gr = g.createLinearGradient(-0.04, 0, 0.04, 0);
  gr.addColorStop(0, "rgba(16,30,27,0.95)");
  gr.addColorStop(0.6, "rgba(48,82,68,0.85)");
  gr.addColorStop(1, "rgba(20,38,33,0.95)");
  g.fillStyle = gr;
  g.fill();
  g.fillStyle = "rgba(196,182,146,0.6)";
  g.fillRect(-0.018, -0.17, 0.028, 0.15);
  g.fillStyle = "rgba(125,42,36,0.75)";
  g.fillRect(-0.018, -0.105, 0.028, 0.009);
  g.fillStyle = "#35271b";
  g.fillRect(-0.015, -0.297, 0.03, 0.025);
  g.fillStyle = "rgba(92,30,26,0.9)";
  g.fillRect(-0.019, -0.284, 0.038, 0.013);
  g.fillStyle = "rgba(225,238,252," + (0.2 + 0.6 * gl) + ")";
  g.fillRect(0.022, -0.175, 0.006, 0.15);
  g.fillRect(0.006, -0.262, 0.004, 0.03);
  g.fillStyle = "rgba(225,238,252," + (0.1 + 0.3 * gl) + ")";
  g.fillRect(-0.034, -0.16, 0.004, 0.1);
};
const b = Math.sin(e.t * 1.05) * 0.004 + Math.sin(e.t * 0.41) * 0.003,
  tremor = Math.sin(e.t * 7.3) * 0.0007,
  gl = 0.35 + 0.65 * sweep;
g.translate(tremor, b);
g.fillStyle = "#0a0c11";
g.beginPath();
g.moveTo(-0.5, 0.62);
g.quadraticCurveTo(-0.32, 0.2, -0.15, 0.05);
g.lineTo(-0.04, 0.1);
g.quadraticCurveTo(-0.2, 0.35, -0.2, 0.62);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(0.55, 0.62);
g.quadraticCurveTo(0.3, 0.15, 0.12, 0.0);
g.lineTo(0.2, -0.04);
g.quadraticCurveTo(0.4, 0.25, 0.3, 0.62);
g.closePath();
g.fill();
g.save();
g.translate(-0.14, 0.03);
g.rotate(1.35);
bottle(gl);
g.strokeStyle = "rgba(60,50,62,0.35)";
g.lineWidth = 0.0015;
g.beginPath();
for (let k = 0; k < 6; k++) {
  const y = -0.155 + k * 0.022;
  g.moveTo(-0.014, y);
  g.lineTo(0.006, y + 0.001);
}
g.stroke();
for (let i = 0; i < 14; i++) {
  const x = (e.rnd() - 0.5) * 0.07,
    y = -0.02 - e.rnd() * 0.2,
    r = 0.0015 + e.rnd() * 0.003,
    a = 0.2 + 0.4 * gl * e.rnd();
  g.fillStyle = "rgba(220,236,252," + a + ")";
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(30,52,34,0.85)";
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(-0.04, -0.05);
g.bezierCurveTo(-0.01, -0.07, 0.02, -0.03, 0.045, -0.06 + Math.sin(e.t * 0.8) * 0.004);
g.stroke();
g.restore();
const hand = (x, y, a, w, h) => {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = "#141419";
  g.beginPath();
  g.ellipse(0, 0, w, h, 0, 0, 7);
  g.fill();
  g.fillStyle = "#17171d";
  for (let k = 0; k < 4; k++) {
    g.beginPath();
    g.ellipse(-w * 0.55 + k * w * 0.37, -h * 0.75, w * 0.2, h * 0.42, 0, 0, 7);
    g.fill();
  }
  g.strokeStyle = "rgba(160,172,200,0.22)";
  g.lineWidth = 0.004;
  g.beginPath();
  g.ellipse(0, 0, w, h, 0, -1.4, 0.2);
  g.stroke();
  g.restore();
};
hand(-0.07, 0.055, 0.25, 0.06, 0.035);
hand(0.12, -0.02, -0.2, 0.045, 0.03);
if (sweep > 0.05) e.light(0.02, -0.01, 0.3, "#fff0cc", 0.6 * sweep);
else e.light(0.02, -0.01, 0.08, "#cfe0ff", 0.2);
