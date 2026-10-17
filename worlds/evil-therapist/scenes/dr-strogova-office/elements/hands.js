var t = e.t,
  W = !!e.state.writing;
var arm = function (s, ex, ey) {
  g.fillStyle = "#dfe7e2";
  g.beginPath();
  g.moveTo(s * 0.34, -0.02);
  g.lineTo(s * 0.27, 0.02);
  g.lineTo(ex, ey + 0.02);
  g.lineTo(ex + s * 0.03, ey - 0.03);
  g.closePath();
  g.fill();
  g.strokeStyle = "#cfd9d3";
  g.lineWidth = 0.018;
  g.beginPath();
  g.moveTo(ex + s * 0.008, ey + 0.012);
  g.lineTo(ex + s * 0.032, ey - 0.022);
  g.stroke();
};
if (!W) {
  var tap = Math.max(0, Math.sin(t * 5)) * (Math.sin(t * 0.29) > 0.55 ? 1 : 0) * 0.007;
  [-1, 1].forEach(function (s) {
    arm(s, s * 0.09, -0.05);
    g.fillStyle = "#e2d6ca";
    g.beginPath();
    g.moveTo(s * 0.105, -0.045);
    g.quadraticCurveTo(s * 0.1, -0.11, s * 0.05, -0.15);
    g.lineTo(s * (0.006 + tap), -0.21);
    g.lineTo(s * (0.004 + tap), -0.15);
    g.quadraticCurveTo(s * 0.02, -0.08, s * 0.06, -0.035);
    g.closePath();
    g.fill();
    g.strokeStyle = "rgba(170,150,135,0.6)";
    g.lineWidth = 0.002;
    g.beginPath();
    g.moveTo(s * 0.05, -0.13);
    g.lineTo(s * (0.01 + tap), -0.2);
    g.moveTo(s * 0.06, -0.11);
    g.lineTo(s * 0.03, -0.15);
    g.stroke();
  });
} else {
  var dx = Math.sin(t * 6.3) * 0.012 + Math.sin(t * 2.1) * 0.02,
    dy = Math.sin(t * 9.7) * 0.003;
  arm(-1, -0.1, -0.02);
  g.fillStyle = "#e2d6ca";
  g.beginPath();
  g.ellipse(-0.08, -0.012, 0.05, 0.018, 0, 0, 6.283);
  g.fill();
  arm(1, 0.13 + dx, -0.03 + dy);
  g.fillStyle = "#e2d6ca";
  g.beginPath();
  g.ellipse(0.11 + dx, -0.035 + dy, 0.038, 0.024, -0.3, 0, 6.283);
  g.fill();
  g.strokeStyle = "#9b4038";
  g.lineWidth = 0.008;
  g.lineCap = "round";
  g.beginPath();
  g.moveTo(0.085 + dx, 0.0 + dy);
  g.lineTo(0.14 + dx, -0.09 + dy);
  g.stroke();
}
