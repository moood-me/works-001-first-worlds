var h = e.lib.hero(e),
  x = h.x,
  a = h.a,
  f = h.f;
g.save();
g.translate(x, 0);
g.fillStyle = "rgba(0,0,0,0.3)";
g.beginPath();
g.ellipse(0, 0, 0.3, 0.05, 0, 0, Math.PI * 2);
g.fill();
g.lineCap = "round";
g.lineJoin = "round";
if (a === "fall") {
  g.fillStyle = "#3c3f46";
  g.beginPath();
  g.ellipse(-f * 0.1, -0.12, 0.65, 0.12, 0.05 * f, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#d8c3ae";
  g.beginPath();
  g.arc(f * 0.68, -0.13, 0.1, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "#8a2a24";
  g.fillRect(f * 0.45 - 0.06, -0.2, 0.12, 0.12);
  g.restore();
  return;
}
var walk = h.walk,
  run = h.run,
  ph = h.ph,
  hip = h.hip;
var sw = run ? 0.42 : walk ? 0.22 : 0;
g.strokeStyle = "#26272c";
g.lineWidth = 0.11;
if (a === "sit") {
  g.beginPath();
  g.moveTo(0, hip);
  g.lineTo(f * 0.42, hip);
  g.lineTo(f * 0.46, 0);
  g.stroke();
} else if (a === "kneel") {
  g.beginPath();
  g.moveTo(0, hip);
  g.lineTo(f * 0.12, -0.06);
  g.lineTo(-f * 0.3, -0.04);
  g.stroke();
} else {
  for (var k = 0; k < 2; k++) {
    var s = Math.sin(ph + k * Math.PI) * sw;
    g.beginPath();
    g.moveTo(0, hip);
    g.lineTo(f * s * 0.6, hip * 0.5 + (s > 0 ? 0 : -0.03));
    g.lineTo(f * s, 0);
    g.stroke();
  }
}
var sx = h.sx,
  sy = h.sy;
g.fillStyle = "#3c3f46";
g.beginPath();
g.moveTo(-0.16, hip + 0.12);
g.lineTo(0.17, hip + 0.12);
g.lineTo(sx + 0.2, sy + 0.05);
g.lineTo(sx - 0.19, sy + 0.05);
g.closePath();
g.fill();
g.fillStyle = "rgba(255,200,130,0.12)";
g.beginPath();
g.moveTo(0.17, hip + 0.12);
g.lineTo(sx + 0.2, sy + 0.05);
g.lineTo(sx + 0.12, sy + 0.05);
g.lineTo(0.08, hip + 0.12);
g.fill();
g.fillStyle = "#8a2a24";
g.beginPath();
g.moveTo(sx - 0.14, sy + 0.02);
g.lineTo(sx + 0.14, sy + 0.02);
g.lineTo(sx + 0.1, sy + 0.12);
g.lineTo(sx - 0.1, sy + 0.12);
g.fill();
g.fillRect(sx + f * 0.05, sy + 0.1, 0.06, 0.22);
g.strokeStyle = "#33353b";
g.lineWidth = 0.08;
if (run) {
  for (var k = 0; k < 2; k++) {
    var s = Math.sin(ph + k * Math.PI + Math.PI) * 0.35;
    g.beginPath();
    g.moveTo(sx, sy + 0.1);
    g.lineTo(sx + f * s * 0.6, sy + 0.35);
    g.lineTo(sx + f * s, sy + 0.45);
    g.stroke();
  }
} else if (a === "kneel" || a === "catch_breath") {
  g.beginPath();
  g.moveTo(sx, sy + 0.1);
  g.lineTo(sx + f * 0.22, hip + 0.1);
  g.stroke();
} else {
  g.beginPath();
  g.moveTo(sx - 0.12, sy + 0.12);
  g.lineTo(-0.14, hip + 0.2);
  g.moveTo(sx + 0.12, sy + 0.12);
  g.lineTo(0.14, hip + 0.2);
  g.stroke();
}
var hdx = h.hdx,
  hdy = h.hdy;
var away = a === "turn_away";
g.fillStyle = away ? "#2a2220" : "#d8c3ae";
g.beginPath();
g.ellipse(hdx, hdy, 0.095, 0.115, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = "#2a2220";
g.beginPath();
g.ellipse(hdx - f * 0.02, hdy - 0.05, 0.1, 0.07, 0, Math.PI, Math.PI * 2);
g.fill();
if (!away) {
  g.fillStyle = "rgba(40,30,30,0.7)";
  g.fillRect(hdx + f * 0.04, hdy - 0.01, 0.015, 0.015);
}
g.restore();
