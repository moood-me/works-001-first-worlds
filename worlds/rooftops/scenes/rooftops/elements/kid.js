var t = e.t,
  hv = e.hero || { vx: 0, vy: 0, ground: true },
  run = Math.min(1, Math.abs(hv.vx) / 5),
  air = !hv.ground,
  ph = t * 11;
var sw = air ? 0.5 : Math.sin(ph) * 0.5 * run;
g.strokeStyle = "#15131c";
g.fillStyle = "#15131c";
g.lineCap = "round";
g.lineWidth = 0.11;
g.beginPath();
g.moveTo(0, -0.62);
g.lineTo(0.25 * sw, -0.3);
g.lineTo(0.3 * sw + (air ? 0.1 : 0), 0);
g.moveTo(0, -0.62);
g.lineTo(-0.25 * sw, -0.3);
g.lineTo(-0.3 * sw - (air ? 0.15 : 0), -(air ? 0.15 : 0));
g.stroke();
g.beginPath();
g.moveTo(-0.16, -0.62);
g.lineTo(0.16, -0.62);
g.lineTo(0.13, -1.05);
g.lineTo(-0.13, -1.05);
g.closePath();
g.fill();
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0, -1.0);
g.lineTo(0.2 * -sw, -0.75 + (air ? -0.25 : 0));
g.moveTo(0, -1.0);
g.lineTo(0.2 * sw, -0.75 + (air ? -0.25 : 0));
g.stroke();
g.beginPath();
g.arc(0.02, -1.17, 0.13, 0, 6.283);
g.fill();
var fl = 0.25 + 0.35 * run + (air ? 0.2 : 0);
g.fillStyle = "#c0402e";
g.beginPath();
g.moveTo(-0.1, -1.06);
for (var k = 0; k <= 6; k++) {
  var u = k / 6;
  g.lineTo(-0.1 - u * fl * 1.4, -1.04 + Math.sin(t * 9 - u * 4) * 0.05 * u + u * 0.05);
}
for (var k = 6; k >= 0; k--) {
  var u = k / 6;
  g.lineTo(-0.1 - u * fl * 1.4, -0.96 + Math.sin(t * 9 - u * 4) * 0.05 * u + u * 0.05);
}
g.closePath();
g.fill();
e.at(0.02, -1.25);
