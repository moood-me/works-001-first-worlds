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
g.fillStyle = "#07080b";
g.fillRect(-1, -6.5, 2, 13);
g.fillStyle = "#030405";
for (let y = -6.5; y <= 6.5; y += 1.3) g.fillRect(-1, y - 0.06, 2, 0.12);
const cc = ["#0d0f13", "#1a0b0c", "#101318", "#08090b"];
for (let i = 0; i < 4; i++) {
  g.strokeStyle = cc[i];
  g.lineWidth = 0.035;
  for (const sx of [-1, 1]) {
    const x = sx * (0.72 - i * 0.045);
    g.beginPath();
    g.moveTo(x, -6.5);
    g.lineTo(x, 6.5);
    g.stroke();
  }
}
for (const [z, ok] of [
  [1, 1],
  [4, 0],
  [7, 1],
]) {
  const y = 3.5 - z;
  g.fillStyle = "#111318";
  g.fillRect(-0.2, y - 0.52, 0.4, 1.04);
  const a = ok ? 0.06 + 0.9 * W : 0.04;
  g.fillStyle = "rgba(225,236,255," + a + ")";
  g.fillRect(-0.15, y - 0.46, 0.3, 0.92);
  if (!ok) {
    g.strokeStyle = "rgba(0,0,0,0.7)";
    g.lineWidth = 0.01;
    g.beginPath();
    g.moveTo(-0.15, y - 0.2);
    g.lineTo(0.02, y + 0.05);
    g.lineTo(-0.05, y + 0.3);
    g.moveTo(0.02, y + 0.05);
    g.lineTo(0.15, y + 0.12);
    g.stroke();
  } else if (W > 0) {
    const p = g.createRadialGradient(0, y, 0.1, 0, y, 1);
    p.addColorStop(0, "rgba(205,222,255," + 0.25 * W + ")");
    p.addColorStop(1, "rgba(205,222,255,0)");
    g.fillStyle = p;
    g.fillRect(-1, y - 1, 2, 2);
  }
}
for (const z of [2.5, 5.5, 8.5, -1.5]) {
  const y = 3.5 - z;
  g.fillStyle = "#0c0d10";
  g.fillRect(-0.07, y - 0.07, 0.14, 0.14);
  g.fillStyle = "rgba(255,60,40," + (0.15 + 0.85 * R) + ")";
  g.beginPath();
  g.arc(0, y, 0.045, 0, 6.2832);
  g.fill();
  const p = g.createRadialGradient(0, y, 0, 0, y, 0.5);
  p.addColorStop(0, "rgba(255,50,35," + 0.25 * R + ")");
  p.addColorStop(1, "rgba(255,50,35,0)");
  g.fillStyle = p;
  g.fillRect(-0.5, y - 0.5, 1, 1);
}
