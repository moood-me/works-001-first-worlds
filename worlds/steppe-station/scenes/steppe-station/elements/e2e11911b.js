var A = e.aspect,
  t = e.t;
var x = 0.85 * A + 0.04 * Math.sin(t * 0.041) + 0.012 * Math.sin(t * 0.113 + 1);
var y = 0.4 + 0.014 * Math.sin(t * 0.057 + 0.4) + 0.004 * Math.sin(t * 0.19);
var s = 0.019;
var f = Math.sin(t * 4.6) * Math.max(0, Math.sin(t * 0.27 + 1.1) - 0.2) * 1.2;
var tip = -s * 0.12 - s * 0.55 * f,
  mid = -s * 0.3 - s * 0.25 * f;
g.save();
g.translate(x, y);
g.fillStyle = "#2b1d24";
g.beginPath();
g.moveTo(-s, tip);
g.quadraticCurveTo(-s * 0.45, mid, -s * 0.06, -s * 0.02);
g.lineTo(0, s * 0.05);
g.lineTo(s * 0.06, -s * 0.02);
g.quadraticCurveTo(s * 0.45, mid, s, tip);
g.quadraticCurveTo(s * 0.5, mid + s * 0.2, 0, s * 0.12);
g.quadraticCurveTo(-s * 0.5, mid + s * 0.2, -s, tip);
g.closePath();
g.fill();
g.restore();
