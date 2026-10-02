const v = e.state.echo,
  t = e.t;
if (v < 0.01) return;
const H = 0.85,
  top = -H - 1.3 - 0.7 * v + 0.03 * Math.sin(t * 0.6);
g.save();
g.globalCompositeOperation = "lighter";
const w1 = 0.04 * Math.sin(t * 0.8),
  w2 = 0.04 * Math.sin(t * 1.13 + 1);
let gr = g.createLinearGradient(0, top, 0, -H);
gr.addColorStop(0, "rgba(185,225,255," + 0.5 * v + ")");
gr.addColorStop(0.55, "rgba(150,205,255," + 0.28 * v + ")");
gr.addColorStop(1, "rgba(120,190,255,0.02)");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-0.45, -H);
g.bezierCurveTo(-0.3 + w1, -H - 0.4, -0.27 + w1, top + 0.8, -0.24, top + 0.44);
g.quadraticCurveTo(-0.2, top + 0.33, -0.07, top + 0.3);
g.lineTo(0.07, top + 0.3);
g.quadraticCurveTo(0.2, top + 0.33, 0.24, top + 0.44);
g.bezierCurveTo(0.27 + w2, top + 0.8, 0.3 + w2, -H - 0.4, 0.45, -H);
g.closePath();
g.fill();
g.fillStyle = "rgba(200,230,255," + 0.45 * v + ")";
g.beginPath();
g.ellipse(0, top + 0.16, 0.1, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "rgba(170,215,255," + 0.3 * v + ")";
g.beginPath();
g.moveTo(-0.15, top + 0.36);
g.quadraticCurveTo(-0.17, top - 0.02, 0, top - 0.03);
g.quadraticCurveTo(0.17, top - 0.02, 0.15, top + 0.36);
g.quadraticCurveTo(0, top + 0.2, -0.15, top + 0.36);
g.fill();
let hd = g.createRadialGradient(0, top + 0.16, 0, 0, top + 0.16, 0.45);
hd.addColorStop(0, "rgba(210,235,255," + 0.3 * v + ")");
hd.addColorStop(1, "rgba(210,235,255,0)");
g.fillStyle = hd;
g.beginPath();
g.arc(0, top + 0.16, 0.45, 0, Math.PI * 2);
g.fill();
for (let i = 0; i < 4; i++) {
  const ph = t * 0.3 + i * 1.4;
  g.strokeStyle = "rgba(170,220,255," + 0.14 * v + ")";
  g.lineWidth = 0.015;
  g.beginPath();
  g.moveTo(-0.25 + i * 0.17, -H);
  g.bezierCurveTo(
    -0.25 + i * 0.17 + 0.12 * Math.sin(ph),
    -H - 0.6,
    -0.15 + i * 0.1 + 0.12 * Math.sin(ph * 1.3),
    top + 0.9,
    (i - 1.5) * 0.1,
    top + 0.5,
  );
  g.stroke();
}
g.restore();
e.light(0, top + 0.3, 1.6, "#a8dcff", 0.55 * v);
e.at(0, top);
