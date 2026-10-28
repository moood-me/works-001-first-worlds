const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
g.fillStyle = mx([168, 160, 150], [60, 60, 74], d);
g.fillRect(-3.5, -0.9, 7, 1.8);
g.strokeStyle = "rgba(60,50,50,0.25)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-1.2, -0.9);
g.lineTo(-1.1, 0.9);
g.moveTo(1.4, -0.9);
g.lineTo(1.3, 0.9);
g.moveTo(-3.5, 0.3);
g.lineTo(-2.4, 0.1);
g.lineTo(-1.6, 0.5);
g.stroke();
for (let i = 0; i < 20; i++) {
  g.fillStyle = "rgba(80,110,60,0.35)";
  g.fillRect(-3.5 + e.rnd() * 7, 0.85 - e.rnd() * 0.1, 0.1, 0.06);
}
