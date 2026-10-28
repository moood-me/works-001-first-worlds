const s = e.state,
  d = s.dusk || 0,
  p = s.busX || 0,
  t = e.t;
if (p <= 0.001 || p >= 1.999) return;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
let x;
if (p <= 1) {
  const k = 1 - p;
  x = -1.4 + 50 * k * k;
} else {
  const q = p - 1;
  x = -1.4 - 50 * q * q;
}
const L = 3.4,
  open = s.bus === "waiting";
const idle = open ? Math.sin(t * 23) * 0.006 : 0;
g.save();
g.translate(x, idle);
g.fillStyle = "rgba(10,10,20,0.3)";
g.beginPath();
g.ellipse(0, 0, L + 0.3, 0.15, 0, 0, 7);
g.fill();
const body = mx([230, 224, 206], [124, 122, 134], d),
  stripe = mx([58, 132, 122], [28, 60, 72], d),
  win = mx([96, 110, 130], [34, 38, 56], d);
g.fillStyle = body;
g.beginPath();
g.moveTo(-L, -0.3);
g.lineTo(-L, -2.35);
g.quadraticCurveTo(-L, -2.6, -L + 0.28, -2.6);
g.lineTo(L - 0.1, -2.6);
g.lineTo(L, -2.5);
g.lineTo(L, -0.3);
g.closePath();
g.fill();
g.fillStyle = stripe;
g.fillRect(-L, -1.08, 2 * L, 0.2);
g.fillRect(-L, -0.52, 2 * L, 0.09);
const lit = Math.min(1, Math.max(0, (d - 0.3) * 2.5));
for (let i = 0; i < 4; i++) {
  const wx = -L + 1.55 + i * 1.2;
  g.fillStyle = win;
  g.fillRect(wx, -2.22, 1.0, 0.92);
  if (lit > 0) {
    g.fillStyle = "rgba(255,222,160," + 0.75 * lit + ")";
    g.fillRect(wx, -2.22, 1.0, 0.92);
  }
  if (i === 2) {
    g.fillStyle = mx([60, 54, 60], [30, 26, 36], d);
    g.beginPath();
    g.arc(wx + 0.55, -1.5, 0.11, 0, 7);
    g.fill();
    g.fillRect(wx + 0.38, -1.42, 0.34, 0.12);
  }
  g.fillStyle = "rgba(255,220,190," + 0.22 * (1 - d) + ")";
  g.beginPath();
  g.moveTo(wx, -2.22);
  g.lineTo(wx + 0.32, -2.22);
  g.lineTo(wx, -1.8);
  g.fill();
}
g.fillStyle = win;
g.fillRect(-L + 0.05, -2.22, 0.32, 1.3);
g.fillStyle = open ? "rgba(255,226,170," + (0.5 + 0.4 * lit) + ")" : win;
g.fillRect(-L + 0.5, -2.22, 0.8, 1.88);
g.strokeStyle = mx([80, 80, 90], [30, 30, 40], d);
g.lineWidth = 0.04;
g.strokeRect(-L + 0.5, -2.22, 0.8, 1.88);
if (!open) {
  g.beginPath();
  g.moveTo(-L + 0.9, -2.22);
  g.lineTo(-L + 0.9, -0.34);
  g.stroke();
} else {
  g.fillStyle = mx([150, 140, 130], [60, 56, 64], d);
  g.fillRect(-L + 0.5, -0.5, 0.8, 0.08);
}
g.fillStyle = "#1a1a1e";
g.fillRect(-L + 0.1, -2.55, 1.8, 0.25);
g.fillStyle = "rgba(255,170,70,0.95)";
g.font = "bold 0.18px sans-serif";
g.textBaseline = "middle";
g.fillText(tr('7  TOWN'), -L + 0.18, -2.42);
for (const wx of [-L + 1.0, L - 1.0]) {
  g.fillStyle = "#16161a";
  g.beginPath();
  g.arc(wx, -0.38, 0.38, 0, 7);
  g.fill();
  g.fillStyle = "#6a6a70";
  g.beginPath();
  g.arc(wx, -0.38, 0.14, 0, 7);
  g.fill();
}
g.fillStyle = "rgba(255,190,120," + 0.6 * (1 - d) + ")";
g.fillRect(-L + 0.3, -2.6, 2 * L - 0.4, 0.03);
g.fillRect(-L, -2.35, 0.03, 2.0);
g.restore();
e.light(x - L + 0.05, -0.65, 2.0, "#fff2cc", 0.45 + 0.45 * d);
e.light(x + L - 0.05, -0.7, 0.7, "#ff4030", 0.55);
