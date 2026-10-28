var S = e.state || {},
  dk = S.dusk == null ? 0.3 : S.dusk,
  A = e.aspect,
  hz = 0.5;
function mx(a, b, t) {
  var p = parseInt(a.slice(1), 16),
    q = parseInt(b.slice(1), 16);
  function c(s) {
    return Math.round(((p >> s) & 255) * (1 - t) + ((q >> s) & 255) * t);
  }
  return "rgb(" + c(16) + "," + c(8) + "," + c(0) + ")";
}
var gr = g.createLinearGradient(0, -0.35, 0, hz);
gr.addColorStop(0, mx("#10152a", "#080a16", dk));
gr.addColorStop(0.5, mx("#24243e", "#14152a", dk));
gr.addColorStop(0.84, mx("#56405a", "#2a2640", dk));
gr.addColorStop(1, mx("#8a5a52", "#3a3044", dk));
g.fillStyle = gr;
g.fillRect(-0.1, -0.4, A + 0.2, hz + 0.41);
for (var i = 0; i < 110; i++) {
  var x = e.rnd() * A,
    y = -0.35 + e.rnd() * 0.5,
    b = e.rnd();
  g.fillStyle = "rgba(225,228,250," + (0.08 + b * 0.4) * (0.35 + dk * 0.75) + ")";
  g.fillRect(x, y, 0.0012, 0.0012);
}
for (var k = 0; k < 6; k++) {
  var cx = e.rnd() * A,
    cy = 0.18 + e.rnd() * 0.24,
    w = 0.25 + e.rnd() * 0.4;
  g.fillStyle = "rgba(30,28,46,0.45)";
  g.beginPath();
  g.ellipse(cx, cy, w, 0.016 + e.rnd() * 0.014, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = "rgba(180,110,100," + 0.1 * (1 - dk) + ")";
  g.beginPath();
  g.ellipse(cx, cy + 0.008, w * 0.8, 0.005, 0, 0, Math.PI * 2);
  g.fill();
}
g.fillStyle = "#141218";
g.fillRect(-0.1, hz, A + 0.2, 1.3 - hz);
