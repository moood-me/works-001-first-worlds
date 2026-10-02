var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  lamp = !!st.boathouse_lamp,
  S = 61;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var i, y;
g.fillStyle = "#090c16";
var SP = [-2.45, -1.6, 1.6, 2.45];
for (i = 0; i < SP.length; i++) g.fillRect(SP[i] - 0.09, -0.95, 0.18, 0.95);
g.fillRect(3.1, -1.0, 0.13, 1.0);
g.fillRect(3.8, -1.02, 0.11, 1.02);
g.fillStyle = "#05070e";
g.fillRect(-1.45, -2.9, 2.9, 2.9);
if (lamp) {
  var ig = g.createRadialGradient(0, -1.6, 0, 0, -1.6, 1.6);
  ig.addColorStop(0, "rgba(230,160,90,0.35)");
  ig.addColorStop(1, "rgba(230,160,90,0)");
  g.fillStyle = ig;
  g.fillRect(-1.45, -2.9, 2.9, 2.9);
}
for (i = 0; i < 10; i++) {
  var gx = (R() - 0.5) * 2.6,
    f = 0.6 + R(),
    p = R() * 6.283,
    w = Math.sin(t * f + p);
  if (w > 0.5) {
    g.globalAlpha = (w - 0.5) * 0.8 * (lamp ? 1 : L * 0.5);
    g.fillStyle = lamp ? "#e8b078" : "#8a9cc8";
    g.fillRect(gx - 0.1, -0.06 - R() * 0.05, 0.2, 0.015);
  } else R();
}
g.globalAlpha = 1;
g.beginPath();
g.moveTo(2.5, -0.9);
g.lineTo(3.95, -1.0);
g.lineTo(3.95, -3.32);
g.lineTo(2.5, -3.6);
g.closePath();
var sg = g.createLinearGradient(2.5, 0, 3.95, 0);
sg.addColorStop(0, "#28324f");
sg.addColorStop(1, "#1d2640");
g.fillStyle = sg;
g.fill();
g.strokeStyle = "rgba(8,10,18,0.55)";
g.lineWidth = e.px;
for (y = 0; y < 9; y++) {
  var k = y / 9;
  g.beginPath();
  g.moveTo(2.5, -0.9 - k * 2.7);
  g.lineTo(3.95, -1.0 - k * 2.32);
  g.stroke();
}
g.beginPath();
g.moveTo(-2.5, -0.9);
g.lineTo(2.5, -0.9);
g.lineTo(2.5, -3.6);
g.lineTo(0, -5.3);
g.lineTo(-2.5, -3.6);
g.closePath();
g.moveTo(-1.45, -0.9);
g.lineTo(-1.45, -2.9);
g.lineTo(1.45, -2.9);
g.lineTo(1.45, -0.9);
g.closePath();
var fg = g.createLinearGradient(0, -5.3, 0, -0.9);
fg.addColorStop(0, "#1a2134");
fg.addColorStop(1, "#121725");
g.fillStyle = fg;
g.fill("evenodd");
g.strokeStyle = "rgba(6,8,14,0.6)";
g.lineWidth = e.px;
for (var px = -2.35; px < 2.5; px += 0.27) {
  var top = -3.6 - (2.5 - Math.abs(px)) * 0.68;
  g.beginPath();
  g.moveTo(px, -0.9);
  g.lineTo(px, Math.max(top, -5.25));
  g.stroke();
}
g.fillStyle = "#0e1220";
g.fillRect(-1.55, -3.02, 3.1, 0.14);
g.fillRect(-1.55, -3.02, 0.12, 2.12);
g.fillRect(1.43, -3.02, 0.12, 2.12);
g.beginPath();
g.moveTo(-2.85, -3.42);
g.lineTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.lineTo(2.85, -3.42);
g.lineTo(0, -5.32);
g.lineTo(-2.7, -3.42);
g.closePath();
g.fillStyle = "#0b0e18";
g.fill();
g.beginPath();
g.moveTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.lineTo(2.85, -3.42);
g.closePath();
var rg = g.createLinearGradient(0, -5.5, 3, -3.2);
rg.addColorStop(0, "#3a4668");
rg.addColorStop(1, "#283352");
g.fillStyle = rg;
g.fill();
g.strokeStyle = "rgba(10,12,22,0.5)";
for (i = 1; i < 7; i++) {
  var k2 = i / 7;
  g.beginPath();
  g.moveTo(0 + 2.85 * k2, -5.5 + 2.08 * k2);
  g.lineTo(1.25 + 3.0 * k2, -5.05 + 1.9 * k2);
  g.stroke();
}
g.strokeStyle = "rgba(200,212,245," + (0.55 * L).toFixed(3) + ")";
g.lineWidth = e.px * 1.4;
g.beginPath();
g.moveTo(0, -5.5);
g.lineTo(1.25, -5.05);
g.lineTo(4.25, -3.15);
g.stroke();
g.strokeStyle = "rgba(170,190,235," + (0.3 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(2.52, -0.92);
g.lineTo(2.52, -3.55);
g.stroke();
g.fillStyle = "rgba(60,80,60,0.25)";
for (i = 0; i < 6; i++) {
  g.beginPath();
  g.ellipse(1.0 + R() * 3, -4.6 + R() * 1.4, 0.2 + R() * 0.3, 0.05, 0.55, 0, 6.283);
  g.fill();
}
var wx = 0,
  wy = -4.05;
g.fillStyle = "#0c0f1a";
g.fillRect(wx - 0.32, wy - 0.27, 0.64, 0.54);
if (lamp) {
  var fl = 0.85 + 0.1 * Math.sin(t * 7.3) + 0.05 * Math.sin(t * 13.1);
  var lg = g.createRadialGradient(wx, wy, 0, wx, wy, 0.35);
  lg.addColorStop(0, "rgba(255,210,140," + fl.toFixed(3) + ")");
  lg.addColorStop(1, "rgba(220,140,70," + (0.6 * fl).toFixed(3) + ")");
  g.fillStyle = lg;
  g.fillRect(wx - 0.25, wy - 0.2, 0.5, 0.4);
  e.light(wx, wy, 1.6, "#ffb060", 0.55);
  e.light(0, -1.5, 1.8, "#e89a58", 0.25);
} else {
  g.fillStyle = "rgba(120,140,190," + (0.15 * L).toFixed(3) + ")";
  g.fillRect(wx - 0.25, wy - 0.2, 0.5, 0.4);
}
g.fillStyle = "#0c0f1a";
g.fillRect(wx - 0.02, wy - 0.2, 0.04, 0.4);
g.fillRect(wx - 0.25, wy - 0.02, 0.5, 0.04);
