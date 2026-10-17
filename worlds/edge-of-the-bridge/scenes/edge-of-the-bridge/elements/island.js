const n = e.state.night ?? 0.3,
  a = e.state.answer ?? 0,
  t = e.t;
const rock = n > 0.6 ? "#26243a" : "#3a3550";
g.fillStyle = rock;
g.beginPath();
g.moveTo(-55, 0);
[
  [-48, 8],
  [-40, 10],
  [-30, 22],
  [-18, 28],
  [-8, 46],
  [0, 54],
  [6, 40],
  [16, 30],
  [26, 18],
  [38, 12],
  [50, 4],
  [56, 0],
  [48, -3],
  [30, -5],
  [18, -4],
  [-10, -6],
  [-30, -4],
  [-50, -2],
].forEach((p) => g.lineTo(p[0], p[1]));
g.closePath();
g.fill();
g.beginPath();
g.moveTo(6, -4);
g.lineTo(7, -40);
g.lineTo(9, -42);
g.lineTo(10, -38);
g.lineTo(12.5, -47);
g.lineTo(15, -41);
g.lineTo(17, -43);
g.lineTo(18, -4);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-28, -4);
g.lineTo(-28, -12);
g.lineTo(-22, -18);
g.lineTo(-16, -12);
g.lineTo(-16, -5);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-42, -3);
g.lineTo(-40, -14);
g.lineTo(-38, -3);
g.fill();
g.beginPath();
g.moveTo(32, -4);
g.lineTo(33.5, -11);
g.lineTo(35, -4);
g.fill();
g.strokeStyle = rock;
g.lineWidth = 0.5;
for (let i = 0; i < 9; i++) {
  const x = -36 + e.rnd() * 70,
    y0 = 10 + e.rnd() * 16,
    l = 5 + e.rnd() * 10;
  g.beginPath();
  g.moveTo(x, y0);
  g.quadraticCurveTo(x + Math.sin(t * 0.3 + i) * 1.5, y0 + l * 0.5, x + Math.sin(t * 0.2 + i * 1.7) * 2, y0 + l);
  g.stroke();
}
if (a > 0.01) {
  const f = a * (0.8 + 0.2 * Math.sin(t * 4.1) * Math.sin(t * 1.3));
  g.fillStyle = "rgba(255,205,140," + f + ")";
  g.fillRect(11, -33, 2.4, 3.2);
  e.light(12.2, -31.4, 30 * a, "#f0b06a", f);
} else {
  g.fillStyle = "#1c1a2a";
  g.fillRect(11, -33, 2.4, 3.2);
}
