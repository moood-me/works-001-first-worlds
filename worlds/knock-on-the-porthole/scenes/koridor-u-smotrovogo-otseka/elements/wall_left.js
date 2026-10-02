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
  Z = (x) => 3.5 + x;
const H = [
    [-2, -1.5],
    [3, -1.5],
  ],
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
gr.addColorStop(0.5, "#131820");
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
  const c = g.createRadialGradient(h[0], h[1], 0.2, h[0], h[1], 1.3);
  c.addColorStop(0, "rgba(150,40,32,0.28)");
  c.addColorStop(1, "rgba(150,40,32,0)");
  g.fillStyle = c;
  g.fillRect(h[0] - 1.4, h[1] - 1.4, 2.8, 2.8);
}
for (let x = -6.5; x <= 6.5; x += 1.3) {
  g.fillStyle = "#06080b";
  g.fillRect(x - 0.06, -2.5, 0.12, 2.52);
  g.fillStyle = "rgba(150,70,60,0.12)";
  g.fillRect(x + 0.06, -2.5, 0.015, 2.52);
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
const cols = ["#050608", "#1b2128", "#2a0f10", "#0a0c0f", "#14171c"];
for (let k = 0; k < 5; k++) {
  const y0 = -2.42 + k * 0.04;
  g.strokeStyle = cols[k];
  g.lineWidth = 0.035 + 0.012 * (k % 2);
  g.beginPath();
  g.moveTo(-6.5, y0);
  for (let x = -6.5; x < 6.4; x += 1.3) {
    const sag = 0.05 + 0.04 * Math.sin(k * 1.7 + x) + 0.006 * Math.sin(t * 0.4 + k + x);
    g.quadraticCurveTo(x + 0.65, y0 + sag, x + 1.3, y0);
  }
  g.stroke();
}
g.fillStyle = "#0c0e12";
for (let x = -6.5; x <= 6.5; x += 1.3) g.fillRect(x - 0.03, -2.48, 0.06, 0.25);
txt("ШЛЮЗ 2  →", 0.6, -1.15, 14, 0.2);
txt("ПАЛУБА 2 · СЕКЦ. 4", -4.2, -1.85, 11, 0.16);
txt("ПРОВЕРЬ ДАВЛЕНИЕ ПЕРЕД ВЫХОДОМ", 4.9, -0.6, 7, 0.12);
for (let i = 0; i < 700; i++) {
  const x = -6.5 + e.rnd() * 13,
    y = -Math.pow(e.rnd(), 2) * 0.7,
    a = e.rnd();
  const v = Math.max(0, Math.min(1, (Z(x) - fz) / 1.2));
  if (v <= 0) continue;
  g.fillStyle = "rgba(215,232,248," + v * (0.08 + 0.25 * a) * (1 + y * 1.2) + ")";
  g.fillRect(x, y - 0.01, 0.012 + a * 0.015, 0.012);
}
for (let x = -5.85; x < 6.5; x += 2.6) {
  g.fillStyle = "#07080a";
  g.fillRect(x - 0.09, -0.27, 0.18, 0.1);
  g.fillStyle = "rgba(255," + Math.round(60 + 40 * R) + ",50," + (0.15 + 0.85 * R) + ")";
  g.fillRect(x - 0.07, -0.25, 0.14, 0.05);
  if (R > 0.02) e.light(x, -0.22, 0.7, "#ff2a20", 0.45 * R);
}
g.restore();
for (const h of H) {
  const hx = h[0],
    hy = h[1];
  const fr = g.createRadialGradient(hx, hy, r * 0.45, hx, hy, r);
  fr.addColorStop(0, "rgba(200,225,245,0)");
  fr.addColorStop(1, "rgba(205,228,248,0.22)");
  g.fillStyle = fr;
  g.beginPath();
  g.arc(hx, hy, r, 0, 6.2832);
  g.fill();
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * 6.2832,
      rr = r * (0.78 + 0.22 * Math.sqrt(e.rnd()));
    g.fillStyle = "rgba(225,240,252," + (0.1 + 0.25 * e.rnd()) + ")";
    g.fillRect(hx + Math.cos(a) * rr, hy + Math.sin(a) * rr, 0.008, 0.008);
  }
  g.strokeStyle = "#05070a";
  g.lineWidth = 0.09;
  g.beginPath();
  g.arc(hx, hy, r + 0.04, 0, 6.2832);
  g.stroke();
  g.strokeStyle = "rgba(170,60,48,0.45)";
  g.lineWidth = 0.015;
  g.beginPath();
  g.arc(hx, hy, r + 0.005, 3.3, 5.6);
  g.stroke();
  g.fillStyle = "#0a0c10";
  for (let k = 0; k < 8; k++) {
    const a = k * 0.785;
    g.beginPath();
    g.arc(hx + Math.cos(a) * (r + 0.07), hy + Math.sin(a) * (r + 0.07), 0.018, 0, 6.2832);
    g.fill();
  }
  e.light(hx, hy, 1.1, "#ff4a34", 0.22 + 0.03 * Math.sin(t * 0.37 + hx));
}
