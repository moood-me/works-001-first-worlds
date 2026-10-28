var t = e.t;
var s0 = 0.03 * Math.sin(t * 0.5) + 0.015 * Math.sin(t * 0.83 + 1.2);
function soft(x0, y0, x1, y1, w, c) {
  for (var k = 0; k < 4; k++) {
    g.strokeStyle = c;
    g.globalAlpha = 0.12 + k * 0.06;
    g.lineWidth = w * (3.2 - k * 0.7);
    g.lineCap = "round";
    g.beginPath();
    g.moveTo(x0, y0);
    g.quadraticCurveTo(x0 + (x1 - x0) * 0.3, (y0 + y1) / 2, x1, y1);
    g.stroke();
  }
  g.globalAlpha = 1;
}
var L = [
  [-0.3, 0.3, -0.2, -1.3, 0.012],
  [-0.05, 0.3, 0.12, -1.45, 0.01],
  [0.2, 0.3, 0.42, -1.1, 0.014],
  [-0.45, 0.3, -0.55, -1.0, 0.012],
];
for (var i = 0; i < L.length; i++) {
  var l = L[i],
    s = s0 * (1 + i * 0.3) * Math.abs(l[3]);
  soft(l[0], l[1], l[2] + s, l[3], l[4], "#33402a");
}
var hx = 0.12 + s0 * 1.45 * 1.2,
  hy = -1.32;
soft(0.02, 0.3, hx, hy, 0.009, "#3d4b2c");
var rg = g.createRadialGradient(hx - 0.02, hy - 0.03, 0, hx, hy - 0.02, 0.11);
rg.addColorStop(0, "rgba(232,90,56,0.55)");
rg.addColorStop(0.5, "rgba(196,48,36,0.35)");
rg.addColorStop(1, "rgba(160,30,26,0)");
g.fillStyle = rg;
g.beginPath();
g.arc(hx, hy - 0.02, 0.11, 0, 6.2832);
g.fill();
