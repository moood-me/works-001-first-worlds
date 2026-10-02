var S = e.state;
var L = S.sconceLit == null ? 1 : S.sconceLit;
var D = S.doorOpen == null ? 0 : S.doorOpen;
var LL = S.loftLights == null ? 1 : S.loftLights;
var H = S.caretakerHere == null ? 1 : S.caretakerHere;
g.beginPath();
g.rect(-9, -7, 18, 7.3);
g.rect(-3.2, -2.3, 1.0, 2.6);
g.fillStyle = "#2e1b16";
g.fill("evenodd");
g.save();
g.beginPath();
g.rect(-9, -3.0, 18, 3.3);
g.rect(-3.2, -2.3, 1.0, 2.6);
g.clip("evenodd");
var cols = ["#6b3a2c", "#77412f", "#5e3428", "#82493a", "#6f3f33", "#5a3127"];
var ps = cols.map(function () {
  return new Path2D();
});
for (var r = 0; r < 40; r++) {
  var y = -(r + 1) * 0.077;
  var off = (r % 2) * 0.12;
  for (var x = -9 + off; x < 9; x += 0.24) {
    ps[Math.floor(e.rnd() * 6)].rect(x, y + 0.006, 0.228, 0.066);
  }
}
for (var k = 0; k < 6; k++) {
  g.fillStyle = cols[k];
  g.fill(ps[k]);
}
for (var m = 0; m < 10; m++) {
  var cx = -6 + e.rnd() * 12,
    cy = -2.8 + e.rnd() * 1.8,
    rr = 0.4 + e.rnd() * 1.1;
  var pg = g.createRadialGradient(cx, cy, 0, cx, cy, rr);
  pg.addColorStop(0, "rgba(210,190,170,0.10)");
  pg.addColorStop(1, "rgba(210,190,170,0)");
  g.fillStyle = pg;
  g.fillRect(cx - rr, cy - rr, rr * 2, rr * 2);
}
g.fillStyle = "#35221a";
g.fillRect(-9, -0.95, 18, 0.95);
for (var px = -9; px < 9; px += 0.11) {
  g.fillStyle = "rgba(255,200,150," + e.rnd() * 0.05 + ")";
  g.fillRect(px, -0.95, 0.11, 0.95);
  g.fillStyle = "rgba(10,6,4,0.55)";
  g.fillRect(px, -0.95, 0.008, 0.95);
}
g.fillStyle = "#4a2f21";
g.fillRect(-9, -1.0, 18, 0.06);
g.fillStyle = "rgba(255,190,120,0.22)";
g.fillRect(-9, -1.0, 18, 0.01);
g.fillStyle = "#1f140e";
g.fillRect(-9, -0.12, 18, 0.12);
g.save();
g.translate(-1.9, -1.55);
g.rotate(-0.04);
g.fillStyle = "#b5a990";
g.fillRect(-0.14, -0.19, 0.28, 0.38);
g.fillStyle = "rgba(40,30,25,0.35)";
for (var n = 0; n < 7; n++) {
  g.fillRect(-0.1, -0.12 + n * 0.04, 0.2 * (0.5 + e.rnd() * 0.5), 0.008);
}
g.fillStyle = "#7a3a2a";
g.beginPath();
g.arc(0, -0.16, 0.012, 0, 6.283);
g.fill();
g.restore();
for (var ri = 0; ri < 10; ri++) {
  g.fillStyle = ri % 2 ? "#2a2624" : "#34302d";
  g.fillRect(2.1 + ri * 0.08, -0.8, 0.07, 0.66);
}
g.fillStyle = "rgba(255,180,110,0.12)";
g.fillRect(2.1, -0.8, 0.8, 0.012);
g.fillStyle = "#1c1816";
g.fillRect(2.12, -0.14, 0.04, 0.06);
g.fillRect(2.84, -0.14, 0.04, 0.06);
g.strokeStyle = "#2a2522";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(2.9, -0.5);
g.lineTo(3.15, -0.5);
g.lineTo(3.15, -2.72);
g.lineTo(-9, -2.72);
g.stroke();
g.strokeStyle = "rgba(255,180,110,0.12)";
g.lineWidth = 0.01;
g.beginPath();
g.moveTo(3.1, -2.745);
g.lineTo(-9, -2.745);
g.stroke();
g.fillStyle = "#1c1816";
for (var bk = -8; bk < 3; bk += 1.6) {
  g.fillRect(bk, -2.76, 0.04, 0.09);
}
g.strokeStyle = "#1e1816";
g.lineWidth = 0.022;
g.beginPath();
g.moveTo(-0.4, -2.25);
g.lineTo(-0.4, -2.7);
g.stroke();
var Xw = ((-1.0 - (1 - H) * 3.2) * 4) / 3.3;
if (H > 0.01) {
  g.save();
  g.translate(Xw - 0.55, -1.0);
  g.scale(1, 2.4);
  var sh = g.createRadialGradient(0, 0, 0, 0, 0, 0.38);
  sh.addColorStop(0, "rgba(10,6,5," + 0.3 * L + ")");
  sh.addColorStop(1, "rgba(10,6,5,0)");
  g.fillStyle = sh;
  g.fillRect(-0.4, -0.4, 0.8, 0.8);
  g.restore();
}
var dk = g.createRadialGradient(-0.4, -1.9, 0.1, -0.4, -1.9, 5.5);
dk.addColorStop(0, "rgba(12,7,7," + (0.12 + 0.6 * (1 - L)) + ")");
dk.addColorStop(0.45, "rgba(12,7,7," + (0.5 + 0.3 * (1 - L)) + ")");
dk.addColorStop(1, "rgba(12,7,7,0.84)");
g.fillStyle = dk;
g.fillRect(-9, -3, 18, 3.3);
var ww = g.createRadialGradient(-0.4, -2.0, 0, -0.4, -2.0, 2.4);
ww.addColorStop(0, "rgba(255,170,90," + 0.26 * L + ")");
ww.addColorStop(1, "rgba(255,170,90,0)");
g.fillStyle = ww;
g.fillRect(-3, -3.1, 5.2, 3.4);
g.globalCompositeOperation = "lighter";
var up = g.createRadialGradient(-0.4, -2.15, 0, -0.4, -2.15, 0.95);
up.addColorStop(0, "rgba(255,175,95," + 0.2 * L + ")");
up.addColorStop(1, "rgba(255,175,95,0)");
g.fillStyle = up;
g.beginPath();
g.moveTo(-0.5, -2.15);
g.lineTo(-1.0, -3.0);
g.lineTo(0.2, -3.0);
g.lineTo(-0.3, -2.15);
g.closePath();
g.fill();
var dn = g.createRadialGradient(-0.4, -1.9, 0, -0.4, -1.9, 0.6);
dn.addColorStop(0, "rgba(255,175,95," + 0.1 * L + ")");
dn.addColorStop(1, "rgba(255,175,95,0)");
g.fillStyle = dn;
g.beginPath();
g.moveTo(-0.45, -1.9);
g.lineTo(-0.7, -1.3);
g.lineTo(-0.1, -1.3);
g.lineTo(-0.35, -1.9);
g.closePath();
g.fill();
g.globalCompositeOperation = "source-over";
var dg = g.createRadialGradient(1.0, -1.0, 0, 1.0, -1.0, 2.2);
dg.addColorStop(0, "rgba(255,160,80," + 0.22 * Math.min(1, D * 2) * LL + ")");
dg.addColorStop(1, "rgba(255,160,80,0)");
g.fillStyle = dg;
g.fillRect(-1.2, -3.2, 4.4, 3.4);
var hg = g.createLinearGradient(-9, 0, 9, 0);
hg.addColorStop(0, "rgba(10,6,6,0.85)");
hg.addColorStop(0.28, "rgba(10,6,6,0.5)");
hg.addColorStop(0.42, "rgba(10,6,6,0)");
hg.addColorStop(0.62, "rgba(10,6,6,0)");
hg.addColorStop(0.72, "rgba(10,6,6,0.4)");
hg.addColorStop(1, "rgba(10,6,6,0.85)");
g.fillStyle = hg;
g.fillRect(-9, -3, 18, 3.3);
g.restore();
g.fillStyle = "#16100d";
g.fillRect(-9, -7, 18, 4.0);
g.fillStyle = "#21170f";
g.fillRect(-9, -3.08, 18, 0.1);
g.fillStyle = "rgba(255,175,105," + 0.06 * L + ")";
g.fillRect(-3, -2.99, 5, 0.012);
g.strokeStyle = "#22160f";
g.lineWidth = 0.09;
g.beginPath();
g.moveTo(-3.2, 0);
g.lineTo(-3.2, -2.3);
g.lineTo(-2.2, -2.3);
g.lineTo(-2.2, 0);
g.stroke();
g.strokeStyle = "rgba(255,175,105," + (0.05 + 0.12 * L) + ")";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-2.16, 0);
g.lineTo(-2.16, -2.34);
g.stroke();
