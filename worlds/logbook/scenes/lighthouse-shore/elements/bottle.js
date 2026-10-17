const S = e.state.bottle_state || "wedged",
  t = e.t,
  T = e.state.tide ?? 0.35,
  W = e.state.weather || "clear";
const I = 0.3 + 0.7 * (e.state.lamp ?? 0.8),
  a = t * 0.55,
  ab = Math.PI - 0.25;
const gl =
  Math.max(Math.pow(Math.max(0, Math.cos(a - ab)), 80), Math.pow(Math.max(0, Math.cos(a - Math.PI - ab)), 80)) * I;
const tw = 0.5 + 0.5 * Math.sin(t * 1.7) * Math.sin(t * 0.63 + 1);
const sp = (u) => (Math.sqrt(u * u + 0.2) + u) / 2,
  X = 1.24,
  amp = W === "storm" ? 1.9 : W === "rain" ? 1.25 : W === "fog" ? 0.8 : 1;
const Dw = 7.6 - 0.12 * (X - 1) + 2.52 * sp(1 - X) - 3.2 * (T - 0.35),
  ph = (((t / 7.3 + X * 0.012 + 0.15 * Math.sin(X * 0.31)) % 1) + 1) % 1;
const run = ph < 0.3 ? Math.sin(((ph / 0.3) * Math.PI) / 2) : Math.pow(1 - (ph - 0.3) / 0.7, 1.6),
  front = Dw - amp * (0.35 + 0.75 * run) * (0.85 + 0.15 * Math.sin(X * 0.9 + 1.3));
const glass = () => {
  const gr = g.createLinearGradient(0, -0.05, 0, 0.05);
  gr.addColorStop(0, "rgba(62,124,90,0.9)");
  gr.addColorStop(0.45, "rgba(26,70,50,0.92)");
  gr.addColorStop(1, "rgba(9,30,22,0.95)");
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(-0.13, -0.045);
  g.lineTo(0.06, -0.045);
  g.quadraticCurveTo(0.1, -0.045, 0.12, -0.016);
  g.lineTo(0.19, -0.014);
  g.lineTo(0.19, 0.014);
  g.lineTo(0.12, 0.016);
  g.quadraticCurveTo(0.1, 0.045, 0.06, 0.045);
  g.lineTo(-0.13, 0.045);
  g.quadraticCurveTo(-0.145, 0, -0.13, -0.045);
  g.fill();
  g.fillStyle = "rgba(225,212,180,0.5)";
  g.fillRect(-0.1, -0.02, 0.15, 0.036);
  g.strokeStyle = "rgba(130,45,35,0.6)";
  g.lineWidth = 0.006;
  g.beginPath();
  g.moveTo(-0.03, -0.02);
  g.lineTo(-0.03, 0.016);
  g.stroke();
  g.fillStyle = "#5a3f24";
  g.fillRect(0.19, -0.013, 0.025, 0.026);
  g.fillStyle = "rgba(115,32,26,0.75)";
  g.fillRect(0.207, -0.016, 0.014, 0.032);
  g.strokeStyle = `rgba(205,245,225,${0.3 + 0.35 * tw})`;
  g.lineWidth = 0.007;
  g.beginPath();
  g.moveTo(-0.11, -0.035);
  g.lineTo(0.06, -0.035);
  g.quadraticCurveTo(0.09, -0.034, 0.11, -0.014);
  g.stroke();
};
const flare = (x, y, k, s) => {
  if (k < 0.01) return;
  const R = 0.35 * s * k + 0.04 * s,
    f = g.createRadialGradient(x, y, 0, x, y, R);
  f.addColorStop(0, `rgba(235,255,240,${0.9 * k})`);
  f.addColorStop(0.2, `rgba(150,240,190,${0.45 * k})`);
  f.addColorStop(1, "rgba(120,220,170,0)");
  g.globalCompositeOperation = "lighter";
  g.fillStyle = f;
  g.fillRect(x - R, y - R, 2 * R, 2 * R);
  g.fillStyle = `rgba(220,255,235,${0.6 * k})`;
  g.fillRect(x - 0.6 * s * k, y - 0.004 * s, 1.2 * s * k, 0.008 * s);
  g.fillRect(x - 0.004 * s, y - 0.3 * s * k, 0.008 * s, 0.6 * s * k);
  g.globalCompositeOperation = "source-over";
  if (k > 0.06) e.light(x, y, 0.9 * s, "#b8ffd6", 0.9 * k);
};
const sheet = () => {
  const k = Math.max(0, Math.min(1, (7.1 - front) / 0.5));
  if (k <= 0) return;
  g.fillStyle = `rgba(70,90,128,${0.4 * k})`;
  g.beginPath();
  g.ellipse(0.1, 0.01, 0.9, 0.05 + 0.02 * k, 0, 0, 7);
  g.fill();
  g.strokeStyle = `rgba(215,225,240,${0.28 * k * (ph < 0.4 ? 1 : 0.5)})`;
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(0.1, 0.012, 0.9, 0.05 + 0.02 * k, 0, Math.PI * 1.05, Math.PI * 1.95);
  g.stroke();
};
if (S === "wedged" || S === "loose") {
  g.fillStyle = "rgba(3,5,8,0.6)";
  g.beginPath();
  g.ellipse(0.03, 0.005, 0.2, 0.025, 0, 0, 7);
  g.fill();
  const lift = S === "loose" ? 0.035 * run : 0,
    rot = S === "loose" ? -0.38 + 0.2 * run + 0.04 * Math.sin(t * 2.3) : -0.38;
  g.save();
  g.translate(0.02 + (S === "loose" ? 0.07 * run : 0), -0.04 - lift);
  g.rotate(rot);
  glass();
  g.restore();
  sheet();
  flare(0.06, -0.085 - lift, Math.max(gl, 0.12 + 0.16 * tw), 1);
} else if (S === "drifting") {
  const k = e.state.drift || 0,
    D = 7 + 33 * k,
    sc = 7 / D,
    ox = 1.2 * k + 0.04 * Math.sin(t * 0.7),
    oy = -1.7 * (1 - 7 / D) + 0.02 * sc * Math.sin(t * 1.1);
  g.save();
  g.translate(ox, oy);
  g.scale(sc, sc);
  g.save();
  g.beginPath();
  g.rect(-1, -1, 2, 1.012);
  g.clip();
  g.rotate(-0.12 + 0.15 * Math.sin(t * 0.9));
  g.translate(0, 0.015);
  glass();
  g.restore();
  g.strokeStyle = "rgba(200,215,235,0.22)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.ellipse(0.02, 0.012, 0.2 + 0.04 * Math.sin(t * 1.1), 0.02, 0, 0, 7);
  g.stroke();
  flare(0.05, -0.03, Math.max(gl, 0.12 * tw), 1.4);
  g.restore();
} else if (S === "taken") {
  g.fillStyle = "rgba(3,5,8,0.55)";
  g.beginPath();
  g.ellipse(0.03, 0.005, 0.18, 0.022, 0, 0, 7);
  g.fill();
  sheet();
} else if (S === "broken") {
  g.save();
  g.translate(0.27, -0.015);
  g.rotate(-0.25);
  g.fillStyle = "rgba(30,80,58,0.92)";
  g.fillRect(0, -0.014, 0.07, 0.028);
  g.fillStyle = "#5a3f24";
  g.fillRect(0.07, -0.013, 0.025, 0.026);
  g.restore();
  g.save();
  g.translate(-0.06, -0.01);
  g.rotate(0.08);
  g.fillStyle = "rgba(214,200,168,0.88)";
  g.beginPath();
  g.moveTo(-0.13, -0.03);
  g.lineTo(0.09, -0.035);
  g.quadraticCurveTo(0.12, -0.02, 0.1, 0.0);
  g.lineTo(-0.12, 0.005);
  g.quadraticCurveTo(-0.15, -0.012, -0.13, -0.03);
  g.fill();
  g.fillStyle = "rgba(140,125,100,0.35)";
  g.beginPath();
  g.ellipse(-0.04, -0.012, 0.05, 0.012, 0, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(55,45,60,0.35)";
  g.lineWidth = 0.004;
  g.beginPath();
  for (let i = 0; i < 3; i++) {
    g.moveTo(-0.1, -0.024 + i * 0.008);
    g.lineTo(0.05 - i * 0.02, -0.026 + i * 0.008);
  }
  g.stroke();
  g.strokeStyle = "rgba(130,45,35,0.6)";
  g.lineWidth = 0.005;
  g.beginPath();
  g.moveTo(0.1, -0.005);
  g.quadraticCurveTo(0.16, 0.01, 0.2, -0.004);
  g.stroke();
  g.restore();
  for (let i = 0; i < 10; i++) {
    const x = -0.3 + e.rnd() * 0.65,
      y = -0.02 + e.rnd() * 0.035,
      s = 0.012 + 0.028 * e.rnd(),
      r0 = e.rnd() * 6;
    g.fillStyle = "rgba(38,98,68,0.8)";
    g.beginPath();
    g.moveTo(x + Math.cos(r0) * s, y + Math.sin(r0) * s * 0.5);
    g.lineTo(x + Math.cos(r0 + 2.2) * s, y + Math.sin(r0 + 2.2) * s * 0.5);
    g.lineTo(x + Math.cos(r0 + 4) * s * 0.7, y + Math.sin(r0 + 4) * s * 0.5);
    g.fill();
    g.fillStyle = `rgba(200,250,220,${0.3 + 0.5 * gl})`;
    g.fillRect(x, y - 0.002, s * 0.6, 0.003);
  }
  sheet();
  flare(0.15, -0.02, gl * 0.8, 0.6);
  flare(-0.2, -0.01, Math.max(gl * 0.6, 0.06 * tw), 0.5);
}
const P = [
  [-0.36, 0.05],
  [-0.34, -0.06],
  [-0.25, -0.12],
  [-0.12, -0.11],
  [-0.05, -0.04],
  [-0.04, 0.05],
];
const n = P.length,
  m = (i) => [(P[i % n][0] + P[(i + 1) % n][0]) / 2, (P[i % n][1] + P[(i + 1) % n][1]) / 2];
g.beginPath();
const s0 = m(n - 1);
g.moveTo(s0[0], s0[1]);
for (let i = 0; i < n; i++) {
  const q = m(i);
  g.quadraticCurveTo(P[i][0], P[i][1], q[0], q[1]);
}
g.closePath();
const sg = g.createRadialGradient(-0.12, -0.1, 0, -0.12, -0.1, 0.3);
sg.addColorStop(0, "#222a3a");
sg.addColorStop(1, "#06080c");
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(160,175,205,0.35)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.24, -0.11);
g.quadraticCurveTo(-0.13, -0.12, -0.07, -0.06);
g.stroke();
