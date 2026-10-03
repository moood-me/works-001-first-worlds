var t = e.t,
  st = e.state || {},
  dk = Math.min(1, Math.max(0, st.dusk || 0)),
  pr = Math.max(0, Math.min(1, st.prints || 0)),
  el = Math.max(0, st.elsewhere || 0),
  ins = Math.max(0, st.inside || 0),
  br = Math.max(0, st.breath || 0),
  bv = st.bench == null ? 1 : Math.max(0, Math.min(1, st.bench)),
  sun = 1 - dk,
  S = 19,
  x,
  y,
  i,
  k;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
function L(a, b) {
  var P = parseInt(a.slice(1), 16),
    Q = parseInt(b.slice(1), 16);
  return (
    "rgb(" +
    (((P >> 16) + ((Q >> 16) - (P >> 16)) * dk) | 0) +
    "," +
    ((((P >> 8) & 255) + (((Q >> 8) & 255) - ((P >> 8) & 255)) * dk) | 0) +
    "," +
    (((P & 255) + ((Q & 255) - (P & 255)) * dk) | 0) +
    ")"
  );
}
function dw(x) {
  var d = 7.8 - 0.5 * x + 0.05 * x * x + 0.3 * Math.sin(0.9 * x);
  return d > 12 ? 12 + (d - 12) * 0.15 : d;
}
function yw(x) {
  return Math.max(-11, 11 - dw(x));
}
function line(o) {
  g.beginPath();
  for (var xx = -20; xx <= 20.01; xx += 0.4) {
    var yy = yw(xx) + o;
    if (xx <= -20) g.moveTo(xx, yy);
    else g.lineTo(xx, yy);
  }
  g.stroke();
}
var c1 = L("#b48a74", "#5a5068"),
  c2 = L("#3a2a32", "#1c1a28");
g.beginPath();
g.moveTo(-20, 11.2);
for (x = -20; x <= 20.01; x += 0.25) g.lineTo(x, yw(x));
g.lineTo(20, 11.2);
g.closePath();
g.save();
g.clip();
var gr = g.createLinearGradient(0, -11, 0, 11);
gr.addColorStop(0, L("#4a3640", "#242234"));
gr.addColorStop(0.5, L("#6c4e50", "#2c283a"));
gr.addColorStop(1, L("#86625a", "#363044"));
g.fillStyle = gr;
g.fillRect(-20, -11, 40, 22.2);
g.globalCompositeOperation = "lighter";
var wl = g.createRadialGradient(1.2, 3.5, 0, 1.2, 3.5, 9);
wl.addColorStop(0, "rgba(255,170,120," + (0.12 * sun).toFixed(3) + ")");
wl.addColorStop(1, "rgba(255,150,110,0)");
g.fillStyle = wl;
g.fillRect(-10, -6, 22, 18);
g.globalCompositeOperation = "source-over";
g.lineCap = "round";
g.strokeStyle = L("#3a2a36", "#1c1a2a");
g.lineWidth = 0.5;
for (k = 0; k < 6; k++) {
  g.globalAlpha = 0.22 * (1 - k / 6);
  line(0.2 + k * 0.32);
}
g.strokeStyle = L("#c88a72", "#6a6080");
g.lineWidth = 0.25;
g.globalAlpha = 0.14 * (1 - 0.5 * dk);
line(0.45);
g.globalAlpha = 0.07 * (1 - 0.5 * dk);
line(1.1);
for (i = 0; i < 260; i++) {
  x = (R() - 0.5) * 30;
  y = -11 + R() * 22;
  var r = 0.015 + R() * 0.04,
    lt = R() < 0.4;
  if (y < yw(x) + 0.1) continue;
  g.globalAlpha = lt ? 0.12 : 0.22;
  g.fillStyle = lt ? c1 : c2;
  g.beginPath();
  g.ellipse(x, y, r * 1.4, r, 0, 0, 6.283);
  g.fill();
}
g.lineWidth = 0.02;
g.strokeStyle = c2;
for (i = 0; i < 70; i++) {
  x = (R() - 0.5) * 24;
  var o = 0.5 + R() * 3.5,
    l = 0.3 + R() * 0.9,
    yy = yw(x) + o;
  g.globalAlpha = 0.12;
  g.beginPath();
  g.moveTo(x, yy);
  g.quadraticCurveTo(x + l / 2, yy + 0.05, x + l, yy + 0.01);
  g.stroke();
}
g.lineWidth = 0.012;
g.globalAlpha = 0.45;
for (i = 0; i < 130; i++) {
  x = -12 + R() * 26;
  var ty = yw(x) + 1.9 + 0.35 * Math.sin(x * 0.7) + (R() - 0.5) * 0.3,
    ta = R() * 3.14,
    tl = 0.04 + R() * 0.16;
  g.beginPath();
  g.moveTo(x - (Math.cos(ta) * tl) / 2, ty - (Math.sin(ta) * tl) / 2);
  g.lineTo(x + (Math.cos(ta) * tl) / 2, ty + (Math.sin(ta) * tl) / 2);
  g.stroke();
}
var sa = 0.42 * (1 - 0.85 * dk),
  scol = L("#241c30", "#141424");
if (sa > 0.01) {
  g.fillStyle = scol;
  for (k = 0; k < 3; k++) {
    var s = k * 0.45;
    g.globalAlpha = sa * (k == 0 ? 0.6 : 0.22);
    g.beginPath();
    g.moveTo(-3.9, 1.4);
    g.lineTo(-1.3, 1.4);
    g.lineTo(-2.7 + s, 13.4);
    g.lineTo(-5.3 - s, 13.4);
    g.closePath();
    g.fill();
  }
  g.strokeStyle = scol;
  g.lineWidth = 0.05;
  g.globalAlpha = sa * 0.8 * bv;
  var lg = [
    [1.75, 5.78],
    [3.25, 5.78],
    [1.75, 5.42],
    [3.25, 5.42],
  ];
  for (k = 0; k < 4; k++) {
    g.beginPath();
    g.moveTo(lg[k][0], lg[k][1]);
    g.lineTo(lg[k][0] - 0.64, lg[k][1] + 5.5);
    g.stroke();
  }
}
var shn = 0.3 * sun * sun;
g.globalCompositeOperation = "lighter";
g.save();
g.translate(0.86, 4.6);
g.scale(0.55, 1.9);
var sg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
sg.addColorStop(0, "rgba(255,190,140," + shn.toFixed(3) + ")");
sg.addColorStop(1, "rgba(255,160,120,0)");
g.globalAlpha = 1;
g.fillStyle = sg;
g.beginPath();
g.arc(0, 0, 1, 0, 6.283);
g.fill();
g.restore();
for (i = 0; i < 36; i++) {
  var gy = yw(0.85) + 0.12 + Math.pow(R(), 1.5) * 1.6,
    gx = 0.117 * (11 - gy) + (R() + R() - 1) * 0.3,
    gl = 0.05 + R() * 0.14,
    f2 = 0.5 + R() * 1.5,
    p = R() * 6.283,
    w = Math.sin(t * f2 + p) + 0.5 * Math.sin(t * f2 * 1.7 + p),
    a = w > 0.6 ? Math.min(1, (w - 0.6) / 0.7) : 0;
  if (a > 0 && shn > 0.005) {
    g.globalAlpha = Math.min(1, a * shn * 2.2);
    g.fillStyle = "#ffdcae";
    g.fillRect(gx - gl / 2, gy, gl, 0.02);
  }
}
g.globalCompositeOperation = "source-over";
var off0 = 0.16 + 0.12 * Math.sin(t * 0.37) + 0.05 * Math.sin(t * 0.91 + 1.3);
g.beginPath();
for (x = -20; x <= 20.01; x += 0.4) g.lineTo(x, yw(x) - 0.05);
for (x = 20; x >= -20.01; x -= 0.4) g.lineTo(x, yw(x) + Math.max(0.02, off0 + 0.05 * Math.sin(x * 1.3 + t * 0.5)));
g.closePath();
g.globalAlpha = 0.5;
g.fillStyle = L("#5a4450", "#2a2840");
g.fill();
g.beginPath();
for (x = -20; x <= 20.01; x += 0.4) {
  var ly = yw(x) + Math.max(0.02, off0 + 0.05 * Math.sin(x * 1.3 + t * 0.5));
  if (x <= -20) g.moveTo(x, ly);
  else g.lineTo(x, ly);
}
g.globalAlpha = 0.3 * (1 - 0.5 * dk);
g.strokeStyle = L("#f2c8a2", "#9a90b0");
g.lineWidth = 0.03;
g.stroke();
var dir = st.prints_dir === "to_door" ? -1 : 1,
  P0 = [-2.2, 4.25],
  P1 = [-1.0, 5.4],
  P2 = [1.15, 3.55],
  N = 10,
  pc = L("#33242e", "#1a1828"),
  pl = L("#b88a72", "#5a5470");
for (i = 0; i < N; i++) {
  var u = (i + 0.5) / N,
    vis = Math.max(0, Math.min(1, pr * N - (dir > 0 ? i : N - 1 - i)));
  if (vis <= 0) continue;
  var q = 1 - u,
    bx = q * q * P0[0] + 2 * q * u * P1[0] + u * u * P2[0],
    by = q * q * P0[1] + 2 * q * u * P1[1] + u * u * P2[1],
    tx = 2 * q * (P1[0] - P0[0]) + 2 * u * (P2[0] - P1[0]),
    tyy = 2 * q * (P1[1] - P0[1]) + 2 * u * (P2[1] - P1[1]),
    tln = Math.sqrt(tx * tx + tyy * tyy);
  tx /= tln;
  tyy /= tln;
  var sd = (i % 2 ? 1 : -1) * 0.1,
    fx = bx - tyy * sd,
    fy = by + tx * sd,
    ang = Math.atan2(tyy * dir, tx * dir),
    wash = u > 0.8 ? Math.max(0.25, 1 - (u - 0.8) * 3) : 1;
  g.save();
  g.translate(fx, fy);
  g.rotate(ang);
  g.globalAlpha = vis * wash * 0.5 * (1 - dk * 0.4);
  g.fillStyle = pc;
  g.beginPath();
  g.ellipse(0.03, 0, 0.11, 0.045, 0, 0, 6.283);
  g.fill();
  g.beginPath();
  g.ellipse(-0.1, 0, 0.05, 0.035, 0, 0, 6.283);
  g.fill();
  g.globalAlpha = vis * wash * 0.22;
  g.strokeStyle = pl;
  g.lineWidth = 0.012;
  g.beginPath();
  g.ellipse(0.03, 0, 0.12, 0.052, 0, -1.9, -0.4);
  g.stroke();
  g.restore();
}
var th =
  Math.max(0, Math.min(1, st.door == null ? 0.06 : st.door)) * 1.85 +
  br * 0.07 * (0.5 + 0.5 * Math.sin(t * 0.55)) +
  0.01 * Math.sin(t * 0.31) * Math.sin(t * 0.13 + 1);
if (th < 0) th = 0;
var wg = 0.8 * Math.min(1, Math.sin(Math.min(th, 1.5708)) * 1.1),
  fl = 0.92 + 0.05 * Math.sin(t * 5.3) + 0.03 * Math.sin(t * 11.7 + 1),
  sa2 = Math.min(0.6, (ins * 0.34 + el * 0.42) * fl);
if (sa2 > 0.004 && wg > 0.01) {
  var cr = Math.round(255 - 95 * el),
    cgg = Math.round(196 - 10 * el),
    cb = Math.round(130 + 125 * el),
    lx = -2.3,
    lyy = 2.3,
    Ax = -1.85 - wg,
    Jx = -1.85,
    Yd = 4;
  g.globalCompositeOperation = "lighter";
  g.globalAlpha = 1;
  g.beginPath();
  g.moveTo(Ax, Yd);
  g.lineTo(Jx, Yd);
  g.lineTo(Jx + (Jx - lx) * 1.7, Yd + (Yd - lyy) * 1.7);
  g.lineTo(Ax + (Ax - lx) * 1.7, Yd + (Yd - lyy) * 1.7);
  g.closePath();
  var lg2 = g.createRadialGradient(lx, lyy, 0, lx, lyy, 4.6),
    cs = "rgba(" + cr + "," + cgg + "," + cb + ",";
  lg2.addColorStop(0, cs + sa2.toFixed(3) + ")");
  lg2.addColorStop(0.45, cs + (sa2 * 0.55).toFixed(3) + ")");
  lg2.addColorStop(1, cs + "0)");
  g.fillStyle = lg2;
  g.fill();
  g.globalCompositeOperation = "source-over";
}
g.restore();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
