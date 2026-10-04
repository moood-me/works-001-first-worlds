var S = e.state,
  t = e.t,
  gl = Math.max(0, Math.min(1, S.lamp_glow == null ? 0.75 : S.lamp_glow)),
  w = (S.wind_strength == null ? 0.6 : S.wind_strength) * (S.door_open == null ? 1 : S.door_open);
var fl =
  1 -
  w * 0.22 * (0.5 + 0.5 * Math.sin(t * 7.3) * Math.sin(t * 3.1 + 1)) -
  0.06 * w * Math.sin(t * 12.7) -
  0.03 * Math.sin(t * 2.3);
var I = gl * fl;
g.strokeStyle = "#1c1a25";
g.fillStyle = "#1c1a25";
g.lineCap = "round";
g.fillRect(-0.16, -0.8, 0.04, 0.14);
g.lineWidth = 0.02;
g.beginPath();
g.moveTo(-0.14, -0.74);
g.lineTo(0, -0.74);
g.lineTo(0, -0.66);
g.stroke();
var sw = Math.sin(t * 0.9) * 0.02 * (0.2 + w) + Math.sin(t * 0.37 + 2) * 0.008;
g.save();
g.translate(0, -0.66);
g.rotate(sw);
g.translate(0, 0.66);
g.lineWidth = 0.012;
g.beginPath();
g.moveTo(-0.085, -0.36);
g.quadraticCurveTo(-0.05, -0.68, 0, -0.66);
g.quadraticCurveTo(0.05, -0.68, 0.085, -0.36);
g.stroke();
var gx = 0,
  gy = -0.22;
var hg = g.createRadialGradient(gx, gy, 0, gx, gy, 0.5);
hg.addColorStop(0, "rgba(255,190,120," + (0.35 * I).toFixed(3) + ")");
hg.addColorStop(1, "rgba(255,160,90,0)");
g.fillStyle = hg;
g.beginPath();
g.arc(gx, gy, 0.5, 0, 6.283);
g.fill();
g.save();
g.beginPath();
g.ellipse(gx, gy, 0.075, 0.12, 0, 0, 6.283);
g.clip();
var gg = g.createRadialGradient(gx, gy + 0.02, 0, gx, gy, 0.13);
gg.addColorStop(0, "rgba(255,232,180," + (0.15 + 0.85 * I).toFixed(3) + ")");
gg.addColorStop(0.5, "rgba(245,170,100," + (0.1 + 0.7 * I).toFixed(3) + ")");
gg.addColorStop(1, "rgba(120,80,70," + (0.35 + 0.4 * I).toFixed(3) + ")");
g.fillStyle = gg;
g.fillRect(-0.1, -0.36, 0.2, 0.3);
var fh = 0.03 + 0.05 * gl * fl,
  fx = Math.sin(t * 5.1) * 0.004 * w;
g.fillStyle = "rgba(255,245,215," + Math.min(1, 0.2 + gl).toFixed(3) + ")";
g.beginPath();
g.moveTo(fx * 3, gy - fh * 0.8);
g.quadraticCurveTo(0.014, gy - 0.005, 0, gy + 0.012);
g.quadraticCurveTo(-0.014, gy - 0.005, fx * 3, gy - fh * 0.8);
g.fill();
g.fillStyle = "rgba(255,240,220,0.18)";
g.fillRect(-0.06, -0.32, 0.015, 0.18);
g.restore();
g.strokeStyle = "#221f2b";
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.08, -0.34);
g.lineTo(-0.08, -0.1);
g.moveTo(0.08, -0.34);
g.lineTo(0.08, -0.1);
g.moveTo(0, -0.345);
g.lineTo(0, -0.095);
g.stroke();
g.fillStyle = "#24202c";
g.beginPath();
g.moveTo(-0.055, -0.43);
g.lineTo(0.055, -0.43);
g.lineTo(0.085, -0.34);
g.lineTo(-0.085, -0.34);
g.closePath();
g.fill();
g.fillRect(-0.025, -0.48, 0.05, 0.05);
g.fillStyle = "rgba(240,160,100," + (0.35 * I).toFixed(3) + ")";
g.fillRect(-0.085, -0.345, 0.17, 0.012);
g.fillStyle = "#2a2531";
g.beginPath();
g.moveTo(-0.08, -0.1);
g.lineTo(0.08, -0.1);
g.quadraticCurveTo(0.1, -0.02, 0.07, 0);
g.lineTo(-0.07, 0);
g.quadraticCurveTo(-0.1, -0.02, -0.08, -0.1);
g.fill();
g.fillStyle = "rgba(240,165,105," + (0.4 * I).toFixed(3) + ")";
g.fillRect(-0.08, -0.1, 0.16, 0.014);
g.restore();
e.light(0, -0.22, 2.8, "#ffad6a", Math.max(0.01, 0.9 * I));
