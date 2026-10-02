const L = ((v) =>
  v === false || v === "false" ? 0 : v == null || v === true || v === "true" ? 1 : Math.max(0, Math.min(1, +v || 0)))(
  e.state.lamp_on,
);
if (L >= 0.999) return;
g.fillStyle = `rgba(6,8,16,${(1 - L) * 0.5})`;
g.fillRect(-2.6, -3.7, 5.2, 3.9);
