var t = e.t;
g.fillStyle = "rgba(5,3,3,0.45)";
g.beginPath();
g.ellipse(0, 0, 0.25, 0.04, 0, 0, 6.283);
g.fill();
g.strokeStyle = "#141112";
g.lineWidth = 0.025;
g.beginPath();
g.moveTo(0, -0.53);
g.lineTo(0, -0.03);
g.moveTo(-0.17, 0);
g.lineTo(0.17, 0);
g.stroke();
g.fillStyle = "#3a2a20";
g.beginPath();
g.ellipse(0, -0.55, 0.24, 0.045, 0, 0, 6.283);
g.fill();
g.fillStyle = "#22170f";
g.fillRect(-0.24, -0.55, 0.48, 0.03);
g.fillStyle = "rgba(255,180,110,0.15)";
g.beginPath();
g.ellipse(0.05, -0.56, 0.16, 0.025, 0, 0, 6.283);
g.fill();
g.fillStyle = "#bdb2a2";
g.fillRect(0.02, -0.66, 0.08, 0.1);
g.strokeStyle = "#bdb2a2";
g.lineWidth = 0.012;
g.beginPath();
g.arc(0.105, -0.61, 0.022, -1.4, 1.4);
g.stroke();
g.fillStyle = "rgba(30,20,15,0.3)";
g.fillRect(0.02, -0.66, 0.03, 0.1);
g.lineCap = "round";
for (var i = 0; i < 3; i++) {
  var ph = (t * 0.12 + i / 3) % 1;
  var y0 = -0.68 - ph * 0.45;
  var a = Math.sin(ph * 3.14159) * 0.22;
  g.strokeStyle = "rgba(230,215,200," + a + ")";
  g.lineWidth = 0.012 + ph * 0.015;
  var x0 = 0.06 + Math.sin(t * 0.7 + i * 2) * 0.01;
  g.beginPath();
  g.moveTo(x0, y0 + 0.1);
  g.bezierCurveTo(
    x0 + 0.04 * Math.sin(t * 0.9 + i),
    y0 + 0.06,
    x0 - 0.04 * Math.sin(t * 0.6 + i * 1.3),
    y0 + 0.03,
    x0 + 0.02 * Math.sin(t * 0.5 + i),
    y0,
  );
  g.stroke();
}
