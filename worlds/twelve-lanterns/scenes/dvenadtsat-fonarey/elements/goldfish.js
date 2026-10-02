const L = e.state.lanterns ?? 12,
  stare = L <= 4;
e.at(0, -0.32);
g.strokeStyle = "rgba(200,190,200,0.6)";
g.lineWidth = 0.006;
g.beginPath();
g.moveTo(0, -0.5);
g.lineTo(0, -0.3);
g.stroke();
g.fillStyle = "#c03040";
g.fillRect(-0.012, -0.32, 0.024, 0.03);
const bag = () => {
  g.beginPath();
  g.moveTo(-0.01, -0.29);
  g.bezierCurveTo(-0.05, -0.24, -0.13, -0.16, -0.12, -0.08);
  g.quadraticCurveTo(-0.11, 0.02, 0, 0.02);
  g.quadraticCurveTo(0.11, 0.02, 0.12, -0.08);
  g.bezierCurveTo(0.13, -0.16, 0.05, -0.24, 0.01, -0.29);
  g.closePath();
};
g.save();
bag();
g.clip();
const wt = -0.17 + Math.sin(e.t * 1.4) * 0.004;
const wg = g.createLinearGradient(0, wt, 0, 0.02);
wg.addColorStop(0, "rgba(150,190,225,0.35)");
wg.addColorStop(1, "rgba(90,120,170,0.45)");
g.fillStyle = wg;
g.fillRect(-0.15, wt, 0.3, 0.2);
g.strokeStyle = "rgba(220,235,255,0.5)";
g.lineWidth = 0.004;
g.beginPath();
g.moveTo(-0.12, wt);
g.lineTo(0.12, wt);
g.stroke();
if (stare) {
  const fx = 0,
    fy = -0.07;
  g.fillStyle = "#e8703a";
  g.beginPath();
  g.ellipse(fx, fy, 0.026, 0.028, 0, 0, 7);
  g.fill();
  g.fillStyle = "#f2ece0";
  for (const sd of [-1, 1]) {
    g.beginPath();
    g.arc(fx + sd * 0.016, fy - 0.006, 0.009, 0, 7);
    g.fill();
  }
  g.fillStyle = "#0a0608";
  for (const sd of [-1, 1]) {
    g.beginPath();
    g.arc(fx + sd * 0.016, fy - 0.006, 0.0045, 0, 7);
    g.fill();
  }
} else {
  const ph = e.t * 0.9,
    fx = Math.sin(ph) * 0.05,
    fy = -0.08 + Math.sin(e.t * 1.3) * 0.02,
    dir = Math.cos(ph) >= 0 ? 1 : -1,
    tf = Math.sin(e.t * 9) * 0.01;
  g.save();
  g.translate(fx, fy);
  g.scale(dir, 1);
  g.fillStyle = "#ec7a3c";
  g.beginPath();
  g.ellipse(0, 0, 0.034, 0.017, 0, 0, 7);
  g.fill();
  g.fillStyle = "rgba(245,140,80,0.8)";
  g.beginPath();
  g.moveTo(-0.028, 0);
  g.lineTo(-0.06, -0.016 + tf);
  g.lineTo(-0.055, 0.016 + tf);
  g.closePath();
  g.fill();
  g.fillStyle = "#0a0608";
  g.beginPath();
  g.arc(0.02, -0.004, 0.004, 0, 7);
  g.fill();
  g.restore();
}
g.restore();
bag();
g.strokeStyle = "rgba(225,235,250,0.45)";
g.lineWidth = 0.005;
g.stroke();
g.fillStyle = "rgba(255,255,255,0.35)";
g.fillRect(-0.09, -0.15, 0.008, 0.09);
e.light(0, -0.07, 0.3, "#ffa060", 0.25);
