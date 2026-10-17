const t = e.t,
  P = [-4.4, -1.6, 1.2];
g.lineCap = "round";
for (let i = 0; i < P.length - 1; i++) {
  const a = P[i],
    b = P[i + 1],
    m = (a + b) / 2,
    sag = 0.06 + 0.01 * Math.sin(t * 0.6 + i);
  g.strokeStyle = "#3d4d6e";
  g.lineWidth = 0.05;
  g.beginPath();
  g.moveTo(a, -0.92);
  g.quadraticCurveTo(m, -0.92 + sag * 2, b, -0.92);
  g.stroke();
  g.strokeStyle = "rgba(255,230,200,0.18)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(a, -0.94);
  g.quadraticCurveTo(m, -0.94 + sag * 2, b, -0.94);
  g.stroke();
}
for (const x of P) {
  const q = g.createLinearGradient(x - 0.04, 0, x + 0.04, 0);
  q.addColorStop(0, "#2a2d33");
  q.addColorStop(1, "#8d8f95");
  g.fillStyle = q;
  g.fillRect(x - 0.03, -1.0, 0.06, 0.98);
  g.fillStyle = "#24262c";
  g.beginPath();
  g.ellipse(x, -0.02, 0.17, 0.04, 0, 0, 7);
  g.fill();
  g.fillStyle = "#9a9ca2";
  g.beginPath();
  g.arc(x, -1.0, 0.045, 0, 7);
  g.fill();
}
g.fillStyle = "rgba(225,220,205,0.85)";
g.fillRect(-3.25, -0.86, 0.5, 0.16);
g.fillStyle = "#3a3020";
g.font = "bold 0.07px sans-serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText(tr('QUEUE HERE'), -3, -0.78);
