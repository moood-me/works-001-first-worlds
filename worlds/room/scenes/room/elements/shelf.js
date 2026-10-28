g.fillStyle = "#3a2416";
g.fillRect(-0.55, -2.1, 1.1, 2.1);
g.fillStyle = "#24160e";
for (var i = 0; i < 5; i++) {
  g.fillRect(-0.5, -2.0 + i * 0.4, 1.0, 0.34);
}
for (var r = 0; r < 5; r++) {
  var x = -0.48;
  while (x < 0.46) {
    var w = 0.03 + e.rnd() * 0.05,
      h = 0.22 + e.rnd() * 0.1;
    g.fillStyle = ["#7a2a22", "#2a4a5a", "#a08040", "#3a5a32", "#5a3a6a", "#c8b890"][Math.floor(e.rnd() * 6)];
    g.fillRect(x, -1.68 + r * 0.4 - h + 0.02, w, h);
    x += w + 0.006;
  }
}
