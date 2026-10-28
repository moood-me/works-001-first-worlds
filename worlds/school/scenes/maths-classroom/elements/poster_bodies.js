const x0 = -3.0,
  x1 = -1.75,
  y0 = -2.32,
  y1 = -1.22;
g.fillStyle = "rgba(60,45,30,0.16)";
g.fillRect(x0 + 0.015, y0 + 0.02, x1 - x0, y1 - y0);
g.fillStyle = "#ece5d1";
g.fillRect(x0, y0, x1 - x0, y1 - y0);
g.strokeStyle = "#8a9aa4";
g.lineWidth = 0.012;
g.strokeRect(x0 + 0.03, y0 + 0.03, x1 - x0 - 0.06, y1 - y0 - 0.06);
const T = (t, x, y, s) => {
  g.save();
  g.scale(0.01, 0.01);
  g.font = s + "px Georgia, serif";
  g.textAlign = "center";
  g.fillStyle = "#3e4a52";
  g.fillText(t, x * 100, y * 100);
  g.restore();
};
T(tr('GEOMETRIC SOLIDS'), -2.375, -2.2, 4.6);
g.lineJoin = "round";
const S = () => {
  g.strokeStyle = "#4b4136";
  g.lineWidth = 0.004;
  g.setLineDash([]);
};
const dash = () => {
  g.strokeStyle = "rgba(75,65,54,0.6)";
  g.lineWidth = 0.003;
  g.setLineDash([0.012, 0.01]);
};
const pg = (pts, c) => {
  g.beginPath();
  pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
  g.closePath();
  g.fillStyle = c;
  g.fill();
  S();
  g.stroke();
};
pg(
  [
    [-2.86, -1.98],
    [-2.66, -1.98],
    [-2.59, -2.05],
    [-2.79, -2.05],
  ],
  "#c4d1da",
);
pg(
  [
    [-2.66, -1.98],
    [-2.59, -2.05],
    [-2.59, -1.85],
    [-2.66, -1.78],
  ],
  "#8fa4b3",
);
pg(
  [
    [-2.86, -1.98],
    [-2.66, -1.98],
    [-2.66, -1.78],
    [-2.86, -1.78],
  ],
  "#a9bcc9",
);
T("V = a³", -2.74, -1.7, 3.4);
const cx = -2.38;
g.fillStyle = "#d4b98a";
g.fillRect(cx - 0.09, -2.0, 0.18, 0.21);
g.beginPath();
g.ellipse(cx, -1.79, 0.09, 0.028, 0, 0, Math.PI);
g.fill();
S();
g.stroke();
g.beginPath();
g.moveTo(cx - 0.09, -2.0);
g.lineTo(cx - 0.09, -1.79);
g.moveTo(cx + 0.09, -2.0);
g.lineTo(cx + 0.09, -1.79);
g.stroke();
dash();
g.beginPath();
g.ellipse(cx, -1.79, 0.09, 0.028, 0, Math.PI, 2 * Math.PI);
g.stroke();
S();
g.beginPath();
g.ellipse(cx, -2.0, 0.09, 0.028, 0, 0, Math.PI * 2);
g.fillStyle = "#e3cfa6";
g.fill();
g.stroke();
T("V = πr²h", cx, -1.7, 3.4);
const kx = -2.0;
g.beginPath();
g.moveTo(kx, -2.06);
g.lineTo(kx + 0.1, -1.79);
g.ellipse(kx, -1.79, 0.1, 0.03, 0, 0, Math.PI);
g.lineTo(kx, -2.06);
g.fillStyle = "#c99a86";
g.fill();
S();
g.stroke();
dash();
g.beginPath();
g.ellipse(kx, -1.79, 0.1, 0.03, 0, Math.PI, 2 * Math.PI);
g.stroke();
T("V = ⅓πr²h", kx, -1.7, 3.4);
pg(
  [
    [-2.84, -1.36],
    [-2.6, -1.36],
    [-2.52, -1.42],
    [-2.68, -1.6],
  ],
  "#b5c4a2",
);
pg(
  [
    [-2.84, -1.36],
    [-2.68, -1.6],
    [-2.6, -1.36],
  ],
  "#a8b894",
);
dash();
g.beginPath();
g.moveTo(-2.76, -1.42);
g.lineTo(-2.52, -1.42);
g.moveTo(-2.76, -1.42);
g.lineTo(-2.84, -1.36);
g.moveTo(-2.76, -1.42);
g.lineTo(-2.68, -1.6);
g.stroke();
S();
T("V = ⅓Sh", -2.68, -1.29, 3.4);
const sx = -2.2,
  sy = -1.47;
const rg = g.createRadialGradient(sx - 0.03, sy - 0.03, 0.01, sx, sy, 0.09);
rg.addColorStop(0, "#e3d8ea");
rg.addColorStop(1, "#a99bb6");
g.fillStyle = rg;
g.beginPath();
g.arc(sx, sy, 0.09, 0, Math.PI * 2);
g.fill();
S();
g.stroke();
g.beginPath();
g.ellipse(sx, sy, 0.09, 0.026, 0, 0, Math.PI);
g.stroke();
dash();
g.beginPath();
g.ellipse(sx, sy, 0.09, 0.026, 0, Math.PI, 2 * Math.PI);
g.stroke();
S();
T("V = ⁴⁄₃πr³", sx, -1.29, 3.4);
g.setLineDash([]);
g.fillStyle = "#6a6a6a";
g.beginPath();
g.arc(-2.375, -2.335, 0.008, 0, Math.PI * 2);
g.fill();
