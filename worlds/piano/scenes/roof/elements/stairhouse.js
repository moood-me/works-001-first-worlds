var t = e.t,
  o = Math.max(0, Math.min(1, e.state.roofDoorOpen || 0));
g.fillStyle = "rgba(5,5,12,0.45)";
g.fillRect(-1.5, -0.02, 3.0, 0.1);
g.fillStyle = "#2f2530";
g.fillRect(-1.4, -2.5, 2.8, 2.5);
var cols = ["#3b2b32", "#43313a", "#35272e", "#47353d"];
var ps = cols.map(function () {
  return new Path2D();
});
for (var r = 0; r < 32; r++) {
  var y = -2.5 + r * 0.078;
  var off = (r % 2) * 0.12;
  for (var x = -1.4 - off; x < 1.4; x += 0.24) {
    var x0 = Math.max(-1.4, x),
      x1 = Math.min(1.4, x + 0.228);
    if (x1 > x0) ps[Math.floor(e.rnd() * 4)].rect(x0, y + 0.006, x1 - x0, 0.066);
  }
}
for (var k = 0; k < 4; k++) {
  g.fillStyle = cols[k];
  g.fill(ps[k]);
}
var sg = g.createLinearGradient(0, -2.5, 0, 0);
sg.addColorStop(0, "rgba(120,130,190,0.1)");
sg.addColorStop(1, "rgba(10,10,22,0.5)");
g.fillStyle = sg;
g.fillRect(-1.4, -2.5, 2.8, 2.5);
var lg = g.createLinearGradient(-1.4, 0, 1.4, 0);
lg.addColorStop(0, "rgba(6,6,14,0.5)");
lg.addColorStop(1, "rgba(6,6,14,0)");
g.fillStyle = lg;
g.fillRect(-1.4, -2.5, 2.8, 2.5);
g.fillStyle = "#1d1e2a";
g.fillRect(-0.9, -3.0, 0.12, 0.4);
g.fillRect(-0.94, -3.04, 0.2, 0.05);
g.fillStyle = "#22222f";
g.fillRect(-1.52, -2.64, 3.04, 0.15);
g.fillStyle = "rgba(170,180,230,0.3)";
g.fillRect(-1.52, -2.64, 3.04, 0.015);
var dx0 = -0.15,
  dx1 = 0.75,
  dy0 = -2.0;
g.fillStyle = "#14141c";
g.fillRect(dx0 - 0.06, dy0 - 0.06, dx1 - dx0 + 0.12, 2.06);
if (o > 0.001) {
  var ig = g.createLinearGradient(0, dy0, 0, 0);
  ig.addColorStop(0, "#c98a52");
  ig.addColorStop(0.5, "#8a5434");
  ig.addColorStop(1, "#3a2218");
  g.fillStyle = ig;
  g.fillRect(dx0, dy0, dx1 - dx0, 2.0);
  g.fillStyle = "rgba(40,20,12,0.55)";
  for (var s = 0; s < 6; s++) {
    g.fillRect(dx0, -0.12 - s * 0.16, dx1 - dx0, 0.03);
  }
  g.fillStyle = "rgba(30,16,10,0.6)";
  g.fillRect(dx0, dy0, 0.12, 2.0);
  g.strokeStyle = "#2a1810";
  g.lineWidth = 0.025;
  g.beginPath();
  g.moveTo(dx0 + 0.2, -1.0);
  g.lineTo(dx1 - 0.05, -0.15);
  g.stroke();
  g.fillStyle = "rgba(255,225,170,0.9)";
  g.beginPath();
  g.arc(0.3, -1.85, 0.03, 0, 6.283);
  g.fill();
}
var th = o * 1.45;
var lx = dx1 - (dx1 - dx0) * Math.cos(th);
var gro = 0.05 * Math.sin(th);
g.fillStyle = "#343a4d";
g.beginPath();
g.moveTo(dx1, dy0);
g.lineTo(lx, dy0 - gro);
g.lineTo(lx, gro);
g.lineTo(dx1, 0);
g.closePath();
g.fill();
var lw = dx1 - lx;
if (lw > 0.02) {
  g.strokeStyle = "rgba(10,10,20,0.45)";
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(lx + lw * 0.12, -1.8);
  g.lineTo(dx1 - lw * 0.12, -1.8);
  g.lineTo(dx1 - lw * 0.12, -1.1);
  g.lineTo(lx + lw * 0.12, -1.1);
  g.closePath();
  g.moveTo(lx + lw * 0.12, -0.9);
  g.lineTo(dx1 - lw * 0.12, -0.9);
  g.lineTo(dx1 - lw * 0.12, -0.2);
  g.lineTo(lx + lw * 0.12, -0.2);
  g.closePath();
  g.stroke();
  g.fillStyle = "#8b8f9e";
  g.fillRect(lx + Math.min(0.06, lw * 0.3), -1.02, 0.03, 0.1);
  g.fillStyle = "rgba(255,160,90," + 0.2 * Math.sin(th) + ")";
  g.beginPath();
  g.moveTo(dx1, dy0);
  g.lineTo(lx, dy0 - gro);
  g.lineTo(lx, gro);
  g.lineTo(dx1, 0);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(170,180,230,0.18)";
  g.fillRect(lx, dy0, 0.012, 2.0);
}
var fl = 0.97 + 0.03 * Math.sin(t * 9.3) * Math.sin(t * 2.1);
g.strokeStyle = "#1a1a24";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.3, -2.2, 0.05, Math.PI, 0);
g.moveTo(0.25, -2.2);
g.lineTo(0.35, -2.2);
g.stroke();
g.fillStyle = "rgba(255,215,160,0.8)";
g.beginPath();
g.ellipse(0.3, -2.17, 0.035, 0.04, 0, 0, 6.283);
g.fill();
e.light(0.3, -2.17, 1.4, "#ffc27a", 0.22 * fl);
if (o > 0.001) {
  e.light((dx0 + lx) / 2, -1.1, 3.2, "#ffa95c", 0.55 * o);
  var sp = g.createLinearGradient(0, 0, 0, 1.3);
  sp.addColorStop(0, "rgba(255,170,95," + 0.38 * o + ")");
  sp.addColorStop(1, "rgba(255,170,95,0)");
  g.fillStyle = sp;
  g.beginPath();
  g.moveTo(dx0, 0);
  g.lineTo(lx, 0);
  g.lineTo(lx + 0.9, 1.3);
  g.lineTo(dx0 - 0.35, 1.3);
  g.closePath();
  g.fill();
}
