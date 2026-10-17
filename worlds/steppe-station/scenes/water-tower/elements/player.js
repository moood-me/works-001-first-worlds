var A = e.aspect || 1.78,
  t = e.t,
  S = e.state || {},
  D0 = 13.8,
  F = 0.87;
var P = { tower: [0.72, 12.5, -1], station: [0.3, 45, 1], shed: [0.14, 30, 1] };
var tg = P[S.player_position] || P.tower;
var sx = S.player_sx != null ? S.player_sx : tg[0],
  D = S.player_d != null ? S.player_d : tg[1];
var mv = Math.abs(tg[0] - sx) > 0.002 || Math.abs(tg[1] - D) > 0.08;
var face = mv ? (tg[0] >= sx ? 1 : -1) : tg[2];
var s = D0 / D,
  X = ((sx - 0.5) * A * D0) / F,
  Y = 1.7 * s - 1.7;
g.fillStyle = "rgba(24,16,18,0.3)";
g.beginPath();
g.ellipse(X - 0.9 * s, Y + 0.05 * s, 1.3 * s, 0.07 * s, -0.04, 0, 6.283);
g.fill();
var ph = t * 5.4,
  br = 0.008 * Math.sin(t * 1.6) + 0.004 * Math.sin(t * 0.71 + 1);
var a1 = mv ? 0.3 * Math.sin(ph) : 0.04,
  a2 = mv ? -0.3 * Math.sin(ph) : -0.05;
var bob = mv ? 0.025 * Math.abs(Math.cos(ph)) : 0;
var look = !mv && tg === P.tower ? -0.3 : 0;
e.at(X + face * 0.02 * s, Y - (1.62 + bob) * s);
g.save();
g.translate(X, Y);
g.scale(s * face, s);
g.translate(0, -bob);
var C = "#1d1512";
g.strokeStyle = C;
g.lineCap = "round";
g.lineWidth = 0.12;
var f1x = -0.02 + Math.sin(a1) * 0.82,
  f1y = -0.82 + Math.cos(a1) * 0.82,
  f2x = 0.04 + Math.sin(a2) * 0.82,
  f2y = -0.82 + Math.cos(a2) * 0.82;
g.beginPath();
g.moveTo(-0.02, -0.82);
g.lineTo(f1x, f1y);
g.moveTo(0.04, -0.82);
g.lineTo(f2x, f2y);
g.stroke();
g.lineWidth = 0.08;
g.beginPath();
g.moveTo(f1x - 0.03, f1y);
g.lineTo(f1x + 0.12, f1y);
g.moveTo(f2x - 0.03, f2y);
g.lineTo(f2x + 0.12, f2y);
g.stroke();
var hm = 0.035 * Math.sin(t * 1.1) + 0.02 * Math.sin(t * 2.7 + 1) + (mv ? 0.03 * Math.sin(ph) : 0);
g.fillStyle = C;
g.beginPath();
g.moveTo(-0.17, -1.43 + br);
g.quadraticCurveTo(-0.24, -1.0, -0.3 + hm, -0.55);
g.lineTo(0.22 + hm * 0.6, -0.58);
g.quadraticCurveTo(0.2, -1.0, 0.15, -1.43 + br);
g.quadraticCurveTo(-0.01, -1.49 + br, -0.17, -1.43 + br);
g.closePath();
g.fill();
g.beginPath();
g.ellipse(-0.24, -1.17 + br, 0.1, 0.17, 0.15, 0, 6.283);
g.fill();
g.strokeStyle = "#15100d";
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(0.1, -1.36 + br);
g.quadraticCurveTo(0.17, -1.15, 0.1, -0.95);
g.stroke();
g.save();
g.translate(0, -1.5 + br);
g.rotate(look * 0.5);
g.fillStyle = C;
g.beginPath();
g.ellipse(0.02, -0.1, 0.095, 0.11, 0, 0, 6.283);
g.fill();
g.beginPath();
g.ellipse(0.0, -0.17, 0.11, 0.055, 0, Math.PI, 0);
g.fill();
g.fillRect(0.0, -0.2, 0.17, 0.035);
g.strokeStyle = "rgba(255,186,120,0.55)";
g.lineWidth = (e.px * 1.5) / s;
g.beginPath();
if (face > 0) g.arc(0.02, -0.1, 0.1, -0.9, 0.6);
else g.arc(0.02, -0.1, 0.1, Math.PI - 0.6, Math.PI + 0.9);
g.stroke();
g.restore();
var q = -face;
var sw = 0.05 * Math.sin(t * 1.7) + 0.03 * Math.sin(t * 3.1 + 1) + (mv ? 0.04 : 0);
g.fillStyle = "#6b3a2b";
g.beginPath();
g.moveTo(-0.12, -1.47 + br);
g.quadraticCurveTo(0.0, -1.42 + br, 0.13, -1.46 + br);
g.lineTo(0.12, -1.4 + br);
g.quadraticCurveTo(0, -1.37 + br, -0.13, -1.41 + br);
g.closePath();
g.fill();
var sb = q > 0 ? 0.12 : -0.12;
g.beginPath();
g.moveTo(sb, -1.45 + br);
g.quadraticCurveTo(sb + q * 0.13, -1.36 + sw * 0.6, sb + q * (0.22 + sw * 0.3), -1.29 + sw);
g.lineTo(sb + q * (0.19 + sw * 0.3), -1.25 + sw);
g.quadraticCurveTo(sb + q * 0.1, -1.33 + sw * 0.5, sb - q * 0.02, -1.41 + br);
g.closePath();
g.fill();
g.strokeStyle = "rgba(255,186,120,0.55)";
g.lineWidth = (e.px * 1.5) / s;
g.beginPath();
if (face > 0) {
  g.moveTo(0.15, -1.42 + br);
  g.quadraticCurveTo(0.2, -1.0, 0.22 + hm * 0.6, -0.6);
} else {
  g.moveTo(-0.33, -1.22 + br);
  g.quadraticCurveTo(-0.35, -1.1 + br, -0.3, -1.0 + br);
  g.moveTo(-0.2, -1.0);
  g.quadraticCurveTo(-0.25, -0.8, -0.3 + hm, -0.57);
}
g.stroke();
g.restore();
