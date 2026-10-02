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
const fz = 10 - (s.frost_trail ?? 0.45) * 8.5,
  Z = (x) => 3.5 - x;
const H = [[-0.7, -1.5]],
  r = 0.21;
const shape = () => {
  g.beginPath();
  g.rect(-6.5, -2.5, 13, 2.52);
  for (const h of H) {
    g.moveTo(h[0] + r, h[1]);
    g.arc(h[0], h[1], r, 0, 6.2832);
  }
};
let gr = g.createLinearGradient(0, -2.5, 0, 0);
gr.addColorStop(0, "#090b0f");
gr.addColorStop(0.5, "#12171e");
gr.addColorStop(1, "#0a0c10");
shape();
g.fillStyle = gr;
g.fill("evenodd");
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
g.save();
shape();
g.clip("evenodd");
if (W > 0) {
  const w = g.createLinearGradient(0, -2.5, 0, -0.6);
  w.addColorStop(0, "rgba(205,222,255," + 0.22 * W + ")");
  w.addColorStop(1, "rgba(205,222,255,0)");
  g.fillStyle = w;
  g.fillRect(-6.5, -2.5, 13, 1.9);
}
for (const h of H) {
  const c = g.createRadialGradient(h[0], h[1], 0.2, h[0], h[1], 1.1);
  c.addColorStop(0, "rgba(80,70,110,0.16)");
  c.addColorStop(1, "rgba(80,70,110,0)");
  g.fillStyle = c;
  g.fillRect(h[0] - 1.2, h[1] - 1.2, 2.4, 2.4);
}
const rl = g.createRadialGradient(-3, -1.2, 0.2, -3, -1.2, 4);
rl.addColorStop(0, "rgba(140,38,32,0.16)");
rl.addColorStop(1, "rgba(140,38,32,0)");
g.fillStyle = rl;
g.fillRect(-6.5, -2.5, 13, 2.52);
for (let x = -6.5; x <= 6.5; x += 1.3) {
  g.fillStyle = "#06080b";
  g.fillRect(x - 0.06, -2.5, 0.12, 2.52);
  g.fillStyle = "rgba(150,70,60,0.1)";
  g.fillRect(x - 0.075, -2.5, 0.015, 2.52);
}
g.strokeStyle = "rgba(0,0,0,0.6)";
g.lineWidth = 0.025;
for (const y of [-2.05, -0.32]) {
  g.beginPath();
  g.moveTo(-6.5, y);
  g.lineTo(6.5, y);
  g.stroke();
}
g.fillStyle = "rgba(130,140,155,0.14)";
for (let x = -6.5; x < 6.5; x += 1.3)
  for (let y = -1.95; y < -0.4; y += 0.3) {
    g.fillRect(x + 0.11, y, 0.025, 0.025);
    g.fillRect(x + 1.17, y, 0.025, 0.025);
  }
g.fillStyle = "rgba(0,0,0,0.35)";
g.fillRect(-6.5, -0.32, 13, 0.34);
const cols = ["#14171c", "#050608", "#1b2128", "#2a0f10", "#0a0c0f"];
for (let k = 0; k < 5; k++) {
  const y0 = -2.42 + k * 0.04;
  g.strokeStyle = cols[k];
  g.lineWidth = 0.035 + 0.012 * (k % 2);
  g.beginPath();
  g.moveTo(-6.5, y0);
  for (let x = -6.5; x < 6.4; x += 1.3) {
    const sag = 0.05 + 0.04 * Math.sin(k * 2.3 + x) + 0.006 * Math.sin(t * 0.37 + k + x);
    g.quadraticCurveTo(x + 0.65, y0 + sag, x + 1.3, y0);
  }
  g.stroke();
}
g.fillStyle = "#0c0e12";
for (let x = -6.5; x <= 6.5; x += 1.3) g.fillRect(x - 0.03, -2.48, 0.06, 0.25);
txt("←  ШЛЮЗ 2", -1.9, -1.15, 14, 0.2);
txt("ПАЛУБА 2 · СЕКЦ. 4", 4.4, -1.85, 11, 0.16);
for (let i = 0; i < 700; i++) {
  const x = -6.5 + e.rnd() * 13,
    y = -Math.pow(e.rnd(), 2) * 0.7,
    a = e.rnd();
  const v = Math.max(0, Math.min(1, (Z(x) - fz) / 1.2));
  if (v <= 0) continue;
  g.fillStyle = "rgba(215,232,248," + v * (0.08 + 0.25 * a) * (1 + y * 1.2) + ")";
  g.fillRect(x, y - 0.01, 0.012 + a * 0.015, 0.012);
}
for (let x = 5.85; x > -6.5; x -= 2.6) {
  g.fillStyle = "#07080a";
  g.fillRect(x - 0.09, -0.27, 0.18, 0.1);
  g.fillStyle = "rgba(255," + Math.round(60 + 40 * R) + ",50," + (0.15 + 0.85 * R) + ")";
  g.fillRect(x - 0.07, -0.25, 0.14, 0.05);
  if (R > 0.02) e.light(x, -0.22, 0.7, "#ff2a20", 0.45 * R);
}
g.restore();
const hx = 2.0;
const hp = (m) => {
  g.beginPath();
  g.moveTo(hx - 0.42 - m, -0.08);
  g.lineTo(hx - 0.42 - m, -1.55);
  g.quadraticCurveTo(hx - 0.42 - m, -1.95 - m, hx, -1.95 - m);
  g.quadraticCurveTo(hx + 0.42 + m, -1.95 - m, hx + 0.42 + m, -1.55);
  g.lineTo(hx + 0.42 + m, -0.08);
  g.closePath();
};
hp(0.09);
g.fillStyle = "#07090c";
g.fill();
hp(0);
let dg = g.createLinearGradient(hx - 0.4, 0, hx + 0.4, 0);
dg.addColorStop(0, "#1b222b");
dg.addColorStop(1, "#0f1318");
g.fillStyle = dg;
g.fill();
g.strokeStyle = "rgba(150,70,60,0.25)";
g.lineWidth = 0.015;
hp(0.035);
g.stroke();
const wg = g.createRadialGradient(hx, -1.45, 0, hx, -1.45, 0.1);
wg.addColorStop(0, "#5d93b8");
wg.addColorStop(1, "#10263a");
g.fillStyle = wg;
g.beginPath();
g.arc(hx, -1.45, 0.09, 0, 6.2832);
g.fill();
g.strokeStyle = "#05070a";
g.lineWidth = 0.035;
g.stroke();
e.light(hx, -1.45, 0.9, "#7fc4ff", 0.26 + 0.04 * Math.sin(t * 0.7));
g.strokeStyle = "#2a3038";
g.lineWidth = 0.025;
g.beginPath();
g.arc(hx, -1.0, 0.14, 0, 6.2832);
g.stroke();
for (let k = 0; k < 4; k++) {
  const a = k * 1.5708 + 0.3;
  g.beginPath();
  g.moveTo(hx, -1.0);
  g.lineTo(hx + Math.cos(a) * 0.14, -1.0 + Math.sin(a) * 0.14);
  g.stroke();
}
g.fillStyle = "rgba(127,196,255,0.18)";
g.fillRect(hx - 0.38, -0.1, 0.76, 0.012);
g.fillStyle = "rgba(150,120,40,0.22)";
g.fillRect(hx - 0.52, -0.07, 1.04, 0.06);
txt("СМОТРОВОЙ ОТСЕК · 4", hx, -2.14, 9, 0.26);
g.fillStyle = "#050608";
g.fillRect(-2.85, -1.75, 0.5, 0.75);
g.fillStyle = "#1a1d22";
for (const kx of [-2.72, -2.48]) g.fillRect(kx - 0.01, -1.68, 0.02, 0.05);
g.strokeStyle = "#171a1f";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-2.72, -1.63);
g.quadraticCurveTo(-2.7 + Math.sin(t * 0.3) * 0.01, -1.3, -2.66, -1.12);
g.stroke();
g.strokeStyle = "#0b0d11";
g.lineWidth = 0.03;
g.strokeRect(-2.85, -1.75, 0.5, 0.75);
g.fillStyle = "#24161a";
g.beginPath();
g.moveTo(-2.35, -1.75);
g.lineTo(-2.2, -1.83);
g.lineTo(-2.2, -0.92);
g.lineTo(-2.35, -1.0);
g.closePath();
g.fill();
txt("O₂ · АВАР. МАСКИ", -2.6, -1.84, 6, 0.24, "200,110,90");
for (const h of H) {
  const hx2 = h[0],
    hy = h[1];
  const fr = g.createRadialGradient(hx2, hy, r * 0.45, hx2, hy, r);
  fr.addColorStop(0, "rgba(200,225,245,0)");
  fr.addColorStop(1, "rgba(205,228,248,0.24)");
  g.fillStyle = fr;
  g.beginPath();
  g.arc(hx2, hy, r, 0, 6.2832);
  g.fill();
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * 6.2832,
      rr = r * (0.78 + 0.22 * Math.sqrt(e.rnd()));
    g.fillStyle = "rgba(225,240,252," + (0.1 + 0.25 * e.rnd()) + ")";
    g.fillRect(hx2 + Math.cos(a) * rr, hy + Math.sin(a) * rr, 0.008, 0.008);
  }
  g.strokeStyle = "#05070a";
  g.lineWidth = 0.09;
  g.beginPath();
  g.arc(hx2, hy, r + 0.04, 0, 6.2832);
  g.stroke();
  g.fillStyle = "#0a0c10";
  for (let k = 0; k < 8; k++) {
    const a = k * 0.785;
    g.beginPath();
    g.arc(hx2 + Math.cos(a) * (r + 0.07), hy + Math.sin(a) * (r + 0.07), 0.018, 0, 6.2832);
    g.fill();
  }
}
