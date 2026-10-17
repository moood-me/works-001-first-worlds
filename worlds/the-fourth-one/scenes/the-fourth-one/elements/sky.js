const w = e.aspect,
  t = e.t;
let gr = g.createLinearGradient(0, -0.35, 0, 1.25);
gr.addColorStop(0, "#060609");
gr.addColorStop(0.42, "#141218");
gr.addColorStop(0.6, "#3a2a24");
gr.addColorStop(1, "#0c0b0d");
g.fillStyle = gr;
g.fillRect(-0.3, -0.35, w + 0.6, 1.6);
for (let i = 0; i < 12; i++) {
  const sp = 0.002 + e.rnd() * 0.003;
  const x = ((e.rnd() * (w + 0.8) + t * sp) % (w + 0.8)) - 0.4;
  const y = -0.15 + e.rnd() * 0.5;
  const s = 0.15 + e.rnd() * 0.25;
  g.save();
  g.translate(x, y);
  g.scale(2.8, 0.45);
  const c = g.createRadialGradient(0, 0, 0, 0, 0, s);
  c.addColorStop(0, "rgba(80,60,55,0.22)");
  c.addColorStop(1, "rgba(80,60,55,0)");
  g.fillStyle = c;
  g.beginPath();
  g.arc(0, 0, s, 0, 7);
  g.fill();
  g.restore();
}
