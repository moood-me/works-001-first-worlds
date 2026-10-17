const s = e.state,
  T = Number.isFinite(s.time) ? s.time : 320,
  d = Math.min(1, Math.max(0, (T - 305) / 110));
const cols = ["#3a463f", "#4a3e35", "#38404b", "#4b4535", "#3d4540", "#463c3c"];
for (let i = 0; i < 6; i++) {
  const x = -11 + i * 3.6;
  g.fillStyle = cols[i];
  g.fillRect(x, -2.5, 3.5, 2.5);
  g.fillStyle = "#202126";
  g.fillRect(x - 0.05, -2.75, 3.6, 0.28);
  g.fillStyle = "rgba(0,0,0,0.18)";
  g.fillRect(x + 0.35, -2.2, 2.8, 2.2);
  g.strokeStyle = "rgba(15,15,18,0.6)";
  g.lineWidth = 0.04;
  g.strokeRect(x + 0.35, -2.2, 2.8, 2.2);
  g.beginPath();
  g.moveTo(x + 1.75, -2.2);
  g.lineTo(x + 1.75, 0);
  g.stroke();
  for (let k = 0; k < 5; k++) {
    const rx = x + 0.4 + e.rnd() * 2.7;
    let rg = g.createLinearGradient(0, -2.5, 0, -0.6);
    rg.addColorStop(0, "rgba(120,70,40,0.45)");
    rg.addColorStop(1, "rgba(120,70,40,0)");
    g.fillStyle = rg;
    g.fillRect(rx, -2.5, 0.08 + e.rnd() * 0.12, 1.2 + e.rnd() * 1.0);
  }
  g.fillStyle = "#16161a";
  g.fillRect(x + 1.68, -1.15, 0.14, 0.18);
}
g.textAlign = "center";
g.textBaseline = "middle";
g.fillStyle = "rgba(225,222,210,0.6)";
g.font = "bold 0.42px sans-serif";
g.fillText(tr('SERY + LENA'), -11 + 3.6 + 1.75, -1.45);
g.save();
g.translate(-11 + 3.6 * 3 + 1.75, -1.3);
g.rotate(-0.05);
g.font = "bold 0.75px sans-serif";
g.fillStyle = "rgba(200,80,70,0.55)";
g.fillText(tr('KINO'), 0, 0);
g.restore();
g.fillStyle = "rgba(8,10,20," + 0.45 * (1 - d) + ")";
g.fillRect(-11.2, -2.8, 22, 2.85);
