const s = e.state,
  t = e.t,
  L = s.corridor_light || "emergency";
const W =
  L === "on"
    ? 1
    : L === "flicker"
      ? Math.sin(t * 31) * Math.sin(t * 4.7) + 0.6 * Math.sin(t * 0.9) > 0.3
        ? 0.85
        : 0.06
      : 0;
const R = L === "emergency" ? 0.75 + 0.25 * Math.sin(t * 1.3) : L === "flicker" ? 0.45 : L === "on" ? 0.12 : 0;
g.fillStyle = "#0a0c10";
g.fillRect(-1, -6.5, 2, 13);
g.fillStyle = "#06070a";
g.fillRect(-1, -6.5, 0.2, 13);
g.fillRect(0.8, -6.5, 0.2, 13);
g.strokeStyle = "rgba(60,68,82,0.28)";
g.lineWidth = 0.01;
for (let x = -0.8; x <= 0.81; x += 0.08) {
  g.beginPath();
  g.moveTo(x, -6.5);
  g.lineTo(x, 6.5);
  g.stroke();
}
for (let y = -6.5; y <= 6.5; y += 0.08) {
  g.beginPath();
  g.moveTo(-0.8, y);
  g.lineTo(0.8, y);
  g.stroke();
}
g.strokeStyle = "rgba(0,0,0,0.8)";
g.lineWidth = 0.05;
for (let y = -6.5; y <= 6.5; y += 1.3) {
  g.beginPath();
  g.moveTo(-1, y);
  g.lineTo(1, y);
  g.stroke();
}
g.strokeStyle = "#14181e";
g.lineWidth = 0.035;
for (const x of [-0.92, -0.86, 0.88]) {
  g.beginPath();
  g.moveTo(x, -6.5);
  g.lineTo(x, 6.5);
  g.stroke();
}
g.strokeStyle = "rgba(200,170,60,0.12)";
g.lineWidth = 0.04;
g.setLineDash([0.15, 0.15]);
for (const x of [-0.78, 0.78]) {
  g.beginPath();
  g.moveTo(x, -6.5);
  g.lineTo(x, 6.5);
  g.stroke();
}
g.setLineDash([]);
const pool = (x, y, rx, ry, c, a) => {
  if (a <= 0.002) return;
  g.save();
  g.translate(x, y);
  g.scale(rx, ry);
  const p = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  p.addColorStop(0, "rgba(" + c + "," + a + ")");
  p.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = p;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
};
pool(0.15, 2.5, 0.75, 0.5, "150,40,32", 0.2);
pool(0.15, -2.5, 0.75, 0.5, "150,40,32", 0.17);
for (let k = 0; k < 5; k++) {
  const y = 5.85 - k * 2.6;
  pool(-0.85, y, 0.5, 0.6, "255,40,30", 0.22 * R);
  pool(0.85, y, 0.5, 0.6, "255,40,30", 0.22 * R);
}
for (const z of [1, 7]) {
  pool(0, 3.5 - z, 0.9, 1.3, "205,222,255", 0.2 * W);
}
for (let i = 0; i < 14; i++) {
  const x = (e.rnd() - 0.5) * 1.5,
    y = (e.rnd() - 0.5) * 12,
    ph = e.rnd() * 6;
  const a = Math.pow(Math.max(0, Math.sin(t * 0.4 + ph)), 6) * 0.5 * Math.max(R, 0.3);
  g.fillStyle = "rgba(255,120,100," + a + ")";
  g.fillRect(x, y, 0.01, 0.01);
}
