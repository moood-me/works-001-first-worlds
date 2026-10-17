var S = e.state;
var L = S.sconceLit == null ? 1 : S.sconceLit;
var D = Math.max(0, Math.min(1, S.doorOpen == null ? 0 : S.doorOpen));
var LL = S.loftLights == null ? 1 : S.loftLights;
var H = S.caretakerHere == null ? 1 : S.caretakerHere;
g.fillStyle = "#22150f";
g.fillRect(-10, -1.25, 20, 2.5);
var tones = ["#5a3a28", "#4e3224", "#634230", "#553627", "#5f3d2a", "#4a2f22"];
var pw = 0.14;
for (var y = -1.25; y < 1.25; y += pw) {
  var x = -10 - e.rnd() * 2;
  var hh = Math.min(pw, 1.25 - y) - 0.012;
  while (x < 10) {
    var len = 0.9 + e.rnd() * 2.2;
    var a0 = Math.max(x, -10),
      a1 = Math.min(x + len, 10);
    if (a1 > a0 && hh > 0) {
      g.fillStyle = tones[Math.floor(e.rnd() * 6)];
      g.fillRect(a0 + 0.006, y + 0.006, a1 - a0 - 0.012, hh);
    }
    x += len;
  }
}
g.fillStyle = "#4a2b27";
g.fillRect(-10, -0.75, 20, 0.85);
g.strokeStyle = "#6b3d31";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-10, -0.69);
g.lineTo(10, -0.69);
g.moveTo(-10, 0.04);
g.lineTo(10, 0.04);
g.stroke();
g.strokeStyle = "rgba(150,115,85,0.6)";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-10, -0.62);
g.lineTo(10, -0.62);
g.moveTo(-10, -0.03);
g.lineTo(10, -0.03);
g.stroke();
g.fillStyle = "#5e3630";
for (var dx = -10; dx < 10; dx += 0.5) {
  g.beginPath();
  g.moveTo(dx, -0.45);
  g.lineTo(dx + 0.12, -0.325);
  g.lineTo(dx, -0.2);
  g.lineTo(dx - 0.12, -0.325);
  g.closePath();
  g.fill();
}
var wr = g.createLinearGradient(-3, 0, 3, 0);
wr.addColorStop(0, "rgba(170,140,120,0)");
wr.addColorStop(0.5, "rgba(170,140,120,0.08)");
wr.addColorStop(1, "rgba(170,140,120,0)");
g.fillStyle = wr;
g.fillRect(-3, -0.6, 6, 0.6);
g.fillStyle = "#3a3127";
g.fillRect(0.55, -1.23, 0.9, 0.36);
g.fillStyle = "rgba(20,14,10,0.4)";
for (var q = 0; q < 120; q++) {
  g.fillRect(0.56 + e.rnd() * 0.86, -1.22 + e.rnd() * 0.33, 0.02, 0.01);
}
g.fillStyle = "rgba(12,8,7,0.5)";
g.fillRect(-10, -1.25, 20, 2.5);
var hg = g.createLinearGradient(-10, 0, 10, 0);
hg.addColorStop(0, "rgba(10,6,6,0.85)");
hg.addColorStop(0.33, "rgba(10,6,6,0.5)");
hg.addColorStop(0.42, "rgba(10,6,6,0)");
hg.addColorStop(0.6, "rgba(10,6,6,0)");
hg.addColorStop(0.68, "rgba(10,6,6,0.4)");
hg.addColorStop(1, "rgba(10,6,6,0.85)");
g.fillStyle = hg;
g.fillRect(-10, -1.25, 20, 2.5);
var nr = g.createLinearGradient(0, -1.25, 0, 1.25);
nr.addColorStop(0, "rgba(10,6,6,0)");
nr.addColorStop(1, "rgba(10,6,6,0.5)");
g.fillStyle = nr;
g.fillRect(-10, -1.25, 20, 2.5);
var sp = g.createRadialGradient(-0.4, -1.0, 0, -0.4, -1.0, 2.0);
sp.addColorStop(0, "rgba(255,170,95," + 0.24 * L + ")");
sp.addColorStop(1, "rgba(255,170,95,0)");
g.fillStyle = sp;
g.fillRect(-2.6, -1.25, 4.4, 2.5);
if (H > 0.01) {
  var X = -1.0 - (1 - H) * 3.2;
  g.fillStyle = "rgba(8,5,4," + 0.28 * L + ")";
  g.beginPath();
  g.ellipse(X - 0.5, -0.57, 0.6, 0.1, -0.08, 0, 6.283);
  g.fill();
}
if (LL > 0.01) {
  g.fillStyle = "rgba(255,170,90," + 0.2 * LL + ")";
  g.fillRect(0.5, -1.25, 1, 0.05);
}
if (D > 0.02 && LL > 0.01) {
  var xf = 1.5 - Math.cos(D * 1.35);
  var nx = function (p) {
    return 1.2 + (p - 1.2) * 2.43;
  };
  var dsp = g.createLinearGradient(0, -1.25, 0, 1.25);
  dsp.addColorStop(0, "rgba(255,165,85," + 0.4 * LL * Math.min(1, D * 3) + ")");
  dsp.addColorStop(1, "rgba(255,165,85,0)");
  g.fillStyle = dsp;
  g.beginPath();
  g.moveTo(0.5, -1.25);
  g.lineTo(xf, -1.25);
  g.lineTo(nx(xf), 1.25);
  g.lineTo(nx(0.5), 1.25);
  g.closePath();
  g.fill();
}
