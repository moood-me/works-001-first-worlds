const R = e.state.rain,
  t = e.t;
if (R <= 0.01) return;
g.strokeStyle = "rgba(175,185,200,0.15)";
g.lineWidth = 0.01;
g.beginPath();
const n = Math.floor(260 * R);
for (let i = 0; i < n; i++) {
  const x0 = -9 + e.rnd() * 18;
  const sp = 8 + e.rnd() * 3;
  const o = e.rnd() * 8.3;
  const y = ((o + t * sp) % 8.3) - 8;
  const x = x0 + (y + 8) * 0.05;
  g.moveTo(x, y);
  g.lineTo(x + 0.02, y + 0.42);
}
g.stroke();
