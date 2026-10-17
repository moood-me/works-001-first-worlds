const s = e.state,
  L = Math.max(0, Math.min(1, s.lamp)),
  t = e.t;
const fl =
  0.84 +
  0.08 * Math.sin(t * 13.1) * Math.sin(t * 2.3) +
  0.06 * Math.sin(t * 0.7) -
  (Math.sin(t * 0.53) * Math.sin(t * 1.37) > 0.8 ? 0.55 : 0);
const ring = s.ringing && s.receiver === "hook";
const rp = ring && Math.sin((t * Math.PI * 2) / 3) > 0.3 ? 1 : 0;
const B = L * Math.max(0, fl) * (1 + 0.2 * rp);
if (B > 0.02) {
  g.save();
  g.scale(1, 0.22);
  let gr = g.createRadialGradient(0, 0, 0, 0, 0, 3.2);
  gr.addColorStop(0, "rgba(160,190,170," + 0.25 * B + ")");
  gr.addColorStop(1, "rgba(160,190,170,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, 3.2, 0, 7);
  g.fill();
  g.restore();
}
const W = 0.46,
  H = 2.25;
const v = (a, b) => (a + b * B) | 0;
let ig = g.createLinearGradient(0, -H, 0, 0);
ig.addColorStop(0, "rgb(" + v(18, 95) + "," + v(22, 118) + "," + v(20, 100) + ")");
ig.addColorStop(1, "rgb(" + v(10, 30) + "," + v(12, 40) + "," + v(12, 34) + ")");
g.fillStyle = ig;
g.fillRect(-W, -H, 2 * W, H);
g.fillStyle = "#2a2f2c";
g.fillRect(0.02, -1.62, 0.2, 0.3);
g.fillStyle = "#3b423e";
g.fillRect(0.05, -1.56, 0.14, 0.1);
g.fillStyle = "#202523";
g.fillRect(-0.3, -1.05, 0.6, 0.04);
const hx = 0.2,
  hy = -1.42;
if (s.receiver === "hook") {
  const j = ring ? Math.sin(t * 60) * 0.006 : 0;
  g.fillStyle = "#141716";
  g.fillRect(0.215 + j, -1.62, 0.05, 0.24);
} else {
  const a = Math.sin(t * 0.9) * 0.14 + Math.sin(t * 0.37 + 1) * 0.06;
  const len = 0.75;
  const rx = hx + Math.sin(a) * len,
    ry = hy + Math.cos(a) * len;
  g.strokeStyle = "#0f1211";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(hx, hy);
  for (let i = 1; i <= 30; i++) {
    const k = i / 30;
    g.lineTo(hx + (rx - hx) * k + Math.sin(k * 44) * 0.012, hy + (ry - hy) * k + 0.06 * Math.sin(k * Math.PI));
  }
  g.stroke();
  g.save();
  g.translate(rx, ry);
  g.rotate(-a);
  g.fillStyle = "#111413";
  g.fillRect(-0.025, 0, 0.05, 0.2);
  g.beginPath();
  g.ellipse(0, 0.01, 0.04, 0.025, 0, 0, 7);
  g.ellipse(0, 0.2, 0.04, 0.025, 0, 0, 7);
  g.fill();
  g.restore();
}
if (s.note === "taped") {
  g.save();
  g.translate(-0.26, -1.32);
  g.rotate(-0.06 + Math.sin(t * 1.1) * 0.01);
  g.fillStyle = "rgba(200,195,170," + (0.35 + 0.5 * B) + ")";
  g.fillRect(-0.07, -0.09, 0.14, 0.18);
  g.strokeStyle = "rgba(40,30,30,0.6)";
  g.lineWidth = 0.006;
  for (let i = 0; i < 5; i++) {
    g.beginPath();
    g.moveTo(-0.05, -0.06 + i * 0.03);
    g.lineTo(i == 4 ? 0.01 : 0.05, -0.06 + i * 0.03);
    g.stroke();
  }
  g.restore();
} else if (s.note === "fallen") {
  g.fillStyle = "rgba(190,185,160," + (0.3 + 0.4 * B) + ")";
  g.beginPath();
  g.moveTo(-0.2, -0.02);
  g.lineTo(-0.04, -0.05);
  g.lineTo(-0.02, -0.01);
  g.lineTo(-0.18, 0);
  g.fill();
}
const fr = "#1a1f1e";
g.fillStyle = fr;
g.fillRect(-W - 0.04, -H - 0.05, 0.06, H + 0.05);
g.fillRect(W - 0.02, -H - 0.05, 0.06, H + 0.05);
g.fillRect(-W - 0.04, -0.28, 2 * W + 0.08, 0.28);
g.fillRect(-W - 0.04, -H - 0.06, 2 * W + 0.08, 0.06);
for (const y of [-1.5, -0.8]) {
  g.fillRect(-W - 0.04, y, 0.06, 0.03);
  g.fillRect(W - 0.02, y, 0.06, 0.03);
}
if (s.door === "closed") {
  g.fillRect(-0.025, -H, 0.05, H);
  for (const y of [-1.5, -0.8]) g.fillRect(-W, y, 2 * W, 0.035);
  g.fillStyle = "rgba(150,180,170,0.07)";
  g.fillRect(-W, -H, 2 * W, H);
} else {
  g.fillRect(-W - 0.02, -H, 0.1, H - 0.28);
  g.fillStyle = "rgba(150,180,170,0.08)";
  g.fillRect(-W + 0.08, -H, 0.05, H - 0.28);
}
g.fillStyle = "#232927";
g.fillRect(-W - 0.08, -H - 0.32, 2 * W + 0.16, 0.27);
g.fillStyle = "rgb(" + v(70, 130) + "," + v(78, 140) + "," + v(70, 120) + ")";
g.fillRect(-W + 0.03, -H - 0.28, 2 * W - 0.06, 0.15);
g.fillStyle = "#1a1f1d";
g.font = "bold 0.11px sans-serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText(tr('PHONE'), 0, -H - 0.2);
g.strokeStyle = "rgba(170,195,185,0.12)";
g.lineWidth = 0.006;
g.beginPath();
for (let i = 0; i < 14; i++) {
  const x = -W + e.rnd() * 2 * W;
  const y = -H + ((e.rnd() * H + t * (0.05 + e.rnd() * 0.08)) % H);
  g.moveTo(x, y);
  g.lineTo(x + 0.004, y + 0.05 + e.rnd() * 0.08);
}
g.stroke();
if (B > 0.02) e.light(0, -H + 0.12, 2.4, "#cfe6d4", B * 0.9);
if (rp) {
  g.strokeStyle = "rgba(205,225,210,0.28)";
  g.lineWidth = 0.01;
  for (let i = 1; i <= 3; i++) {
    const r = 0.1 * i + ((t * 0.25) % 0.1);
    g.beginPath();
    g.arc(0.12, -1.47, r, -0.9, 0.9);
    g.stroke();
  }
}
e.at(0, -2.6);
