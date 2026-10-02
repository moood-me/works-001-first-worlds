g.fillStyle = "#0f121a";
g.fillRect(-3.1, -0.85, 6.2, 0.85);
g.fillStyle = "rgba(225,205,165,0.1)";
g.fillRect(-3.1, -0.85, 6.2, 0.015);
g.fillStyle = "#090b11";
g.fillRect(-2.2, -0.5, 4.4, 0.24);
g.strokeStyle = "rgba(120,135,160,0.18)";
g.lineWidth = 0.012;
for (let x = -2.15; x < 2.2; x += 0.07) {
  g.beginPath();
  g.moveTo(x, -0.48);
  g.lineTo(x, -0.28);
  g.stroke();
}
g.save();
g.scale(0.01, 0.01);
g.fillStyle = "rgba(170,180,200,0.3)";
g.font = "5px monospace";
g.textAlign = "left";
g.fillText("ОБЗОРНАЯ ПАЛУБА · ТК «ЛАДОГА»", -220, -58);
g.restore();
