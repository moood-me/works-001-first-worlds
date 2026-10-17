const s = e.state,
  t = e.t;
let L = s.lamp === "off" ? 0 : 1;
if (s.lamp === "flickering") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
const Y = (d) => 40 - d;
g.fillStyle = "#111114";
g.fillRect(-45, -40, 90, 80);
g.fillStyle = "rgba(38,32,26,0.5)";
g.fillRect(-2, Y(14.2), 20, 2.4);
for (let i = 0; i < 60; i++) {
  const x = -30 + e.rnd() * 60,
    y = Y(2 + e.rnd() * 40),
    r = 0.5 + e.rnd() * 2.2;
  const c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(30,30,34,0.5)");
  c.addColorStop(1, "rgba(30,30,34,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.strokeStyle = "rgba(5,5,7,0.7)";
g.lineWidth = 0.03;
for (let i = 0; i < 16; i++) {
  let x = -15 + e.rnd() * 30,
    y = Y(2 + e.rnd() * 16);
  g.beginPath();
  g.moveTo(x, y);
  for (let k = 0; k < 6; k++) {
    x += (e.rnd() - 0.5) * 1.4;
    y += (e.rnd() - 0.5) * 1.4;
    g.lineTo(x, y);
  }
  g.stroke();
}
if (L > 0) {
  const cx = -0.1,
    cy = Y(8.5);
  const p = g.createRadialGradient(cx, cy, 0, cx, cy, 4.5);
  p.addColorStop(0, "rgba(235,150,70," + 0.32 * L + ")");
  p.addColorStop(0.5, "rgba(235,150,70," + 0.1 * L + ")");
  p.addColorStop(1, "rgba(235,150,70,0)");
  g.fillStyle = p;
  g.beginPath();
  g.arc(cx, cy, 4.5, 0, 7);
  g.fill();
}
g.fillStyle = "rgba(20,20,26,0.55)";
g.beginPath();
g.ellipse(1.4, Y(6), 0.9, 0.45, 0.15, 0, 7);
g.fill();
g.fillStyle = "rgba(235,160,80," + 0.22 * L + ")";
for (let k = 0; k < 6; k++) {
  const w = 0.25 - k * 0.03;
  g.fillRect(1.1 - w / 2, Y(6.3) + k * 0.1, w, 0.035);
}
for (let i = 0; i < 160; i++) {
  const a = e.rnd() * 6.28,
    r = Math.sqrt(e.rnd()) * 1.0;
  const x = -1.4 + Math.cos(a) * r * 1.3,
    y = Y(4.8) + Math.sin(a) * r * 0.8;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(14,14,16,0.9)" : "rgba(120,115,105,0.5)";
  g.beginPath();
  g.ellipse(x, y, 0.022, 0.011, e.rnd() * 3, 0, 7);
  g.fill();
}
