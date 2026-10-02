const h = (e.state && e.state.headlights) || 0;
if (h < 0.01) return;
for (const x of [-0.8, 0.8]) {
  e.light(x, -0.8, 7, "#e8e2c8", h);
  g.fillStyle = "rgba(240,235,210," + h + ")";
  g.beginPath();
  g.arc(x, -0.8, 0.2, 0, 7);
  g.fill();
}
