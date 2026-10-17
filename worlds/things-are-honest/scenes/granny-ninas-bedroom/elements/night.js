const A = e.aspect;
const gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#05060f");
gr.addColorStop(0.4, "#0d1428");
gr.addColorStop(0.75, "#1a2440");
gr.addColorStop(1, "#0a0d18");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, 1.7);
const mx = A * 0.2,
  my = 0.37;
const m = g.createRadialGradient(mx, my, 0, mx, my, 0.16);
m.addColorStop(0, "rgba(230,235,215,0.5)");
m.addColorStop(0.15, "rgba(200,210,230,0.18)");
m.addColorStop(1, "rgba(160,180,220,0)");
g.fillStyle = m;
g.fillRect(mx - 0.2, my - 0.2, 0.4, 0.4);
g.fillStyle = "#efe9d0";
g.beginPath();
g.arc(mx, my, 0.022, 0, 7);
g.fill();
for (let i = 0; i < 90; i++) {
  g.fillStyle = `rgba(255,255,255,${0.2 + e.rnd() * 0.5})`;
  g.fillRect(e.rnd() * A * 0.45, e.rnd() * 0.55, 0.0012, 0.0012);
}
g.strokeStyle = "#07070d";
g.lineCap = "round";
const branch = (x, y, a, l, w) => {
  if (w < 0.0012) return;
  const x2 = x + Math.cos(a) * l,
    y2 = y + Math.sin(a) * l;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo((x + x2) / 2 + (e.rnd() - 0.5) * l * 0.2, (y + y2) / 2, x2, y2);
  g.stroke();
  branch(x2, y2, a - 0.3 - e.rnd() * 0.3, l * 0.72, w * 0.66);
  branch(x2, y2, a + 0.25 + e.rnd() * 0.3, l * 0.65, w * 0.62);
};
branch(A * 0.08, 0.62, -0.75, 0.13, 0.012);
