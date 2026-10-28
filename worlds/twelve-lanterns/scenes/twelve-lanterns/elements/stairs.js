const T = -11,
  sy = (t) => T * (1 - Math.pow(1 - t, 1.6)),
  hw = (y) => 3 - 1.9 * (y / T);
g.fillStyle = "#100b16";
g.beginPath();
g.moveTo(-18, 0.6);
g.bezierCurveTo(-14, -4, -9, -9.5, -4.8, T - 0.8);
g.lineTo(4.8, T - 0.8);
g.bezierCurveTo(9, -9.5, 14, -4, 18, 0.6);
g.closePath();
g.fill();
for (let i = 0; i < 110; i++) {
  const t = e.rnd(),
    y = sy(t) + 0.3,
    side = e.rnd() < 0.5 ? -1 : 1,
    x = side * (hw(y) + 0.6 + e.rnd() * 5 * (1 - t)),
    r = 0.3 + e.rnd() * 0.7 * (1 - t * 0.6);
  g.fillStyle = e.rnd() < 0.7 ? "#0d0913" : "#150e1b";
  g.beginPath();
  g.ellipse(x, y - r * 0.5, r * 1.4, r, 0, 0, 7);
  g.fill();
}
let gr = g.createLinearGradient(0, 0, 0, T);
gr.addColorStop(0, "#3a2f40");
gr.addColorStop(1, "#1d1726");
g.fillStyle = gr;
g.beginPath();
g.moveTo(-hw(0), 0.3);
g.lineTo(hw(0), 0.3);
g.lineTo(hw(T), T);
g.lineTo(-hw(T), T);
g.closePath();
g.fill();
const N = 40;
for (let i = 0; i < N; i++) {
  const y = sy(i / N),
    y2 = sy((i + 1) / N),
    t = i / N,
    w = hw(y2);
  g.fillStyle = "rgba(8,5,12,0.4)";
  g.fillRect(-w, y2 + (y - y2) * 0.45, 2 * w, (y - y2) * 0.55);
  g.strokeStyle = "rgba(225,170,145," + (0.1 + 0.12 * (1 - t)) + ")";
  g.lineWidth = 0.03 + 0.05 * (1 - t);
  g.beginPath();
  g.moveTo(-w, y2);
  g.lineTo(w, y2);
  g.stroke();
}
g.strokeStyle = "#241c2c";
g.lineWidth = 0.25;
for (const s of [-1, 1]) {
  g.beginPath();
  g.moveTo(s * hw(0), 0.3);
  g.lineTo(s * hw(T), T);
  g.stroke();
}
const P = 1.9,
  top = T - 4.6;
g.fillStyle = "rgba(4,2,8,0.85)";
g.fillRect(-P + 0.2, top + 0.9, 2 * P - 0.4, 3.7);
for (const s of [-1, 1]) {
  const pg = g.createLinearGradient(s * P - 0.2, 0, s * P + 0.2, 0);
  pg.addColorStop(0, "#4a1612");
  pg.addColorStop(0.5, "#8a2a1c");
  pg.addColorStop(1, "#3a100e");
  g.fillStyle = pg;
  g.beginPath();
  g.moveTo(s * P - 0.2, T);
  g.lineTo(s * P - 0.15, top);
  g.lineTo(s * P + 0.15, top);
  g.lineTo(s * P + 0.2, T);
  g.closePath();
  g.fill();
  g.fillStyle = "#140a0c";
  g.fillRect(s * P - 0.24, T - 0.35, 0.48, 0.35);
}
g.fillStyle = "#7a2418";
g.fillRect(-P - 0.75, T - 3.85, 2 * P + 1.5, 0.28);
g.fillStyle = "#8a2a1c";
g.beginPath();
g.moveTo(-P - 1.25, top - 0.05);
g.quadraticCurveTo(0, top + 0.25, P + 1.25, top - 0.05);
g.lineTo(P + 1.2, top - 0.35);
g.quadraticCurveTo(0, top - 0.05, -P - 1.2, top - 0.35);
g.closePath();
g.fill();
g.fillStyle = "#160b0e";
g.beginPath();
g.moveTo(-P - 1.45, top - 0.3);
g.quadraticCurveTo(0, top - 0.02, P + 1.45, top - 0.3);
g.lineTo(P + 1.6, top - 0.75);
g.quadraticCurveTo(0, top - 0.42, -P - 1.6, top - 0.75);
g.closePath();
g.fill();
g.fillStyle = "#1a0e10";
g.fillRect(-0.18, top + 0.1, 0.36, 0.7);
