var d = e.lib.death(e),
  t = e.t,
  f = d.f,
  v = d.v,
  moving = d.moving,
  lean = d.lean,
  bob = d.bob;
g.save();
g.translate(d.X0, d.Y0);
g.scale(d.s, d.s);
g.globalAlpha = v > 0.5 ? Math.max(0.55, 1 - (v - 0.5)) : 1;
g.fillStyle = "rgba(0,0,0,0.35)";
g.beginPath();
g.ellipse(0, 0, 0.45, 0.06, 0, 0, Math.PI * 2);
g.fill();
var top = d.top,
  hem = -0.06 + bob * 0.5,
  hw = 0.36;
g.fillStyle = "#0d0c11";
g.beginPath();
g.moveTo(-0.17 + lean * f * 0.6, top + 0.08);
g.quadraticCurveTo(-0.32, top + 0.6, -hw, hem);
for (var i = 0; i <= 8; i++) {
  var u = i / 8;
  g.lineTo(
    -hw + 2 * hw * u,
    hem + Math.sin(t * 3 + u * 9) * 0.025 * (moving ? 2 : 1) + Math.sin(t * 1.3 + u * 5) * 0.012,
  );
}
g.quadraticCurveTo(0.32, top + 0.6, 0.17 + lean * f * 0.6, top + 0.08);
g.closePath();
g.fill();
var hx0 = d.hx0,
  hy0 = d.hy0;
g.beginPath();
g.ellipse(hx0, hy0, 0.17, 0.21, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#000";
g.beginPath();
g.ellipse(hx0 + f * 0.06, hy0 + 0.03, 0.09, 0.13, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "rgba(225,220,205,0.5)";
g.beginPath();
g.ellipse(hx0 + f * 0.08, hy0 + 0.1, 0.035, 0.025, 0, 0, Math.PI * 2);
g.fill();
var hdx = f * 0.32 + lean * f * 0.4,
  hdy = top + 0.75;
g.strokeStyle = "#2a2420";
g.lineWidth = 0.045;
g.beginPath();
g.moveTo(hdx, -0.02);
g.lineTo(hdx + f * 0.05, top - 0.45);
g.stroke();
var bx = hdx + f * 0.05,
  by = top - 0.45;
g.strokeStyle = "#aeb2bc";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(bx, by);
g.quadraticCurveTo(bx + f * 0.45, by - 0.12, bx + f * 0.75, by + 0.3);
g.stroke();
g.strokeStyle = "rgba(255,220,170,0.4)";
g.lineWidth = 0.015;
g.beginPath();
g.moveTo(bx + f * 0.05, by - 0.03);
g.quadraticCurveTo(bx + f * 0.45, by - 0.13, bx + f * 0.72, by + 0.26);
g.stroke();
g.fillStyle = "#d0cabc";
g.beginPath();
g.ellipse(hdx, hdy, 0.045, 0.06, 0, 0, Math.PI * 2);
g.fill();
g.restore();
