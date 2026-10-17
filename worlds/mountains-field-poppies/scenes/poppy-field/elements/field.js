var gr = g.createLinearGradient(0, -1300, 0, 1300);
gr.addColorStop(0, "#a3a578");
gr.addColorStop(0.35, "#8c9562");
gr.addColorStop(0.8, "#6b7c48");
gr.addColorStop(1, "#56693a");
g.fillStyle = gr;
g.fillRect(-4000, -1300, 8000, 2600);
for (var i = 0; i < 90; i++) {
  var d = 10 + Math.pow(e.rnd(), 1.5) * 2400;
  var px = (e.rnd() - 0.5) * d * 2.6;
  var w = d * (0.15 + e.rnd() * 0.5),
    h = d * (0.08 + e.rnd() * 0.25);
  var c = e.rnd() < 0.5 ? "176,168,110" : "70,96,52";
  g.save();
  g.translate(px, 1300 - d);
  g.scale(w, h);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(" + c + ",0.28)");
  rg.addColorStop(1, "rgba(" + c + ",0)");
  g.fillStyle = rg;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
}
var cols = ["#c4302a", "#d6412c", "#ad2724", "#e0533a"];
for (var i = 0; i < 40; i++) {
  var d = 12 + Math.pow(e.rnd(), 1.8) * 1200;
  var px = (e.rnd() - 0.5) * d * 2.4;
  var py = 1300 - d;
  var w = d * (0.2 + e.rnd() * 0.5),
    h = d * (0.15 + e.rnd() * 0.35);
  g.save();
  g.translate(px, py);
  g.scale(w, h);
  var rg = g.createRadialGradient(0, 0, 0, 0, 0, 1);
  rg.addColorStop(0, "rgba(190,50,40,0.45)");
  rg.addColorStop(0.6, "rgba(190,50,40,0.18)");
  rg.addColorStop(1, "rgba(190,50,40,0)");
  g.fillStyle = rg;
  g.fillRect(-1, -1, 2, 2);
  g.restore();
  var s = Math.max(0.05, d * 0.0022);
  for (var k = 0; k < 180; k++) {
    var u = (e.rnd() + e.rnd() + e.rnd() - 1.5) / 1.5,
      v = (e.rnd() + e.rnd() + e.rnd() - 1.5) / 1.5;
    g.fillStyle = cols[(e.rnd() * 4) | 0];
    g.fillRect(px + u * w - s / 2, py + v * h - s / 2, s, s);
  }
}
for (var k = 0; k < 1500; k++) {
  var d = 3 + e.rnd() * 60;
  g.fillStyle = cols[(e.rnd() * 4) | 0];
  g.fillRect((e.rnd() - 0.5) * d * 2.4, 1300 - d, 0.07, 0.07);
}
