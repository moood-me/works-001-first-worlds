const s = e.state,
  t = e.t,
  P = s.power ?? 0.35;
const fl = P * (0.88 + 0.08 * Math.sin(t * 13.1) * Math.sin(t * 2.7) + 0.04 * Math.sin(t * 0.6));
const W = [
  [-4.3, -1.0],
  [-5, -2.3],
  [-4.3, -3.6],
  [4.3, -3.6],
  [5, -2.3],
  [4.3, -1.0],
];
const win = () => {
  g.moveTo(W[0][0], W[0][1]);
  for (let i = 1; i < W.length; i++) g.lineTo(W[i][0], W[i][1]);
  g.closePath();
};
g.beginPath();
g.rect(-16, -8, 32, 8.4);
win();
let gr = g.createLinearGradient(0, -8, 0, 0.4);
gr.addColorStop(0, "#07090c");
gr.addColorStop(0.55, "#131820");
gr.addColorStop(1, "#0a0c10");
g.fillStyle = gr;
g.fill("evenodd");
g.save();
g.beginPath();
g.rect(-16, -8, 32, 8.4);
win();
g.clip("evenodd");
let rg = g.createRadialGradient(-1.2, -2.3, 1, -1.2, -2.3, 8);
rg.addColorStop(0, "rgba(120,35,30,0.26)");
rg.addColorStop(1, "rgba(120,35,30,0)");
g.fillStyle = rg;
g.fillRect(-16, -8, 32, 8.4);
const cg = g.createLinearGradient(0, -6, 0, -3.6);
cg.addColorStop(0, "rgba(200,220,255," + 0.12 * fl + ")");
cg.addColorStop(1, "rgba(200,220,255,0)");
g.fillStyle = cg;
g.fillRect(-16, -6, 32, 2.4);
g.strokeStyle = "rgba(0,0,0,0.55)";
g.lineWidth = 0.04;
for (let x = -15; x <= 15; x += 2.5) {
  g.beginPath();
  g.moveTo(x, -8);
  g.lineTo(x, 0.4);
  g.stroke();
}
for (const y of [-4.05, -0.5]) {
  g.beginPath();
  g.moveTo(-16, y);
  g.lineTo(16, y);
  g.stroke();
}
g.fillStyle = "rgba(120,130,145,0.16)";
for (let x = -15; x <= 15; x += 2.5)
  for (let y = -7.5; y < 0; y += 0.6) {
    g.fillRect(x + 0.08, y, 0.04, 0.04);
  }
g.save();
g.translate(0, -3.82);
g.scale(0.01, 0.01);
g.font = "bold 16px monospace";
g.textAlign = "center";
g.fillStyle = "rgba(190,170,120,0.22)";
g.fillText("СМОТРОВОЙ ОТСЕК · 4", 0, 0);
g.restore();
const rot = (t * 1.4) % (Math.PI * 2),
  R = Math.pow(Math.max(0, Math.cos(rot)), 3) * (1 - P * 0.7);
for (const lx of [-5.75, 5.75]) {
  g.fillStyle = "#16181d";
  g.fillRect(lx - 0.14, -3.2, 0.28, 0.45);
  const lg = g.createRadialGradient(lx, -2.98, 0, lx, -2.98, 0.14);
  lg.addColorStop(0, "rgba(255,110,90," + (0.35 + 0.65 * R) + ")");
  lg.addColorStop(1, "rgba(120,20,20," + (0.4 + 0.4 * R) + ")");
  g.fillStyle = lg;
  g.beginPath();
  g.ellipse(lx, -2.98, 0.1, 0.15, 0, 0, 7);
  g.fill();
  g.strokeStyle = "#0a0b0e";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(lx - 0.1, -2.98);
  g.lineTo(lx + 0.1, -2.98);
  g.moveTo(lx, -3.13);
  g.lineTo(lx, -2.83);
  g.stroke();
  e.light(lx, -2.98, 2.6, "#ff3a30", 0.15 + 0.6 * R);
}
g.fillStyle = "#0d1015";
g.beginPath();
g.moveTo(7.3, 0);
g.lineTo(7.3, -2.6);
g.quadraticCurveTo(8.3, -3.3, 9.3, -2.6);
g.lineTo(9.3, 0);
g.fill();
g.strokeStyle = "rgba(200,170,60,0.22)";
g.lineWidth = 0.08;
g.setLineDash([0.25, 0.25]);
g.stroke();
g.setLineDash([]);
g.fillStyle = "rgba(255,90,60,0.6)";
g.fillRect(8.1, -2.2, 0.4, 0.08);
g.fillStyle = "#0c0f13";
g.fillRect(-5.3, -1.0, 10.6, 0.22);
g.fillStyle = "rgba(150,60,50,0.2)";
g.fillRect(-5.3, -1.02, 10.6, 0.03);
e.light(0, -5.2, 6, "#cfe0ff", 0.35 * fl);
g.restore();
g.save();
g.beginPath();
win();
g.clip();
g.fillStyle = "rgba(180,200,230,0.03)";
for (let i = 0; i < 4; i++) {
  g.beginPath();
  const x = -3 + i * 2.1;
  g.moveTo(x, -3.6);
  g.lineTo(x + 0.5, -3.6);
  g.lineTo(x - 0.6, -1);
  g.lineTo(x - 0.95, -1);
  g.fill();
}
for (let i = 0; i < 900; i++) {
  const side = e.rnd() < 0.5 ? -1 : 1,
    x = side * (5 - Math.pow(e.rnd(), 2.5) * 2.6),
    y = -1 - Math.pow(e.rnd(), 2.5) * 1.5,
    a = e.rnd();
  g.fillStyle = "rgba(205,220,240," + (0.03 + a * 0.07) + ")";
  g.beginPath();
  g.arc(x, y, 0.006 + a * 0.012, 0, 7);
  g.fill();
}
if (s.vera_light) {
  const jx = Math.sin(t * 1.3) * 0.15 + (s.knocking ? Math.sin(t * 23) * 0.1 : 0),
    jy = Math.sin(t * 0.9) * 0.08;
  const sp = g.createRadialGradient(0.2 + jx, -2.2 + jy, 0, 0.2 + jx, -2.2 + jy, 1);
  sp.addColorStop(0, "rgba(255,240,210,0.1)");
  sp.addColorStop(1, "rgba(255,240,210,0)");
  g.fillStyle = sp;
  g.fillRect(-1.5, -3.6, 3.5, 3);
}
g.restore();
g.strokeStyle = "#05070a";
g.lineWidth = 0.28;
g.beginPath();
win();
g.stroke();
g.strokeStyle = "rgba(150,70,60,0.3)";
g.lineWidth = 0.035;
g.beginPath();
win();
g.stroke();
g.fillStyle = "#06080b";
for (const x of [-2.15, 0, 2.15]) {
  g.fillRect(x - 0.06, -3.6, 0.12, 2.6);
}
g.fillRect(-4.8, -2.36, 9.6, 0.09);
