const A = e.aspect,
  t = e.t;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#03040a");
gr.addColorStop(0.55, "#0b0e1e");
gr.addColorStop(1, "#05060c");
g.fillStyle = gr;
g.fillRect(-0.4, -0.4, A + 0.8, 1.7);
g.save();
g.translate(A * 0.55, 0.32);
g.rotate(-0.32);
for (let i = 0; i < 70; i++) {
  const x = (e.rnd() - 0.5) * 2.8,
    y = (e.rnd() - 0.5) * 0.2,
    r = 0.05 + e.rnd() * 0.13;
  const c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, "rgba(125,112,165,0.07)");
  c.addColorStop(1, "rgba(125,112,165,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
g.restore();
for (let i = 0; i < 520; i++) {
  const x = -0.4 + e.rnd() * (A + 0.8),
    y = -0.35 + e.rnd() * 1.6,
    big = e.rnd() < 0.06,
    s = big ? 0.0024 : 0.0007 + e.rnd() * 0.001,
    c = e.rnd(),
    a = 0.3 + e.rnd() * 0.6,
    f = e.rnd();
  const tw = big ? 0.7 + 0.3 * Math.sin(t * (0.4 + f) + i) : 1;
  g.fillStyle = (c < 0.15 ? "rgba(255,215,180," : c < 0.3 ? "rgba(180,200,255," : "rgba(235,238,255,") + a * tw + ")";
  g.fillRect(x, y, s, s);
}
const sx = A * 0.8,
  sy = 0.08;
let sg = g.createRadialGradient(sx, sy, 0, sx, sy, 0.32);
sg.addColorStop(0, "rgba(255,248,230,0.9)");
sg.addColorStop(0.05, "rgba(255,230,190,0.35)");
sg.addColorStop(0.3, "rgba(255,200,150,0.06)");
sg.addColorStop(1, "rgba(255,200,150,0)");
g.fillStyle = sg;
g.fillRect(sx - 0.35, sy - 0.35, 0.7, 0.7);
g.fillStyle = "#fffaf0";
g.beginPath();
g.arc(sx, sy, 0.011, 0, 7);
g.fill();
const hs = g.createLinearGradient(sx - 0.3, 0, sx + 0.3, 0);
hs.addColorStop(0, "rgba(255,240,220,0)");
hs.addColorStop(0.5, "rgba(255,240,220,0.35)");
hs.addColorStop(1, "rgba(255,240,220,0)");
g.fillStyle = hs;
g.fillRect(sx - 0.3, sy - 0.0015, 0.6, 0.003);
const px = A * 0.3,
  py = 0.2,
  R = 0.14;
const ring = (front) => {
  g.save();
  g.translate(px, py);
  g.rotate(-0.26);
  g.beginPath();
  if (front) {
    g.ellipse(0, 0, R * 2.15, R * 0.4, 0, 0, Math.PI);
    g.ellipse(0, 0, R * 1.4, R * 0.25, 0, Math.PI, 0, true);
  } else {
    g.ellipse(0, 0, R * 2.15, R * 0.4, 0, Math.PI, 2 * Math.PI);
    g.ellipse(0, 0, R * 1.4, R * 0.25, 0, 2 * Math.PI, Math.PI, true);
  }
  g.closePath();
  const rg = g.createLinearGradient(-R * 2.2, 0, R * 2.2, 0);
  rg.addColorStop(0, "rgba(90,80,80,0.25)");
  rg.addColorStop(0.7, "rgba(200,175,150,0.5)");
  rg.addColorStop(1, "rgba(225,200,170,0.6)");
  g.fillStyle = rg;
  g.fill();
  g.restore();
};
ring(false);
g.save();
g.beginPath();
g.arc(px, py, R, 0, 7);
g.clip();
const B = ["#5e4537", "#7d604b", "#9a7a59", "#715342", "#ab8a69", "#83644f", "#634a3c"];
for (let i = 0; i < 16; i++) {
  g.fillStyle = B[i % 7];
  const y = py - R + (i * R * 2) / 16;
  g.fillRect(px - R, y + Math.sin(i * 2.1 + t * 0.02) * 0.003, 2 * R, (R * 2) / 16 + 0.004);
}
g.fillStyle = "rgba(185,115,85,0.6)";
g.beginPath();
g.ellipse(px + R * 0.32, py + R * 0.38, R * 0.17, R * 0.07, 0, 0, 7);
g.fill();
const sh = g.createRadialGradient(px + R * 0.55, py - R * 0.25, R * 0.05, px + R * 0.25, py, R * 1.25);
sh.addColorStop(0, "rgba(255,240,220,0.18)");
sh.addColorStop(0.45, "rgba(0,0,0,0.05)");
sh.addColorStop(1, "rgba(3,4,10,0.95)");
g.fillStyle = sh;
g.fillRect(px - R, py - R, 2 * R, 2 * R);
g.restore();
ring(true);
for (let i = 0; i < 120; i++) {
  const x = -0.4 + e.rnd() * (A + 0.8),
    y = 0.47 + e.rnd() * 0.1 + Math.sin(x * 2.3) * 0.02,
    r = 0.0012 + Math.pow(e.rnd(), 3) * 0.006;
  g.fillStyle = "rgba(70,68,72,0.9)";
  g.beginPath();
  g.ellipse(x, y, r * 1.3, r, e.rnd() * 3, 0, 7);
  g.fill();
  g.fillStyle = "rgba(230,215,195,0.45)";
  g.beginPath();
  g.arc(x + r * 0.4, y - r * 0.2, r * 0.5, 0, 7);
  g.fill();
}
const db = g.createLinearGradient(0, 0.43, 0, 0.62);
db.addColorStop(0, "rgba(120,110,120,0)");
db.addColorStop(0.5, "rgba(120,110,120,0.07)");
db.addColorStop(1, "rgba(120,110,120,0)");
g.fillStyle = db;
g.fillRect(-0.4, 0.43, A + 0.8, 0.19);
