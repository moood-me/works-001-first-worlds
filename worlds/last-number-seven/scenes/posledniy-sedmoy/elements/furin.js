const s = e.state,
  d = s.dusk || 0,
  t = e.t,
  w = s.wind ?? 0.4;
const a = w * (0.35 * Math.sin(t * 1.7) + 0.2 * Math.sin(t * 2.9 + 1) + 0.1 * Math.sin(t * 5.3));
g.strokeStyle = "rgba(40,40,50,0.8)";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(0, 0);
g.lineTo(0, 0.1);
g.stroke();
g.save();
g.translate(0, 0.1);
g.rotate(a * 0.25);
g.fillStyle = "rgba(220,236,240,0.55)";
g.beginPath();
g.arc(0, 0.07, 0.065, Math.PI, 0);
g.lineTo(0.065, 0.09);
g.lineTo(-0.065, 0.09);
g.fill();
g.fillStyle = "rgba(200,50,50,0.85)";
g.beginPath();
g.ellipse(0.015, 0.05, 0.018, 0.009, 0.3, 0, 7);
g.fill();
g.fillStyle = "rgba(255,255,255,0.7)";
g.fillRect(-0.04, 0.02, 0.012, 0.04);
g.strokeStyle = "rgba(40,40,50,0.7)";
g.beginPath();
g.moveTo(0, 0.07);
g.lineTo(0, 0.2);
g.stroke();
g.translate(0, 0.2);
g.rotate(a);
g.fillStyle = d < 0.6 ? "rgba(236,206,120,0.95)" : "rgba(170,150,110,0.95)";
g.fillRect(-0.03, 0, 0.06, 0.3);
g.restore();
if (Math.abs(Math.sin(t * 1.7)) > 0.97 && w > 0.2) e.light(0, 0.17, 0.25, "#ffffff", 0.25);
