const r = e.state.rain;
if (r <= 0) return;
const t = e.t;
g.lineCap = "round";
const n = Math.round(240 * r);
for (let i = 0; i < n; i++) {
  const x0 = -7 + e.rnd() * 14;
  const sp = 0.9 + e.rnd() * 0.5;
  const len = 0.22 + e.rnd() * 0.22;
  const off = e.rnd();
  const near = e.rnd();
  const yy = ((off + t * sp) % 1) * 6.2 - 5.8;
  g.strokeStyle = "rgba(165,185,196," + (0.04 + near * 0.1) + ")";
  g.lineWidth = 0.004 + near * 0.006;
  g.beginPath();
  g.moveTo(x0 + yy * 0.04, yy);
  g.lineTo(x0 + yy * 0.04 - len * 0.1, yy + len);
  g.stroke();
}
