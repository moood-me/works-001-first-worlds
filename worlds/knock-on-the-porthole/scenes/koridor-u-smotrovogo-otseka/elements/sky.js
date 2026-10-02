const A = e.aspect,
  t = e.t;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#03040a");
gr.addColorStop(0.5, "#08060d");
gr.addColorStop(1, "#040408");
g.fillStyle = gr;
g.fillRect(-0.4, -0.4, A + 0.8, 1.7);
for (let i = 0; i < 12; i++) {
  const x = A * e.rnd(),
    y = 0.1 + e.rnd() * 0.8,
    r = 0.12 + e.rnd() * 0.25,
    w = e.rnd() < 0.5;
  const c = g.createRadialGradient(x, y, 0, x, y, r);
  c.addColorStop(0, w ? "rgba(90,30,55,0.10)" : "rgba(35,45,90,0.09)");
  c.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = c;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
for (let i = 0; i < 700; i++) {
  const x = -0.4 + e.rnd() * (A + 0.8),
    y = -0.35 + e.rnd() * 1.6,
    b = e.rnd(),
    f = 0.3 + e.rnd(),
    tw = 0.75 + 0.25 * Math.sin(t * f + i);
  g.fillStyle = (b < 0.2 ? "rgba(255,200,180," : "rgba(210,220,255,") + (0.12 + 0.6 * b * b) * tw + ")";
  const s = b > 0.97 ? 0.0024 : 0.0008 + b * 0.0008;
  g.fillRect(x, y, s, s);
}
const sx = A * 0.406,
  sy = 0.56,
  p = 1 + 0.04 * Math.sin(t * 0.21) + 0.02 * Math.sin(t * 0.53);
let c = g.createRadialGradient(sx, sy, 0, sx, sy, 0.6 * p);
c.addColorStop(0, "rgba(200,60,40,0.32)");
c.addColorStop(0.15, "rgba(140,30,30,0.16)");
c.addColorStop(1, "rgba(60,10,20,0)");
g.fillStyle = c;
g.fillRect(sx - 0.65, sy - 0.65, 1.3, 1.3);
c = g.createRadialGradient(sx - 0.018, sy - 0.018, 0, sx, sy, 0.075);
c.addColorStop(0, "#c75a42");
c.addColorStop(0.75, "#7e2320");
c.addColorStop(1, "#46101a");
g.fillStyle = c;
g.beginPath();
g.arc(sx, sy, 0.075, 0, 7);
g.fill();
g.save();
g.beginPath();
g.arc(sx, sy, 0.075, 0, 7);
g.clip();
for (let i = 0; i < 60; i++) {
  const x = sx + (e.rnd() - 0.5) * 0.15,
    y = sy + (e.rnd() - 0.5) * 0.15,
    r = 0.005 + e.rnd() * 0.014;
  const q = g.createRadialGradient(x, y, 0, x, y, r);
  q.addColorStop(0, e.rnd() < 0.5 ? "rgba(40,6,10,0.18)" : "rgba(230,120,80,0.12)");
  q.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = q;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
const sh = g.createRadialGradient(sx - 0.025, sy - 0.025, 0.025, sx, sy, 0.08);
sh.addColorStop(0, "rgba(0,0,0,0)");
sh.addColorStop(1, "rgba(20,4,8,0.55)");
g.fillStyle = sh;
g.fillRect(sx - 0.09, sy - 0.09, 0.18, 0.18);
g.restore();
