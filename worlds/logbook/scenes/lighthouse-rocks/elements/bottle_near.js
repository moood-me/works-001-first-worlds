const S = e.state,
  W = String(S.weather || ""),
  surf = /surf|storm/.test(String(S.tide || "")) || /storm/.test(W),
  T = surf ? 5.5 : 8,
  n = Math.floor(e.t / T),
  p = e.t / T - n,
  amp = 0.72 + 0.28 * Math.sin(n * 2.39 + 0.7),
  R = surf ? 5 : 3.6,
  s = p < 0.3 ? Math.sin(((p / 0.3) * Math.PI) / 2) : Math.pow(Math.cos((((p - 0.3) / 0.7) * Math.PI) / 2), 1.5),
  run = R * amp * s,
  bp = S.beam_pass !== false && !/^no|off|false/i.test(String(S.beam_pass)),
  ba = e.t * 0.3,
  sweep = bp ? Math.pow(Math.abs(Math.cos(ba)), 10) : 0;
const B = String(S.bottle_state || "stuck"),
  broken = /broke/.test(B),
  closer = !broken && /clos/.test(B);
if (!(closer || (broken && S.broken_at === "near"))) return;
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
const shards = (gl) => {
  for (let i = 0; i < 11; i++) {
    const x = (e.rnd() - 0.5) * 0.55,
      y = -e.rnd() * 0.03,
      z = 0.015 + e.rnd() * 0.035,
      a = e.rnd() * 6,
      h = e.rnd();
    g.save();
    g.translate(x, y);
    g.rotate(a);
    g.fillStyle = "rgba(44,78,64,0.85)";
    g.beginPath();
    g.moveTo(-z, 0);
    g.lineTo(z * 0.6, -z * 0.55);
    g.lineTo(z * 0.35, z * 0.4);
    g.closePath();
    g.fill();
    g.fillStyle = "rgba(220,236,252," + (0.15 + 0.7 * gl * h) + ")";
    g.fillRect(-z * 0.3, -z * 0.2, z * 0.7, z * 0.09);
    g.restore();
  }
  g.save();
  g.translate(0.16, -0.025);
  g.rotate(1.3);
  g.fillStyle = "rgba(40,70,58,0.9)";
  g.fillRect(-0.017, -0.09, 0.034, 0.09);
  g.fillStyle = "#35271b";
  g.fillRect(-0.015, -0.11, 0.03, 0.025);
  g.fillStyle = "rgba(92,30,26,0.9)";
  g.fillRect(-0.019, -0.097, 0.038, 0.013);
  g.restore();
  g.save();
  g.translate(-0.05, -0.018);
  g.rotate(-0.1);
  g.fillStyle = "rgba(206,193,158,0.88)";
  g.beginPath();
  g.moveTo(-0.07, 0);
  g.lineTo(0.08, 0.006);
  g.quadraticCurveTo(0.1, -0.018, 0.085, -0.034);
  g.lineTo(-0.07, -0.03);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(180,165,128,0.95)";
  g.beginPath();
  g.ellipse(-0.07, -0.015, 0.012, 0.017, 0, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(55,48,60,0.45)";
  g.lineWidth = 0.003;
  g.beginPath();
  for (let k = 0; k < 4; k++) {
    g.moveTo(-0.05, -0.024 + k * 0.006);
    g.lineTo(0.04 + 0.02 * Math.sin(k * 2.1), -0.022 + k * 0.0062);
  }
  g.stroke();
  g.strokeStyle = "rgba(125,42,36,0.8)";
  g.lineWidth = 0.004;
  g.beginPath();
  g.moveTo(-0.068, -0.01);
  g.quadraticCurveTo(-0.1, 0.01, -0.13, -0.004);
  g.stroke();
  g.restore();
  if (sweep > 0.05) e.light(0, -0.02, 0.4, "#fff0cc", 0.5 * sweep);
};
const fa = Math.max(0, Math.min(1, (run - 3.1) * 1.4)),
  gl = 0.3 + 0.7 * sweep;
let gr = g.createRadialGradient(0.05, 0, 0, 0.05, 0, 0.5);
gr.addColorStop(0, "rgba(170,190,225,0.12)");
gr.addColorStop(1, "rgba(170,190,225,0)");
g.save();
g.scale(1, 0.2);
g.fillStyle = gr;
g.fillRect(-0.5, -0.5, 1, 1);
g.restore();
if (broken) shards(gl);
else {
  const roll = Math.sin(e.t * 1.1) * 0.02 * fa + 0.01 * Math.sin(e.t * 0.37);
  g.save();
  g.translate(-0.13 + roll * 2, -0.04);
  g.rotate(1.47 + roll);
  bottle(gl);
  g.restore();
  if (sweep > 0.05) e.light(0.05, -0.05, 0.5, "#fff0cc", 0.7 * sweep);
  else e.light(0.05, -0.05, 0.12, "#cfe0ff", 0.25);
}
for (let i = 0; i < 14; i++) {
  const x = (e.rnd() - 0.5) * 0.8,
    y = -e.rnd() * 0.04,
    r = 0.04 + e.rnd() * 0.08,
    a = fa * 0.7 * (0.4 + 0.6 * e.rnd());
  const f = g.createRadialGradient(x, y, 0, x, y, r);
  f.addColorStop(0, "rgba(220,230,244," + a + ")");
  f.addColorStop(1, "rgba(220,230,244,0)");
  g.save();
  g.translate(x, y);
  g.scale(1, 0.45);
  g.translate(-x, -y);
  g.fillStyle = f;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
  g.restore();
}
e.at(0.05, -0.12);
