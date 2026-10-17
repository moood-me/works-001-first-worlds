const S = e.state,
  str = (v) => String(v == null ? "" : v),
  W = str(S.weather),
  surf = /strong|surf|storm/.test(str(S.tide)) || /storm/.test(W),
  bp = S.beam_pass !== false && !/^no|off|false/i.test(str(S.beam_pass)),
  sweep = bp ? Math.pow(Math.abs(Math.cos(e.t * 0.3)), 10) : 0;
const B = str(S.bottle_state),
  bs = /broke/.test(B) ? 2 : /slip/.test(B) ? 1 : 0,
  gl = 0.3 + 0.7 * sweep;
const body = () => {
  g.beginPath();
  g.moveTo(0.17, -0.002);
  g.quadraticCurveTo(0.185, -0.002, 0.185, -0.037);
  g.quadraticCurveTo(0.185, -0.072, 0.17, -0.072);
  g.lineTo(-0.01, -0.072);
  g.bezierCurveTo(-0.05, -0.072, -0.06, -0.05, -0.08, -0.048);
  g.lineTo(-0.115, -0.048);
  g.lineTo(-0.118, -0.052);
  g.lineTo(-0.128, -0.052);
  g.lineTo(-0.128, -0.022);
  g.lineTo(-0.118, -0.022);
  g.lineTo(-0.115, -0.026);
  g.lineTo(-0.08, -0.026);
  g.bezierCurveTo(-0.06, -0.024, -0.05, -0.002, -0.01, -0.002);
  g.closePath();
};
const bottle = () => {
  body();
  let gr = g.createLinearGradient(0, -0.072, 0, -0.002);
  gr.addColorStop(0, "rgba(70,110,92,0.9)");
  gr.addColorStop(0.25, "rgba(34,62,52,0.9)");
  gr.addColorStop(0.8, "rgba(14,28,24,0.95)");
  gr.addColorStop(1, "rgba(30,52,44,0.9)");
  g.fillStyle = gr;
  g.fill();
  g.save();
  body();
  g.clip();
  g.fillStyle = "rgba(90,130,120,0.18)";
  g.fillRect(-0.05, -0.012, 0.23, 0.008);
  for (let i = 0; i < 18; i++) {
    const x = -0.1 + e.rnd() * 0.28,
      y = -0.068 + e.rnd() * 0.06,
      r = 0.0015 + e.rnd() * 0.003;
    g.fillStyle = "rgba(220,236,252," + (0.15 + 0.5 * gl * e.rnd()) + ")";
    g.beginPath();
    g.arc(x, y, r, 0, 7);
    g.fill();
  }
  g.restore();
  g.fillStyle = "rgba(225,238,252," + (0.25 + 0.6 * gl) + ")";
  g.fillRect(-0.02, -0.064, 0.18, 0.004);
  g.fillRect(-0.11, -0.045, 0.03, 0.003);
  g.fillStyle = "rgba(225,238,252," + (0.08 + 0.25 * gl) + ")";
  g.fillRect(0.02, -0.012, 0.12, 0.003);
  g.fillStyle = "rgba(110,30,26,0.8)";
  g.fillRect(-0.128, -0.05, 0.006, 0.026);
};
const cork = (x, y, a) => {
  g.save();
  g.translate(x, y);
  g.rotate(a);
  g.fillStyle = "#3a2a1c";
  g.fillRect(-0.016, -0.022, 0.032, 0.022);
  g.fillStyle = "rgba(120,90,60,0.5)";
  g.fillRect(-0.016, -0.022, 0.032, 0.004);
  g.fillStyle = "rgba(100,26,22,0.9)";
  g.fillRect(-0.018, -0.024, 0.012, 0.012);
  g.restore();
};
const crumbs = () => {
  for (let i = 0; i < 7; i++) {
    g.fillStyle = "rgba(110,30,26,0.85)";
    g.fillRect(-0.22 + e.rnd() * 0.09, -0.004 - e.rnd() * 0.006, 0.003 + e.rnd() * 0.004, 0.003);
  }
};
if (bs === 0) {
  g.fillStyle = "rgba(2,3,6,0.6)";
  g.beginPath();
  g.ellipse(0.03, 0, 0.17, 0.012, 0, 0, 7);
  g.fill();
  g.fillStyle = "rgba(170,190,225,0.25)";
  g.fillRect(-0.1, 0.002, 0.26, 0.0025);
  g.save();
  g.rotate(0.03);
  bottle();
  g.restore();
  cork(-0.19, 0, 0.25);
  crumbs();
} else if (bs === 1) {
  const rk = surf ? Math.sin(e.t * 1.3) * 0.006 + Math.sin(e.t * 2.9) * 0.002 : Math.sin(e.t * 0.5) * 0.0012;
  g.fillStyle = "#030409";
  g.beginPath();
  g.moveTo(-0.24, -0.004);
  g.lineTo(0.27, -0.012);
  g.lineTo(0.25, 0.012);
  g.lineTo(-0.22, 0.01);
  g.closePath();
  g.fill();
  g.save();
  g.translate(0.06 + rk, 0.03);
  g.rotate(-0.22 + rk * 3);
  bottle();
  g.restore();
  g.fillStyle = "#0d1119";
  g.beginPath();
  g.moveTo(-0.26, 0.006);
  g.lineTo(0.28, -0.002);
  g.lineTo(0.3, 0.08);
  g.lineTo(-0.28, 0.08);
  g.closePath();
  g.fill();
  g.strokeStyle = "rgba(160,176,208,0.3)";
  g.lineWidth = 0.002;
  g.beginPath();
  g.moveTo(-0.26, 0.006);
  g.lineTo(0.28, -0.002);
  g.stroke();
  const wa = 0.15 + 0.15 * Math.sin(e.t * 1.7);
  g.fillStyle = "rgba(190,205,235," + wa + ")";
  g.fillRect(-0.1, 0.004, 0.2, 0.002);
  cork(-0.2, -0.02, 0.25);
  crumbs();
} else {
  g.fillStyle = "rgba(2,3,6,0.5)";
  g.beginPath();
  g.ellipse(0.02, 0, 0.22, 0.014, 0, 0, 7);
  g.fill();
  for (let i = 0; i < 16; i++) {
    const x = (e.rnd() - 0.5) * 0.4,
      y = -e.rnd() * 0.012,
      z = 0.008 + e.rnd() * 0.022,
      a = e.rnd() * 6,
      h = e.rnd();
    g.save();
    g.translate(x, y);
    g.rotate(a);
    g.scale(1, 0.5);
    g.fillStyle = "rgba(40,72,60,0.85)";
    g.beginPath();
    g.moveTo(-z, 0);
    g.lineTo(z * 0.6, -z * 0.6);
    g.lineTo(z * 0.4, z * 0.4);
    g.closePath();
    g.fill();
    g.fillStyle = "rgba(225,238,252," + (0.15 + 0.75 * gl * h) + ")";
    g.fillRect(-z * 0.3, -z * 0.25, z * 0.7, z * 0.12);
    g.restore();
  }
  g.save();
  g.translate(-0.12, -0.012);
  g.rotate(0.15);
  g.fillStyle = "rgba(36,64,54,0.92)";
  g.fillRect(-0.03, -0.011, 0.05, 0.022);
  g.fillStyle = "rgba(110,30,26,0.85)";
  g.fillRect(-0.034, -0.012, 0.006, 0.024);
  g.fillStyle = "rgba(225,238,252," + (0.2 + 0.6 * gl) + ")";
  g.fillRect(-0.025, -0.009, 0.04, 0.003);
  g.restore();
  g.save();
  g.translate(0.12, -0.02);
  g.fillStyle = "rgba(28,52,44,0.92)";
  g.beginPath();
  g.moveTo(-0.025, -0.03);
  g.lineTo(0, -0.034);
  g.lineTo(0.02, -0.02);
  g.lineTo(0.035, -0.035);
  g.quadraticCurveTo(0.05, -0.02, 0.04, 0.012);
  g.lineTo(-0.02, 0.014);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(225,238,252," + (0.15 + 0.5 * gl) + ")";
  g.fillRect(0.03, -0.025, 0.003, 0.03);
  g.restore();
  cork(-0.2, 0, 0.25);
  crumbs();
}
if (sweep > 0.05) e.light(0.03, -0.03, 0.35, "#fff0cc", 0.7 * sweep);
else e.light(0.03, -0.03, 0.1, "#cfe0ff", 0.2);
e.at(0.02, -0.06);
