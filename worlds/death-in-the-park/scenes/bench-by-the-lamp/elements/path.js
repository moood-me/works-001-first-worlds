var S = e.state || {},
  L = S.lamp == null ? 0.75 : S.lamp;
var gr = g.createLinearGradient(0, -1.65, 0, 1.65);
gr.addColorStop(0, "#45454c");
gr.addColorStop(1, "#393940");
g.fillStyle = gr;
g.fillRect(-20, -1.65, 40, 3.3);
for (var i = 0; i < 5000; i++) {
  var x = (e.rnd() - 0.5) * 40,
    y = (e.rnd() - 0.5) * 3.2;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(20,20,26,0.4)" : "rgba(150,150,165,0.16)";
  g.fillRect(x, y, 0.025, 0.025);
}
for (var i = 0; i < 40; i++) {
  g.fillStyle = "rgba(18,20,30,0.25)";
  g.beginPath();
  g.ellipse((e.rnd() - 0.5) * 40, (e.rnd() - 0.5) * 2.8, 0.4 + e.rnd() * 1.1, 0.2 + e.rnd() * 0.4, 0, 0, Math.PI * 2);
  g.fill();
}
var pd = [
  [-0.3, 0.5, 0.9, 0.28],
  [1.8, -0.7, 0.6, 0.2],
  [-2.7, -0.9, 0.7, 0.22],
  [3.4, 0.9, 1.1, 0.3],
  [-0.9, -1.15, 0.5, 0.16],
];
for (var i = 0; i < pd.length; i++) {
  var q = pd[i];
  g.fillStyle = "#29324f";
  g.beginPath();
  g.ellipse(q[0], q[1], q[2], q[3], 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#38426a";
  g.beginPath();
  g.ellipse(q[0] + 0.05, q[1] - 0.03, q[2] * 0.7, q[3] * 0.55, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = "rgba(20,20,26,0.5)";
  g.lineWidth = 0.02;
  g.beginPath();
  g.ellipse(q[0], q[1], q[2], q[3], 0, 0, Math.PI * 2);
  g.stroke();
}
g.save();
g.translate(-1.15, -2.4);
var p = g.createRadialGradient(0, 0, 0, 0, 0, 3.8);
p.addColorStop(0, "rgba(255,196,128," + 0.4 * L + ")");
p.addColorStop(0.5, "rgba(255,196,128," + 0.13 * L + ")");
p.addColorStop(1, "rgba(255,196,128,0)");
g.fillStyle = p;
g.beginPath();
g.arc(0, 0, 3.8, 0, Math.PI * 2);
g.fill();
g.restore();
for (var i = 0; i < 28; i++) {
  var u = i / 28,
    y = -1.6 + u * 3.1,
    xx = -1.15 * (1 - (y + 2.4) / 5.7) + (e.rnd() - 0.5) * 0.12,
    ww = 0.06 + u * 0.25 * e.rnd() + 0.05;
  g.fillStyle = "rgba(255,205,140," + 0.5 * (1 - u) * L * (0.4 + e.rnd() * 0.6) + ")";
  g.fillRect(xx - ww / 2, y, ww, 0.025 + u * 0.03);
}
var cols = ["#7a4a22", "#9a6a2a", "#4e2e1c"];
for (var i = 0; i < 140; i++) {
  g.fillStyle = cols[i % 3];
  g.globalAlpha = 0.55 + e.rnd() * 0.3;
  g.save();
  g.translate((e.rnd() - 0.5) * 40, (e.rnd() - 0.5) * 3.1);
  g.rotate(e.rnd() * 6);
  g.beginPath();
  g.ellipse(0, 0, 0.07, 0.04, 0, 0, Math.PI * 2);
  g.fill();
  g.restore();
}
g.globalAlpha = 1;
g.fillStyle = "#2a2a30";
g.fillRect(-20, -1.65, 40, 0.08);
