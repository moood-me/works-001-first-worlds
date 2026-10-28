const s = e.state,
  t = e.t,
  kn = s.knocking;
e.at(0, -1.35);
g.fillStyle = "#0f1216";
g.beginPath();
g.moveTo(-0.2, 0);
g.lineTo(-0.14, -0.7);
g.lineTo(0.14, -0.7);
g.lineTo(0.2, 0);
g.fill();
g.fillStyle = "#161a20";
g.fillRect(-0.58, -0.78, 1.16, 0.1);
g.fillStyle = "#14181d";
g.beginPath();
g.moveTo(-0.56, -0.74);
g.lineTo(-0.52, -1.3);
g.lineTo(0.52, -1.3);
g.lineTo(0.56, -0.74);
g.closePath();
g.fill();
const sc = g.createLinearGradient(0, -1.26, 0, -0.8);
sc.addColorStop(0, "#1d1108");
sc.addColorStop(1, "#0e0805");
g.fillStyle = sc;
g.fillRect(-0.48, -1.25, 0.96, 0.44);
const pu = 0.6 + 0.25 * Math.sin(t * 0.8) + 0.15 * Math.sin(t * 2.3) + (kn ? 0.3 : 0);
const ex = -0.34,
  ey = -1.06;
let c = g.createRadialGradient(ex, ey, 0, ex, ey, 0.11);
c.addColorStop(0, "rgba(255,190,110," + 0.9 * pu + ")");
c.addColorStop(0.35, "rgba(255,120,40," + 0.5 * pu + ")");
c.addColorStop(1, "rgba(120,40,10,0)");
g.fillStyle = c;
g.beginPath();
g.arc(ex, ey, 0.11, 0, 7);
g.fill();
g.strokeStyle = "rgba(255,150,70,0.7)";
g.lineWidth = 0.008;
g.beginPath();
g.arc(ex, ey, 0.09, t * 0.5, t * 0.5 + 4.6);
g.stroke();
g.fillStyle = "#120804";
g.beginPath();
g.arc(ex, ey, 0.022, 0, 7);
g.fill();
g.save();
g.translate(-0.2, -1.17);
g.scale(0.0042, 0.0042);
g.font = "11px monospace";
g.fillStyle = "rgba(255,175,90,0.9)";
g.fillText(tr('LIDA · BAY 4'), 0, 0);
g.fillText(tr('O2 {oxygen}%   PWR {power}%', { oxygen: s.oxygen ?? 23, power: Math.round((s.power ?? 0.35) * 100) }), 0, 17);
g.fillStyle = "rgba(255,205,140,0.95)";
g.fillText(tr('CREW ON BOARD: 3/3'), 0, 34);
if (kn || (s.knock || 0) > 0) {
  g.fillStyle = "rgba(255,90,60," + (kn ? (Math.sin(t * 12) > 0 ? 1 : 0.3) : 0.7) + ")";
  g.fillText(tr('NOISE: HULL, SECT. 4'), 0, 51);
}
g.restore();
g.strokeStyle = "rgba(255,160,80,0.6)";
g.lineWidth = 0.006;
g.beginPath();
for (let i = 0; i <= 60; i++) {
  const x = -0.44 + (i * 0.88) / 60,
    a = (kn ? 0.04 : 0.008) * Math.sin(i * 1.7 + t * 9) * Math.sin(i * 0.31 + t * 2.1);
  g.lineTo(x, -0.86 + a);
}
g.stroke();
const bl = Math.sin(t * 3.3) > 0.2;
g.fillStyle = bl ? "rgba(255,90,60,0.9)" : "rgba(80,30,20,0.6)";
g.fillRect(0.42, -0.76, 0.03, 0.03);
g.fillStyle = "rgba(120,255,160,0.5)";
g.fillRect(0.36, -0.76, 0.03, 0.03);
e.light(0, -1.05, 1.3, "#ff9a4a", 0.4 * pu);
