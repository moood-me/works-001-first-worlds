var s = e.state.someoneWaiting || 0;
if (s < 0.02) return;
var t = e.t,
  w = e.state.wind == null ? 0.4 : e.state.wind;
g.globalAlpha = Math.min(1, s);
g.fillStyle = "#b4afa6";
g.fillRect(-0.04, -0.1, 0.08, 0.1);
g.strokeStyle = "#b4afa6";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.045, -0.05, 0.022, -1.4, 1.4);
g.stroke();
g.fillStyle = "rgba(20,20,40,0.45)";
g.fillRect(0.0, -0.1, 0.04, 0.1);
g.fillStyle = "rgba(230,205,225,0.45)";
g.fillRect(-0.04, -0.1, 0.08, 0.006);
g.lineCap = "round";
for (var i = 0; i < 3; i++) {
  var ph = (t * 0.16 + i / 3) % 1;
  var y0 = -0.12 - ph * 0.35;
  var x0 = ph * ph * 0.5 * (0.15 + w) + 0.01 * Math.sin(t * 0.9 + i);
  var a = Math.sin(ph * Math.PI) * 0.2 * (1 - 0.6 * w);
  g.strokeStyle = "rgba(225,215,230," + a + ")";
  g.lineWidth = 0.01 + ph * 0.015;
  g.beginPath();
  g.moveTo(x0 * 0.5, y0 + 0.08);
  g.bezierCurveTo(
    x0 + 0.03 * Math.sin(t + i),
    y0 + 0.05,
    x0 - 0.03 * Math.sin(t * 0.7 + i),
    y0 + 0.02,
    x0 + 0.04 * (0.2 + w),
    y0,
  );
  g.stroke();
}
g.globalAlpha = 1;
