const L = e.state && e.state.lamp != null ? e.state.lamp : 1;
if (L < 0.02) return;
let r = g.createRadialGradient(0, 0, 0, 0, 0, 6.5);
r.addColorStop(0, "rgba(255,150,60," + 0.28 * L + ")");
r.addColorStop(0.45, "rgba(220,120,50," + 0.1 * L + ")");
r.addColorStop(1, "rgba(200,110,50,0)");
g.fillStyle = r;
g.fillRect(-7, -7, 14, 14);
