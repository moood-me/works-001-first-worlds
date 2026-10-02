var S = e.state || {},
  t = e.t,
  x = S.hero_x == null ? -5 : S.hero_x,
  a = S.hero_action || "stand",
  f = S.hero_face || 1,
  u = S.hero_through || 0;
var s = 9 / (9 + 5 * u),
  X0 = x * s,
  Y0 = -1.7 * (1 - s),
  HX = 0,
  HY = -1.9;
var walk =
    a === "walk_right" || a === "walk_left" || a === "approach" || a === "go_away" || a === "exit" || a === "back",
  run = a === "run_right" || a === "run_left";
var ph = t * (run ? 11 : walk ? 6 : 0);
g.save();
g.translate(X0, Y0);
g.scale(s, s);
g.globalAlpha = u > 0.45 ? Math.max(0.1, 1 - (u - 0.45) * 1.7) : 1;
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
  HX = f * 0.68;
  HY = -0.3;
} else {
  var hip = a === "kneel" ? -0.52 : -0.9,
    lean = run ? 0.28 : a === "catch_breath" ? 0.32 : a === "kneel" ? 0.05 : a === "open_gate" ? 0.1 : 0.06;
  if (u > 0.02) lean = 0.02;
  var br =
    Math.sin(t * (a === "catch_breath" ? 7 : 1.6)) * (a === "catch_breath" ? 0.02 : 0.006) + Math.sin(t * 0.37) * 0.003;
  var bob = run ? Math.abs(Math.sin(ph)) * 0.05 : walk ? Math.abs(Math.sin(ph)) * 0.02 : 0;
  hip += -bob;
  var sw = (run ? 0.42 : walk ? 0.22 : 0) * (u > 0.02 ? 0.35 : 1);
  g.strokeStyle = "#26272c";
  g.lineWidth = 0.11;
  if (a === "kneel") {
    g.beginPath();
    g.moveTo(0, hip);
    g.lineTo(f * 0.12, -0.06);
    g.lineTo(-f * 0.3, -0.04);
    g.stroke();
  } else {
    for (var k = 0; k < 2; k++) {
      var q = Math.sin(ph + k * Math.PI) * sw;
      g.beginPath();
      g.moveTo(0, hip);
      g.lineTo(f * q * 0.6, hip * 0.5 + (q > 0 ? 0 : -0.03));
      g.lineTo(f * q, 0);
      g.stroke();
    }
  }
  var sx = lean * f,
    sy = hip - 0.62 + br;
  g.fillStyle = "#3c3f46";
  g.beginPath();
  g.moveTo(-0.16, hip + 0.12);
  g.lineTo(0.17, hip + 0.12);
  g.lineTo(sx + 0.2, sy + 0.05);
  g.lineTo(sx - 0.19, sy + 0.05);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(255,196,128,0.12)";
  g.beginPath();
  g.moveTo(0.17, hip + 0.12);
  g.lineTo(sx + 0.2, sy + 0.05);
  g.lineTo(sx + 0.12, sy + 0.05);
  g.lineTo(0.08, hip + 0.12);
  g.fill();
  var cs = Math.sin(t * 0.9) * 0.015 + Math.sin(t * 0.41) * 0.01;
  g.fillStyle = "#8a2a24";
  g.beginPath();
  g.moveTo(sx - 0.14, sy + 0.02);
  g.lineTo(sx + 0.14, sy + 0.02);
  g.lineTo(sx + 0.1, sy + 0.12);
  g.lineTo(sx - 0.1, sy + 0.12);
  g.fill();
  g.beginPath();
  g.moveTo(sx + f * 0.05, sy + 0.1);
  g.lineTo(sx + f * 0.11, sy + 0.1);
  g.lineTo(sx + f * 0.11 - f * cs, sy + 0.32);
  g.lineTo(sx + f * 0.05 - f * cs, sy + 0.32);
  g.fill();
  g.strokeStyle = "#33353b";
  g.lineWidth = 0.08;
  if (run) {
    for (var k = 0; k < 2; k++) {
      var q = Math.sin(ph + k * Math.PI + Math.PI) * 0.35;
      g.beginPath();
      g.moveTo(sx, sy + 0.1);
      g.lineTo(sx + f * q * 0.6, sy + 0.35);
      g.lineTo(sx + f * q, sy + 0.45);
      g.stroke();
    }
  } else if (a === "open_gate") {
    g.beginPath();
    g.moveTo(sx, sy + 0.1);
    g.lineTo(sx + f * 0.45, sy + 0.22 + Math.sin(t * 9) * 0.02);
    g.stroke();
    g.beginPath();
    g.moveTo(sx, sy + 0.12);
    g.lineTo(sx + f * 0.18, hip + 0.18);
    g.stroke();
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
  var hdx = sx + f * 0.04,
    hdy = sy - 0.13;
  var away = a === "turn_away" || u > 0.02;
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
  HX = hdx;
  HY = hdy - 0.12;
}
g.restore();
e.at(X0 + HX * s, Y0 + HY * s);
