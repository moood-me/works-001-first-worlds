var T = Math.PI * 2,
  b = (e.t * 118) / 60,
  pl = Math.pow(1 - (b % 1), 2.5),
  dk = "#150a24",
  pk = "#ff2fd6",
  bx = 0,
  by = -4.45,
  br = 0.42,
  rot = e.t * 0.45;
g.globalCompositeOperation = "lighter";
var hg = g.createRadialGradient(0, -2.2, 0, 0, -2.2, 5.5);
hg.addColorStop(0, "rgba(255,47,214,0.3)");
hg.addColorStop(1, "rgba(255,47,214,0)");
g.globalAlpha = 0.6 + 0.3 * pl;
g.fillStyle = hg;
g.beginPath();
g.arc(0, -2.2, 5.5, 0, T);
g.fill();
g.globalAlpha = 1;
for (var k = 0; k < 16; k++) {
  var a = (k / 16) * T + rot * 0.5 + 0.25 * Math.sin(k * 1.7),
    L = 3 + ((k * 37) % 5) * 0.9,
    ca = Math.cos(a),
    sa = Math.sin(a);
  var lg = g.createLinearGradient(bx + ca * br, by + sa * br, bx + ca * L, by + sa * L);
  lg.addColorStop(0, "rgba(255,225,250,0.2)");
  lg.addColorStop(1, "rgba(255,225,250,0)");
  g.strokeStyle = lg;
  g.lineWidth = 0.06;
  g.beginPath();
  g.moveTo(bx + ca * br, by + sa * br);
  g.lineTo(bx + ca * L, by + sa * L);
  g.stroke();
}
g.globalCompositeOperation = "source-over";
g.strokeStyle = dk;
g.lineCap = "round";
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(-0.85, -1);
g.lineTo(-0.3, -5);
g.moveTo(0.85, -1);
g.lineTo(0.3, -5);
g.moveTo(-0.95, -5);
g.lineTo(0.95, -5);
g.stroke();
g.lineWidth = 0.035;
g.beginPath();
for (var k = 0; k < 8; k++) {
  var y0 = -1 - k * 0.5,
    y1 = y0 - 0.5,
    x0 = 0.85 - (0.55 * k) / 8,
    x1 = 0.85 - (0.55 * (k + 1)) / 8;
  if (k % 2) {
    g.moveTo(-x0, y0);
    g.lineTo(x1, y1);
  } else {
    g.moveTo(x0, y0);
    g.lineTo(-x1, y1);
  }
  g.moveTo(-x1, y1);
  g.lineTo(x1, y1);
}
g.stroke();
g.globalCompositeOperation = "lighter";
g.strokeStyle = pk;
g.globalAlpha = 0.25 + 0.45 * pl;
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(-0.85, -1.02);
g.lineTo(-0.3, -4.98);
g.moveTo(0.85, -1.02);
g.lineTo(0.3, -4.98);
g.stroke();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
function spk(x, y, w, h, r) {
  g.fillStyle = "#1b0c2c";
  g.fillRect(x, y, w, h);
  g.strokeStyle = "#3a1f55";
  g.lineWidth = 0.025;
  g.beginPath();
  g.arc(x + w / 2, y + h / 2, r * (1 + 0.06 * pl), 0, T);
  g.stroke();
  g.beginPath();
  g.arc(x + w / 2, y + h / 2, r * 0.35, 0, T);
  g.stroke();
}
spk(-3.05, -0.95, 0.8, 0.95, 0.3);
spk(-2.95, -1.65, 0.62, 0.7, 0.2);
spk(2.3, -0.75, 0.75, 0.75, 0.26);
spk(2.36, -1.38, 0.63, 0.63, 0.21);
spk(2.42, -1.86, 0.5, 0.48, 0.14);
g.fillStyle = "#1d0d30";
g.beginPath();
g.moveTo(-2.15, 0);
g.lineTo(2.15, 0);
g.lineTo(1.95, -1);
g.lineTo(-1.95, -1);
g.closePath();
g.fill();
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 9; i++) {
  var qx = -1.7 + i * 0.425,
    qa = 0.08 + 0.45 * Math.max(0, Math.sin(b * Math.PI * 0.5 - i * 0.7));
  g.globalAlpha = qa;
  g.fillStyle = i % 2 ? "#b36bff" : pk;
  g.fillRect(qx - 0.05, -0.85, 0.1, 0.7);
}
g.globalAlpha = 0.55 + 0.4 * pl;
g.strokeStyle = pk;
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(-1.95, -1);
g.lineTo(1.95, -1);
g.stroke();
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
var bo = 0.05 * Math.pow(Math.abs(Math.sin(b * Math.PI)), 2),
  wv = 0.15 * Math.sin(b * Math.PI * 0.5) + 0.05 * Math.sin(e.t * 0.9);
g.fillStyle = dk;
g.strokeStyle = dk;
g.beginPath();
g.moveTo(-0.2, -2.42 + bo);
g.lineTo(0.2, -2.42 + bo);
g.lineTo(0.15, -1.6);
g.lineTo(-0.15, -1.6);
g.closePath();
g.fill();
g.beginPath();
g.arc(0.01, -2.62 + bo, 0.105, 0, T);
g.fill();
g.lineWidth = 0.03;
g.beginPath();
g.arc(0.01, -2.62 + bo, 0.13, Math.PI * 1.05, Math.PI * 1.95);
g.stroke();
g.fillRect(-0.15, -2.66 + bo, 0.05, 0.09);
g.fillRect(0.12, -2.66 + bo, 0.05, 0.09);
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(0.17, -2.38 + bo);
g.lineTo(0.38, -2.72 + bo + wv * 0.3);
g.lineTo(0.42 + wv, -3.02);
g.moveTo(-0.17, -2.38 + bo);
g.lineTo(-0.36, -2.12);
g.lineTo(-0.28, -1.98);
g.stroke();
g.fillStyle = "#1a0b2a";
g.fillRect(-0.8, -1.95, 1.6, 0.95);
g.fillStyle = "#24113a";
g.fillRect(-0.86, -2.0, 1.72, 0.07);
for (var i = 0; i < 7; i++) {
  var on = Math.sin(b * Math.PI * 0.5 + i * 1.9) > 0.2;
  g.fillStyle = i % 3 == 0 ? "#29e0ff" : i % 3 == 1 ? pk : "#fff23d";
  g.globalAlpha = on ? 0.9 : 0.25;
  g.fillRect(-0.6 + i * 0.19, -1.9, 0.06, 0.03);
}
g.globalAlpha = 1;
e.light(0, -2.05, 0.9, pk, 0.45 + 0.25 * pl);
g.strokeStyle = dk;
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(0, -5);
g.lineTo(0, by - br);
g.stroke();
g.save();
g.beginPath();
g.arc(bx, by, br, 0, T);
g.clip();
var bgd = g.createRadialGradient(bx - 0.14, by - 0.16, 0.04, bx, by, br);
bgd.addColorStop(0, "#f1e6fb");
bgd.addColorStop(0.6, "#9a86b8");
bgd.addColorStop(1, "#3b2a58");
g.fillStyle = bgd;
g.fillRect(bx - br, by - br, 2 * br, 2 * br);
var n = 10;
for (var r = 0; r < n; r++) {
  var la = -Math.PI / 2 + ((r + 0.5) / n) * Math.PI,
    yy = by + Math.sin(la) * br,
    cw = Math.cos(la),
    m = Math.max(4, Math.round(18 * cw));
  for (var c = 0; c < m; c++) {
    var lo = ((c / m) * T + rot) % T;
    if (lo > Math.PI) continue;
    var xx = bx - Math.cos(lo) * br * cw,
      fw = Math.max(0.004, br * cw * Math.sin(lo) * (T / m) * 0.85),
      fh = ((br * Math.PI) / n) * 0.85 * cw + 0.01,
      sp = Math.sin(e.t * 2.1 + r * 7.1 + c * 3.3);
    g.fillStyle =
      sp > 0.9
        ? "rgba(255,255,255,0.95)"
        : sp < -0.6
          ? "rgba(255,90,200,0.35)"
          : "rgba(30,15,55," + (0.12 + 0.18 * ((r + c) % 2)) + ")";
    g.fillRect(xx - fw / 2, yy - fh / 2, fw, fh);
  }
}
g.restore();
e.light(bx, by, 1.3, "#ffe0f6", 0.55 + 0.2 * pl);
g.globalCompositeOperation = "lighter";
g.fillStyle = "#ffffff";
for (var k = 0; k < 3; k++) {
  var s = Math.max(0, Math.sin(e.t * (0.9 + k * 0.37) + k * 2.2));
  if (s < 0.6) continue;
  var ga = (s - 0.6) / 0.4,
    gx = bx + Math.cos(k * 2.4 + 1) * br * 0.6,
    gy = by + Math.sin(k * 2.4 + 1) * br * 0.6,
    gl = 0.25 * ga;
  g.globalAlpha = ga;
  g.fillRect(gx - gl, gy - 0.008, 2 * gl, 0.016);
  g.fillRect(gx - 0.008, gy - gl, 0.016, 2 * gl);
}
g.globalAlpha = 1;
g.globalCompositeOperation = "source-over";
