const r = e.state.rain ?? 0.4;
if (r < 0.02) return;
const t = e.t,
  n = Math.round(240 * r);
g.lineWidth = 0.025;
g.lineCap = "round";
for (let i = 0; i < n; i++) {
  const v = 0.9 + e.rnd() * 0.5,
    x0 = e.rnd() * 44 - 22,
    ph = e.rnd(),
    l = 0.5 + e.rnd() * 0.6,
    al = 0.05 + e.rnd() * 0.08;
  const y = ((ph + t * v * 0.55) % 1) * 20 - 16,
    x = ((x0 + (y + 16) * 0.18 + 66) % 44) - 22;
  g.strokeStyle = `rgba(175,190,215,${al})`;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x - l * 0.18, y - l);
  g.stroke();
}
