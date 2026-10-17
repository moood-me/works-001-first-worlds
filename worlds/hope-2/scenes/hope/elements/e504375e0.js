const t = e.t,
  Y = (D) => 102 / D - 1.7;
let s = 3;
const R = () => (s = (s * 16807) % 2147483647) / 2147483647;
const gr = g.createLinearGradient(0, -1.46, 0, 45);
[
  [-1.46, "#605c70"],
  [-1.3, "#4d5165"],
  [0, "#353f53"],
  [5, "#253043"],
  [18, "#19212e"],
  [45, "#10161f"],
].forEach((a) => gr.addColorStop((a[0] + 1.46) / 46.46, a[1]));
g.fillStyle = gr;
g.fillRect(-200, -1.46, 320, 46.46);
const mr = g.createLinearGradient(0, -1.46, 0, 5);
mr.addColorStop(0, "rgba(80,92,115,0.22)");
mr.addColorStop(1, "rgba(80,92,115,0)");
g.fillStyle = mr;
g.fillRect(-200, -1.46, 320, 6.5);
const fr = g.createLinearGradient(0, -1.46, 0, 1.6);
fr.addColorStop(0, "rgba(20,27,38,0.7)");
fr.addColorStop(1, "rgba(20,27,38,0.1)");
g.fillStyle = fr;
g.beginPath();
g.moveTo(-200, -1.46);
let x = -200;
while (x < 120) {
  g.lineTo(x, -1.46 + 0.7 + R() * 0.6);
  x += 0.15 + R() * 0.3;
  g.lineTo(x, -1.46 + 1.1 + R() * 1.6);
  x += 0.15 + R() * 0.3;
}
g.lineTo(120, -1.46);
g.closePath();
g.fill();
g.fillStyle = "rgba(150,150,170,0.18)";
g.fillRect(-200, -1.462, 320, e.px * 1.5);
for (let i = 0; i < 1000; i++) {
  const D = 5 * Math.pow(410 / 5, R()),
    y = Y(D),
    x0 = -200 + R() * 320,
    len = ((0.3 + R() * 1.5) * 60) / D,
    ph = R() * 6.283,
    sp = 0.15 + R() * 0.45,
    lt = R() < 0.55;
  const a = (0.5 + 0.5 * Math.sin(t * sp + ph)) * (lt ? 0.13 : 0.2);
  if (a < 0.01) continue;
  const dx = Math.sin(t * sp * 0.4 + ph) * len * 0.25;
  g.strokeStyle = lt ? "rgba(150,160,186," + a + ")" : "rgba(8,12,20," + a + ")";
  g.lineWidth = e.px * (D < 25 ? 1.5 : 1);
  g.beginPath();
  g.moveTo(x0 + dx, y);
  g.lineTo(x0 + dx + len, y);
  g.stroke();
}
