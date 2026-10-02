const S = e.state,
  W = String(S.weather || ""),
  surf = /surf|сильн|прибой|storm|шторм/.test(String(S.tide || "")) || /storm|шторм/.test(W),
  T = surf ? 5.5 : 8,
  n = Math.floor(e.t / T),
  p = e.t / T - n,
  amp = 0.72 + 0.28 * Math.sin(n * 2.39 + 0.7),
  R = surf ? 5 : 3.6,
  s = p < 0.3 ? Math.sin(((p / 0.3) * Math.PI) / 2) : Math.pow(Math.cos((((p - 0.3) / 0.7) * Math.PI) / 2), 1.5),
  run = R * amp * s,
  bp = S.beam_pass !== false && !/нет|^no|off|false/i.test(String(S.beam_pass)),
  ba = e.t * 0.3,
  sweep = bp ? Math.pow(Math.abs(Math.cos(ba)), 10) : 0;
const yw = (x) => 6.3 + 0.8 * Math.sin(x * 0.11 + 0.6) + 0.5 * Math.sin(x * 0.31 + 2),
  K = 0.45;
let gr = g.createLinearGradient(0, -15, 0, 15);
gr.addColorStop(0, "#0e1117");
gr.addColorStop(0.5, "#14161b");
gr.addColorStop(1, "#1a1b1f");
g.fillStyle = gr;
g.fillRect(-60, -15, 120, 30);
for (let i = 0; i < 650; i++) {
  const x = (e.rnd() - 0.5) * 120,
    y = -15 + e.rnd() * 30,
    r = 0.03 + e.rnd() * e.rnd() * 0.3,
    c = e.rnd(),
    al = 0.05 + e.rnd() * 0.09,
    rot = e.rnd() * 3;
  g.fillStyle = c < 0.55 ? "rgba(4,5,8,0.5)" : "rgba(110,118,135," + al + ")";
  g.beginPath();
  g.ellipse(x, y, r * 1.4, r, rot, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(8,12,10,0.55)";
g.lineWidth = 0.12;
g.beginPath();
for (let x = -60; x <= 60; x += 0.7) {
  const y = yw(x) + R * 1.05 + 0.6 + 0.25 * Math.sin(x * 1.7) + 0.15 * Math.sin(x * 4.1);
  x === -60 ? g.moveTo(x, y) : g.lineTo(x, y);
}
g.stroke();
g.beginPath();
g.moveTo(-60, -15);
for (let x = -60; x <= 60; x += 1.5) g.lineTo(x, yw(x) + R * 0.95 + 0.3 * Math.sin(x * 0.7));
g.lineTo(60, -15);
g.closePath();
g.fillStyle = "rgba(5,8,14,0.5)";
g.fill();
for (let j = 0; j < 60; j++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd(),
    r5 = e.rnd();
  const y = yw(7) - 2 + r1 * (R + 2.5),
    mx = K * (16 - y) + (r2 - 0.5) * 2.5,
    w = 0.3 + r3 * 1.2;
  g.fillStyle = "rgba(190,205,235," + (0.05 + r4 * 0.08) + ")";
  g.fillRect(mx - w / 2, y, w, 0.05 + r5 * 0.08);
}
const fr = (x) => yw(x) + run + 0.25 * Math.sin(x * 0.9 + e.t * 0.7) + 0.15 * Math.sin(x * 2.3 - e.t * 1.1);
const wpath = () => {
  g.beginPath();
  g.moveTo(-60, -15);
  for (let x = -60; x <= 60; x += 1) g.lineTo(x, fr(x));
  g.lineTo(60, -15);
  g.closePath();
};
wpath();
gr = g.createLinearGradient(0, -15, 0, 12);
gr.addColorStop(0, "rgba(9,15,28,1)");
gr.addColorStop(0.6, "rgba(11,19,34,0.95)");
gr.addColorStop(1, "rgba(28,40,60,0.5)");
g.fillStyle = gr;
g.fill();
g.save();
wpath();
g.clip();
g.lineCap = "round";
for (let i = 0; i < 320; i++) {
  const y = -15 + e.rnd() * 24,
    x = (e.rnd() - 0.5) * 120 + Math.sin(e.t * 0.4 + i) * 0.4,
    l = 0.6 + e.rnd() * 2.5,
    al = 0.05 + e.rnd() * 0.12,
    lw = 0.05 + e.rnd() * 0.08;
  g.strokeStyle = "rgba(110,130,170," + al + ")";
  g.lineWidth = lw;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x + l, y);
  g.stroke();
}
for (let i = 0; i < 140; i++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd(),
    r5 = e.rnd();
  const y = -15 + r1 * 24,
    mx = K * (16 - y) + (r2 - 0.5) * (2 + 0.15 * (16 - y)),
    w = 0.3 + r3 * 1.6,
    f = 0.5 + 0.5 * Math.sin(e.t * (1.5 + r4) + i * 1.7);
  if (f < 0.35) continue;
  g.fillStyle = "rgba(215,226,245," + 0.25 * f + ")";
  g.fillRect(mx - w / 2, y, w, 0.06 + r5 * 0.08);
}
const q = p,
  yb = (x) => yw(x) - 13 + 13 * q + 0.3 * Math.sin(x * 0.5 + n) + 0.2 * Math.sin(x * 1.3),
  ab = (0.1 + 0.55 * q * q) * (surf ? 1.3 : 0.85);
g.strokeStyle = "rgba(150,165,195," + (0.08 + 0.1 * q) + ")";
g.lineWidth = 0.3;
g.beginPath();
for (let x = -60; x <= 60; x += 1.2) {
  const y = yb(x) - 11 + 0.4 * Math.sin(x * 0.4);
  x === -60 ? g.moveTo(x, y) : g.lineTo(x, y);
}
g.stroke();
g.strokeStyle = "rgba(205,218,238," + Math.min(0.9, ab) + ")";
g.lineWidth = 0.25 + 0.7 * q * (surf ? 1.4 : 1);
g.beginPath();
for (let x = -60; x <= 60; x += 0.8) {
  const y = yb(x);
  x === -60 ? g.moveTo(x, y) : g.lineTo(x, y);
}
g.stroke();
for (let i = 0; i < 220; i++) {
  const x = (e.rnd() - 0.5) * 120,
    d = e.rnd() * e.rnd() * 3.5 * q,
    r = 0.08 + e.rnd() * 0.3,
    a = Math.min(0.9, ab) * (1 - d / 3.6) * 0.6 * e.rnd();
  g.fillStyle = "rgba(205,218,238," + a + ")";
  g.beginPath();
  g.ellipse(x, yb(x) - d, r * 1.6, r * 0.5, 0, 0, 7);
  g.fill();
}
for (let j = 0; j < 30; j++) {
  const r1 = e.rnd(),
    r2 = e.rnd();
  const x = K * (16 - yb(0)) + (r1 - 0.5) * 5;
  g.fillStyle = "rgba(235,240,255," + (0.2 + 0.5 * q) * r2 + ")";
  g.fillRect(x, yb(x) - 0.15, 0.2 + r2 * 0.8, 0.12);
}
const fresh = p < 0.3 ? 1 : 1 - (0.7 * (p - 0.3)) / 0.7;
for (let i = 0; i < 260; i++) {
  const x = (e.rnd() - 0.5) * 120,
    d = e.rnd() * e.rnd() * 2.6,
    r = 0.06 + e.rnd() * 0.22,
    a = fresh * (1 - d / 2.6) * 0.55 * e.rnd();
  g.fillStyle = "rgba(215,226,242," + a + ")";
  g.beginPath();
  g.ellipse(x, fr(x) - d, r * 1.5, r * 0.6, 0, 0, 7);
  g.fill();
}
g.restore();
g.strokeStyle = "rgba(225,233,246," + (0.12 + 0.4 * fresh) + ")";
g.lineWidth = 0.14;
g.beginPath();
for (let x = -60; x <= 60; x += 1) {
  const y = fr(x);
  x === -60 ? g.moveTo(x, y) : g.lineTo(x, y);
}
g.stroke();
if (p > 0.3) {
  const a = 0.3 * (1 - (p - 0.3) / 0.7);
  g.setLineDash([0.4, 0.25]);
  g.strokeStyle = "rgba(205,215,232," + a + ")";
  g.lineWidth = 0.07;
  g.beginPath();
  for (let x = -60; x <= 60; x += 1) {
    const y = yw(x) + R * amp + 0.2 * Math.sin(x * 1.9);
    x === -60 ? g.moveTo(x, y) : g.lineTo(x, y);
  }
  g.stroke();
  g.setLineDash([]);
}
if (sweep > 0.02) {
  const xs = Math.sin(ba) * Math.sign(Math.cos(ba)) * 45;
  gr = g.createLinearGradient(xs - 14, 0, xs + 14, 0);
  gr.addColorStop(0, "rgba(255,228,180,0)");
  gr.addColorStop(0.5, "rgba(255,228,180," + 0.13 * sweep + ")");
  gr.addColorStop(1, "rgba(255,228,180,0)");
  g.globalCompositeOperation = "lighter";
  g.fillStyle = gr;
  g.fillRect(xs - 14, -15, 28, 30);
  g.globalCompositeOperation = "source-over";
}
