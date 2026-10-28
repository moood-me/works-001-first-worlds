var W = e.aspect,
  cx = W / 2,
  H0 = 0.47,
  x;
function rid(x0, x1, amp, f, ph, c1, c2) {
  var gr = g.createLinearGradient(0, H0 - amp, 0, H0);
  gr.addColorStop(0, c1);
  gr.addColorStop(1, c2);
  g.beginPath();
  g.moveTo(x0, H0 + 0.003);
  for (x = x0; x <= x1; x += 0.004) {
    var u = (x - x0) / (x1 - x0),
      h =
        amp *
        Math.pow(Math.max(0, Math.sin(Math.PI * u)), 0.5) *
        (0.62 + 0.22 * Math.sin(u * f + ph) + 0.1 * Math.sin(u * f * 2.7 + ph * 1.3) + 0.04 * Math.sin(u * f * 7.1));
    g.lineTo(x, H0 - h);
  }
  g.lineTo(x1, H0 + 0.003);
  g.closePath();
  g.fillStyle = gr;
  g.fill();
}
rid(cx + 0.08, W + 0.5, 0.035, 7, 0.8, "#aa8592", "#d8aa9d");
rid(cx + 0.35, cx + 0.95, 0.018, 5, 2.1, "#937388", "#c29890");
rid(cx - 0.72, cx - 0.56, 0.009, 4, 0.3, "#a8828f", "#d4a69b");
