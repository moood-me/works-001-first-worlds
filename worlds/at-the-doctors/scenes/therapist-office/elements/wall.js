var s = e.state || {},
  on = s.lamp == null ? 1 : s.lamp;
function hole() {
  g.beginPath();
  g.rect(-12, -5.2, 24, 5.25);
  g.rect(-3.2, -2.6, 1.8, 1.75);
}
hole();
g.fillStyle = "#4a4238";
g.fill("evenodd");
g.save();
hole();
g.clip("evenodd");
var lg = g.createRadialGradient(2.6, -1.5, 0.1, 2.6, -1.5, 7);
lg.addColorStop(0, "rgba(255,186,120," + (0.42 * on).toFixed(3) + ")");
lg.addColorStop(0.35, "rgba(214,150,96," + (0.18 * on).toFixed(3) + ")");
lg.addColorStop(1, "rgba(214,150,96,0)");
g.fillStyle = lg;
g.fillRect(-12, -5.2, 24, 5.3);
var wg = g.createRadialGradient(-2.3, -1.7, 0.2, -2.3, -1.7, 3);
wg.addColorStop(0, "rgba(120,140,170,0.12)");
wg.addColorStop(1, "rgba(120,140,170,0)");
g.fillStyle = wg;
g.fillRect(-12, -5.2, 24, 5.3);
g.globalAlpha = 0.045;
g.fillStyle = "#d8c6a8";
for (var i = -12; i < 12; i += 0.32) {
  g.fillRect(i, -5.2, 0.03, 5.3);
}
g.globalAlpha = 1;
g.fillStyle = "rgba(30,24,18,0.6)";
g.fillRect(-12, -3.08, 24, 0.07);
var tg = g.createLinearGradient(0, -5.2, 0, -2.4);
tg.addColorStop(0, "rgba(18,14,11,0.9)");
tg.addColorStop(1, "rgba(18,14,11,0)");
g.fillStyle = tg;
g.fillRect(-12, -5.2, 24, 2.8);
var sg = g.createLinearGradient(-12, 0, 12, 0);
sg.addColorStop(0, "rgba(15,12,10,0.85)");
sg.addColorStop(0.3, "rgba(15,12,10,0)");
sg.addColorStop(0.72, "rgba(15,12,10,0)");
sg.addColorStop(1, "rgba(15,12,10,0.85)");
g.fillStyle = sg;
g.fillRect(-12, -5.2, 24, 5.3);
var dk = (1 - on) * 0.45;
if (dk > 0) {
  g.fillStyle = "rgba(12,12,18," + dk.toFixed(3) + ")";
  g.fillRect(-12, -5.2, 24, 5.3);
}
g.restore();
g.fillStyle = "#2e261f";
g.fillRect(-12, -0.14, 24, 0.14);
g.fillStyle = "rgba(255,200,150,0.08)";
g.fillRect(-12, -0.14, 24, 0.015);
