const s = e.state,
  t = e.t,
  P = s.power ?? 0.35,
  fr = s.frost_density ?? 0.9,
  R = e.rnd;
const fl = P * (0.85 + 0.1 * Math.sin(t * 13.7) * Math.sin(t * 3.1) + 0.05 * Math.sin(t * 0.7));
g.fillStyle = "#07090c";
g.fillRect(-3.7, -3.2, 7.4, 6.4);
g.strokeStyle = "rgba(0,0,0,0.8)";
g.lineWidth = 0.04;
for (let y = -3.2; y <= 3.2; y += 0.8) {
  g.beginPath();
  g.moveTo(-3.7, y);
  g.lineTo(3.7, y);
  g.stroke();
}
for (let x = -3.6; x <= 3.7; x += 1.2) {
  g.beginPath();
  g.moveTo(x, -3.2);
  g.lineTo(x, 3.2);
  g.stroke();
}
g.fillStyle = "#0e1319";
g.fillRect(-2.6, -3.2, 0.3, 6.4);
g.fillRect(2.3, -3.2, 0.3, 6.4);
const lg = g.createLinearGradient(-0.7, 0, 0.7, 0);
lg.addColorStop(0, "rgba(160,195,235,0)");
lg.addColorStop(0.5, "rgba(160,195,235," + 0.22 * fl + ")");
lg.addColorStop(1, "rgba(160,195,235,0)");
g.fillStyle = lg;
g.fillRect(-0.7, -3.2, 1.4, 6.4);
for (let i = 0; i < 5; i++) {
  const y = -2.9 + i * 1.2,
    dead = i === 1 || i === 3;
  g.fillStyle = dead
    ? "rgba(40,50,60,0.6)"
    : "rgba(215,230,250," + 0.55 * fl * (i === 2 ? 0.6 + 0.4 * Math.sin(t * 9.3) : 1) + ")";
  g.fillRect(-0.05, y, 0.1, 1.0);
}
for (let i = 0; i < 900; i++) {
  const x = (R() - 0.5) * 7.4,
    y = (R() - 0.5) * 6.4,
    z = R(),
    k = R();
  if (k > fr) continue;
  const edge = Math.abs(x) / 3.7;
  g.fillStyle = "rgba(205,225,242," + (0.04 + 0.12 * z) * (0.3 + edge) + ")";
  g.fillRect(x, y, 0.01 + z * 0.02, 0.01 + z * 0.02);
}
