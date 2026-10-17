var t = e.t,
  st = e.state || {},
  dk = Math.min(1, Math.max(0, st.dusk || 0)),
  bv = st.bench == null ? 1 : Math.max(0, Math.min(1, st.bench)),
  it = st.bench_thing || "none",
  A0 = 2.5,
  D = 5.2,
  sun = 1 - dk,
  i;
function L(a, b) {
  var P1 = parseInt(a.slice(1), 16),
    Q = parseInt(b.slice(1), 16);
  return (
    "rgb(" +
    (((P1 >> 16) + ((Q >> 16) - (P1 >> 16)) * dk) | 0) +
    "," +
    ((((P1 >> 8) & 255) + (((Q >> 8) & 255) - ((P1 >> 8) & 255)) * dk) | 0) +
    "," +
    (((P1 & 255) + ((Q & 255) - (P1 & 255)) * dk) | 0) +
    ")"
  );
}
function P(ax, z, h) {
  return [((A0 + ax) * D) / z - A0, ((1.7 - h) * D) / z - 1.7];
}
function poly(a) {
  g.beginPath();
  g.moveTo(a[0][0], a[0][1]);
  for (var m = 1; m < a.length; m++) g.lineTo(a[m][0], a[m][1]);
  g.closePath();
}
function ln(a, b) {
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.stroke();
}
var mist = 4 * bv * (1 - bv);
if (bv > 0.003) {
  g.globalAlpha = bv;
  var wd = L("#3e2c2e", "#1c1a26"),
    wt = L("#6e5048", "#2e2a3a"),
    rim = "rgba(255,196,140," + (0.06 + 0.5 * sun).toFixed(3) + ")";
  g.lineCap = "butt";
  g.strokeStyle = wd;
  g.lineWidth = 0.05;
  ln(P(-0.75, 5.58, 0), P(-0.75, 5.58, 0.45));
  ln(P(0.75, 5.58, 0), P(0.75, 5.58, 0.45));
  g.lineWidth = 0.045;
  ln(P(-0.75, 5.22, 0.41), P(-0.75, 5.6, 0.41));
  ln(P(0.75, 5.22, 0.41), P(0.75, 5.6, 0.41));
  var zs = [
    [5.26, 5.41],
    [5.44, 5.6],
  ];
  for (i = 0; i < 2; i++) {
    var a = P(-0.85, zs[i][0], 0.45),
      b = P(0.85, zs[i][0], 0.45),
      c2 = P(0.85, zs[i][1], 0.45),
      d2 = P(-0.85, zs[i][1], 0.45);
    poly([a, b, c2, d2]);
    g.fillStyle = wt;
    g.fill();
    poly([a, b, [b[0], b[1] + 0.035], [a[0], a[1] + 0.035]]);
    g.fillStyle = wd;
    g.fill();
    g.strokeStyle = rim;
    g.lineWidth = e.px * 1.3;
    ln(d2, c2);
  }
  if (it === "lantern") {
    var lb = P(0.45, 5.43, 0.45),
      ls = D / 5.43;
    g.save();
    g.translate(lb[0], lb[1]);
    g.scale(ls, ls);
    g.fillStyle = L("#2a2426", "#16141c");
    g.fillRect(-0.06, -0.03, 0.12, 0.03);
    g.fillRect(-0.05, -0.2, 0.1, 0.02);
    g.globalAlpha = bv * 0.5;
    g.fillStyle = L("#8a6a5a", "#3a3648");
    g.fillRect(-0.045, -0.18, 0.09, 0.15);
    g.globalAlpha = bv;
    g.strokeStyle = L("#2a2426", "#16141c");
    g.lineWidth = 0.008;
    g.strokeRect(-0.045, -0.18, 0.09, 0.15);
    g.beginPath();
    g.arc(0, -0.22, 0.04, Math.PI, 0);
    g.stroke();
    g.fillStyle = "rgba(255,210,160," + (0.5 * sun + 0.1).toFixed(3) + ")";
    g.fillRect(0.025, -0.17, 0.008, 0.12);
    g.restore();
  }
  g.strokeStyle = wd;
  g.lineWidth = 0.06;
  ln(P(-0.75, 5.2, 0), P(-0.75, 5.2, 0.93));
  ln(P(0.75, 5.2, 0), P(0.75, 5.2, 0.93));
  var hs = [
    [0.56, 0.68],
    [0.76, 0.9],
  ];
  for (i = 0; i < 2; i++) {
    g.fillStyle = wd;
    g.fillRect(-0.88, -hs[i][1], 1.76, hs[i][1] - hs[i][0]);
    g.globalAlpha = bv * 0.18;
    g.strokeStyle = "#120a0e";
    g.lineWidth = e.px;
    for (var gy = 0; gy < 3; gy++) {
      var yy = -hs[i][1] + 0.025 + gy * 0.035;
      ln([-0.86, yy], [0.86, yy + 0.004]);
    }
    g.globalAlpha = bv;
    var tp1 = P(-0.88, 5.23, hs[i][1]),
      tp2 = P(0.88, 5.23, hs[i][1]);
    g.fillStyle = wt;
    poly([[-0.88, -hs[i][1]], [0.88, -hs[i][1]], tp2, tp1]);
    g.fill();
    g.strokeStyle = rim;
    g.lineWidth = e.px * 1.3;
    ln(tp1, tp2);
  }
  if (it === "coat") {
    var cc = L("#3a3c4a", "#1c1c28");
    g.fillStyle = cc;
    g.beginPath();
    g.moveTo(-0.15, -0.92);
    g.bezierCurveTo(0.0, -0.95, 0.3, -0.95, 0.48, -0.9);
    g.bezierCurveTo(0.5, -0.7, 0.52, -0.55, 0.56, -0.38);
    g.bezierCurveTo(0.45, -0.33, 0.38, -0.4, 0.3, -0.36);
    g.bezierCurveTo(0.2, -0.32, 0.1, -0.42, 0.02, -0.4);
    g.bezierCurveTo(-0.08, -0.38, -0.13, -0.5, -0.14, -0.55);
    g.bezierCurveTo(-0.16, -0.7, -0.17, -0.82, -0.15, -0.92);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(0.42, -0.86);
    g.quadraticCurveTo(0.62, -0.7, 0.66, -0.48);
    g.lineTo(0.6, -0.46);
    g.quadraticCurveTo(0.56, -0.66, 0.4, -0.78);
    g.closePath();
    g.fill();
    g.globalAlpha = bv * 0.35;
    g.strokeStyle = "#0e0c14";
    g.lineWidth = 0.01;
    ln([0.1, -0.88], [0.05, -0.45]);
    ln([0.3, -0.88], [0.33, -0.42]);
    g.globalAlpha = bv;
    g.strokeStyle = rim;
    g.lineWidth = e.px * 1.3;
    g.beginPath();
    g.moveTo(-0.14, -0.925);
    g.bezierCurveTo(0.0, -0.955, 0.3, -0.955, 0.48, -0.905);
    g.stroke();
  }
  if (it === "shoes") {
    var sc = L("#221c22", "#121018");
    for (i = 0; i < 2; i++) {
      var spp = P(0.12 + i * 0.16, 4.95, 0),
        ss = D / 4.95;
      g.save();
      g.translate(spp[0], spp[1]);
      g.scale(ss, ss);
      g.rotate(-0.15 + i * 0.1);
      g.fillStyle = sc;
      g.beginPath();
      g.ellipse(0, -0.03, 0.05, 0.035, 0, 0, 6.283);
      g.fill();
      g.beginPath();
      g.moveTo(-0.05, -0.03);
      g.lineTo(-0.05, -0.07);
      g.quadraticCurveTo(0, -0.1, 0.04, -0.06);
      g.lineTo(0.05, -0.03);
      g.closePath();
      g.fill();
      g.strokeStyle = rim;
      g.lineWidth = 0.006;
      g.beginPath();
      g.arc(0, -0.06, 0.04, 3.6, 5.4);
      g.stroke();
      g.restore();
    }
  }
  g.globalAlpha = 1;
}
if (mist > 0.01) {
  g.globalCompositeOperation = "lighter";
  for (i = 0; i < 5; i++) {
    var mx = -0.9 + i * 0.45 + 0.15 * Math.sin(t * 0.13 + i * 1.7),
      my = -0.15 - 0.1 * Math.sin(t * 0.09 + i),
      mr = 0.5 + 0.12 * (i % 2);
    var mg = g.createRadialGradient(mx, my, 0, mx, my, mr);
    mg.addColorStop(0, "rgba(216,168,138," + (mist * 0.12 * (1 - 0.5 * dk)).toFixed(3) + ")");
    mg.addColorStop(1, "rgba(200,160,140,0)");
    g.fillStyle = mg;
    g.save();
    g.translate(mx, my);
    g.scale(1.8, 0.6);
    g.translate(-mx, -my);
    g.fillRect(mx - mr, my - mr, mr * 2, mr * 2);
    g.restore();
  }
  g.globalCompositeOperation = "source-over";
}
