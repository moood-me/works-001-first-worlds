const r = e.state.rain;
if (r <= 0.01) return;
const t = e.t;
g.strokeStyle = "rgba(160,180,175,0.16)";
g.lineWidth = 0.008;
g.beginPath();
const n = (180 * r) | 0;
for (let i = 0; i < n; i++) {
  const x = -9 + e.rnd() * 18;
  const sp = 6 + e.rnd() * 3;
  const y = -6 + ((e.rnd() * 6.5 + t * sp) % 6.5);
  g.moveTo(x, y);
  g.lineTo(x - 0.03, y + 0.25);
}
g.stroke();
