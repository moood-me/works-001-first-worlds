const w = g.createLinearGradient(0, -0.85, 0, 0);
w.addColorStop(0, "#5a331c");
w.addColorStop(1, "#2e1a0c");
g.fillStyle = w;
g.fillRect(-0.7, -0.82, 1.4, 0.76);
g.fillStyle = "#6e4226";
g.fillRect(-0.74, -0.86, 1.48, 0.05);
g.fillStyle = "rgba(255,207,138,0.35)";
g.fillRect(-0.74, -0.86, 1.48, 0.012);
g.strokeStyle = "#1a0f08";
g.lineWidth = 0.01;
g.strokeRect(-0.64, -0.76, 1.28, 0.3);
g.strokeRect(-0.64, -0.42, 1.28, 0.3);
g.fillStyle = "#c9a15a";
for (const [x, y] of [
  [-0.25, -0.61],
  [0.25, -0.61],
  [-0.25, -0.27],
  [0.25, -0.27],
]) {
  g.beginPath();
  g.arc(x, y, 0.018, 0, 7);
  g.fill();
}
g.fillStyle = "#2a170b";
g.fillRect(-0.68, -0.06, 0.05, 0.06);
g.fillRect(0.63, -0.06, 0.05, 0.06);
// the lamp: brass stem, a fabric shade glowing from within
g.fillStyle = "#3a2410";
g.beginPath();
g.ellipse(-0.42, -0.87, 0.07, 0.015, 0, 0, 7);
g.fill();
g.fillStyle = "#c9a15a";
g.fillRect(-0.43, -1.1, 0.02, 0.23);
const s = g.createLinearGradient(0, -1.3, 0, -1.1);
s.addColorStop(0, "#c98a4a");
s.addColorStop(1, "#ffd89a");
g.fillStyle = s;
g.beginPath();
g.moveTo(-0.58, -1.1);
g.lineTo(-0.52, -1.3);
g.lineTo(-0.32, -1.3);
g.lineTo(-0.26, -1.1);
g.closePath();
g.fill();
g.fillStyle = "#fff4d0";
g.beginPath();
g.ellipse(-0.42, -1.1, 0.16, 0.018, 0, 0, 7);
g.fill();
e.light(-0.42, -1.12, 1.6, "#ffcf8a", 0.75);
