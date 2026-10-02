var r = g.createRadialGradient(0, -3, 0, 0, -3, 24);
r.addColorStop(0, "#3a2a1c");
r.addColorStop(0.12, "#24221a");
r.addColorStop(0.4, "#141812");
r.addColorStop(1, "#0a0d0a");
g.fillStyle = r;
g.fillRect(-25, -25, 50, 50);
for (var i = 0; i < 900; i++) {
  var x = (e.rnd() - 0.5) * 50,
    y = (e.rnd() - 0.5) * 50;
  g.fillStyle = e.rnd() < 0.5 ? "rgba(60,70,40,0.35)" : "rgba(10,12,8,0.4)";
  g.fillRect(x, y, 0.05 + e.rnd() * 0.15, 0.02 + e.rnd() * 0.05);
}
g.fillStyle = "rgba(255,150,70,0.18)";
g.beginPath();
g.arc(0, -3, 1.6, 0, 6.283);
g.fill();
