const wb = 3.6,
  wt = 2.1,
  tb = 0,
  tt = -28,
  H = tb - tt;
g.fillStyle = "#0a0c11";
g.beginPath();
g.moveTo(-15, 2);
g.quadraticCurveTo(-11, -2.5, -5, -2.4);
g.lineTo(6, -2.2);
g.quadraticCurveTo(12, -1.5, 15, 2);
g.closePath();
g.fill();
g.save();
g.beginPath();
g.moveTo(-wb, tb - 1.6);
g.lineTo(-wt, tt);
g.lineTo(wt, tt);
g.lineTo(wb, tb - 1.6);
g.closePath();
g.clip();
const band = (y0, y1, c) => {
  const lg = g.createLinearGradient(-wb, 0, wb, 0);
  lg.addColorStop(0, c[0]);
  lg.addColorStop(0.62, c[1]);
  lg.addColorStop(1, c[2]);
  g.fillStyle = lg;
  g.fillRect(-wb - 1, y0, wb * 2 + 2, y1 - y0);
};
band(tt, tb, ["#15171c", "#42464f", "#23262c"]);
for (const f of [0.16, 0.44, 0.72]) band(tt + H * f, tt + H * (f + 0.13), ["#190909", "#40181a", "#240d0d"]);
const sh = g.createLinearGradient(0, tt, 0, tb);
sh.addColorStop(0, "rgba(255,200,130,0.16)");
sh.addColorStop(0.5, "rgba(0,0,0,0)");
sh.addColorStop(1, "rgba(0,0,0,0.5)");
g.fillStyle = sh;
g.fillRect(-wb, tt, wb * 2, H);
for (let i = 0; i < 160; i++) {
  g.fillStyle = `rgba(0,0,0,${e.rnd() * 0.12})`;
  g.fillRect(-wb + e.rnd() * wb * 2, tt + e.rnd() * H, 0.1 + e.rnd() * 0.3, 0.08);
}
g.restore();
[
  [0.3, 0.35],
  [0.58, -0.45],
  [0.84, 0.3],
].forEach(([f, dx]) => {
  const y = tt + H * f;
  g.fillStyle = "#ffcf87";
  g.fillRect(dx - 0.3, y - 0.8, 0.6, 1.6);
  e.light(dx, y, 2.2, "#ffb45a", 0.3);
});
g.fillStyle = "#0d0907";
g.beginPath();
g.moveTo(-0.7, -1.6);
g.lineTo(-0.7, -3.5);
g.quadraticCurveTo(0, -4.1, 0.7, -3.5);
g.lineTo(0.7, -1.6);
g.fill();
g.fillStyle = "#15161a";
g.fillRect(-wt - 1.1, tt - 0.25, (wt + 1.1) * 2, 0.6);
g.fillStyle = "#0c0d10";
g.beginPath();
g.moveTo(-wt - 1.1, tt + 0.35);
g.lineTo(-wt, tt + 1.1);
g.lineTo(wt, tt + 1.1);
g.lineTo(wt + 1.1, tt + 0.35);
g.fill();
g.strokeStyle = "#1d1f25";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(-wt - 1.1, tt - 1.6);
g.lineTo(wt + 1.1, tt - 1.6);
for (let i = 0; i <= 10; i++) {
  const x = -wt - 1.1 + (i * (wt + 1.1) * 2) / 10;
  g.moveTo(x, tt - 1.6);
  g.lineTo(x, tt - 0.25);
}
g.stroke();
const ly = tt - 3.2,
  L = e.state.lamp ?? 0.8;
g.fillStyle = "#1b1510";
g.fillRect(-1.7, ly - 1.95, 3.4, 3.9);
const lg = g.createRadialGradient(0, ly, 0.1, 0, ly, 2);
lg.addColorStop(0, "#fffae1");
lg.addColorStop(0.5, "#ffc86e");
lg.addColorStop(1, "#a05a1e");
g.globalAlpha = 0.35 + 0.65 * L;
g.fillStyle = lg;
g.fillRect(-1.6, ly - 1.85, 3.2, 3.7);
g.globalAlpha = 1;
g.strokeStyle = "rgba(20,14,10,0.9)";
g.lineWidth = 0.17;
g.beginPath();
for (let i = -2; i <= 2; i++) {
  g.moveTo(i * 0.8, ly - 1.85);
  g.lineTo(i * 0.8, ly + 1.85);
}
g.moveTo(-1.6, ly);
g.lineTo(1.6, ly);
g.stroke();
g.fillStyle = "#1c0e0c";
g.beginPath();
g.moveTo(-1.95, ly - 1.85);
g.quadraticCurveTo(-1.7, ly - 3.7, 0, ly - 3.8);
g.quadraticCurveTo(1.7, ly - 3.7, 1.95, ly - 1.85);
g.closePath();
g.fill();
g.strokeStyle = "#15100e";
g.lineWidth = 0.15;
g.beginPath();
g.moveTo(0, ly - 3.8);
g.lineTo(0, ly - 5.1);
g.moveTo(-0.85, ly - 4.9);
g.lineTo(1, ly - 4.9);
g.lineTo(0.5, ly - 5.2);
g.stroke();
e.light(0, ly, 5, "#ffe0a0", 0.5 + 0.4 * L);
