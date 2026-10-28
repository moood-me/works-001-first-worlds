const gr = g.createRadialGradient(0.2, -2.2, 0.1, 0.2, -1.4, 3.4);
gr.addColorStop(0, "#d9a45e");
gr.addColorStop(0.45, "#8a5a2c");
gr.addColorStop(1, "#2a1a0c");
g.fillStyle = gr;
g.fillRect(-3.2, -3.2, 6.4, 3.3);
g.fillStyle = "#3a2412";
g.fillRect(-3.2, -0.1, 6.4, 0.2);
// a shelf with jars, a calendar
g.fillStyle = "#4a2e16";
g.fillRect(-1.6, -1.9, 1.2, 0.05);
for (let i = 0; i < 4; i++) {
  g.fillStyle = ["#6a4a2a", "#8a6a3a", "#5a3a2a", "#7a5a30"][i];
  g.fillRect(-1.55 + i * 0.3, -2.12, 0.18, 0.22);
}
g.fillStyle = "#e6d6b4";
g.fillRect(0.9, -2.0, 0.34, 0.45);
g.fillStyle = "#8a1a10";
g.fillRect(0.9, -2.0, 0.34, 0.08);
// the hanging lamp over the table
g.strokeStyle = "#1a0e06";
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0.2, -3.2);
g.lineTo(0.2, -2.35);
g.stroke();
g.fillStyle = "#6a2a14";
g.beginPath();
g.moveTo(-0.05, -2.2);
g.lineTo(0.45, -2.2);
g.lineTo(0.3, -2.38);
g.lineTo(0.1, -2.38);
g.fill();
e.light(0.2, -2.15, 1.3, "#ffcf8a", 0.7);
// the table
g.fillStyle = "#3a200e";
g.fillRect(-0.7, -0.78, 1.8, 0.07);
g.fillRect(-0.62, -0.72, 0.06, 0.72);
g.fillRect(1.0, -0.72, 0.06, 0.72);
g.fillStyle = "#e8dcc0";
g.fillRect(-0.7, -0.8, 1.8, 0.03);
g.fillStyle = "#c9b48a";
g.beginPath();
g.ellipse(0.55, -0.86, 0.12, 0.05, 0, 0, 7);
g.fill();
