g.lineCap = "round";
for (let i = 0; i < 26; i++) {
  const x = -1.4 + e.rnd() * 2.6;
  const h = 0.7 + e.rnd() * 0.9;
  const b = (e.rnd() - 0.3) * 0.35 + Math.sin(e.t * 0.5 + i * 0.7) * 0.04 + Math.sin(e.t * 0.23 + i) * 0.03;
  g.strokeStyle = i % 3 ? "#0e1216" : "#151b20";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(x, 0.05);
  g.quadraticCurveTo(x + b * 0.3, -h * 0.6, x + b, -h);
  g.stroke();
  if (i % 5 == 0) {
    g.fillStyle = "#0f1214";
    g.beginPath();
    g.ellipse(x + b * 0.95, -h * 0.92, 0.025, 0.09, b * 0.5, 0, 7);
    g.fill();
  }
}
