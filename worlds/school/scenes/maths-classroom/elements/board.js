const x0 = -1.4,
  x1 = 3.0,
  y0 = -2.2,
  y1 = -0.85;
g.fillStyle = "rgba(60,45,30,0.2)";
g.fillRect(x0 - 0.04, y0 - 0.03, x1 - x0 + 0.12, y1 - y0 + 0.13);
g.fillStyle = "#7d5e40";
g.fillRect(x0 - 0.06, y0 - 0.06, x1 - x0 + 0.12, y1 - y0 + 0.12);
g.fillStyle = "#5f4631";
g.fillRect(x0 - 0.015, y0 - 0.015, x1 - x0 + 0.03, y1 - y0 + 0.03);
const bg = g.createLinearGradient(x0, y0, x1, y1);
bg.addColorStop(0, "#36564a");
bg.addColorStop(0.5, "#2f4d40");
bg.addColorStop(1, "#29443a");
g.fillStyle = bg;
g.fillRect(x0, y0, x1 - x0, y1 - y0);
for (let i = 0; i < 16; i++) {
  const cx = x0 + e.rnd() * (x1 - x0),
    cy = y0 + e.rnd() * (y1 - y0),
    r = 0.15 + e.rnd() * 0.4;
  const q = g.createRadialGradient(cx, cy, 0, cx, cy, r);
  q.addColorStop(0, "rgba(220,228,215,0.07)");
  q.addColorStop(1, "rgba(220,228,215,0)");
  g.fillStyle = q;
  g.fillRect(cx - r, cy - r, 2 * r, 2 * r);
}
g.save();
g.beginPath();
g.rect(x0, y0, x1 - x0, y1 - y0);
g.clip();
g.strokeStyle = "rgba(225,230,220,0.05)";
g.lineWidth = 0.12;
for (let i = 0; i < 6; i++) {
  const cx = x0 + 0.5 + e.rnd() * 3.4,
    cy = y0 + 0.4 + e.rnd() * 0.7;
  g.beginPath();
  g.arc(cx, cy, 0.3 + e.rnd() * 0.3, Math.PI * 1.1, Math.PI * 1.9);
  g.stroke();
}
const sh = g.createLinearGradient(x0, 0, x0 + 1.8, 0);
sh.addColorStop(0, "rgba(255,250,235,0.11)");
sh.addColorStop(1, "rgba(255,250,235,0)");
g.fillStyle = sh;
g.fillRect(x0, y0, 1.8, y1 - y0);
g.restore();
g.fillStyle = "#8f6e4e";
g.fillRect(x0 - 0.08, y1 + 0.06, x1 - x0 + 0.16, 0.022);
g.fillStyle = "#6a4f37";
g.fillRect(x0 - 0.08, y1 + 0.082, x1 - x0 + 0.16, 0.03);
g.fillStyle = "rgba(235,235,225,0.3)";
g.fillRect(x0, y1 + 0.062, x1 - x0, 0.008);
g.fillStyle = "#f1efe6";
g.fillRect(0.2, y1 + 0.064, 0.08, 0.012);
g.fillRect(0.36, y1 + 0.066, 0.06, 0.011);
g.fillStyle = "#a8975c";
g.fillRect(2.3, y1 + 0.05, 0.15, 0.035);
g.strokeStyle = "#a37b4f";
g.lineWidth = 0.014;
g.lineCap = "round";
g.beginPath();
g.moveTo(-1.25, y1 + 0.072);
g.lineTo(-0.2, y1 + 0.07);
g.stroke();
g.save();
g.scale(0.01, 0.01);
const ch = (t, x, y, s) => {
  g.font = "italic " + s + "px Georgia, serif";
  g.textAlign = "center";
  g.fillStyle = "rgba(236,238,226,0.3)";
  g.fillText(t, x + 0.4, y + 0.35);
  g.fillStyle = "rgba(236,238,226,0.82)";
  g.fillText(t, x, y);
};
ch(tr('2nd October'), 258, -203, 7.5);
ch(tr('Classwork'), 80, -203, 9);
ch("a² + b² = c²", -82, -178, 11);
g.strokeStyle = "rgba(236,238,226,0.8)";
g.lineWidth = 0.9;
g.lineCap = "round";
g.lineJoin = "round";
g.beginPath();
g.moveTo(-125, -158);
g.lineTo(-125, -100);
g.lineTo(-45, -100);
g.closePath();
g.stroke();
g.beginPath();
g.moveTo(-125, -108);
g.lineTo(-117, -108);
g.lineTo(-117, -100);
g.stroke();
ch("a", -132, -126, 8);
ch("b", -85, -90, 8);
ch("c", -80, -134, 8);
ch("ax² + bx + c = 0", 85, -178, 10);
ch("D = b² − 4ac", 85, -156, 10);
ch("x₁,₂ =", 46, -118, 10);
ch("−b ± √D", 112, -126, 9);
g.beginPath();
g.moveTo(88, -121.5);
g.lineTo(137, -121.5);
g.stroke();
ch("2a", 112, -110, 9);
ch(tr('HW: ex. 214, 217'), 85, -93, 7.5);
g.beginPath();
g.arc(212, -140, 24, 0, Math.PI * 2);
g.stroke();
g.beginPath();
g.moveTo(212, -140);
g.lineTo(234, -149);
g.stroke();
g.fillStyle = "rgba(236,238,226,0.85)";
g.fillRect(211, -141, 2, 2);
ch("r", 222, -150, 7);
ch("S = πr²", 268, -150, 9);
ch("C = 2πr", 268, -130, 9);
ch("sin²α + cos²α = 1", 236, -100, 8.5);
g.restore();
