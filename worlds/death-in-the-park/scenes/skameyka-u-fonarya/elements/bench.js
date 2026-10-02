var S = e.state || {},
  L = S.lamp == null ? 0.75 : S.lamp,
  X0 = -0.1,
  X1 = 1.9,
  W = X1 - X0,
  IR = "#131219";
g.fillStyle = "rgba(6,6,12," + (0.15 + 0.35 * L) + ")";
g.beginPath();
g.moveTo(X0, 0);
g.lineTo(X1, 0);
g.lineTo(X1 + 0.9, 0.18);
g.lineTo(X0 + 0.6, 0.2);
g.closePath();
g.fill();
g.fillStyle = IR;
g.fillRect(X0 + 0.06, -0.94, 0.05, 0.94);
g.fillRect(X1 - 0.11, -0.94, 0.05, 0.94);
var wg = g.createLinearGradient(X0 - 0.8, 0, X1 + 0.2, 0);
wg.addColorStop(0, "rgba(255,190,120," + 0.38 * L + ")");
wg.addColorStop(1, "rgba(255,190,120,0)");
var R = [
  [X0, -0.93, W, 0.075, "#3a2a21"],
  [X0, -0.81, W, 0.075, "#3a2a21"],
  [X0, -0.69, W, 0.075, "#37281f"],
  [X0 - 0.02, -0.568, W + 0.04, 0.03, "#4a382b"],
  [X0 - 0.02, -0.533, W + 0.04, 0.03, "#4d3a2c"],
  [X0 - 0.02, -0.498, W + 0.04, 0.03, "#4f3c2e"],
  [X0 - 0.02, -0.465, W + 0.04, 0.035, "#2a1f18"],
];
for (var i = 0; i < R.length; i++) {
  var r = R[i];
  g.fillStyle = r[4];
  g.fillRect(r[0], r[1], r[2], r[3]);
  g.fillStyle = wg;
  g.fillRect(r[0], r[1], r[2], r[3]);
  g.fillStyle = "rgba(150,165,210,0.12)";
  g.fillRect(r[0], r[1], r[2], 0.007);
}
var E = [X0 + 0.06, X1 - 0.06];
for (var k = 0; k < 2; k++) {
  var x = E[k],
    o = k ? 1 : -1;
  g.fillStyle = IR;
  g.beginPath();
  g.moveTo(x - 0.025, -0.47);
  g.lineTo(x + 0.025, -0.47);
  g.quadraticCurveTo(x + 0.03, -0.2, x + o * 0.06 + 0.03, 0);
  g.lineTo(x + o * 0.06 - 0.03, 0);
  g.quadraticCurveTo(x - 0.03, -0.2, x - 0.025, -0.47);
  g.closePath();
  g.fill();
  g.strokeStyle = IR;
  g.lineWidth = 0.03;
  g.beginPath();
  g.moveTo(x, -0.47);
  g.lineTo(x, -0.6);
  g.stroke();
  g.beginPath();
  g.arc(x + o * 0.03, -0.645, 0.042, 0, Math.PI * 2);
  g.stroke();
}
g.save();
g.translate(0.9, -0.53);
g.rotate(0.4);
g.fillStyle = "#8a5a26";
g.beginPath();
g.ellipse(0, 0, 0.05, 0.022, 0, 0, Math.PI * 2);
g.fill();
g.restore();
