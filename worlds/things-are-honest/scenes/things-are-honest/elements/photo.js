g.strokeStyle = "#1a0f08";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.24, -0.5);
g.lineTo(0, -0.68);
g.lineTo(0.24, -0.5);
g.stroke();
g.fillStyle = "#c49a4c";
g.beginPath();
g.arc(0, -0.68, 0.012, 0, 7);
g.fill();
const w = g.createLinearGradient(-0.3, -0.5, 0.3, 0);
w.addColorStop(0, "#6e4226");
w.addColorStop(0.5, "#8a5a34");
w.addColorStop(1, "#4a2a16");
g.fillStyle = w;
g.fillRect(-0.31, -0.5, 0.62, 0.5);
g.fillStyle = "#cdbb95";
g.fillRect(-0.27, -0.46, 0.54, 0.42);
const s = g.createLinearGradient(0, -0.43, 0, -0.07);
s.addColorStop(0, "#b89a70");
s.addColorStop(1, "#8a6a48");
g.fillStyle = s;
g.fillRect(-0.24, -0.43, 0.48, 0.36);
// nine in a row; the sixth is a hole with the wallpaper showing through
for (let i = 0; i < 9; i++) {
  const x = -0.2 + i * 0.05,
    tall = i % 2 ? 0.2 : 0.23,
    y = -0.1;
  if (i === 5) {
    g.fillStyle = "#3b2a1f";
    g.beginPath();
    g.ellipse(x, y - tall + 0.02, 0.016, 0.019, 0, 0, 7);
    g.fill();
    g.beginPath();
    g.moveTo(x - 0.022, y);
    g.lineTo(x - 0.024, y - tall + 0.05);
    g.quadraticCurveTo(x, y - tall + 0.03, x + 0.024, y - tall + 0.05);
    g.lineTo(x + 0.034, y - tall + 0.08);
    g.lineTo(x + 0.022, y);
    g.fill();
    g.strokeStyle = "rgba(240,230,200,0.5)";
    g.lineWidth = 0.002;
    g.stroke();
    continue;
  }
  g.fillStyle = i === 4 ? "#e6dcc4" : "#3a2a1c";
  g.beginPath();
  g.ellipse(x, y - tall + 0.02, 0.015, 0.018, 0, 0, 7);
  g.fill();
  g.fillRect(x - 0.02, y - tall + 0.045, 0.04, tall - 0.045);
}
const v = g.createRadialGradient(0, -0.25, 0.05, 0, -0.25, 0.3);
v.addColorStop(0, "rgba(0,0,0,0)");
v.addColorStop(1, "rgba(40,20,5,0.5)");
g.fillStyle = v;
g.fillRect(-0.24, -0.43, 0.48, 0.36);
g.fillStyle = "rgba(255,230,190,0.08)";
g.beginPath();
g.moveTo(-0.24, -0.43);
g.lineTo(0.02, -0.43);
g.lineTo(-0.14, -0.07);
g.lineTo(-0.24, -0.07);
g.fill();
