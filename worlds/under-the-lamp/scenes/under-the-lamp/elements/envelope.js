if (e.state.envelope !== "on_ground") return;
g.fillStyle = "rgba(15,20,24,0.5)";
g.beginPath();
g.ellipse(0, 0, 0.26, 0.05, 0, 0, 7);
g.fill();
g.fillStyle = "#b8b09c";
g.beginPath();
g.moveTo(-0.2, -0.005);
g.lineTo(0.12, -0.035);
g.lineTo(0.22, 0);
g.lineTo(-0.1, 0.02);
g.closePath();
g.fill();
g.strokeStyle = "rgba(90,85,75,0.7)";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(-0.2, -0.005);
g.lineTo(0.02, 0.0);
g.lineTo(0.12, -0.035);
g.stroke();
g.fillStyle = "rgba(60,70,78,0.35)";
for (let i = 0; i < 6; i++) {
  g.beginPath();
  g.arc(-0.15 + e.rnd() * 0.3, -0.02 + e.rnd() * 0.03, 0.008, 0, 7);
  g.fill();
}
