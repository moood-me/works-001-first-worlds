var t = e.t,
  S = e.state,
  w = S.wind_strength == null ? 0.6 : S.wind_strength;
var X = [-13, -7.5, -4.6, 0.6, 3.4, 7.2, 11.5];
for (var b = 0; b < X.length; b++) {
  var P = 6.5 + e.rnd() * 6.5,
    ph = e.rnd() * P,
    hm = 2 + e.rnd() * 3.2,
    sd = [];
  for (var k = 0; k < 14; k++) sd.push([e.rnd(), e.rnd(), e.rnd()]);
  var u = ((t + ph) % P) / P;
  if (u > 0.42) continue;
  var s = u / 0.42,
    cyc = Math.floor((t + ph) / P);
  var amp = (0.3 + 0.9 * w) * (0.55 + 0.45 * Math.abs(Math.sin(cyc * 2.3 + b * 1.7)));
  for (var k = 0; k < 14; k++) {
    var r = sd[k];
    var hg = hm * amp * (0.25 + 0.75 * r[0]) * Math.sqrt(s);
    var px = X[b] + (r[1] - 0.5) * 1.6 + s * s * (1 + 4.5 * w) * (0.4 + r[0]);
    var py = -hg - (r[2] - 0.5) * 0.5 + s * s * hg * 0.3;
    var rad = (0.35 + r[2] * 1.1) * (0.5 + s);
    var a = (1 - s) * (1 - s) * 0.3 * (0.5 + 0.5 * r[1]);
    var gr = g.createRadialGradient(px, py, 0, px, py, rad);
    gr.addColorStop(0, "rgba(214,220,238," + a.toFixed(3) + ")");
    gr.addColorStop(1, "rgba(214,220,238,0)");
    g.fillStyle = gr;
    g.beginPath();
    g.arc(px, py, rad, 0, 6.283);
    g.fill();
  }
}
var mg = g.createLinearGradient(0, -2.5, 0, 0.3);
mg.addColorStop(0, "rgba(180,186,210,0)");
mg.addColorStop(1, "rgba(180,186,210," + (0.08 * w).toFixed(3) + ")");
g.fillStyle = mg;
g.fillRect(-30, -2.5, 60, 2.8);
