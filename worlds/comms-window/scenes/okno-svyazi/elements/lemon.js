const t = e.t;
g.fillStyle = "rgba(120,160,175,0.12)";
g.fillRect(-0.15, -0.32, 0.3, 0.32);
g.fillStyle = "rgba(90,140,150,0.22)";
g.fillRect(-0.15, -0.2, 0.3, 0.2);
g.strokeStyle = "rgba(220,210,180,0.3)";
g.lineWidth = 0.005;
for (let i = 0; i < 9; i++) {
  const x = -0.1 + e.rnd() * 0.2;
  g.beginPath();
  g.moveTo(x * 0.4, -0.3);
  g.quadraticCurveTo(x, -0.15, x + Math.sin(t * 0.4 + i) * 0.01, -0.02);
  g.stroke();
}
g.strokeStyle = "rgba(160,190,200,0.35)";
g.lineWidth = 0.008;
g.strokeRect(-0.15, -0.32, 0.3, 0.32);
g.fillStyle = "#161a22";
g.fillRect(-0.17, -0.34, 0.34, 0.03);
g.strokeStyle = "#2a2219";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0, -0.33);
g.quadraticCurveTo(-0.03, -0.5, 0.02, -0.66);
g.stroke();
const sw = Math.sin(t * 0.9) * 0.03 + Math.sin(t * 0.37) * 0.02;
for (let i = 0; i < 40; i++) {
  const a = e.rnd() * 6.28,
    d = Math.sqrt(e.rnd());
  const lx = 0.02 + Math.cos(a) * 0.24 * d + sw * (1 + d),
    ly = -0.78 + Math.sin(a) * 0.17 * d;
  const rot = a + Math.sin(t * 1.3 + i) * 0.15;
  const lit = e.rnd();
  g.fillStyle = lit < 0.3 ? "#3b5532" : lit < 0.7 ? "#26391f" : "#1a2817";
  g.save();
  g.translate(lx, ly);
  g.rotate(rot);
  g.beginPath();
  g.ellipse(0, 0, 0.045, 0.02, 0, 0, 7);
  g.fill();
  g.restore();
}
const lx = 0.1 + sw * 1.2,
  ly = -0.63;
g.strokeStyle = "#26391f";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(lx - 0.02, ly - 0.08);
g.lineTo(lx, ly - 0.04);
g.stroke();
let lg = g.createRadialGradient(lx - 0.012, ly - 0.015, 0.003, lx, ly, 0.045);
lg.addColorStop(0, "#ead27a");
lg.addColorStop(0.6, "#c9a43e");
lg.addColorStop(1, "#6e5520");
g.fillStyle = lg;
g.beginPath();
g.ellipse(lx, ly, 0.032, 0.04, 0.2, 0, 7);
g.fill();
e.at(0.02, -0.95);
