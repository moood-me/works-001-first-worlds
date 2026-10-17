const t = e.t;
const eg = 0.6 + 0.2 * Math.sin(t * 3.1) + 0.1 * Math.sin(t * 7.3);
e.light(17, -5, 7, "#8fb8ff", 0.45 * eg);
g.fillStyle = "rgba(150,190,255," + 0.5 * eg + ")";
g.beginPath();
g.ellipse(16.3, -5, 0.6, 2.2, 0, 0, 7);
g.fill();
const hg = g.createLinearGradient(0, -10.5, 0, 1.5);
hg.addColorStop(0, "#6b6f78");
hg.addColorStop(0.35, "#454952");
hg.addColorStop(1, "#1b1e25");
g.fillStyle = hg;
g.beginPath();
g.moveTo(-17, -3.5);
g.quadraticCurveTo(-16.5, -8.5, -11, -9.5);
g.lineTo(14, -10);
g.lineTo(16, -8.5);
g.lineTo(16, -1.5);
g.lineTo(13, 1);
g.lineTo(-11, 1);
g.quadraticCurveTo(-16, 0.5, -17, -3.5);
g.closePath();
g.fill();
for (let i = 0; i < 14; i++) {
  const x = -8 + e.rnd() * 20,
    y = -8.8 + e.rnd() * 8,
    w = 0.8 + e.rnd() * 2.4,
    h = 0.6 + e.rnd() * 1.5;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(125,80,55,0.35)" : "rgba(25,27,33,0.45)";
  g.fillRect(x, y, w, h);
  g.fillStyle = "rgba(210,210,210,0.25)";
  g.fillRect(x + 0.1, y + 0.1, 0.1, 0.1);
  g.fillRect(x + w - 0.2, y + 0.1, 0.1, 0.1);
  g.fillRect(x + 0.1, y + h - 0.2, 0.1, 0.1);
  g.fillRect(x + w - 0.2, y + h - 0.2, 0.1, 0.1);
}
g.strokeStyle = "rgba(0,0,0,0.4)";
g.lineWidth = 0.08;
g.beginPath();
for (const x of [-8, -2, 4, 10]) {
  g.moveTo(x, -9.7);
  g.lineTo(x, 0.9);
}
g.moveTo(-15.5, -4.5);
g.lineTo(16, -4.5);
g.stroke();
g.strokeStyle = "rgba(255,235,205,0.4)";
g.lineWidth = 0.15;
g.beginPath();
g.moveTo(-11, -9.5);
g.lineTo(14, -10);
g.lineTo(16, -8.5);
g.lineTo(16, -1.5);
g.stroke();
const box = (x, y, w, h, c, txt) => {
  g.fillStyle = c;
  g.fillRect(x, y, w, h);
  g.strokeStyle = "rgba(0,0,0,0.45)";
  g.lineWidth = 0.06;
  g.strokeRect(x, y, w, h);
  g.fillStyle = "rgba(255,240,210,0.2)";
  g.fillRect(x + w - 0.3, y, 0.3, h);
  if (txt) {
    g.fillStyle = "rgba(235,230,215,0.8)";
    g.font = "bold 0.6px sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(txt, x + w / 2, y + h / 2);
  }
};
box(-4, -15.3, 4.6, 2.7, "#4a4458");
box(1.5, -14.9, 3.8, 2.3, "#56493a", "?");
box(-6.5, -12.6, 6.7, 2.8, "#5b3b2e", tr('DEFINITELY NOT'));
box(0.4, -12.6, 6.6, 2.8, "#3c4a3f", tr('CONTRABAND'));
box(7.2, -12.1, 4, 2.3, "#6a5a3a");
g.strokeStyle = "rgba(200,150,60,0.6)";
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(-6.6, -9.9);
g.lineTo(-4.2, -15.4);
g.lineTo(5.4, -15);
g.lineTo(11.3, -9.9);
g.stroke();
const bl = t % 7.3 < 0.2 ? 1 : 0;
for (const [x, y, s] of [
  [-13.4, -6.0, 0],
  [-10.7, -6.5, 1],
]) {
  g.fillStyle = "#14161b";
  g.beginPath();
  g.arc(x, y, 1.05, 0, 7);
  g.fill();
  const wg = g.createRadialGradient(x + 0.2, y - 0.2, 0, x, y, 0.85);
  wg.addColorStop(0, "#c4ecf2");
  wg.addColorStop(1, "#3d7686");
  g.fillStyle = wg;
  g.beginPath();
  g.arc(x, y, 0.85, 0, 7);
  g.fill();
  g.fillStyle = "#3d414a";
  g.beginPath();
  g.moveTo(x - 1.15, y - 1.15);
  g.lineTo(x + 1.15, y - 1.15);
  g.lineTo(x + 1.15, y - 0.05 + bl * 1.1 - s * 0.15);
  g.lineTo(x - 1.15, y - 0.4 + bl * 1.1 + s * 0.1);
  g.closePath();
  g.fill();
  e.light(x, y + 0.3, 1.6, "#9fe0ee", 0.3);
}
g.fillStyle = "rgba(230,225,210,0.75)";
g.font = "bold 1.15px sans-serif";
g.textAlign = "left";
g.textBaseline = "middle";
g.fillText(tr('MODESTY'), -7, -6.6);
g.font = "0.5px monospace";
g.fillStyle = "rgba(230,225,210,0.45)";
g.fillText(tr('JU-77/3 · CARGO'), -7, -5.3);
const nr = Math.sin(t * 1.7) > 0.85;
e.light(-16.7, -3.6, 1.6, "#ff4030", nr ? 0.9 : 0.15);
const ng = Math.sin(t * 1.3 + 2) > 0.85;
e.light(14, -10.2, 1.6, "#40ff80", ng ? 0.8 : 0.12);
for (const x of [-8, 9]) {
  const a = 0.25 + 0.15 * Math.sin(t * 4 + x);
  const pg = g.createRadialGradient(x, 1.4, 0, x, 1.4, 1.4);
  pg.addColorStop(0, "rgba(150,190,255," + a + ")");
  pg.addColorStop(1, "rgba(150,190,255,0)");
  g.fillStyle = pg;
  g.fillRect(x - 1.4, 0, 2.8, 2.8);
}
e.at(-12, -8);
