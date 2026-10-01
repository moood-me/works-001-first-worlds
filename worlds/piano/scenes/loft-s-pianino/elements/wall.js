var Lt = e.state.lights == null ? 1 : e.state.lights;
var wx0 = -6.2,
  wx1 = -2.0,
  wy0 = -4.0,
  wy1 = -0.85;
g.beginPath();
g.rect(-16, -12, 32, 12.4);
g.rect(wx0, wy0, wx1 - wx0, wy1 - wy0);
g.fillStyle = "#3e241d";
g.fill("evenodd");
g.save();
g.beginPath();
g.rect(-16, -4.75, 32, 5.15);
g.rect(wx0, wy0, wx1 - wx0, wy1 - wy0);
g.clip("evenodd");
var cols = ["#6b3a2c", "#77412f", "#5e3428", "#82493a", "#6f3f33", "#5a3127"];
var ps = cols.map(function () {
  return new Path2D();
});
for (var r = 0; r < 62; r++) {
  var y = -(r + 1) * 0.077;
  var off = (r % 2) * 0.12;
  for (var x = -16 + off; x < 16; x += 0.24) {
    ps[Math.floor(e.rnd() * 6)].rect(x, y + 0.006, 0.228, 0.066);
  }
}
for (var k = 0; k < 6; k++) {
  g.fillStyle = cols[k];
  g.fill(ps[k]);
}
for (var m = 0; m < 14; m++) {
  var cx = -14 + e.rnd() * 28,
    cy = -4.5 + e.rnd() * 4.3,
    rr = 0.6 + e.rnd() * 1.6;
  var wg = g.createRadialGradient(cx, cy, 0, cx, cy, rr);
  wg.addColorStop(0, "rgba(210,190,170,0.10)");
  wg.addColorStop(1, "rgba(210,190,170,0)");
  g.fillStyle = wg;
  g.fillRect(cx - rr, cy - rr, rr * 2, rr * 2);
}
var sg = g.createLinearGradient(0, -4.75, 0, 0);
sg.addColorStop(0, "rgba(12,8,10,0.62)");
sg.addColorStop(0.6, "rgba(12,8,10,0.32)");
sg.addColorStop(1, "rgba(12,8,10,0.48)");
g.fillStyle = sg;
g.fillRect(-16, -4.75, 32, 4.8);
var hg = g.createLinearGradient(-16, 0, 16, 0);
hg.addColorStop(0, "rgba(10,6,8,0.6)");
hg.addColorStop(0.35, "rgba(10,6,8,0)");
hg.addColorStop(0.7, "rgba(10,6,8,0.1)");
hg.addColorStop(1, "rgba(10,6,8,0.65)");
g.fillStyle = hg;
g.fillRect(-16, -4.75, 32, 4.8);
var wg2 = g.createRadialGradient(-0.3, -2.0, 0, -0.3, -2.0, 4.5);
wg2.addColorStop(0, "rgba(255,165,90," + 0.3 * Lt + ")");
wg2.addColorStop(1, "rgba(255,165,90,0)");
g.fillStyle = wg2;
g.fillRect(-5, -6.5, 9.5, 7);
var cw = g.createRadialGradient(-4.1, -2.4, 0, -4.1, -2.4, 3.6);
cw.addColorStop(0, "rgba(110,120,170,0.13)");
cw.addColorStop(1, "rgba(110,120,170,0)");
g.fillStyle = cw;
g.fillRect(-8, -6, 8, 6);
g.restore();
g.fillStyle = "#17120f";
g.fillRect(-16, -12, 32, 7.25);
g.fillStyle = "#231b17";
g.fillRect(-16, -4.95, 32, 0.2);
g.fillStyle = "rgba(255,180,110,0.08)";
g.fillRect(-16, -4.77, 32, 0.02);
g.fillStyle = "rgba(140,160,210,0.05)";
g.fillRect(wx0, wy0, wx1 - wx0, wy1 - wy0);
g.fillStyle = "rgba(20,12,10,0.75)";
g.fillRect(wx0, wy0, 0.12, wy1 - wy0);
g.fillRect(wx0, wy0, wx1 - wx0, 0.1);
var fx = wx0 + 0.12,
  fy = wy0 + 0.1,
  fw = wx1 - wx0 - 0.16,
  fh = wy1 - wy0 - 0.14;
g.strokeStyle = "#15131a";
g.lineWidth = 0.08;
g.strokeRect(fx, fy, fw, fh);
g.lineWidth = 0.035;
g.beginPath();
for (var i = 1; i < 4; i++) {
  g.moveTo(fx + (fw * i) / 4, fy);
  g.lineTo(fx + (fw * i) / 4, fy + fh);
}
for (var j = 1; j < 5; j++) {
  g.moveTo(fx, fy + (fh * j) / 5);
  g.lineTo(fx + fw, fy + (fh * j) / 5);
}
g.stroke();
g.strokeStyle = "rgba(255,190,130,0.12)";
g.lineWidth = 0.01;
g.beginPath();
for (var i2 = 1; i2 < 4; i2++) {
  g.moveTo(fx + (fw * i2) / 4 + 0.02, fy);
  g.lineTo(fx + (fw * i2) / 4 + 0.02, fy + fh);
}
g.stroke();
g.fillStyle = "#3b3533";
g.fillRect(wx0 - 0.12, wy1, wx1 - wx0 + 0.24, 0.07);
g.fillStyle = "rgba(255,200,150,0.08)";
g.fillRect(wx0 - 0.12, wy1, wx1 - wx0 + 0.24, 0.012);
g.strokeStyle = "#221d1b";
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(-16, -4.45);
g.lineTo(3.6, -4.45);
g.quadraticCurveTo(3.8, -4.45, 3.8, -4.25);
g.lineTo(3.8, 0);
g.stroke();
g.strokeStyle = "rgba(255,180,110,0.15)";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(-16, -4.475);
g.lineTo(3.6, -4.475);
g.stroke();
g.fillStyle = "#1c1512";
g.fillRect(1.55, -2.75, 1.0, 1.25);
g.fillStyle = "#cfc2aa";
g.fillRect(1.6, -2.7, 0.9, 1.15);
g.globalAlpha = 0.7;
g.fillStyle = "#b4683f";
g.beginPath();
g.arc(2.05, -2.25, 0.22, 0, 6.283);
g.fill();
g.globalAlpha = 1;
g.strokeStyle = "#2d2622";
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(1.75, -1.85);
g.bezierCurveTo(1.95, -2.0, 2.15, -1.7, 2.35, -1.9);
g.stroke();
g.fillStyle = "rgba(30,18,12,0.28)";
g.fillRect(1.55, -2.75, 1.0, 1.25);
