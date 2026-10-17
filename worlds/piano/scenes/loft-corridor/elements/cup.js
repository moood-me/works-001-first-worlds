var S = e.state;
var C = S.cupInHand == null ? 0 : S.cupInHand;
var a = Math.max(0, 1 - C * 2);
if (a < 0.01) return;
var st = S.steam == null ? 0.8 : S.steam;
var L = S.sconceLit == null ? 1 : S.sconceLit;
var t = e.t;
var cx = 0.3;
g.globalAlpha = a;
g.fillStyle = "rgba(5,3,3,0.45)";
g.beginPath();
g.ellipse(cx, 0, 0.07, 0.012, 0, 0, 6.283);
g.fill();
g.fillStyle = "#b8ac9a";
g.fillRect(cx - 0.04, -0.095, 0.08, 0.095);
g.strokeStyle = "#b8ac9a";
g.lineWidth = 0.012;
g.beginPath();
g.arc(cx + 0.045, -0.05, 0.022, -1.4, 1.4);
g.stroke();
g.fillStyle = "rgba(30,20,15,0.38)";
g.fillRect(cx + 0.012, -0.095, 0.028, 0.095);
g.fillStyle = "rgba(255,190,130," + (0.1 + 0.2 * L) + ")";
g.fillRect(cx - 0.04, -0.095, 0.012, 0.095);
g.fillStyle = "#4a3020";
g.beginPath();
g.ellipse(cx, -0.095, 0.04, 0.008, 0, 0, 6.283);
g.fill();
g.lineCap = "round";
for (var i = 0; i < 3; i++) {
  var p = (t * 0.12 + i / 3) % 1;
  var y0 = -0.11 - p * 0.32;
  var al = Math.sin(p * 3.14159) * 0.22 * st * a;
  g.strokeStyle = "rgba(230,215,200," + al + ")";
  g.lineWidth = 0.008 + p * 0.01;
  var x0 = cx + Math.sin(t * 0.7 + i * 2) * 0.008;
  g.beginPath();
  g.moveTo(x0, y0 + 0.08);
  g.bezierCurveTo(
    x0 + 0.03 * Math.sin(t * 0.9 + i),
    y0 + 0.05,
    x0 - 0.03 * Math.sin(t * 0.6 + i * 1.3),
    y0 + 0.025,
    x0 + 0.015 * Math.sin(t * 0.5 + i),
    y0,
  );
  g.stroke();
}
g.globalAlpha = 1;
