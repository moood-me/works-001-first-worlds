var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level;
function cl(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}
function sm(a, b, v) {
  v = cl((v - a) / (b - a));
  return v * v * (3 - 2 * v);
}
var BL = cl(st.bench_legs || 0),
  gr = sm(0, 0.4, BL),
  wk = sm(0.3, 0.5, BL),
  go = sm(0.5, 1, BL),
  lift = 0.2 * sm(0.12, 0.4, BL),
  gt = t * 3.4,
  bb = wk * Math.abs(Math.sin(gt)) * 0.018,
  rk = wk * (Math.sin(gt * 0.5) * 0.014 + Math.sin(t * 0.7) * 0.006),
  dx = -9.5 * go,
  GY = lift + bb;
g.save();
g.translate(dx, 0);
g.fillStyle = "#04060c";
g.globalAlpha = 0.6 - 1.2 * lift;
g.beginPath();
g.ellipse(-0.15, 0.06, 1.15, 0.13, 0, 0, 6.283);
g.fill();
g.globalAlpha = 1;
g.save();
g.translate(0, -GY);
g.rotate(rk);
function legs(row) {
  if (gr <= 0) return;
  var cc = row ? "#141724" : "#0a0c15";
  for (var i = 0; i < 8; i++) {
    var xr = -0.82 + i * 0.234 + (row ? 0 : 0.05),
      gi = cl(gr * 1.8 - i * 0.07 - row * 0.12);
    if (gi <= 0) continue;
    var ph = gt + i * 0.85 + row * 3.1416,
      ry = -0.45,
      tx = xr + (row ? 0.05 : -0.03) + Math.sin(ph) * 0.09 * wk,
      ty = GY - Math.max(0, Math.cos(ph)) * 0.07 * wk,
      fx = xr + (tx - xr) * gi + (1 - gi) * gi * 0.3,
      fy = ry + (ty - ry) * gi,
      kx = (xr + fx) / 2 - 0.09 * gi,
      ky = (ry + fy) / 2 - 0.1 * gi;
    g.strokeStyle = cc;
    g.lineWidth = row ? 0.026 : 0.022;
    g.lineCap = "round";
    g.lineJoin = "round";
    g.beginPath();
    g.moveTo(xr, ry);
    g.lineTo(kx, ky);
    g.lineTo(fx, fy);
    g.stroke();
    if (row) {
      g.strokeStyle = "rgba(170,190,235," + (0.3 * L).toFixed(3) + ")";
      g.lineWidth = e.px;
      g.beginPath();
      g.moveTo(xr + 0.013, ry);
      g.lineTo(kx + 0.013, ky);
      g.stroke();
    }
    g.fillStyle = cc;
    g.beginPath();
    g.arc(fx, fy, 0.022 * gi, 0, 6.283);
    g.fill();
  }
}
legs(0);
g.lineCap = "butt";
g.fillStyle = "#151824";
g.fillRect(-0.86, -0.95, 0.07, 0.93);
g.fillRect(0.79, -0.95, 0.07, 0.93);
g.fillStyle = "#232634";
g.fillRect(-1.0, -0.9, 2.0, 0.1);
g.fillRect(-1.0, -0.74, 2.0, 0.08);
g.strokeStyle = "rgba(190,205,240," + (0.35 * L).toFixed(3) + ")";
g.lineWidth = e.px;
g.beginPath();
g.moveTo(-1.0, -0.9);
g.lineTo(1.0, -0.9);
g.stroke();
g.fillStyle = "#1b1e2b";
g.beginPath();
g.moveTo(-0.97, -0.53);
g.lineTo(0.97, -0.53);
g.lineTo(0.95, -0.45);
g.lineTo(-0.95, -0.45);
g.closePath();
g.fill();
g.fillStyle = "#4a5578";
g.globalAlpha = 0.35 + 0.4 * L;
g.beginPath();
g.moveTo(-0.97, -0.535);
g.lineTo(0.97, -0.535);
g.lineTo(0.95, -0.47);
g.lineTo(-0.95, -0.47);
g.closePath();
g.fill();
g.globalAlpha = 1;
g.strokeStyle = "rgba(10,12,20,0.6)";
g.beginPath();
g.moveTo(-0.96, -0.5);
g.lineTo(0.96, -0.5);
g.stroke();
g.fillStyle = "#1d2030";
g.fillRect(-0.95, -0.46, 1.9, 0.06);
g.fillStyle = "#10131d";
g.fillRect(-0.84, -0.4, 0.07, 0.4);
g.fillRect(0.77, -0.4, 0.07, 0.4);
g.strokeStyle = "rgba(170,190,235," + (0.3 * L).toFixed(3) + ")";
g.beginPath();
g.moveTo(0.845, -0.4);
g.lineTo(0.845, 0);
g.stroke();
legs(1);
var an = sm(0.18, 0.4, BL);
if (an > 0) {
  g.strokeStyle = "#10131d";
  g.lineWidth = 0.012;
  g.lineCap = "round";
  for (var a = 0; a < 2; a++) {
    var tw = (Math.sin(t * 2.6 + a * 1.7) * 0.06 + Math.sin(t * 1.1 + a) * 0.03) * an;
    g.beginPath();
    g.moveTo(-0.97, -0.88 + a * 0.06);
    g.quadraticCurveTo(
      -1.08 - 0.1 * an,
      -0.98 - 0.12 * an + a * 0.05,
      -1.0 - 0.34 * an + tw,
      -1.02 - 0.24 * an + a * 0.08 + tw * 0.5,
    );
    g.stroke();
  }
}
g.restore();
g.restore();
