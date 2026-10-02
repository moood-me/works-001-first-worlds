const ppl = [
  ["ПИФАГОР", -0.7, 0],
  ["ДЕКАРТ", 0.3, 1],
  ["ЛОБАЧЕВСКИЙ", 1.3, 2],
  ["КОВАЛЕВСКАЯ", 2.3, 3],
];
const el = (x, y, rx, ry, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  g.fill();
};
const top = (x, y, rx, ry, c) => {
  g.fillStyle = c;
  g.beginPath();
  g.ellipse(x, y, rx, ry, 0, Math.PI, 2 * Math.PI);
  g.fill();
};
ppl.forEach(([nm, cx, tp]) => {
  const x0 = cx - 0.24,
    hy = -2.8;
  g.fillStyle = "rgba(60,45,30,0.18)";
  g.fillRect(x0 + 0.02, -3.0, 0.48, 0.66);
  g.fillStyle = "#3f2e21";
  g.fillRect(x0, -3.02, 0.48, 0.64);
  g.fillStyle = "#e2d8c0";
  g.fillRect(x0 + 0.03, -2.99, 0.42, 0.58);
  g.save();
  g.beginPath();
  g.rect(x0 + 0.06, -2.96, 0.36, 0.44);
  g.clip();
  const bg = g.createLinearGradient(0, -2.96, 0, -2.52);
  bg.addColorStop(0, "#bfab86");
  bg.addColorStop(1, "#8a765a");
  g.fillStyle = bg;
  g.fillRect(x0 + 0.06, -2.96, 0.36, 0.44);
  if (tp == 1) el(cx, hy + 0.04, 0.1, 0.13, "#2b221c");
  if (tp == 3) el(cx, hy - 0.075, 0.04, 0.03, "#2e241d");
  g.fillStyle = tp == 0 ? "#cdc1a5" : tp == 3 ? "#3a2c2a" : "#332820";
  g.beginPath();
  g.moveTo(cx - 0.18, -2.52);
  g.bezierCurveTo(cx - 0.17, -2.66, cx - 0.08, -2.7, cx, -2.7);
  g.bezierCurveTo(cx + 0.08, -2.7, cx + 0.17, -2.66, cx + 0.18, -2.52);
  g.closePath();
  g.fill();
  g.fillStyle = "#b39d79";
  g.fillRect(cx - 0.025, -2.745, 0.05, 0.05);
  if (tp == 0) {
    g.strokeStyle = "rgba(120,105,85,0.6)";
    g.lineWidth = 0.006;
    g.beginPath();
    g.moveTo(cx - 0.12, -2.62);
    g.quadraticCurveTo(cx, -2.6, cx + 0.1, -2.69);
    g.stroke();
  }
  if (tp == 1) {
    g.fillStyle = "#e9e1cd";
    g.beginPath();
    g.moveTo(cx - 0.07, -2.695);
    g.lineTo(cx + 0.07, -2.695);
    g.lineTo(cx + 0.05, -2.645);
    g.lineTo(cx - 0.05, -2.645);
    g.closePath();
    g.fill();
  }
  if (tp == 2) {
    g.fillStyle = "#e6dcc6";
    g.beginPath();
    g.moveTo(cx - 0.035, -2.7);
    g.lineTo(cx + 0.035, -2.7);
    g.lineTo(cx, -2.6);
    g.closePath();
    g.fill();
    el(cx, -2.688, 0.024, 0.012, "#2a211b");
  }
  if (tp == 3) el(cx, -2.692, 0.06, 0.018, "#e3d9c3");
  const hg = g.createRadialGradient(cx - 0.025, hy - 0.02, 0.01, cx, hy, 0.09);
  hg.addColorStop(0, "#d8c6a3");
  hg.addColorStop(1, "#a99372");
  g.fillStyle = hg;
  g.beginPath();
  g.ellipse(cx, hy, tp == 3 ? 0.055 : 0.062, tp == 3 ? 0.075 : 0.082, 0, 0, Math.PI * 2);
  g.fill();
  if (tp == 0) {
    el(cx, hy + 0.07, 0.056, 0.06, "#958a78");
    el(cx - 0.06, hy - 0.01, 0.018, 0.035, "#958a78");
    el(cx + 0.06, hy - 0.01, 0.018, 0.035, "#958a78");
    g.strokeStyle = "#e8dfca";
    g.lineWidth = 0.008;
    g.beginPath();
    g.ellipse(cx, hy - 0.03, 0.063, 0.02, 0, Math.PI, 2 * Math.PI);
    g.stroke();
  }
  if (tp == 1) {
    top(cx, hy - 0.04, 0.068, 0.05, "#2b221c");
    el(cx - 0.068, hy + 0.03, 0.028, 0.085, "#2b221c");
    el(cx + 0.068, hy + 0.03, 0.028, 0.085, "#2b221c");
    g.fillStyle = "#3a2e25";
    g.fillRect(cx - 0.02, hy + 0.035, 0.04, 0.007);
  }
  if (tp == 2) {
    top(cx, hy - 0.045, 0.064, 0.042, "#4a3e33");
    el(cx - 0.058, hy + 0.02, 0.012, 0.04, "#4a3e33");
    el(cx + 0.058, hy + 0.02, 0.012, 0.04, "#4a3e33");
  }
  if (tp == 3) {
    top(cx, hy - 0.03, 0.06, 0.05, "#2e241d");
    el(cx - 0.05, hy - 0.005, 0.015, 0.03, "#2e241d");
    el(cx + 0.05, hy - 0.005, 0.015, 0.03, "#2e241d");
  }
  g.fillStyle = "rgba(255,252,240,0.09)";
  g.beginPath();
  g.moveTo(x0 + 0.06, -2.96);
  g.lineTo(x0 + 0.22, -2.96);
  g.lineTo(x0 + 0.06, -2.68);
  g.closePath();
  g.fill();
  g.restore();
  g.save();
  g.scale(0.01, 0.01);
  g.font = "3.4px Georgia, serif";
  g.textAlign = "center";
  g.fillStyle = "rgba(60,45,30,0.8)";
  g.fillText(nm, cx * 100, -244.5);
  g.restore();
});
