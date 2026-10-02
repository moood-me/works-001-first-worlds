const s = e.state,
  t = e.t,
  T = Number.isFinite(s.time) ? s.time : 320,
  d = Math.min(1, Math.max(0, (T - 305) / 110));
g.fillStyle = "#272932";
g.fillRect(-12, -14.5, 15, 14.8);
g.strokeStyle = "rgba(10,10,14,0.35)";
g.lineWidth = 0.04;
for (let k = 1; k < 6; k++) {
  g.beginPath();
  g.moveTo(-12, -k * 2.8);
  g.lineTo(3, -k * 2.8);
  g.stroke();
}
for (let x = -12; x < 3; x += 3) {
  g.beginPath();
  g.moveTo(x, -14.5);
  g.lineTo(x, 0);
  g.stroke();
}
let dg = g.createLinearGradient(-12, 0, 3, 0);
dg.addColorStop(0, "rgba(170,120,110,0)");
dg.addColorStop(1, "rgba(170,120,110," + 0.16 * d + ")");
g.fillStyle = dg;
g.fillRect(-12, -14.5, 15, 14.8);
g.fillStyle = "rgba(12,12,18,0.5)";
g.fillRect(2.6, -14.5, 0.4, 14.8);
g.fillStyle = "#17181e";
g.fillRect(-12.2, -14.8, 15.4, 0.4);
g.strokeStyle = "#17181e";
g.lineWidth = 0.06;
for (const ax of [-9, -2]) {
  g.beginPath();
  g.moveTo(ax, -14.8);
  g.lineTo(ax, -16.2);
  g.moveTo(ax - 0.6, -15.9);
  g.lineTo(ax + 0.6, -15.9);
  g.moveTo(ax - 0.4, -15.5);
  g.lineTo(ax + 0.4, -15.5);
  g.stroke();
}
const cols = [-10.6, -8.4, -6.2, -1.0, 1.2];
const lit = { "4,0": "w", "0,4": "tv", "3,1": "w", "1,2": "w" };
for (let k = 0; k < 5; k++)
  for (let c = 0; c < 5; c++) {
    const wx = cols[c],
      wy = -(k * 2.8 + 2.1);
    g.fillStyle = "#101116";
    g.fillRect(wx, wy, 1.2, 1.4);
    const L = lit[k + "," + c];
    if (L === "w") {
      g.fillStyle = "rgba(222,166,98,0.7)";
      g.fillRect(wx + 0.06, wy + 0.06, 1.08, 1.28);
      e.light(wx + 0.6, wy + 0.7, 1.6, "#dea662", 0.3);
    } else if (L === "tv") {
      const f = 0.5 + 0.3 * Math.sin(t * 3.1) * Math.sin(t * 0.7) + 0.2 * Math.sin(t * 11.3);
      g.fillStyle = "rgba(110,140,200," + (0.3 + 0.25 * f) + ")";
      g.fillRect(wx + 0.06, wy + 0.06, 1.08, 1.28);
      e.light(wx + 0.6, wy + 0.7, 1.4, "#7090d0", 0.25 * f);
    } else {
      g.fillStyle = "rgba(120,130,160," + (0.05 + 0.06 * d) + ")";
      g.fillRect(wx + 0.1, wy + 0.1, 0.45, 1.2);
    }
    g.fillStyle = "#1c1d22";
    g.fillRect(wx - 0.08, wy + 1.4, 1.36, 0.08);
  }
for (let k = 1; k < 5; k++) {
  const by = -(k * 2.8 + 0.7);
  g.fillStyle = "#1d1e24";
  g.fillRect(0.95, by - 0.9, 1.7, 0.9);
  g.strokeStyle = "rgba(70,72,80,0.5)";
  g.lineWidth = 0.025;
  for (let bx = 1.05; bx < 2.6; bx += 0.15) {
    g.beginPath();
    g.moveTo(bx, by - 0.9);
    g.lineTo(bx, by);
    g.stroke();
  }
  g.fillStyle = "#2a2b31";
  g.fillRect(0.9, by, 1.8, 0.12);
}
const ky = -(3 * 2.8 + 0.7);
g.fillStyle = "#5a2e2c";
g.fillRect(1.1, ky - 1.05, 1.3, 1.1);
g.strokeStyle = "rgba(190,150,90,0.35)";
g.lineWidth = 0.03;
g.strokeRect(1.2, ky - 0.95, 1.1, 0.9);
g.beginPath();
g.moveTo(1.75, ky - 0.9);
g.lineTo(2.2, ky - 0.5);
g.lineTo(1.75, ky - 0.1);
g.lineTo(1.3, ky - 0.5);
g.closePath();
g.stroke();
for (let k = 0; k < 4; k++) {
  const sy = -(k * 2.8 + 3.4);
  g.fillStyle = "#101116";
  g.fillRect(-4.0, sy, 0.8, 1.0);
  g.fillStyle = "rgba(170,180,140,0.32)";
  g.fillRect(-3.95, sy + 0.05, 0.7, 0.9);
}
g.fillStyle = "#2e2621";
g.fillRect(-4.2, -2.1, 1.2, 2.1);
g.fillStyle = "#1a1512";
g.fillRect(-3.65, -2.1, 0.04, 2.1);
g.fillStyle = "#1b1c21";
g.fillRect(-4.9, -2.55, 2.6, 0.22);
const f = 0.88 + 0.07 * Math.sin(t * 13) * Math.sin(t * 2.1) + 0.04 * Math.sin(t * 0.7);
let cone = g.createLinearGradient(0, -2.3, 0, 0);
cone.addColorStop(0, "rgba(255,190,115," + 0.22 * f + ")");
cone.addColorStop(1, "rgba(255,190,115,0.03)");
g.fillStyle = cone;
g.beginPath();
g.moveTo(-3.75, -2.3);
g.lineTo(-3.45, -2.3);
g.lineTo(-2.1, 0);
g.lineTo(-5.1, 0);
g.closePath();
g.fill();
g.fillStyle = "rgba(255,215,160," + (0.6 + 0.4 * f) + ")";
g.beginPath();
g.ellipse(-3.6, -2.27, 0.13, 0.05, 0, 0, 7);
g.fill();
e.light(-3.6, -2.25, 4.5, "#ffbf73", 0.85 * f);
g.textAlign = "center";
g.fillStyle = "rgba(215,210,200,0.42)";
g.font = "bold 0.5px sans-serif";
g.fillText("ЦОЙ ЖИВ", -6.6, -0.25);
g.fillStyle = "rgba(200,200,190,0.3)";
g.fillText("47", -3.6, -2.75);
