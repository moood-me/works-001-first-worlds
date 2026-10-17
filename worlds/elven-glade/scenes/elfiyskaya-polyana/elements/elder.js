var trunk = g.createLinearGradient(-2.4, 0, 2.4, 0);
trunk.addColorStop(0, "#0d1116");
trunk.addColorStop(0.65, "#2a3038");
trunk.addColorStop(1, "#151a20");
g.fillStyle = trunk;
g.beginPath();
g.moveTo(-4.5, 0.3);
g.bezierCurveTo(-2.6, -1, -2.2, -3, -2.0, -8);
g.lineTo(-1.6, -24);
g.lineTo(1.6, -24);
g.lineTo(2.1, -8);
g.bezierCurveTo(2.3, -3, 2.8, -1, 4.8, 0.3);
g.closePath();
g.fill();
g.strokeStyle = "rgba(0,0,0,0.35)";
g.lineWidth = 0.08;
for (var i = 0; i < 14; i++) {
  var x = -1.8 + i * 0.27;
  g.beginPath();
  g.moveTo(x, 0);
  g.bezierCurveTo(x + 0.2, -6, x - 0.2, -14, x + 0.1, -24);
  g.stroke();
}
g.strokeStyle = "rgba(150,180,220,0.18)";
g.lineWidth = 0.14;
g.beginPath();
g.moveTo(1.9, -1);
g.bezierCurveTo(2.1, -8, 1.8, -16, 1.5, -24);
g.stroke();
g.strokeStyle = "#3a3226";
g.lineWidth = 0.12;
g.beginPath();
for (var s = 0; s < 4; s++) {
  var y = -2 - s * 3.3;
  g.moveTo(-2.1, y);
  g.quadraticCurveTo(0, y - 1.2, 2.2, y - 1.6);
}
g.stroke();
g.fillStyle = "#2b241c";
g.fillRect(-6, -15.3, 12, 0.5);
g.strokeStyle = "#2b241c";
g.lineWidth = 0.07;
g.beginPath();
for (var x = -6; x <= 6; x += 0.6) {
  g.moveTo(x, -15.3);
  g.lineTo(x, -16.3);
}
g.moveTo(-6, -16.3);
g.lineTo(6, -16.3);
g.stroke();
g.fillStyle = "rgba(255,200,130,0.85)";
g.beginPath();
g.moveTo(-1.2, -15.3);
g.lineTo(-1.2, -17);
g.quadraticCurveTo(0, -18, 1.2, -17);
g.lineTo(1.2, -15.3);
g.fill();
var cf = ["#0d1a1e", "#12242a", "#183037"];
for (var l = 0; l < 3; l++) {
  g.fillStyle = cf[l];
  for (var i = 0; i < 30; i++) {
    var a = Math.PI * (0.02 + 0.96 * e.rnd()),
      r = 3 + e.rnd() * 6;
    g.beginPath();
    g.ellipse(
      Math.cos(a) * r * 1.5,
      -23 - Math.sin(a) * r * 1.1 + l * 0.6,
      2.6 + e.rnd() * 1.8,
      1.7 + e.rnd(),
      0,
      0,
      7,
    );
    g.fill();
  }
}
var L = [
  [-4.8, -14.6],
  [4.6, -14.8],
  [-6.3, -21],
  [5.8, -21.5],
  [-2.6, -9.5],
  [3.4, -5.5],
];
for (var i = 0; i < L.length; i++) {
  var lx = L[i][0],
    ly = L[i][1];
  g.strokeStyle = "#1a1610";
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(lx, ly - 0.6);
  g.lineTo(lx, ly - 0.18);
  g.stroke();
  g.fillStyle = "#ffe2a8";
  g.beginPath();
  g.ellipse(lx, ly, 0.13, 0.18, 0, 0, 7);
  g.fill();
  e.light(lx, ly, 2.2, "#ffcf86", 0.7);
}
e.light(0, -16.4, 3.5, "#ffc070", 0.6);
