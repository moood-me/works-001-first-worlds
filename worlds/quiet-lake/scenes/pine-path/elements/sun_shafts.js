var t = e.t,
  st = e.state,
  lf = st.light_fade || 0,
  S = 451;
function R() {
  S = (S * 16807) % 2147483647;
  return (S - 1) / 2147483646;
}
var k = Math.pow(Math.max(0, 1 - lf), 1.4);
if (k < 0.01) return;
g.globalCompositeOperation = "lighter";
for (var i = 0; i < 8; i++) {
  var xt = -44 + R() * 40,
    wt = 0.6 + R() * 1.8,
    dx = 14 + R() * 10,
    wb = wt * (1.6 + R()),
    p = R() * 6.283,
    f = 0.05 + R() * 0.06,
    a = (0.05 + R() * 0.07) * k * (0.65 + 0.35 * Math.sin(t * f + p) + 0.15 * Math.sin(t * f * 2.7 + p * 1.9));
  if (a <= 0) continue;
  var gr = g.createLinearGradient(xt, -34, xt + dx, 0);
  gr.addColorStop(0, "rgba(255,190,130,0)");
  gr.addColorStop(0.25, "rgba(255,180,120," + a.toFixed(3) + ")");
  gr.addColorStop(0.8, "rgba(255,160,110," + (a * 0.7).toFixed(3) + ")");
  gr.addColorStop(1, "rgba(255,150,100,0)");
  g.fillStyle = gr;
  g.beginPath();
  g.moveTo(xt - wt / 2, -34);
  g.lineTo(xt + wt / 2, -34);
  g.lineTo(xt + dx + wb / 2, 0.5);
  g.lineTo(xt + dx - wb / 2, 0.5);
  g.closePath();
  g.fill();
}
g.globalCompositeOperation = "source-over";
