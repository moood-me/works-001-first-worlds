const L = Math.max(0, Math.min(1, e.state.light));
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return "rgb(" + p.join(",") + ")";
};
const gr = g.createLinearGradient(0, -10, 0, 50);
gr.addColorStop(0, m("#141322", "#2a2338"));
gr.addColorStop(1, m("#0f0f1c", "#1e1a2a"));
g.fillStyle = gr;
g.beginPath();
g.moveTo(-75, 60);
g.lineTo(-75, -7);
for (let x = -75; x <= -24; x += 2.5) {
  g.lineTo(x, (x + 24) * 0.12 - 0.9 * e.rnd() - 0.3);
}
g.lineTo(-24, 0);
g.lineTo(-22, 8);
g.lineTo(-23.5, 22);
g.lineTo(-21, 36);
g.lineTo(-23, 60);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(75, 60);
g.lineTo(75, -8);
for (let x = 75; x >= 24; x -= 2.5) {
  g.lineTo(x, -(x - 24) * 0.14 - 0.9 * e.rnd() - 0.3);
}
g.lineTo(24, 0);
g.lineTo(22.5, 9);
g.lineTo(24, 22);
g.lineTo(21.5, 38);
g.lineTo(23, 60);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,190,140," + 0.3 * L + ")";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(24, 0);
for (let x = 24; x <= 75; x += 2.5) {
  g.lineTo(x, -(x - 24) * 0.14 - 0.5);
}
g.stroke();
const t = e.t;
g.save();
g.translate(36, -1.9);
g.scale(0.8, 0.8);
g.rotate(Math.sin(t * 0.4) * 0.012 + Math.sin(t * 0.23) * 0.008);
g.fillStyle = m("#0e0d18", "#1a1524");
g.fillRect(-0.25, -9, 0.5, 9);
for (let i = 0; i < 6; i++) {
  const y = -9 + i * 1.3,
    w = 1.1 + i * 0.7;
  g.beginPath();
  g.moveTo(-w, y + 1.6);
  g.lineTo(0, y - 0.6);
  g.lineTo(w * 0.9, y + 1.4);
  g.closePath();
  g.fill();
}
g.restore();
