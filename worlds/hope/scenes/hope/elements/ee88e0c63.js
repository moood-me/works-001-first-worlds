var A = e.aspect,
  mx = 0.8 * A,
  my = 0.2;
for (var i = 0; i < 180; i++) {
  var x = e.rnd() * (A + 0.7) - 0.35;
  var y = -0.35 + Math.pow(e.rnd(), 1.25) * 0.85;
  var m = e.rnd();
  var f = 0.25 + e.rnd() * 1.1;
  var ph = e.rnd() * 6.283;
  var fade = Math.min(1, Math.max(0, (0.52 - y) / 0.3));
  var dm = Math.sqrt((x - mx) * (x - mx) + (y - my) * (y - my));
  var mf = Math.min(1, Math.max(0, (dm - 0.05) / 0.2));
  var tw = 0.7 + 0.2 * Math.sin(e.t * f + ph) + 0.1 * Math.sin(e.t * f * 2.73 + ph * 1.3);
  var a = Math.min(1, (0.4 + m * 0.7) * fade * mf * tw);
  if (a < 0.02) continue;
  var r = (0.7 + m * m * 1.5) * e.px;
  var P = [205, 10, 38, 285, 165, 330, 52, 228, 130, 190];
  var hue = P[Math.floor((ph / 6.2831) * P.length) % P.length] + Math.sin(ph * 7.1) * 12;
  var sat = Math.round(75 + m * 20),
    lit = Math.round(74 - m * 8);
  var col = "hsl(" + hue.toFixed(0) + "," + sat + "%," + lit + "%)";
  if (m > 0.6) {
    var hr = r * (4 + m * 5);
    var hg = g.createRadialGradient(x, y, 0, x, y, hr);
    hg.addColorStop(0, "hsla(" + hue.toFixed(0) + "," + sat + "%," + lit + "%,0.55)");
    hg.addColorStop(1, "hsla(" + hue.toFixed(0) + "," + sat + "%," + lit + "%,0)");
    g.globalAlpha = a;
    g.fillStyle = hg;
    g.fillRect(x - hr, y - hr, hr * 2, hr * 2);
  }
  g.globalAlpha = a;
  g.fillStyle = col;
  g.beginPath();
  g.arc(x, y, r, 0, 6.283);
  g.fill();
  if (m > 0.97) {
    g.globalAlpha = a * 0.3;
    g.fillRect(x - r * 4, y - e.px * 0.35, r * 8, e.px * 0.7);
    g.fillRect(x - e.px * 0.35, y - r * 4, e.px * 0.7, r * 8);
  }
}
g.globalAlpha = 1;
