var t = e.t,
  st = e.state || {},
  L = st.light_level == null ? 0.7 : st.light_level,
  v = Math.max(
    st.box_visible == null ? 0.3 : st.box_visible,
    0.85 * Math.min(1, Math.max(0, ((st.bench_legs || 0) - 0.5) / 0.3)),
  ),
  lk = st.box_locked !== false;
function mix(a, b, k) {
  var A = parseInt(a.slice(1), 16),
    B = parseInt(b.slice(1), 16),
    r = Math.round((A >> 16) * (1 - k) + (B >> 16) * k),
    gg = Math.round(((A >> 8) & 255) * (1 - k) + ((B >> 8) & 255) * k),
    bb = Math.round((A & 255) * (1 - k) + (B & 255) * k);
  return "rgb(" + r + "," + gg + "," + bb + ")";
}
var k = Math.max(0, Math.min(1, v)) * (0.5 + 0.5 * L);
if (k > 0.05) {
  var bm = g.createRadialGradient(0.25, 0.0, 0, 0.25, 0.0, 0.45);
  bm.addColorStop(0, "rgba(150,170,225," + (0.22 * k).toFixed(3) + ")");
  bm.addColorStop(1, "rgba(150,170,225,0)");
  g.fillStyle = bm;
  g.save();
  g.scale(1, 0.35);
  g.beginPath();
  g.arc(0.25, 0, 0.45, 0, 6.283);
  g.fill();
  g.restore();
}
g.fillStyle = mix("#0b0e17", "#56607e", k);
g.fillRect(0.11, -0.14, 0.28, 0.14);
if (lk) {
  g.fillStyle = mix("#10131e", "#7a86a8", k);
  g.beginPath();
  g.moveTo(0.11, -0.14);
  g.lineTo(0.39, -0.14);
  g.lineTo(0.37, -0.17);
  g.lineTo(0.13, -0.17);
  g.closePath();
  g.fill();
  g.strokeStyle = mix("#05070c", "#2a3048", k);
  g.lineWidth = e.px;
  g.beginPath();
  g.moveTo(0.11, -0.11);
  g.lineTo(0.39, -0.11);
  g.stroke();
  g.strokeStyle = mix("#0b0e17", "#9aa6c6", k);
  g.lineWidth = 0.007;
  g.beginPath();
  g.arc(0.25, -0.1, 0.014, Math.PI, 0);
  g.stroke();
  g.fillStyle = mix("#0e1018", "#a8b2cc", k);
  g.fillRect(0.235, -0.1, 0.03, 0.035);
} else {
  g.save();
  g.translate(0.11, -0.14);
  g.rotate(-0.35);
  g.fillStyle = mix("#10131e", "#7a86a8", k);
  g.fillRect(0, -0.012, 0.29, 0.03);
  g.restore();
  var wl = 0.7 + 0.3 * Math.sin(t * 1.7);
  g.fillStyle = "rgba(235,180,120," + (0.55 * wl).toFixed(3) + ")";
  g.fillRect(0.13, -0.145, 0.24, 0.012);
  e.light(0.25, -0.15, 0.12, "#f0b070", 0.3 * wl);
}
if (k > 0.35) {
  var gl = Math.max(0, Math.sin(t * 0.9) + 0.4 * Math.sin(t * 2.3 + 1));
  if (gl > 0.3) {
    g.globalCompositeOperation = "lighter";
    g.fillStyle = "rgba(225,235,255," + ((gl - 0.3) * 0.9 * k).toFixed(3) + ")";
    g.beginPath();
    g.arc(lk ? 0.245 : 0.33, lk ? -0.09 : -0.13, 0.008, 0, 6.283);
    g.fill();
    g.globalCompositeOperation = "source-over";
    e.light(lk ? 0.245 : 0.33, lk ? -0.09 : -0.13, 0.06, "#dfe8ff", (gl - 0.3) * 0.4 * k);
  }
}
