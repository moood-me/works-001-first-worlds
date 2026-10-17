var s = e.state || {},
  m = s.minutes == null ? 12 : s.minutes,
  tm = 17 * 60 + 5 + m;
var hh = (tm / 60) % 12,
  mm = tm % 60,
  ss = Math.floor(e.t) % 60;
g.fillStyle = "#2a221b";
g.beginPath();
g.arc(0, 0, 0.17, 0, 6.283);
g.fill();
g.fillStyle = "#b3a58d";
g.beginPath();
g.arc(0, 0, 0.15, 0, 6.283);
g.fill();
var lg = g.createRadialGradient(0.1, 0.02, 0, 0.1, 0.02, 0.25);
lg.addColorStop(0, "rgba(255,200,140,0.22)");
lg.addColorStop(1, "rgba(20,14,10,0.35)");
g.fillStyle = lg;
g.beginPath();
g.arc(0, 0, 0.15, 0, 6.283);
g.fill();
g.strokeStyle = "#3a2f26";
g.lineCap = "round";
g.lineWidth = 0.008;
for (var i = 0; i < 12; i++) {
  var a = (i * Math.PI) / 6;
  g.beginPath();
  g.moveTo(Math.sin(a) * 0.118, -Math.cos(a) * 0.118);
  g.lineTo(Math.sin(a) * 0.138, -Math.cos(a) * 0.138);
  g.stroke();
}
function hand(a, l, w, c) {
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(-Math.sin(a) * 0.02, Math.cos(a) * 0.02);
  g.lineTo(Math.sin(a) * l, -Math.cos(a) * l);
  g.stroke();
}
hand((hh / 12) * 6.283, 0.075, 0.014, "#241c16");
hand((mm / 60) * 6.283, 0.115, 0.009, "#241c16");
hand((ss / 60) * 6.283, 0.12, 0.004, "#7a3a2a");
g.fillStyle = "#241c16";
g.beginPath();
g.arc(0, 0, 0.012, 0, 6.283);
g.fill();
g.strokeStyle = "rgba(255,200,150,0.25)";
g.lineWidth = 0.01;
g.beginPath();
g.arc(0, 0, 0.168, -1.2, 0.8);
g.stroke();
