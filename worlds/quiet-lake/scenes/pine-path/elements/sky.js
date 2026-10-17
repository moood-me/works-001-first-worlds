var A = e.aspect,
  t = e.t,
  H = 0.55,
  st = e.state,
  lf = st.light_fade || 0,
  S = 7;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var gr = g.createLinearGradient(0, -0.35, 0, H);
gr.addColorStop(0, "#141830");
gr.addColorStop(0.45, "#28284a");
gr.addColorStop(0.72, "#59405e");
gr.addColorStop(0.9, "#a65c62");
gr.addColorStop(1, "#e2946a");
g.fillStyle = gr;
g.fillRect(-0.3, -0.4, A + 0.6, H + 0.405);
g.fillStyle = "#3a2838";
g.fillRect(-0.3, H, A + 0.6, 0.8);
for (var i = 0; i < 30; i++) {
  var sx = R() * A,
    sy = -0.35 + Math.pow(R(), 1.4) * 0.5,
    sz = 0.0008 + R() * 0.001,
    f = 0.3 + R() * 0.8,
    p = R() * 6.283,
    a = Math.max(0, Math.min(1, (0.15 - sy) / 0.35)) * (0.15 + 0.75 * lf) * (0.7 + 0.3 * Math.sin(t * f + p));
  if (a > 0.01) {
    g.globalAlpha = a;
    g.fillStyle = "#efe9f6";
    g.beginPath();
    g.arc(sx, sy, sz, 0, 6.283);
    g.fill();
  }
}
g.globalAlpha = 1;
var sx2 = 0.28 * A,
  sy2 = H - 0.01 + 0.05 * lf;
g.globalCompositeOperation = "lighter";
var gl = g.createRadialGradient(sx2, sy2, 0, sx2, sy2, 0.6);
gl.addColorStop(0, "rgba(255,170,100," + (0.35 * (1 - lf * 0.85)).toFixed(3) + ")");
gl.addColorStop(0.25, "rgba(230,120,90," + (0.12 * (1 - lf * 0.8)).toFixed(3) + ")");
gl.addColorStop(1, "rgba(0,0,0,0)");
g.fillStyle = gl;
g.fillRect(sx2 - 0.7, sy2 - 0.7, 1.4, 1.4);
g.globalCompositeOperation = "source-over";
g.fillStyle = "rgba(14,12,30," + (lf * 0.5).toFixed(3) + ")";
g.fillRect(-0.3, -0.4, A + 0.6, 1.7);
