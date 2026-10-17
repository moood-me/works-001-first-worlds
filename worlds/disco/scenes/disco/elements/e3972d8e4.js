var T = Math.PI * 2,
  dk = "#150a24",
  a1 = 0.28 + 0.28 * Math.sin(e.t * 0.23 + 2) + 0.1 * Math.sin(e.t * 0.61),
  a2 = 0.62 + 0.22 * Math.sin(e.t * 0.33 + 0.5) + 0.08 * Math.sin(e.t * 0.89 + 3);
g.globalCompositeOperation = "lighter";
g.save();
g.scale(1, 0.18);
var pg = g.createRadialGradient(0, 0, 0, 0, 0, 1.8);
pg.addColorStop(0, "rgba(255,232,74,0.26)");
pg.addColorStop(1, "rgba(255,232,74,0)");
g.fillStyle = pg;
g.beginPath();
g.arc(0, 0, 1.8, 0, T);
g.fill();
g.restore();
g.globalCompositeOperation = "source-over";
g.fillStyle = dk;
g.beginPath();
g.ellipse(0, -0.02, 0.32, 0.06, 0, 0, T);
g.fill();
g.fillRect(-0.035, -2.3, 0.07, 2.3);
g.fillRect(-0.45, -2.34, 0.9, 0.06);
function can(x, a, w) {
  g.save();
  g.translate(x, -2.4);
  g.rotate(a);
  g.globalCompositeOperation = "lighter";
  var L = 44;
  var bg = g.createLinearGradient(0, 0, 0, -L);
  bg.addColorStop(0, "rgba(255,232,74,0.45)");
  bg.addColorStop(0.25, "rgba(255,232,74,0.14)");
  bg.addColorStop(1, "rgba(255,232,74,0)");
  g.fillStyle = bg;
  g.beginPath();
  g.moveTo(-w, -0.2);
  g.lineTo(-L * w * 0.45, -L);
  g.lineTo(L * w * 0.45, -L);
  g.lineTo(w, -0.2);
  g.closePath();
  g.fill();
  g.globalCompositeOperation = "source-over";
  g.fillStyle = dk;
  g.beginPath();
  g.moveTo(-w - 0.03, 0.12);
  g.lineTo(w + 0.03, 0.12);
  g.lineTo(w + 0.05, -0.2);
  g.lineTo(-w - 0.05, -0.2);
  g.closePath();
  g.fill();
  g.fillStyle = "#fff6b8";
  g.beginPath();
  g.ellipse(0, -0.2, w + 0.04, 0.025, 0, 0, T);
  g.fill();
  g.restore();
}
can(-0.3, a1, 0.08);
can(0.3, a2, 0.1);
e.light(-0.3 + Math.sin(a1) * 0.2, -2.6, 0.5, "#fff23d", 0.7);
e.light(0.3 + Math.sin(a2) * 0.2, -2.6, 0.55, "#fff23d", 0.7);
