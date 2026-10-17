const s = e.state,
  t = e.t,
  d = s.dusk || 0;
const C = ["#4d5c4b", "#6b4b39", "#4b5466", "#5f513f", "#3f4b49", "#6b5b3b"];
g.textAlign = "center";
for (let i = 0; i < 6; i++) {
  const x0 = -10.2 + i * 3.4;
  g.fillStyle = "#6a5a52";
  g.fillRect(x0, -2.7, 3.4, 2.7);
  g.fillStyle = "rgba(40,30,28,0.4)";
  g.fillRect(x0, -2.7, 0.06, 2.7);
  g.fillStyle = C[i];
  g.fillRect(x0 + 0.35, -2.25, 2.7, 2.25);
  if (i === 5) {
    g.fillStyle = "#1c1612";
    g.fillRect(x0 + 1.7, -2.25, 1.35, 2.25);
    e.light(x0 + 2.5, -1.9, 1.6, "#ffcf80", 0.6);
    g.fillStyle = "rgba(255,200,120,0.25)";
    g.fillRect(x0 + 1.7, -2.25, 1.35, 2.25);
    g.fillStyle = "#fff0c8";
    g.beginPath();
    g.arc(x0 + 2.5, -1.95, 0.05, 0, 7);
    g.fill();
    g.fillStyle = C[i];
    g.beginPath();
    g.moveTo(x0 + 1.7, -2.25);
    g.lineTo(x0 + 2.3, -2.45);
    g.lineTo(x0 + 2.3, 0.18);
    g.lineTo(x0 + 1.7, 0);
    g.fill();
  }
  g.strokeStyle = "rgba(0,0,0,0.35)";
  g.lineWidth = 0.04;
  g.strokeRect(x0 + 0.35, -2.25, 2.7, 2.25);
  if (i !== 5) {
    g.beginPath();
    g.moveTo(x0 + 1.7, -2.25);
    g.lineTo(x0 + 1.7, 0);
    g.stroke();
    g.fillStyle = "#222";
    g.fillRect(x0 + 1.55, -1.15, 0.1, 0.18);
  }
  for (let k = 0; k < 5; k++) {
    const rx = x0 + 0.4 + e.rnd() * 2.6,
      rh = 0.3 + e.rnd() * 1.2;
    let rg = g.createLinearGradient(0, -2.25, 0, -2.25 + rh);
    rg.addColorStop(0, "rgba(120,60,30,0.5)");
    rg.addColorStop(1, "rgba(120,60,30,0)");
    g.fillStyle = rg;
    g.fillRect(rx, -2.25, 0.06 + e.rnd() * 0.1, rh);
  }
  g.fillStyle = "rgba(235,230,215,0.7)";
  g.font = "bold 0.26px sans-serif";
  g.fillText(String(14 + i), x0 + 0.75, -1.85);
}
g.fillStyle = "#2e2a2e";
g.fillRect(-10.4, -2.95, 20.8, 0.28);
g.fillStyle = "#1e1b1f";
for (let x = -10.4; x < 10.4; x += 0.6 + e.rnd() * 0.5) g.fillRect(x, -2.67, 0.05, 0.1 + e.rnd() * 0.2);
g.save();
g.font = "bold 0.42px sans-serif";
g.fillStyle = "rgba(235,235,225,0.75)";
g.translate(-8.5, -1.1);
g.rotate(-0.04);
g.fillText(tr('TSOI LIVES'), 0, 0);
g.restore();
g.font = "0.2px sans-serif";
g.fillStyle = "rgba(225,100,95,0.75)";
g.fillText(tr('VITEK + LENA'), 7.85, -1.3);
g.font = "bold 0.26px sans-serif";
g.fillStyle = "rgba(240,240,228,0.85)";
g.fillText(tr('TRIES: {tries}', { tries: s.tries || 0 }), 5.1, -1.25);
g.fillStyle = "rgba(240,240,228,0.6)";
g.fillRect(4.2, -1.17, 1.8, 0.02);
let lg = g.createLinearGradient(-10.2, 0, 10.2, 0);
lg.addColorStop(0, "rgba(255,165,105," + 0.22 * (1 - d) + ")");
lg.addColorStop(1, "rgba(255,165,105,0)");
g.fillStyle = lg;
g.fillRect(-10.4, -2.95, 20.8, 2.95);
g.fillStyle = "rgba(10,8,14," + 0.45 * d + ")";
g.fillRect(-10.4, -2.95, 20.8, 2.95);
