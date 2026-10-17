const S = e.state,
  str = (v) => String(v == null ? "" : v),
  W = str(S.weather),
  rain = /rain|storm/.test(W),
  surf = /strong|surf|storm/.test(str(S.tide)) || /storm/.test(W),
  bp = S.beam_pass !== false && !/^no|off|false/i.test(str(S.beam_pass)),
  ba = e.t * 0.3,
  sweep = bp ? Math.pow(Math.abs(Math.cos(ba)), 10) : 0;
const edge = [];
for (let i = 0; i <= 46; i++) {
  const x = -2.4 + (4.8 * i) / 46;
  edge.push([x, -1.12 - 0.16 * Math.sin(x * 2.3 + 1) - 0.08 * Math.sin(x * 5.1 + 2) - 0.05 * e.rnd()]);
}
const outline = () => {
  g.beginPath();
  g.moveTo(-2.4, 1.5);
  edge.forEach((q) => g.lineTo(q[0], q[1]));
  g.lineTo(2.4, 1.5);
  g.closePath();
};
outline();
let gr = g.createLinearGradient(0, -1.4, 0, 1.5);
gr.addColorStop(0, "#161c28");
gr.addColorStop(0.45, "#0f131c");
gr.addColorStop(1, "#07090e");
g.fillStyle = gr;
g.fill();
g.save();
outline();
g.clip();
for (let i = 0; i < 1000; i++) {
  const x = (e.rnd() - 0.5) * 4.8,
    y = -1.45 + e.rnd() * 2.95,
    r = 0.004 + e.rnd() * e.rnd() * 0.05,
    c = e.rnd(),
    al = 0.04 + e.rnd() * 0.08,
    rot = e.rnd() * 3;
  g.fillStyle = c < 0.6 ? "rgba(2,3,6,0.45)" : "rgba(120,134,160," + al + ")";
  g.beginPath();
  g.ellipse(x, y, r * 1.5, r, rot, 0, 7);
  g.fill();
}
g.strokeStyle = "rgba(2,3,6,0.75)";
g.lineCap = "round";
g.lineJoin = "round";
for (let k = 0; k < 10; k++) {
  let x = (e.rnd() - 0.5) * 4.2,
    y = -1.2 + e.rnd() * 2.5;
  g.lineWidth = 0.006 + e.rnd() * 0.012;
  g.beginPath();
  g.moveTo(x, y);
  for (let j = 0; j < 7; j++) {
    x += (e.rnd() - 0.5) * 0.22;
    y += (e.rnd() - 0.3) * 0.16;
    g.lineTo(x, y);
  }
  g.stroke();
}
g.save();
g.translate(0.62, -0.3);
g.scale(0.32, 1);
const sh = 0.15 + 0.03 * Math.sin(e.t * 0.7) + 0.02 * Math.sin(e.t * 1.93);
gr = g.createRadialGradient(0, 0, 0, 0, 0, 1.3);
gr.addColorStop(0, "rgba(170,188,222," + sh + ")");
gr.addColorStop(0.5, "rgba(120,140,178," + sh * 0.35 + ")");
gr.addColorStop(1, "rgba(120,140,178,0)");
g.fillStyle = gr;
g.fillRect(-1.4, -1.4, 2.8, 2.8);
g.restore();
for (let i = 0; i < 110; i++) {
  const r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    r4 = e.rnd();
  const y = -1.2 + r1 * 2.5,
    x = 0.62 + (r2 - 0.5) * (0.2 + 0.25 * (y + 1.2)),
    w = 0.01 + r3 * 0.05,
    f = 0.5 + 0.5 * Math.sin(e.t * (0.7 + r4) + i * 2.3);
  if (f < 0.45) continue;
  g.fillStyle = "rgba(215,226,246," + 0.25 * f + ")";
  g.fillRect(x - w / 2, y, w, 0.005 + r4 * 0.01);
}
const pools = [
  [0.2, -0.6, 0.34, 0.13],
  [-0.95, -0.25, 0.22, 0.09],
  [1.3, 0.1, 0.26, 0.11],
  [-0.4, 0.5, 0.18, 0.08],
  [0.9, -0.9, 0.2, 0.07],
  [-1.6, 0.3, 0.25, 0.1],
];
pools.forEach(([px, py, rx, ry], k) => {
  g.save();
  g.translate(px, py);
  g.scale(1, ry / rx);
  gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
  gr.addColorStop(0, "rgba(36,48,72,0.9)");
  gr.addColorStop(0.75, "rgba(28,38,58,0.85)");
  gr.addColorStop(1, "rgba(28,38,58,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.arc(0, 0, rx, 0, 7);
  g.fill();
  g.strokeStyle = "rgba(150,168,200,0.18)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.arc(0, 0, rx * 0.86, -2.6, -0.6);
  g.stroke();
  g.restore();
  const gx = px + (0.62 - px) * 0.5,
    ga = 0.15 + 0.15 * Math.sin(e.t * 1.3 + k * 1.7);
  g.fillStyle = "rgba(220,230,250," + ga + ")";
  g.fillRect(gx - 0.03, py - 0.004, 0.06, 0.006);
  if (rain) {
    for (let j = 0; j < 3; j++) {
      const T = 1.1 + 0.4 * j,
        tt = e.t + k * 0.37 + j * 0.71,
        ph = (tt / T) % 1,
        m = Math.floor(tt / T),
        cx = px + Math.sin(k * 7 + j * 3 + m * 1.7) * rx * 0.6,
        cy = py + Math.cos(k * 5 + j + m * 2.3) * ry * 0.4;
      g.strokeStyle = "rgba(190,205,232," + 0.35 * (1 - ph) + ")";
      g.lineWidth = 0.004;
      g.beginPath();
      g.arc(cx, cy, 0.005 + 0.05 * ph, 0, 7);
      g.stroke();
    }
  }
});
for (let i = 0; i < 70; i++) {
  const q = edge[Math.floor(e.rnd() * edge.length)],
    x = q[0] + (e.rnd() - 0.5) * 0.1,
    y = q[1] + 0.03 + e.rnd() * 0.35,
    r = 0.006 + e.rnd() * 0.014;
  g.strokeStyle = "rgba(150,160,175," + (0.15 + e.rnd() * 0.2) + ")";
  g.lineWidth = 0.004;
  g.beginPath();
  g.arc(x, y, r, 0, 7);
  g.stroke();
  g.fillStyle = "rgba(3,4,7,0.6)";
  g.beginPath();
  g.arc(x, y, r * 0.4, 0, 7);
  g.fill();
}
for (let i = 0; i < 260; i++) {
  const x = (e.rnd() - 0.5) * 4.6,
    y = -1.3 + e.rnd() * 2.6,
    r = 0.002 + e.rnd() * 0.006;
  g.fillStyle = "rgba(200,208,220," + (0.06 + e.rnd() * 0.14) + ")";
  g.fillRect(x, y, r, r);
}
for (let k = 0; k < 7; k++) {
  const q = edge[4 + Math.floor(e.rnd() * 38)],
    x = q[0],
    y = q[1],
    L = 0.25 + e.rnd() * 0.4,
    ph = e.rnd() * 6;
  g.strokeStyle = "rgba(28,34,22,0.9)";
  g.lineWidth = 0.02 + e.rnd() * 0.025;
  g.beginPath();
  g.moveTo(x, y - 0.02);
  for (let j = 1; j <= 8; j++) {
    const t = j / 8;
    g.lineTo(x + Math.sin(t * 4 + ph + Math.sin(e.t * 0.6 + ph) * 0.3) * 0.06, y + t * L);
  }
  g.stroke();
}
const T = surf ? 5.5 : 8,
  p = (e.t / T) % 1,
  wa = (p < 0.22 ? p / 0.22 : Math.max(0, 1 - (p - 0.22) / 0.55)) * (surf ? 1 : 0.25);
if (wa > 0.01) {
  g.beginPath();
  g.moveTo(-2.4, -1.5);
  edge.forEach((q, i) => g.lineTo(q[0], q[1] + wa * (0.25 + 0.15 * Math.sin(i * 1.3))));
  g.lineTo(2.4, -1.5);
  g.closePath();
  g.fillStyle = "rgba(60,78,110," + 0.35 * wa + ")";
  g.fill();
  for (let i = 0; i < 120; i++) {
    const q = edge[Math.floor(e.rnd() * edge.length)],
      x = q[0] + (e.rnd() - 0.5) * 0.1,
      y = q[1] + e.rnd() * wa * 0.4,
      r = 0.01 + e.rnd() * 0.04;
    g.fillStyle = "rgba(215,226,244," + 0.5 * wa * e.rnd() + ")";
    g.beginPath();
    g.ellipse(x, y, r * 1.6, r, 0, 0, 7);
    g.fill();
  }
}
if (sweep > 0.02) {
  const xs = Math.sin(ba) * Math.sign(Math.cos(ba)) * 5;
  gr = g.createLinearGradient(xs - 1.2, 0, xs + 1.2, 0);
  gr.addColorStop(0, "rgba(255,228,180,0)");
  gr.addColorStop(0.5, "rgba(255,228,180," + 0.16 * sweep + ")");
  gr.addColorStop(1, "rgba(255,228,180,0)");
  g.globalCompositeOperation = "lighter";
  g.fillStyle = gr;
  g.fillRect(xs - 1.2, -1.5, 2.4, 3);
  g.globalCompositeOperation = "source-over";
}
g.restore();
g.strokeStyle = "rgba(165,180,210,0.3)";
g.lineWidth = 0.012;
g.beginPath();
edge.forEach((q, i) => (i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1])));
g.stroke();
