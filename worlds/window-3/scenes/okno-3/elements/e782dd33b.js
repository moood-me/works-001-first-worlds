g.fillStyle = "#1d2027";
g.fillRect(-28, -13, 56, 26);
for (let i = 0; i < 90; i++) {
  const x = -28 + Math.floor(e.rnd() * 22.4) * 2.5,
    y = -13 + Math.floor(e.rnd() * 10.4) * 2.5;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.14)";
  g.fillRect(x, y, 2.5, 2.5);
}
g.strokeStyle = "rgba(0,0,0,0.5)";
g.lineWidth = 0.05;
g.beginPath();
for (let x = -28; x <= 28; x += 2.5) {
  g.moveTo(x, -13);
  g.lineTo(x, 13);
}
for (let y = -13; y <= 13; y += 2.5) {
  g.moveTo(-28, y);
  g.lineTo(28, y);
}
g.stroke();
g.fillStyle = "rgba(200,205,215,0.12)";
for (let x = -28; x <= 28; x += 2.5)
  for (let y = -13; y <= 13; y += 2.5) {
    g.fillRect(x + 0.15, y + 0.15, 0.06, 0.06);
  }
const sg = g.createLinearGradient(-28, 0, 28, 0);
sg.addColorStop(0, "rgba(0,0,0,0.4)");
sg.addColorStop(1, "rgba(255,230,200,0.06)");
g.fillStyle = sg;
g.fillRect(-28, -13, 56, 26);
const ng = g.createLinearGradient(0, -13, 0, 13);
ng.addColorStop(0, "rgba(0,0,0,0)");
ng.addColorStop(1, "rgba(0,0,0,0.35)");
g.fillStyle = ng;
g.fillRect(-28, -13, 56, 26);
const pl = g.createRadialGradient(-5, -7, 0, -5, -7, 6);
pl.addColorStop(0, "rgba(255,180,100,0.28)");
pl.addColorStop(1, "rgba(255,180,100,0)");
g.fillStyle = pl;
g.fillRect(-11, -13, 12, 12);
g.save();
g.beginPath();
g.rect(-28, -13, 56, 0.8);
g.clip();
for (let x = -29; x < 29; x += 1.2) {
  g.fillStyle = "#86702f";
  g.beginPath();
  g.moveTo(x, -13);
  g.lineTo(x + 0.6, -13);
  g.lineTo(x + 1.4, -12.2);
  g.lineTo(x + 0.8, -12.2);
  g.closePath();
  g.fill();
}
g.restore();
g.fillStyle = "rgba(200,170,60,0.75)";
g.fillRect(-12, 1.8, 22, 0.22);
g.fillStyle = "rgba(200,170,60,0.55)";
g.font = "bold 0.55px sans-serif";
g.textAlign = "center";
g.textBaseline = "middle";
g.fillText(tr('WAIT BEHIND THE YELLOW LINE'), -1, 2.8);
g.fillStyle = "rgba(220,210,190,0.18)";
g.font = "bold 3px sans-serif";
g.fillText("3", -5, -3.5);
g.strokeStyle = "rgba(220,210,190,0.15)";
g.lineWidth = 0.25;
g.beginPath();
for (const y of [6, -1]) {
  g.moveTo(-3.2, y + 0.8);
  g.lineTo(-4, y);
  g.lineTo(-4.8, y + 0.8);
}
g.stroke();
for (let x = -27; x < 28; x += 4.5) {
  const lg = g.createRadialGradient(x, -12.6, 0, x, -12.6, 0.7);
  lg.addColorStop(0, "rgba(255,190,120,0.5)");
  lg.addColorStop(1, "rgba(255,190,120,0)");
  g.fillStyle = lg;
  g.fillRect(x - 0.7, -13.3, 1.4, 1.4);
}
