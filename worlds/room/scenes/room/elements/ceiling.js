g.fillStyle = "#d8cfc0";
g.fillRect(-4, -3.5, 8, 7);
var l = g.createRadialGradient(2, -2, 0.1, 2, -2, 5);
l.addColorStop(0, "rgba(255,210,150,0.25)");
l.addColorStop(1, "rgba(0,0,0,0.45)");
g.fillStyle = l;
g.fillRect(-4, -3.5, 8, 7);
