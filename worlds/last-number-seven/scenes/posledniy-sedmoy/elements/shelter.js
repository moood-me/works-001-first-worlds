const s = e.state,
  d = s.dusk || 0,
  t = e.t,
  on = s.lamp;
const mx = (a, b, k) => "rgb(" + a.map((x, i) => Math.round(x + (b[i] - x) * k)).join(",") + ")";
const wood = mx([156, 104, 70], [64, 46, 50], d),
  woodD = mx([110, 72, 50], [38, 30, 38], d),
  metal = mx([98, 128, 138], [40, 50, 70], d);
g.fillStyle = wood;
g.fillRect(-2.1, -2.4, 4.2, 2.4);
g.strokeStyle = woodD;
g.lineWidth = 0.02;
for (let x = -2.1; x < 2.1; x += 0.21) {
  g.beginPath();
  g.moveTo(x, -2.4);
  g.lineTo(x, 0);
  g.stroke();
}
let wg = g.createLinearGradient(-2.1, 0, 2.1, 0);
wg.addColorStop(0, "rgba(255,170,100," + 0.28 * (1 - d) + ")");
wg.addColorStop(1, "rgba(255,170,100,0)");
g.fillStyle = wg;
g.fillRect(-2.1, -2.4, 4.2, 2.4);
let sh = g.createLinearGradient(0, -2.4, 0, -1.3);
sh.addColorStop(0, "rgba(20,14,24,0.55)");
sh.addColorStop(1, "rgba(20,14,24,0)");
g.fillStyle = sh;
g.fillRect(-2.1, -2.4, 4.2, 1.1);
g.strokeStyle = "rgba(120,60,40,0.3)";
g.lineWidth = 0.03;
for (let i = 0; i < 9; i++) {
  const x = -2 + e.rnd() * 4;
  g.beginPath();
  g.moveTo(x, -2.38);
  g.lineTo(x + 0.01, -2.38 + 0.2 + e.rnd() * 0.6);
  g.stroke();
}
g.fillStyle = mx([228, 216, 192], [106, 98, 112], d);
g.fillRect(-1.6, -1.95, 0.62, 0.82);
g.fillStyle = "rgba(196,64,52,0.75)";
g.beginPath();
g.arc(-1.29, -1.62, 0.15, 0, 7);
g.fill();
g.fillStyle = "rgba(60,50,60,0.35)";
g.fillRect(-1.5, -1.32, 0.42, 0.03);
g.fillRect(-1.5, -1.26, 0.3, 0.03);
g.fillStyle = mx([150, 176, 196], [60, 70, 96], d);
g.fillRect(0.95, -1.9, 0.5, 0.66);
g.fillStyle = "rgba(255,255,255,0.3)";
g.fillRect(1.0, -1.82, 0.4, 0.05);
g.fillStyle = woodD;
g.fillRect(-1.8, -0.86, 3.6, 0.07);
g.fillRect(-1.8, -0.5, 3.6, 0.09);
g.fillRect(-1.68, -0.42, 0.06, 0.42);
g.fillRect(1.62, -0.42, 0.06, 0.42);
g.fillStyle = metal;
g.fillRect(-2.22, -2.6, 0.1, 2.6);
g.fillRect(2.12, -2.48, 0.1, 2.48);
g.beginPath();
g.moveTo(-2.6, -2.72);
g.lineTo(2.6, -2.52);
g.lineTo(2.6, -2.38);
g.lineTo(-2.6, -2.58);
g.fill();
g.strokeStyle = "rgba(255,255,255,0.12)";
g.lineWidth = 0.025;
for (let x = -2.55; x < 2.6; x += 0.14) {
  const y = -2.72 + (x + 2.6) * 0.0385;
  g.beginPath();
  g.moveTo(x, y);
  g.lineTo(x, y + 0.14);
  g.stroke();
}
g.fillStyle = "rgba(255,186,120," + 0.5 * (1 - d) + ")";
g.fillRect(-2.22, -2.6, 0.025, 2.6);
g.fillRect(-2.6, -2.73, 5.2 * 0.6, 0.02);
if (on) {
  const n = Math.sin(t * 0.37) * Math.sin(t * 1.9);
  const f = n > 0.9 ? 0.25 : 0.94 + 0.06 * Math.sin(t * 41);
  g.fillStyle = "rgba(236,250,255," + 0.9 * f + ")";
  g.fillRect(-0.6, -2.44, 1.2, 0.05);
  let lg = g.createRadialGradient(0, -2.3, 0, 0, -2.3, 2.2);
  lg.addColorStop(0, "rgba(210,236,255," + 0.32 * f + ")");
  lg.addColorStop(1, "rgba(210,236,255,0)");
  g.fillStyle = lg;
  g.fillRect(-2.1, -2.4, 4.2, 2.4);
  e.light(0, -2.4, 3.2, "#dcefff", 0.55 * f);
} else {
  g.fillStyle = "rgba(200,206,210,0.6)";
  g.fillRect(-0.6, -2.44, 1.2, 0.05);
}
