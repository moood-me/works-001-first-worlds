const A = e.aspect,
  hz = 0.45;
const gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, "#6aaee4");
gr.addColorStop(0.6, "#9fcbec");
gr.addColorStop(1, "#f7e4c4");
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
const sx = A * 0.2,
  sy = hz - 0.2;
const s = g.createRadialGradient(sx, sy, 0.005, sx, sy, 0.3);
s.addColorStop(0, "rgba(255,250,220,0.6)");
s.addColorStop(1, "rgba(255,250,220,0)");
g.fillStyle = s;
g.fillRect(sx - 0.3, sy - 0.3, 0.6, 0.6);
g.fillStyle = "#fffcea";
g.beginPath();
g.arc(sx, sy, 0.025, 0, 7);
g.fill();
g.fillStyle = "rgba(255,255,255,0.75)";
for (let i = 0; i < 6; i++) {
  const cx = e.rnd() * A,
    cy = -0.2 + e.rnd() * 0.45,
    k = 0.03 + e.rnd() * 0.03;
  for (let j = 0; j < 5; j++) {
    g.beginPath();
    g.ellipse(cx + j * k * 0.8, cy - Math.sin((j / 4) * Math.PI) * k * 0.6, k, k * 0.62, 0, 0, 7);
    g.fill();
  }
}
g.fillStyle = "#7ea88a";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
