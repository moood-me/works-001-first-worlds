var t = e.t,
  S = e.state.surf_height || 0,
  C = e.state.crash || 0;
var gr = g.createLinearGradient(0, -8, 0, 8);
gr.addColorStop(0, "rgba(22,29,45,0)");
gr.addColorStop(0.18, "rgba(22,29,45,0.7)");
gr.addColorStop(0.6, "rgba(15,20,32,0.92)");
gr.addColorStop(1, "rgba(11,15,24,0.97)");
g.fillStyle = gr;
g.fillRect(-35, -8, 70, 16);
for (var i = 0; i < 90; i++) {
  var x = -35 + e.rnd() * 70,
    y = -7 + e.rnd() * 15,
    L = 0.6 + e.rnd() * 2.5,
    ph = e.rnd() * 6.283,
    f = 0.3 + e.rnd() * 0.5,
    k = e.rnd();
  var a = (0.05 + 0.1 * k) * (0.5 + 0.5 * Math.sin(t * f + ph));
  g.fillStyle = "rgba(120,140,178," + a.toFixed(3) + ")";
  g.beginPath();
  g.ellipse(x + Math.sin(t * 0.3 + ph) * 0.4, y, L / 2, 0.04, 0, 0, 6.283);
  g.fill();
}
var per = 9,
  cyc = ((t + 3) % per) / per;
var reach = 4 + S * 6 + C * 3;
var adv = cyc < 0.4 ? Math.sin(((cyc / 0.4) * Math.PI) / 2) : Math.cos((((cyc - 0.4) / 0.6) * Math.PI) / 2);
var front = -7 + reach * adv;
var dens = cyc < 0.4 ? 1 : 1 - (0.6 * (cyc - 0.4)) / 0.6;
var amp = 0.45 + 0.6 * S + 0.3 * C;
function wv(x, b) {
  return (
    Math.sin(x * 1.3 + t * 0.7 + b) * 0.22 +
    Math.sin(x * 0.47 + t * 0.31 + 1 + b * 2) * 0.4 +
    Math.sin(x * 0.17 + b * 3) * 0.7
  );
}
for (var b = 0; b < 3; b++) {
  var base = front - 0.8 - b * 1.3,
    ab = (0.32 - b * 0.08) * amp;
  for (var i = 0; i < 220; i++) {
    var x = -30 + e.rnd() * 60,
      jy = (e.rnd() - 0.5) * 0.9,
      r = 0.05 + e.rnd() * 0.22,
      ph = e.rnd() * 6.283;
    var m = Math.sin(x * 0.7 + b * 2.1) + Math.sin(x * 0.29 + b);
    var y = base + wv(x, b + 1) + jy;
    if (m < -0.4 || y < -7.8 || y > 7.8) continue;
    var a = ab * (0.55 + 0.45 * Math.sin(t * 0.6 + ph));
    g.strokeStyle = "rgba(205,216,238," + Math.min(0.7, a).toFixed(3) + ")";
    g.lineWidth = 0.035;
    g.beginPath();
    g.ellipse(x, y, r, r * 0.6, ph, 0, 6.283);
    g.stroke();
  }
}
g.beginPath();
for (var j = 0; j <= 120; j++) {
  var x = -30 + j * 0.5;
  var y = Math.max(-7.9, front + wv(x, 0));
  if (j == 0) g.moveTo(x, y);
  else g.lineTo(x, y);
}
for (var j = 120; j >= 0; j--) {
  var x = -30 + j * 0.5;
  g.lineTo(x, Math.max(-7.9, front - 1.3 + wv(x, 0) * 0.8));
}
g.closePath();
g.fillStyle = "rgba(196,210,236," + (0.1 * dens * Math.min(1, amp)).toFixed(3) + ")";
g.fill();
g.lineCap = "round";
for (var j = 0; j < 300; j++) {
  var x0 = -30 + j * 0.2,
    x1 = x0 + 0.2;
  var m = Math.sin(x0 * 0.55 + 1.3) + 0.7 * Math.sin(x0 * 1.7 + t * 0.15) + 0.5 * Math.sin(x0 * 0.13 + 2);
  if (m < -0.6) continue;
  var w = 0.05 + 0.1 * Math.min(1, (m + 0.6) / 1.6);
  g.strokeStyle =
    "rgba(226,233,246," + (0.75 * dens * Math.min(1, amp) * Math.min(1, (m + 0.6) * 1.5)).toFixed(3) + ")";
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x0, front + wv(x0, 0));
  g.lineTo(x1, front + wv(x1, 0));
  g.stroke();
}
if (cyc > 0.4) {
  var rb = (cyc - 0.4) / 0.6;
  for (var i = 0; i < 50; i++) {
    var x = -28 + e.rnd() * 56,
      l = 0.4 + e.rnd() * 1.6,
      ph = e.rnd(),
      dx = (e.rnd() - 0.5) * 0.1;
    var y = front + wv(x, 0) + 0.2 + ((ph + rb * 1.5) % 1) * 1.5;
    g.strokeStyle = "rgba(180,195,225," + (0.18 * (1 - rb) * amp).toFixed(3) + ")";
    g.lineWidth = 0.025;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + dx, y - l);
    g.stroke();
  }
}
