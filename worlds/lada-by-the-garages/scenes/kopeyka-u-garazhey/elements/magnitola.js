const s = e.state,
  t = e.t,
  en = s.engine,
  play = s.tape === "играет";
const shake =
  en === "чихает"
    ? Math.sin(t * 40) * 0.02 * (0.5 + 0.5 * Math.sin(t * 7))
    : en === "завелась"
      ? Math.sin(t * 55) * 0.012
      : 0;
g.translate(0, shake);
const b = play ? Math.max(0, Math.sin((t * Math.PI * 92) / 60)) ** 4 : 0;
g.fillStyle = "#26242a";
g.fillRect(-0.55, -1.7, 0.7, 0.3);
g.strokeStyle = "#18161a";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(-0.48, -1.7);
g.lineTo(-0.44, -1.8);
g.lineTo(0.04, -1.8);
g.lineTo(0.08, -1.7);
g.stroke();
for (const x of [-0.42, 0.02]) {
  g.fillStyle = "#121014";
  g.beginPath();
  g.arc(x, -1.55, 0.1 + b * 0.012, 0, 7);
  g.fill();
  g.fillStyle = "#3a383e";
  g.beginPath();
  g.arc(x, -1.55, 0.035, 0, 7);
  g.fill();
}
g.fillStyle = "rgba(150,140,120,0.6)";
g.fillRect(-0.29, -1.62, 0.18, 0.1);
g.fillStyle = play ? "rgba(120,255,140," + (0.5 + 0.5 * b) + ")" : "rgba(255,90,60,0.9)";
g.fillRect(-0.24, -1.47, 0.02, 0.02);
if (!play) {
  g.strokeStyle = "rgba(90,60,40,0.9)";
  g.lineWidth = 0.008;
  g.beginPath();
  g.moveTo(-0.2, -1.52);
  for (let k = 0; k < 14; k++) g.lineTo(-0.2 + Math.sin(k * 1.7 + t * 0.8) * 0.05 + k * 0.012, -1.52 + k * 0.03);
  g.stroke();
}
