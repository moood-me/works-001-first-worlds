const L = -2.7,
  Rr = 2.7,
  T = -2.45,
  B = -0.85,
  r = 0.4;
const win = () => {
  g.moveTo(L + r, T);
  g.lineTo(Rr - r, T);
  g.quadraticCurveTo(Rr, T, Rr, T + r);
  g.lineTo(Rr, B - r);
  g.quadraticCurveTo(Rr, B, Rr - r, B);
  g.lineTo(L + r, B);
  g.quadraticCurveTo(L, B, L, B - r);
  g.lineTo(L, T + r);
  g.quadraticCurveTo(L, T, L + r, T);
  g.closePath();
};
g.beginPath();
g.rect(-12, -7, 24, 7.2);
win();
let wg = g.createLinearGradient(0, -7, 0, 0);
wg.addColorStop(0, "#06080e");
wg.addColorStop(0.6, "#11151f");
wg.addColorStop(1, "#0d1018");
g.fillStyle = wg;
g.fill("evenodd");
g.save();
g.beginPath();
g.rect(-12, -7, 24, 7.2);
win();
g.clip("evenodd");
let sp = g.createRadialGradient(0.8, -1.6, 1.2, 0.8, -1.6, 5.5);
sp.addColorStop(0, "rgba(205,182,140,0.13)");
sp.addColorStop(1, "rgba(205,182,140,0)");
g.fillStyle = sp;
g.fillRect(-12, -7, 24, 7.2);
g.strokeStyle = "rgba(0,0,0,0.45)";
g.lineWidth = 0.02;
for (const x of [-6.8, -3.9, 3.9, 6.8]) {
  g.beginPath();
  g.moveTo(x, -7);
  g.lineTo(x, 0);
  g.stroke();
}
g.beginPath();
g.moveTo(-12, -3.3);
g.lineTo(12, -3.3);
g.stroke();
g.fillStyle = "rgba(150,160,185,0.12)";
for (const x of [-6.8, -3.9, 3.9, 6.8])
  for (let y = -3.1; y < 0; y += 0.45) {
    g.beginPath();
    g.arc(x + 0.06, y, 0.018, 0, 7);
    g.fill();
  }
g.restore();
g.lineWidth = 0.12;
g.strokeStyle = "#191d28";
g.beginPath();
win();
g.stroke();
g.fillStyle = "#141823";
g.fillRect(-1.98, T, 0.07, B - T);
g.fillRect(1.91, T, 0.07, B - T);
g.fillStyle = "rgba(225,205,165,0.2)";
g.fillRect(-1.92, T, 0.01, B - T);
g.fillRect(1.97, T, 0.01, B - T);
const b = 0.5 + 0.5 * Math.sin(e.t * 0.9);
e.light(-3.2, -1.7, 0.2, "#7fd4c0", 0.25 + 0.2 * b);
e.light(3.2, -1.7, 0.2, "#7fd4c0", 0.25 + 0.2 * (1 - b));
