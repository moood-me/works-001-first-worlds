const s = e.state,
  t = e.t;
let L = s.lamp === "погас" ? 0 : 1;
if (s.lamp === "мигает") {
  const n = Math.sin(t * 13.1) * Math.sin(t * 2.7) + Math.sin(t * 0.61);
  L = n > 0.6 ? 0.06 : n > 0.45 ? 0.45 : 1;
}
if (L > 0) {
  const c = g.createLinearGradient(0, -4.8, 0, 0);
  c.addColorStop(0, "rgba(235,150,70," + 0.16 * L + ")");
  c.addColorStop(1, "rgba(235,150,70,0.015)");
  g.fillStyle = c;
  g.beginPath();
  g.moveTo(0.65, -4.75);
  g.lineTo(0.95, -4.75);
  g.lineTo(3.4, 0);
  g.lineTo(-1.9, 0);
  g.closePath();
  g.fill();
  e.light(0.8, -4.7, 6, "#eb9a4a", 0.9 * L);
}
g.fillStyle = "#1b1b1f";
g.beginPath();
g.moveTo(-0.11, 0);
g.lineTo(-0.07, -5.0);
g.lineTo(0.07, -5.0);
g.lineTo(0.11, 0);
g.fill();
g.strokeStyle = "#17171b";
g.lineWidth = 0.07;
g.beginPath();
g.moveTo(0, -4.95);
g.quadraticCurveTo(0.1, -5.25, 0.8, -4.95);
g.stroke();
g.fillStyle = "#141418";
g.beginPath();
g.moveTo(0.55, -5.0);
g.lineTo(1.05, -4.92);
g.lineTo(0.95, -4.75);
g.lineTo(0.62, -4.77);
g.closePath();
g.fill();
g.fillStyle = "rgba(255,190,120," + (0.1 + 0.9 * L) + ")";
g.beginPath();
g.ellipse(0.79, -4.76, 0.16, 0.04, 0.08, 0, 7);
g.fill();
g.fillStyle = "rgba(200,195,180," + (0.1 + 0.2 * L) + ")";
g.fillRect(-0.09, -1.75, 0.18, 0.24);
for (let i = 0; i < 5; i++) {
  const a = t * (1.3 + e.rnd()) + e.rnd() * 6;
  const r = 0.2 + e.rnd() * 0.35;
  g.fillStyle = "rgba(255,220,170," + 0.6 * L + ")";
  g.fillRect(0.8 + Math.cos(a) * r, -4.5 + Math.sin(a * 1.3) * r * 0.6, 0.025, 0.025);
}
