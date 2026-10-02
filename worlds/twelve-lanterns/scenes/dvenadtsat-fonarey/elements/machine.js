const on = e.state.machine ?? 1,
  L = e.state.lanterns ?? 12;
const d = Math.sin(e.t * 1.7) + Math.sin(e.t * 2.9 + 1) + Math.sin(e.t * 5.3 + 2);
const fl = on * (d > 2.55 - (12 - L) * 0.07 ? 0.35 : 1);
const bg = g.createLinearGradient(-0.5, 0, 0.5, 0);
bg.addColorStop(0, "#6e7384");
bg.addColorStop(0.7, "#4c5060");
bg.addColorStop(1, "#2c2f3a");
g.fillStyle = bg;
g.fillRect(-0.5, -1.83, 1.0, 1.83);
g.fillStyle = "#7a1f2a";
g.fillRect(-0.5, -1.83, 1.0, 0.08);
const wg = g.createLinearGradient(0, -1.72, 0, -0.92);
wg.addColorStop(0, "rgba(235,244,255," + (0.25 + 0.7 * fl) + ")");
wg.addColorStop(1, "rgba(160,190,230," + (0.2 + 0.6 * fl) + ")");
g.fillStyle = "#20232c";
g.fillRect(-0.44, -1.74, 0.88, 0.86);
g.fillStyle = wg;
g.fillRect(-0.42, -1.72, 0.84, 0.82);
const cols = ["#9a3a3a", "#3a5a9a", "#4a7a50", "#c07a30", "#d8d4cc", "#6a4a8a"];
for (let r = 0; r < 3; r++)
  for (let c = 0; c < 6; c++) {
    const x = -0.37 + c * 0.135,
      y = -1.66 + r * 0.26;
    g.fillStyle = cols[(r * 2 + c) % 6];
    g.globalAlpha = 0.55 + 0.45 * fl;
    g.fillRect(x, y, 0.08, 0.15);
    g.globalAlpha = 1;
    g.fillStyle = "rgba(255,255,255,0.3)";
    g.fillRect(x + 0.012, y + 0.01, 0.012, 0.13);
    const sold = (r * 6 + c) % 7 === 3;
    g.fillStyle = sold ? "rgba(255,60,60," + (0.4 + 0.6 * fl) + ")" : "rgba(120,255,160," + (0.2 + 0.5 * fl) + ")";
    g.fillRect(x + 0.02, y + 0.18, 0.04, 0.025);
  }
g.fillStyle = "#2a2d38";
g.fillRect(-0.44, -0.84, 0.88, 0.36);
g.fillStyle = "rgba(110,255,150," + (0.3 + 0.6 * fl) + ")";
g.fillRect(0.12, -0.78, 0.22, 0.07);
g.fillStyle = "#0c0d12";
g.fillRect(0.22, -0.66, 0.03, 0.1);
g.fillRect(-0.38, -0.4, 0.76, 0.18);
g.fillStyle = "rgba(0,0,0,0.35)";
g.fillRect(-0.5, -0.12, 1.0, 0.12);
g.fillStyle = "#3a3e4a";
g.fillRect(0.5, -1.0, 0.07, 0.03);
e.light(0, -1.3, 3.6, "#cfe0ff", 0.85 * fl);
e.light(0, -0.2, 2.2, "#bcd2ff", 0.3 * fl);
for (let i = 0; i < 3; i++) {
  const mx = Math.sin(e.t * (1.9 + i * 0.7) + i * 2) * 0.45 + Math.sin(e.t * 4.3 + i) * 0.05,
    my = -1.45 + Math.cos(e.t * (1.3 + i * 0.5) + i) * 0.3;
  const wf = Math.abs(Math.sin(e.t * 22 + i)) * 0.03;
  g.fillStyle = "rgba(40,36,44,0.85)";
  g.beginPath();
  g.ellipse(mx, my, 0.02 + wf, 0.012, 0, 0, 7);
  g.fill();
}
