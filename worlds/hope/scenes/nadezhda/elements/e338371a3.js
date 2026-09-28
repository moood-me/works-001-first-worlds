g.lineCap = "round";
for (var i = 0; i < 22; i++) {
  var bx = (e.rnd() - 0.5) * 1.6;
  var h = 0.9 + e.rnd() * 0.8;
  var bend = (e.rnd() - 0.3) * 0.4;
  var ph = e.rnd() * 6.28;
  var lw = 0.018 + e.rnd() * 0.015;
  var hasHead = e.rnd() < 0.3;
  var sw = Math.sin(e.t * 0.6 + ph) * 0.03 + Math.sin(e.t * 0.23 + ph * 1.7) * 0.02;
  var tx = bx + bend + sw * h;
  g.strokeStyle = i % 3 == 0 ? "#11151c" : "#181d25";
  g.lineWidth = lw;
  g.beginPath();
  g.moveTo(bx, 0.05);
  g.quadraticCurveTo(bx + bend * 0.3, -h * 0.6, tx, -h);
  g.stroke();
  if (hasHead) {
    g.fillStyle = "#13171e";
    g.save();
    g.translate(tx - (tx - bx) * 0.08, -h + 0.13);
    g.rotate((tx - bx) * 0.3);
    g.beginPath();
    g.ellipse(0, 0, 0.026, 0.09, 0, 0, Math.PI * 2);
    g.fill();
    g.restore();
  }
}
for (var j = 0; j < 9; j++) {
  var lx = (e.rnd() - 0.5) * 1.4;
  var lh = 0.5 + e.rnd() * 0.6;
  var dir = e.rnd() < 0.5 ? -1 : 1;
  var lph = e.rnd() * 6.28;
  var ls = Math.sin(e.t * 0.5 + lph) * 0.04 + Math.sin(e.t * 0.19 + lph) * 0.02;
  g.fillStyle = "#161b23";
  g.beginPath();
  g.moveTo(lx - 0.015, 0.05);
  g.quadraticCurveTo(lx + dir * 0.1, -lh * 0.6, lx + dir * (0.35 + ls), -lh + ls);
  g.quadraticCurveTo(lx + dir * 0.08, -lh * 0.55, lx + 0.015, 0.05);
  g.closePath();
  g.fill();
}
g.strokeStyle = "rgba(190,200,215,0.12)";
g.lineWidth = 1.5 * e.px;
for (var r = 0; r < 3; r++) {
  var rp = (e.t * 0.07 + r * 0.33) % 1;
  var rr = 0.3 + rp * 0.9;
  g.globalAlpha = 1 - rp;
  g.beginPath();
  g.ellipse(0, 0.04, rr, rr * 0.18, 0, 0, Math.PI * 2);
  g.stroke();
}
g.globalAlpha = 1;
