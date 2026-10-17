var D = 2.8315,
  S = e.state || {},
  t = e.t;
var aj = Math.max(0, Math.min(1, +S.door_ajar || 0));
var L = S.light_shafts == null ? 0.85 : Math.max(0, Math.min(1, +S.light_shafts));
var cs = S.someone_present === "caretaker-shadow";
var DW = 5.5,
  DX = 0.105,
  DH = 0.25,
  dl = -1.15,
  dr = -0.35,
  XC = -0.68,
  DC = 6.6;
function P(X, h, d) {
  return [(X * D) / d, -1.7 + ((1.7 - h) * D) / d];
}
function blk(x0, h0) {
  if (!cs) return false;
  var xf = x0 - DX * (DC - DW) - XC,
    hf = h0 + DH * (DC - DW);
  var a = Math.abs(xf);
  if (hf > 1.79 || hf < 0) return false;
  if (hf < 0.82) return a < 0.17 && !(hf < 0.72 && a < 0.027);
  if (hf < 1.45) return a < 0.225;
  if (hf < 1.53) return a < 0.1;
  return a < 0.115;
}
var G = [
  [-1.48, 0.025, 0.15, 2.45],
  [-0.12, 0.03, 0, 2.45],
  [0.22, 0.014, 0.6, 2.45],
  [0.55, 0.04, 0, 1.55],
  [0.9, 0.022, 0, 2.45],
  [1.27, 0.034, 0.3, 2.1],
  [1.52, 0.014, 0, 2.45],
];
var K = [1.06, 1.05, 0.03];
var th = aj * 1.4;
var xa = Math.max(dl, dl + 0.8 * (Math.cos(th) - DX * Math.sin(th)));
function E(x, h) {
  var s = Math.min(h / DH, DW - 0.5);
  return [x + DX * s, h - DH * s, DW - s];
}
function sheet(x, h1, h2, a) {
  if (a < 0.003 || h2 <= h1) return;
  var pts = [[x, h1, DW], [x, h2, DW], E(x, h2)];
  if (h1 < 1.25 && h2 > 1.25) pts.push(E(x, 1.25));
  pts.push(E(x, h1));
  g.beginPath();
  pts.forEach(function (q, i) {
    var p = P(q[0], q[1], q[2]);
    i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]);
  });
  g.closePath();
  var hm = (h1 + h2) / 2,
    p0 = P(x, hm, DW),
    p1 = P(x + DX * 2.6, hm - DH * 2.6, DW - 2.6);
  var gr = g.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
  gr.addColorStop(0, "rgba(255,198,130," + a.toFixed(3) + ")");
  gr.addColorStop(0.5, "rgba(255,176,104," + (a * 0.35).toFixed(3) + ")");
  gr.addColorStop(1, "rgba(255,160,96,0)");
  g.fillStyle = gr;
  g.fill();
}
function runs(x, h1, h2, fn) {
  if (!cs) {
    fn(h1, h2);
    return;
  }
  var st = -1,
    h = h1;
  while (h < h2 - 1e-6) {
    var hh = Math.min(h2, h + 0.1);
    var b = blk(x, (h + hh) / 2);
    if (b) {
      if (st >= 0) {
        fn(st, h);
        st = -1;
      }
    } else if (st < 0) st = h;
    h = hh;
  }
  if (st >= 0) fn(st, h2);
}
g.globalCompositeOperation = "lighter";
var br = 0.92 + 0.05 * Math.sin(t * 0.23) + 0.03 * Math.sin(t * 0.61 + 1.7);
G.forEach(function (q) {
  var a = 0.11 * L * br * Math.min(1.4, q[1] / 0.025);
  runs(q[0], q[2], q[3], function (a1, a2) {
    sheet(q[0], a1, a2, a);
  });
});
sheet(K[0], K[1] - 0.025, K[1] + 0.025, 0.3 * L * br);
if (aj > 0.02 && dr > xa + 0.004) {
  var n = 9,
    fw = Math.min(1, (dr - xa) / 0.5);
  for (var i = 0; i < n; i++) {
    var x = xa + ((dr - xa) * (i + 0.5)) / n;
    runs(x, 0, 1.9, function (a1, a2) {
      sheet(x, a1, a2, 0.045 * L * br * fw);
    });
  }
  var vp = P(-0.7, 1.0, 5.2);
  var vg = g.createRadialGradient(vp[0], vp[1], 0, vp[0], vp[1], 1.4);
  vg.addColorStop(0, "rgba(255,170,100," + (0.08 * aj * L).toFixed(3) + ")");
  vg.addColorStop(1, "rgba(255,170,100,0)");
  g.fillStyle = vg;
  g.fillRect(vp[0] - 1.5, vp[1] - 1.5, 3, 3);
}
for (var i = 0; i < 240; i++) {
  var r1 = e.rnd(),
    r2 = e.rnd(),
    r3 = e.rnd(),
    ph = e.rnd() * 6.283,
    sz = e.rnd();
  var d = 2.9 + r3 * 2.5 + 0.1 * Math.sin(t * 0.09 + ph);
  var X = -1.6 + ((((r1 * 3.2 + 0.03 * t * (0.3 + r2) + 0.06 * Math.sin(t * 0.13 + ph)) % 3.2) + 3.2) % 3.2);
  var h = 0.05 + ((((r2 * 2.3 - t * 0.01 * (0.5 + sz) + 0.08 * Math.sin(t * 0.17 + ph * 1.3)) % 2.3) + 2.3) % 2.3);
  var s = DW - d,
    x0 = X - DX * s,
    h0 = h + DH * s,
    lit = 0;
  for (var j = 0; j < G.length; j++) {
    var q = G[j];
    if (h0 >= q[2] && h0 <= q[3]) {
      var k = 1 - Math.abs(x0 - q[0]) / (q[1] / 2 + 0.045);
      if (k > lit) lit = k;
    }
  }
  if (aj > 0.02 && x0 > xa && x0 < dr && h0 < 1.9) lit = Math.max(lit, 0.75);
  var kd = Math.sqrt((x0 - K[0]) * (x0 - K[0]) + (h0 - K[1]) * (h0 - K[1]));
  if (kd < 0.07) lit = Math.max(lit, 1 - kd / 0.07);
  if (lit > 0 && blk(x0, h0)) lit = 0;
  var p = P(X, h, d);
  var tw = 0.55 + 0.45 * Math.sin(t * (1.3 + sz * 2) + ph);
  var r = Math.max(e.px * 0.7, ((0.0025 + sz * 0.004) * D) / d);
  if (lit > 0.05) {
    var a = lit * L * (0.3 + 0.65 * tw);
    g.fillStyle = "rgba(255,214,160," + a.toFixed(3) + ")";
    g.beginPath();
    g.arc(p[0], p[1], r, 0, 6.283);
    g.fill();
    if (sz > 0.7) {
      g.fillStyle = "rgba(255,190,130," + (a * 0.25).toFixed(3) + ")";
      g.beginPath();
      g.arc(p[0], p[1], r * 3, 0, 6.283);
      g.fill();
    }
  } else {
    g.fillStyle = "rgba(170,140,110,0.07)";
    g.beginPath();
    g.arc(p[0], p[1], r, 0, 6.283);
    g.fill();
  }
}
for (var i = 0; i < 22; i++) {
  var ph = e.rnd() * 6.283,
    X = -1.4 + e.rnd() * 2.8,
    h = 1.0 + e.rnd() * 1.4,
    d = 1.3 + e.rnd() * 1.4;
  X += 0.08 * Math.sin(t * 0.07 + ph);
  h += 0.06 * Math.sin(t * 0.11 + ph * 1.7);
  var p = P(X, h, d);
  var r = (0.012 * D) / d;
  var a = (0.03 + 0.05 * L) * (0.5 + 0.5 * Math.sin(t * 0.4 + ph));
  var mg = g.createRadialGradient(p[0], p[1], 0, p[0], p[1], r);
  mg.addColorStop(0, "rgba(255,200,140," + a.toFixed(3) + ")");
  mg.addColorStop(1, "rgba(255,200,140,0)");
  g.fillStyle = mg;
  g.beginPath();
  g.arc(p[0], p[1], r, 0, 6.283);
  g.fill();
}
g.globalCompositeOperation = "source-over";
