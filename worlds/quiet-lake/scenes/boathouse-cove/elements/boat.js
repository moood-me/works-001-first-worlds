var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  bs = st.boat_shadow == null ? 0.6 : st.boat_shadow,
  S = 71;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
g.fillStyle = "#04060c";
g.globalAlpha = 0.2 + 0.5 * bs;
g.beginPath();
g.ellipse(-0.45, 0.1, 2.05, 0.16, 0, 0, 6.283);
g.fill();
g.globalAlpha = 1;
g.fillStyle = "#03040a";
g.globalAlpha = 0.55 + 0.45 * bs;
g.beginPath();
g.moveTo(-0.7, 0.01);
g.quadraticCurveTo(0.9, -0.02, 1.92, -0.17);
g.lineTo(1.92, 0.0);
g.closePath();
g.fill();
g.globalAlpha = 1;
if (bs < 0.5) {
  g.fillStyle = "rgba(130,150,200," + ((0.5 - bs) * 0.35 * L).toFixed(3) + ")";
  g.beginPath();
  g.moveTo(0.9, -0.03);
  g.lineTo(1.9, -0.15);
  g.lineTo(1.9, -0.01);
  g.lineTo(1.2, 0.0);
  g.closePath();
  g.fill();
}
g.fillStyle = "#0e111c";
g.beginPath();
g.ellipse(1.3, -0.065, 0.075, 0.065, 0, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(170,190,235," + (0.3 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.beginPath();
g.arc(1.3, -0.065, 0.075, -1.4, 0.2);
g.stroke();
function side() {
  g.beginPath();
  g.moveTo(-1.72, 0.02);
  g.lineTo(-1.84, -0.46);
  g.bezierCurveTo(-1.0, -0.56, 0.9, -0.56, 1.55, -0.42);
  g.quadraticCurveTo(1.88, -0.32, 2.0, -0.15);
  g.quadraticCurveTo(0.6, -0.02, -1.72, 0.02);
  g.closePath();
}
side();
var hg = g.createLinearGradient(0, -0.55, 0, 0.02);
hg.addColorStop(0, "#2b3452");
hg.addColorStop(0.5, "#1c2339");
hg.addColorStop(1, "#0f131f");
g.fillStyle = hg;
g.fill();
g.save();
side();
g.clip();
g.strokeStyle = "rgba(6,8,14,0.6)";
g.lineWidth = e.px * 1.2;
for (var k = 1; k < 4; k++) {
  var o = k * 0.12;
  g.beginPath();
  g.moveTo(-1.8, -o);
  g.bezierCurveTo(-0.8, -0.03 - o * 1.08, 0.9, -0.05 - o * 1.05, 2.0, -0.15 - o * 0.55);
  g.stroke();
}
for (var i = 0; i < 8; i++) {
  g.fillStyle = "rgba(100,118,155," + (0.1 + R() * 0.1).toFixed(3) + ")";
  g.beginPath();
  g.ellipse(-1.6 + R() * 3.2, -0.1 - R() * 0.35, 0.06 + R() * 0.16, 0.015 + R() * 0.02, (R() - 0.5) * 0.2, 0, 6.283);
  g.fill();
}
g.restore();
g.beginPath();
g.moveTo(-1.84, -0.46);
g.bezierCurveTo(-1.0, -0.56, 0.9, -0.56, 1.55, -0.42);
g.quadraticCurveTo(1.88, -0.32, 2.0, -0.15);
g.quadraticCurveTo(1.75, -0.4, 1.3, -0.56);
g.bezierCurveTo(0.5, -0.68, -0.9, -0.68, -1.78, -0.59);
g.closePath();
var tg = g.createLinearGradient(-1.8, 0, 2, 0);
tg.addColorStop(0, "#2c3654");
tg.addColorStop(0.7, "#3d4a70");
tg.addColorStop(1, "#46547c");
g.fillStyle = tg;
g.fill();
g.strokeStyle = "#0b0e18";
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(-1.81, -0.525);
g.bezierCurveTo(-0.95, -0.62, 0.7, -0.62, 1.42, -0.49);
g.quadraticCurveTo(1.82, -0.36, 2.0, -0.15);
g.stroke();
g.strokeStyle = "rgba(150,168,215," + (0.25 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(-1.81, -0.55);
g.bezierCurveTo(-0.95, -0.645, 0.7, -0.645, 1.42, -0.515);
g.stroke();
g.strokeStyle = "rgba(210,220,248," + (0.55 * L).toFixed(3) + ")";
g.lineWidth = e.px * 1.5;
g.beginPath();
g.moveTo(-1.78, -0.59);
g.bezierCurveTo(-0.9, -0.68, 0.5, -0.68, 1.3, -0.56);
g.quadraticCurveTo(1.75, -0.4, 2.0, -0.15);
g.stroke();
g.fillStyle = "#0d101b";
g.beginPath();
g.moveTo(-1.72, 0.02);
g.lineTo(-1.84, -0.46);
g.lineTo(-1.78, -0.59);
g.lineTo(-1.66, 0.02);
g.closePath();
g.fill();
g.strokeStyle = "#080a12";
g.lineWidth = 0.04;
g.beginPath();
g.moveTo(-1.72, 0.02);
g.quadraticCurveTo(0.6, -0.02, 2.0, -0.15);
g.stroke();
