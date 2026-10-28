var S = e.state || {},
  o = Math.max(0, Math.min(1, S.gate || 0)),
  lk = S.gate_locked !== false;
function glint(x) {
  var d = Math.min(Math.abs(x - 5.2), Math.abs(x - 7.8));
  return d < 3.5 ? (1 - d / 3.5) * 0.4 : 0.04;
}
function bars(a, b) {
  for (var x = a; x < b; x += 0.16) {
    g.fillStyle = "#0f0e13";
    g.fillRect(x - 0.018, -2.0, 0.036, 2.0);
    g.beginPath();
    g.moveTo(x - 0.04, -2.0);
    g.lineTo(x, -2.13);
    g.lineTo(x + 0.04, -2.0);
    g.fill();
    var k = glint(x);
    g.fillStyle = "rgba(255,190,120," + k + ")";
    g.fillRect(x + 0.006, -1.98, 0.009, 1.7);
  }
  g.fillStyle = "#0f0e13";
  g.fillRect(a, -1.86, b - a, 0.05);
  g.fillRect(a, -0.26, b - a, 0.05);
}
bars(-45, 4.95);
bars(8.1, 45);
function pillar(x) {
  g.fillStyle = "#24212a";
  g.fillRect(x - 0.25, -2.7, 0.5, 2.7);
  g.fillStyle = "#302c38";
  g.fillRect(x - 0.3, -2.85, 0.6, 0.15);
  var r = g.createLinearGradient(x - 0.25, 0, x + 0.25, 0);
  var left = x < 6.5;
  r.addColorStop(0, left ? "rgba(0,0,0,0)" : "rgba(255,190,120,0.12)");
  r.addColorStop(1, left ? "rgba(255,190,120,0.12)" : "rgba(0,0,0,0)");
  g.fillStyle = r;
  g.fillRect(x - 0.25, -2.7, 0.5, 2.7);
  for (var j = 0; j < 6; j++) {
    g.fillStyle = "rgba(10,10,14,0.35)";
    g.fillRect(x - 0.25, -2.7 + j * 0.45, 0.5, 0.015);
  }
}
pillar(5.2);
pillar(7.8);
var ws = 1.05 * Math.cos(o * 1.35);
function leaf(h, dir) {
  var n = 7;
  g.fillStyle = "#100f14";
  for (var k = 0; k <= n; k++) {
    var q = k / n,
      x = h + dir * ws * q,
      top = -2.05 - 0.3 * Math.sin((Math.PI / 2) * q);
    g.fillRect(x - 0.018, top, 0.036, -top);
    g.beginPath();
    g.moveTo(x - 0.04, top);
    g.lineTo(x, top - 0.12);
    g.lineTo(x + 0.04, top);
    g.fill();
    g.fillStyle = "rgba(255,196,128," + 0.35 * (0.4 + 0.6 * Math.cos(o * 1.35)) + ")";
    g.fillRect(x + 0.006, top + 0.02, 0.009, -top - 0.3);
    g.fillStyle = "#100f14";
  }
  var x0 = Math.min(h, h + dir * ws),
    w = Math.abs(ws);
  g.fillRect(x0, -1.92, w, 0.06);
  g.fillRect(x0, -1.05, w, 0.05);
  g.fillRect(x0, -0.22, w, 0.06);
  g.strokeStyle = "#100f14";
  g.lineWidth = 0.03;
  g.beginPath();
  g.arc(h + dir * ws * 0.5, -1.45, Math.max(0.01, Math.abs(ws) * 0.22), 0, Math.PI * 2);
  g.stroke();
}
leaf(5.45, 1);
leaf(7.55, -1);
if (o < 0.03 && lk) {
  g.strokeStyle = "#3a3642";
  g.lineWidth = 0.025;
  for (var j = 0; j < 6; j++) {
    g.beginPath();
    g.ellipse(6.32 + j * 0.07, -1.05 + (j % 2 ? 0.02 : -0.02), 0.04, 0.025, 0, 0, Math.PI * 2);
    g.stroke();
  }
  g.strokeStyle = "#4a4450";
  g.lineWidth = 0.02;
  g.beginPath();
  g.arc(6.5, -0.95, 0.05, Math.PI, 0);
  g.stroke();
  g.fillStyle = "#2e2a30";
  g.fillRect(6.42, -0.95, 0.16, 0.14);
  g.fillStyle = "rgba(255,196,128,0.45)";
  g.fillRect(6.44, -0.94, 0.02, 0.11);
}
