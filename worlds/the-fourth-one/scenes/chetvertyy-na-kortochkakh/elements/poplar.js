g.strokeStyle = "#111115";
g.lineCap = "round";
function br(x, y, a, l, w, d) {
  if (d > 6) return;
  const x2 = x + Math.sin(a) * l,
    y2 = y - Math.cos(a) * l;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x2, y2);
  g.stroke();
  for (let i = 0; i < 2; i++)
    br(x2, y2, a * 0.6 + (e.rnd() - 0.5) * 0.6 + (i ? 0.18 : -0.18), l * (0.72 + e.rnd() * 0.12), w * 0.62, d + 1);
}
br(0, 0.2, 0, 4.2, 0.55, 0);
