var L = g.createLinearGradient(-0.4, 0, 0.4, 0);
L.addColorStop(0, "#3b261c");
L.addColorStop(0.7, "#5c3b2a");
L.addColorStop(1, "#8a5a3a");
g.strokeStyle = "#1e140e";
g.lineWidth = 0.035;
g.lineCap = "round";
g.beginPath();
g.moveTo(-0.38, -0.15);
g.lineTo(-0.42, 0);
g.moveTo(0.22, -0.15);
g.lineTo(0.26, 0);
g.stroke();
g.fillStyle = L;
g.beginPath();
g.moveTo(-0.02, -0.4);
g.bezierCurveTo(-0.06, -0.7, -0.02, -1.0, 0.06, -1.1);
g.quadraticCurveTo(0.2, -1.16, 0.3, -1.06);
g.bezierCurveTo(0.34, -0.8, 0.32, -0.5, 0.3, -0.3);
g.closePath();
g.fill();
g.beginPath();
g.moveTo(-0.44, -0.5);
g.quadraticCurveTo(-0.1, -0.53, 0.3, -0.46);
g.lineTo(0.3, -0.14);
g.lineTo(-0.42, -0.14);
g.closePath();
g.fill();
g.fillStyle = "rgba(20,12,8,0.35)";
g.fillRect(-0.44, -0.36, 0.74, 0.22);
g.strokeStyle = "rgba(255,190,130,0.35)";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(0.12, -1.12);
g.quadraticCurveTo(0.24, -1.12, 0.3, -1.04);
g.bezierCurveTo(0.33, -0.8, 0.32, -0.55, 0.3, -0.35);
g.stroke();
g.fillStyle = "rgba(0,0,0,0.25)";
[
  [0.08, -0.95],
  [0.18, -0.95],
  [0.1, -0.8],
  [0.2, -0.8],
  [0.12, -0.65],
  [0.22, -0.65],
].forEach(function (p) {
  g.beginPath();
  g.arc(p[0], p[1], 0.012, 0, 6.283);
  g.fill();
});
