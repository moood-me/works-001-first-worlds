var T = function (s, x, y, sz, c, f) {
  g.save();
  g.translate(x, y);
  g.scale(0.001, 0.001);
  g.fillStyle = c;
  g.font = (f ? f + " " : "") + sz + "px Helvetica, Arial, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(s, 0, 0);
  g.restore();
};
g.fillStyle = "#e6ebe8";
g.fillRect(-0.9, -0.425, 1.8, 0.85);
var gr = g.createLinearGradient(0, -0.425, 0, 0.425);
gr.addColorStop(0, "rgba(250,255,252,0.45)");
gr.addColorStop(1, "rgba(150,170,160,0.12)");
g.fillStyle = gr;
g.fillRect(-0.9, -0.425, 1.8, 0.85);
g.strokeStyle = "#c4cec8";
g.lineWidth = 0.01;
g.strokeRect(-0.895, -0.42, 1.79, 0.84);
g.fillStyle = "#e0e8e3";
g.fillRect(-0.47, -0.15, 0.03, 0.32);
g.fillStyle = "#9aa8a1";
for (var k = 0; k < 16; k++) g.fillRect(-0.47, -0.14 + k * 0.02, k % 5 ? 0.008 : 0.015, 0.002);
for (var i = 0; i < 4; i++) {
  var x = -0.6 + i * 0.03;
  g.fillStyle = "#6d8a7b";
  g.fillRect(x - 0.005, -0.12, 0.01, 0.18);
  g.fillStyle = "#d8c8a8";
  g.beginPath();
  g.moveTo(x - 0.005, 0.06);
  g.lineTo(x + 0.005, 0.06);
  g.lineTo(x, 0.085);
  g.closePath();
  g.fill();
  g.fillStyle = "#2f3a35";
  g.fillRect(x - 0.0015, 0.078, 0.003, 0.007);
}
g.save();
g.translate(0.09, 0);
g.fillStyle = "rgba(70,90,80,0.18)";
g.fillRect(-0.28, 0.115, 0.6, 0.33);
g.fillStyle = "#c9bd9b";
g.fillRect(-0.29, 0.1, 0.58, 0.32);
g.fillStyle = "#f4f3ee";
g.fillRect(-0.276, 0.112, 0.27, 0.296);
g.fillRect(0.006, 0.112, 0.27, 0.296);
g.fillStyle = "rgba(120,110,90,0.3)";
g.fillRect(-0.004, 0.1, 0.008, 0.32);
T("ДЕЛО № 0417", -0.14, 0.135, 20, "#3d4a45", "600");
g.fillStyle = "#a7b1ab";
g.fillRect(-0.26, 0.16, 0.07, 0.09);
g.fillStyle = "#6f7c76";
g.beginPath();
g.arc(-0.225, 0.19, 0.015, 0, 6.283);
g.fill();
g.beginPath();
g.moveTo(-0.255, 0.25);
g.quadraticCurveTo(-0.225, 0.2, -0.195, 0.25);
g.closePath();
g.fill();
g.fillStyle = "#8a9690";
for (var i = 0; i < 5; i++) g.fillRect(-0.175, 0.168 + i * 0.017, 0.15 - (i % 2) * 0.04, 0.004);
g.save();
g.translate(-0.14, 0.35);
g.strokeStyle = "#a5483f";
g.lineWidth = 0.004;
g.strokeRect(-0.115, -0.025, 0.23, 0.05);
T("ПОД НАБЛЮДЕНИЕМ", 0, 0, 17, "#a5483f", "700");
g.restore();
var n = Math.min(15, e.state.notes || 0);
g.strokeStyle = "#3e4f5c";
g.lineWidth = 0.0025;
for (var i = 0; i < n; i++) {
  var y = 0.13 + i * 0.018,
    len = 0.12 + 0.11 * e.rnd();
  g.beginPath();
  g.moveTo(0.025, y);
  for (var x = 0.025; x < 0.025 + len; x += 0.005) {
    g.lineTo(x, y + Math.sin(x * 900 + i * 3) * 0.003);
  }
  g.stroke();
}
if (n > 6) {
  var uy = 0.13 + 6 * 0.018;
  g.strokeStyle = "#a5483f";
  g.lineWidth = 0.003;
  g.beginPath();
  g.moveTo(0.025, uy + 0.006);
  g.lineTo(0.2, uy + 0.006);
  g.moveTo(0.025, uy + 0.01);
  g.lineTo(0.2, uy + 0.01);
  g.stroke();
}
g.restore();
