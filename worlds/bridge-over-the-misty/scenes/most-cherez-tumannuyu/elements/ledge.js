const t = e.t,
  L = Math.max(0, Math.min(1, e.state.light));
const Y = (x) => 0.25 - 0.18 * e.rnd() + 0.14 * Math.sin(x * 0.7) + 0.1 * Math.sin(x * 1.9 + 1);
g.fillStyle = "#13111c";
g.beginPath();
g.moveTo(-9, 4);
const pts = [];
for (let x = -9; x <= 9; x += 0.4) {
  const y = Y(x);
  pts.push([x, y]);
  g.lineTo(x, y);
}
g.lineTo(9, 4);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,190,150," + (0.08 + 0.12 * L) + ")";
g.lineWidth = e.px * 1.2;
g.beginPath();
pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
g.stroke();
g.strokeStyle = "#17141f";
g.lineWidth = 0.012;
g.lineCap = "round";
for (let i = 0; i < 34; i++) {
  const c = pts[Math.floor(e.rnd() * pts.length)],
    n = 4 + Math.floor(e.rnd() * 5),
    ph = e.rnd() * 6;
  for (let j = 0; j < n; j++) {
    const x = c[0] + (e.rnd() - 0.5) * 0.15,
      h = 0.06 + e.rnd() * 0.16,
      lean = (e.rnd() - 0.5) * 0.08;
    const w = ((Math.sin(t * 0.8 + ph) * 0.6 + Math.sin(t * 0.37 + ph * 2) * 0.4) * 0.025 * h) / 0.2;
    g.beginPath();
    g.moveTo(x, c[1] + 0.02);
    g.quadraticCurveTo(x + lean * 0.5, c[1] - h * 0.5, x + lean + w, c[1] - h);
    g.stroke();
  }
}
