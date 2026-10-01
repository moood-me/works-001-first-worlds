var W = 16000;
function H(x) {
  var h =
    760 +
    240 * Math.sin(x / 2900 + 0.7) +
    160 * Math.sin(x / 1130 + 2.2) +
    85 * Math.sin(x / 420 + 0.3) +
    38 * Math.sin(x / 150 + 1.1) +
    16 * Math.sin(x / 53 + 0.5) +
    7 * Math.sin(x / 19);
  h += 950 * Math.pow(Math.max(0, 1 - Math.abs(x + 1800) / 3000), 1.7);
  h += 640 * Math.pow(Math.max(0, 1 - Math.abs(x - 4300) / 2500), 1.5);
  h += 430 * Math.pow(Math.max(0, 1 - Math.abs(x + 8400) / 2300), 1.4);
  h += 300 * Math.pow(Math.max(0, 1 - Math.abs(x - 9800) / 1800), 1.3);
  return h;
}
var S = 25,
  P = [];
for (var x = -W; x <= W; x += S) P.push(x);
function path() {
  g.beginPath();
  g.moveTo(-W, 60);
  for (var i = 0; i < P.length; i++) g.lineTo(P[i], -H(P[i]));
  g.lineTo(W, 60);
  g.closePath();
}
var gr = g.createLinearGradient(0, -2200, 0, 0);
gr.addColorStop(0, "#8c8aa6");
gr.addColorStop(0.45, "#6c7390");
gr.addColorStop(1, "#7a869c");
path();
g.fillStyle = gr;
g.fill();
g.save();
path();
g.clip();
g.beginPath();
g.moveTo(-W, -2700);
g.lineTo(W, -2700);
for (var i = P.length - 1; i >= 0; i--) {
  var x = P[i];
  var sl =
    1250 + 110 * Math.sin(x / 640 + 1) + 70 * Math.sin(x / 210 + 2) + 35 * Math.sin(x / 71) + (e.rnd() - 0.5) * 40;
  g.lineTo(x, -sl);
}
g.closePath();
g.fillStyle = "#dcdde9";
g.fill();
for (var i = 0; i < 380; i++) {
  var x = (e.rnd() - 0.5) * 2 * W;
  var sl = 1250 + 110 * Math.sin(x / 640 + 1) + 70 * Math.sin(x / 210 + 2);
  var L = 50 + e.rnd() * 260;
  g.strokeStyle = "rgba(225,226,238," + (0.35 + e.rnd() * 0.4) + ")";
  g.lineWidth = 6 + e.rnd() * 18;
  g.beginPath();
  g.moveTo(x, -sl - 20);
  g.lineTo(x + (e.rnd() - 0.5) * L * 0.5, -sl + L);
  g.stroke();
}
for (var i = 0; i < 650; i++) {
  var x = (e.rnd() - 0.5) * 2 * W;
  var y = -H(x) + 20 + e.rnd() * 600;
  var L = 60 + e.rnd() * 300;
  g.strokeStyle = "rgba(50,55,80," + (0.12 + e.rnd() * 0.16) + ")";
  g.lineWidth = 5 + e.rnd() * 12;
  g.beginPath();
  g.moveTo(x, y);
  g.quadraticCurveTo(x + (e.rnd() - 0.5) * L * 0.3, y + L * 0.5, x + (e.rnd() - 0.5) * L * 0.6, y + L);
  g.stroke();
}
var lg = g.createLinearGradient(0, -2300, 0, -200);
lg.addColorStop(0, "#e8957a");
lg.addColorStop(0.6, "#9a6a66");
lg.addColorStop(1, "#000000");
var k = 0.35,
  D = 900;
for (var i = 0; i < P.length; i++) {
  var x = P[i];
  var s = (H(x + 150) - H(x - 150)) / 300;
  var y0 = -H(x),
    y1 = -H(x + S);
  g.beginPath();
  g.moveTo(x, y0 - 5);
  g.lineTo(x + S + 1, y1 - 5);
  g.lineTo(x + S + 1 + k * D, y1 + D);
  g.lineTo(x + k * D, y0 + D);
  g.closePath();
  if (s > 0.02) {
    g.globalCompositeOperation = "screen";
    g.globalAlpha = Math.min(0.75, s * 1.4);
    g.fillStyle = lg;
    g.fill();
    g.globalCompositeOperation = "multiply";
    g.globalAlpha = Math.min(0.55, s);
    g.fillStyle = "#ffcfbf";
    g.fill();
  } else if (s < -0.02) {
    g.globalCompositeOperation = "multiply";
    g.globalAlpha = Math.min(0.55, -s * 1.1);
    g.fillStyle = "#7d84ad";
    g.fill();
  }
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var hz = g.createLinearGradient(0, -900, 0, 0);
hz.addColorStop(0, "rgba(196,200,216,0)");
hz.addColorStop(1, "rgba(200,203,218,0.92)");
g.fillStyle = hz;
g.fillRect(-W, -900, 2 * W, 960);
g.restore();
