const t = e.t;
g.fillStyle = "#b8b3a8";
g.beginPath();
g.moveTo(-0.17, 0);
g.lineTo(-0.07, -9);
g.lineTo(0.05, -9);
g.lineTo(0.17, 0);
g.fill();
g.fillStyle = "rgba(24,24,30,0.4)";
g.beginPath();
g.moveTo(0.03, 0);
g.lineTo(0.0, -9);
g.lineTo(0.05, -9);
g.lineTo(0.17, 0);
g.fill();
g.fillStyle = "rgba(30,30,34,0.85)";
for (let i = 0; i < 24; i++) {
  const y = -e.rnd() * 8.5;
  const tw = 0.16 - (-y / 9) * 0.1;
  g.fillRect(-tw + e.rnd() * tw, y, 0.05 + e.rnd() * 0.12, 0.04 + e.rnd() * 0.05);
}
g.strokeStyle = "#3a3530";
g.lineCap = "round";
const tips = [];
function br(x, y, a, l, w, dep) {
  const sw = (Math.sin(t * 0.6 + x * 1.3) * 0.02 + Math.sin(t * 1.37 + y) * 0.01) * (5 - dep);
  const x2 = x + Math.cos(a + sw) * l,
    y2 = y + Math.sin(a + sw) * l;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x2, y2);
  g.stroke();
  if (dep <= 1) {
    tips.push([x2, y2]);
    return;
  }
  br(x2, y2, a - 0.4 + e.rnd() * 0.2 + 0.12, l * 0.72, w * 0.65, dep - 1);
  br(x2, y2, a + 0.25 + e.rnd() * 0.2 + 0.12, l * 0.7, w * 0.65, dep - 1);
}
for (let i = 0; i < 8; i++) {
  const side = i % 2 ? 1 : -1;
  br(0, -3.4 - i * 0.72, -Math.PI / 2 + side * (0.55 + e.rnd() * 0.5), 1.5 - i * 0.1, 0.07, 5);
}
br(0, -9, -Math.PI / 2, 0.8, 0.05, 4);
for (const p of tips) {
  for (let j = 0; j < 3; j++) {
    if (e.rnd() < 0.45) {
      g.fillStyle = e.rnd() < 0.5 ? "rgba(196,158,70,0.7)" : "rgba(160,120,55,0.65)";
      g.save();
      g.translate(p[0] + (e.rnd() - 0.5) * 0.3, p[1] + 0.05 + e.rnd() * 0.3);
      g.rotate(e.rnd() * 3);
      g.beginPath();
      g.ellipse(0, 0, 0.06, 0.035, 0, 0, 7);
      g.fill();
      g.restore();
    }
  }
}
for (let k = 0; k < 6; k++) {
  const ph = (t * 0.045 + k / 6) % 1;
  const x = -2 + k * 0.7 + Math.sin(t * 0.8 + k * 2) * 0.4;
  const y = -7 + ph * 7;
  g.globalAlpha = Math.min(1, (1 - ph) * 4);
  g.fillStyle = "rgba(196,158,70,0.85)";
  g.save();
  g.translate(x, y);
  g.rotate(t * 1.3 + k);
  g.beginPath();
  g.ellipse(0, 0, 0.05, 0.03, 0, 0, 7);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
