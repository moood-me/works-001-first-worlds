var A = e.aspect,
  H = 0.56,
  L = -0.35,
  R = A + 0.35,
  sx = 0.66 * A;
var s = g.createLinearGradient(0, -0.35, 0, H);
s.addColorStop(0, "#2b3a5a");
s.addColorStop(0.45, "#6f7a9c");
s.addColorStop(0.78, "#d9a9a0");
s.addColorStop(1, "#f4cfae");
g.fillStyle = s;
g.fillRect(L, -0.35, R - L, H + 0.351);
var w = g.createLinearGradient(0, H, 0, 1.25);
w.addColorStop(0, "#e8bfa6");
w.addColorStop(0.18, "#a99aa8");
w.addColorStop(0.6, "#4f5873");
w.addColorStop(1, "#2a3149");
g.fillStyle = w;
g.fillRect(L, H, R - L, 1.25 - H);
g.globalCompositeOperation = "lighter";
var sun = g.createRadialGradient(sx, H - 0.01, 0, sx, H - 0.01, 0.5);
sun.addColorStop(0, "rgba(255,214,170,0.55)");
sun.addColorStop(0.2, "rgba(255,190,150,0.18)");
sun.addColorStop(1, "rgba(255,170,140,0)");
g.fillStyle = sun;
g.fillRect(sx - 0.5, H - 0.51, 1, 1);
g.save();
g.translate(sx, H);
g.scale(0.16, 1);
var col = g.createRadialGradient(0, 0, 0, 0, 0, 0.6);
col.addColorStop(0, "rgba(255,205,165,0.42)");
col.addColorStop(1, "rgba(255,190,150,0)");
g.fillStyle = col;
g.fillRect(-0.6, 0, 1.2, 0.6);
g.restore();
g.globalCompositeOperation = "source-over";
g.fillStyle = "rgba(255,236,214,0.9)";
g.beginPath();
g.arc(sx, H - 0.004, 0.016, Math.PI, 0);
g.fill();
