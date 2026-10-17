const t = e.t;
g.fillStyle = "#25262c";
g.fillRect(-25, -7.25, 50, 14.5);
for (let i = 0; i < 30; i++) {
  const x = -25 + e.rnd() * 50,
    y = -7 + e.rnd() * 14,
    r = 0.6 + e.rnd() * 2.2;
  let c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(50,50,58,0.5)");
  c.addColorStop(1, "rgba(50,50,58,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.strokeStyle = "rgba(12,12,16,0.7)";
g.lineWidth = 0.03;
for (let i = 0; i < 14; i++) {
  let x = -22 + e.rnd() * 44,
    y = -7 + e.rnd() * 14;
  g.beginPath();
  g.moveTo(x, y);
  for (let k = 0; k < 5; k++) {
    x += (e.rnd() - 0.5) * 1.6;
    y += (e.rnd() - 0.5) * 1.2;
    g.lineTo(x, y);
  }
  g.stroke();
}
let lp = g.createRadialGradient(-9.6, -6.6, 0, -9.6, -6.6, 4);
lp.addColorStop(0, "rgba(255,190,115,0.3)");
lp.addColorStop(1, "rgba(255,190,115,0)");
g.fillStyle = lp;
g.fillRect(-14, -7.25, 9, 6);
g.save();
g.translate(-6, -4.2);
g.scale(1, 0.55);
g.fillStyle = "rgba(58,60,78,0.85)";
g.beginPath();
g.arc(0, 0, 1.6, 0, 7);
g.fill();
g.restore();
for (let k = 0; k < 8; k++) {
  const yy = -4.7 + k * 0.12;
  const a = 0.25 * (1 - k / 8) * (0.6 + 0.4 * Math.sin(k * 1.9 + t * 1.1));
  g.fillStyle = "rgba(255,190,115," + a + ")";
  g.fillRect(-7.0 + Math.sin(t * 0.7 + k) * 0.05, yy, 0.5, 0.05);
}
const lc = ["rgba(170,130,60,0.7)", "rgba(130,90,50,0.7)", "rgba(180,150,80,0.6)"];
for (let i = 0; i < 90; i++) {
  const x = -24 + e.rnd() * 48,
    y = -7 + e.rnd() * 14;
  g.fillStyle = lc[Math.floor(e.rnd() * 3)];
  g.save();
  g.translate(x, y);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.09, 0.05, 0, 0, 7);
  g.fill();
  g.restore();
}
g.fillStyle = "rgba(16,16,18,0.9)";
for (let i = 0; i < 260; i++) {
  const b = e.rnd() < 0.7;
  const cx = b ? -2.4 : 0.9,
    cy = b ? 3.5 : 4.0;
  const a = e.rnd() * 6.28,
    r = Math.pow(e.rnd(), 0.7) * (b ? 1.0 : 0.5);
  g.save();
  g.translate(cx + Math.cos(a) * r * 1.3, cy + Math.sin(a) * r * 0.7);
  g.rotate(e.rnd() * 6);
  g.fillRect(-0.025, -0.012, 0.05, 0.024);
  g.restore();
}
g.fillStyle = "rgba(210,200,170,0.75)";
for (let i = 0; i < 6; i++) g.fillRect(0.4 + e.rnd() * 1.0, 3.6 + e.rnd() * 0.5, 0.07, 0.022);
