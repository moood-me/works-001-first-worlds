var Lt = e.state.lights == null ? 1 : e.state.lights;
var tones = ["#5a3a28", "#4e3224", "#634230", "#553627", "#5f3d2a", "#4a2f22"];
g.fillStyle = "#2a1a12";
g.fillRect(-16, -3.75, 32, 7.5);
var pw = 0.16;
for (var x = -16; x < 16; x += pw) {
  var y = -3.75 - e.rnd() * 2;
  while (y < 3.75) {
    var len = 1.2 + e.rnd() * 2.4;
    var y0 = Math.max(y, -3.75),
      y1 = Math.min(y + len, 3.75);
    if (y1 > y0) {
      g.fillStyle = tones[Math.floor(e.rnd() * 6)];
      g.fillRect(x + 0.006, y0 + 0.006, pw - 0.012, y1 - y0 - 0.012);
    }
    y += len;
  }
}
var sh = g.createLinearGradient(0, -3.75, 0, 3.75);
sh.addColorStop(0, "rgba(14,9,8,0.35)");
sh.addColorStop(1, "rgba(14,9,8,0.6)");
g.fillStyle = sh;
g.fillRect(-16, -3.75, 32, 7.5);
var hg = g.createLinearGradient(-16, 0, 16, 0);
hg.addColorStop(0, "rgba(10,6,6,0.6)");
hg.addColorStop(0.4, "rgba(10,6,6,0)");
hg.addColorStop(0.7, "rgba(10,6,6,0)");
hg.addColorStop(1, "rgba(10,6,6,0.6)");
g.fillStyle = hg;
g.fillRect(-16, -3.75, 32, 7.5);
var wp = g.createRadialGradient(0.9, -2.6, 0, 0.9, -2.6, 3.4);
wp.addColorStop(0, "rgba(255,170,95," + 0.32 * Lt + ")");
wp.addColorStop(1, "rgba(255,170,95,0)");
g.fillStyle = wp;
g.fillRect(-3, -3.75, 8, 7);
var wr = g.createLinearGradient(0, -3.75, 0, -1);
wr.addColorStop(0, "rgba(150,140,190,0.12)");
wr.addColorStop(1, "rgba(150,140,190,0)");
g.fillStyle = wr;
g.fillRect(-5, -3.75, 4.2, 2.75);
g.fillStyle = "rgba(8,5,4,0.45)";
g.beginPath();
g.ellipse(1.2, -3.5, 0.95, 0.25, 0, 0, 6.283);
g.fill();
