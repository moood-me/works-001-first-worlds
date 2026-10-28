const b = Math.sin(e.t * 1.3) * 0.008;
g.fillStyle = "#0c0e13";
// boots, long oilskin coat, shoulders a little hunched, a cap
g.beginPath();
g.moveTo(-0.26, 0);
g.lineTo(-0.3, -0.9);
g.quadraticCurveTo(-0.33, -1.35, -0.24, -1.46 + b);
g.quadraticCurveTo(0, -1.54 + b, 0.24, -1.45 + b);
g.quadraticCurveTo(0.33, -1.3, 0.3, -0.9);
g.lineTo(0.27, 0);
g.closePath();
g.fill();
g.beginPath();
g.ellipse(0.02, -1.6 + b, 0.11, 0.13, 0, 0, 7);
g.fill();
g.beginPath();
g.moveTo(-0.14, -1.66 + b);
g.quadraticCurveTo(0.02, -1.8 + b, 0.17, -1.66 + b);
g.lineTo(0.24, -1.63 + b);
g.lineTo(-0.14, -1.63 + b);
g.fill();
// his arm out, the storm lantern swinging a little
const sw = Math.sin(e.t * 1.7) * 0.06,
  lx = 0.52 + sw,
  ly = -0.78;
g.strokeStyle = "#0c0e13";
g.lineWidth = 0.11;
g.beginPath();
g.moveTo(0.22, -1.32 + b);
g.quadraticCurveTo(0.42, -1.0, lx, ly - 0.2);
g.stroke();
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(lx, ly - 0.2);
g.lineTo(lx, ly - 0.1);
g.stroke();
g.fillStyle = "#1b130c";
g.fillRect(lx - 0.07, ly - 0.1, 0.14, 0.2);
g.fillStyle = "#ffd89a";
g.fillRect(lx - 0.05, ly - 0.07, 0.1, 0.13);
// the lantern lights his coat from the right
g.fillStyle = "rgba(255,190,110,0.18)";
g.beginPath();
g.moveTo(0.3, -0.9);
g.quadraticCurveTo(0.33, -1.3, 0.24, -1.45 + b);
g.lineTo(0.16, -1.4);
g.lineTo(0.2, -0.7);
g.fill();
e.light(lx, ly, 1.1, "#ffc070", 0.8);
