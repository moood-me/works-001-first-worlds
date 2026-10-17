const d = e.state.dusk || 0;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
g.fillStyle = mx([98, 96, 104], [34, 34, 48], d);
g.fillRect(-150, -1.8, 300, 3.6);
for (let i = 0; i < 70; i++) {
  const x = -150 + e.rnd() * 300,
    y = -1.8 + e.rnd() * 3.6,
    r = 0.4 + e.rnd() * 1.6;
  g.fillStyle = "rgba(60,56,64,0.25)";
  g.beginPath();
  g.ellipse(x, y, r, r * 0.4, 0, 0, 7);
  g.fill();
}
g.fillStyle = mx([226, 220, 206], [110, 110, 124], d);
g.globalAlpha = 0.6;
g.fillRect(-150, -1.68, 300, 0.1);
g.fillRect(-150, 1.58, 300, 0.1);
g.globalAlpha = 0.5;
for (let x = -150; x < 150; x += 6) g.fillRect(x, -0.05, 3, 0.1);
g.globalAlpha = 1;
g.strokeStyle = "rgba(40,36,44,0.4)";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-6, -1.8);
g.lineTo(-5.4, -1.1);
g.lineTo(-5.8, -0.4);
g.moveTo(3, 1.8);
g.lineTo(3.5, 1.0);
g.stroke();
