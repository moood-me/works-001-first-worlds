const st = e.state, t = e.t, k = st.krechet || 0;
if (k <= 0.001 || k >= 0.999) return;
const rain = st.rain ?? 0.4, xs = 150 - 500 * k, vis = Math.min(1, k / 0.06, (1 - k) / 0.06);
g.globalAlpha = vis;
g.save(); g.translate(xs, 0);
g.fillStyle = '#06080d';
g.beginPath(); [[-37, -6.5], [-31, 0], [30, 0], [34, -5.2], [20, -5.2], [20, -8.5], [14, -8.5], [14, -13], [-1, -13], [-1, -9.5], [-5, -9.5], [-5, -5.4], [-30, -5.6]].forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])); g.closePath(); g.fill();
g.fillRect(16, -15, 4.5, 7);
g.strokeStyle = '#06080d'; g.lineWidth = 0.6; g.beginPath(); g.moveTo(-22, -5.5); g.lineTo(-22, -22); g.moveTo(8, -13); g.lineTo(8, -24); g.stroke();
g.lineWidth = 0.25; g.beginPath(); g.moveTo(-36, -6.5); g.lineTo(-22, -21); g.lineTo(8, -23.5); g.lineTo(33, -5); g.stroke();
g.fillStyle = 'rgba(255,205,140,0.85)'; for (let i = 0; i < 5; i++) g.fillRect(0.4 + i * 2.6, -11.9, 1.3, 0.9);
for (let i = 0; i < 9; i++) if (e.rnd() < 0.7) g.fillRect(-26 + i * 5.5, -3.3, 0.8, 0.8);
for (let j = 1; j < 7; j++) { g.fillStyle = `rgba(255,90,70,${0.22 / j})`; g.fillRect(-4.5 + Math.sin(t * 0.7 + j) * 0.5, 1 + j * 2.6, 3, 1); g.fillStyle = `rgba(255,220,160,${0.16 / j})`; g.fillRect(4 + Math.sin(t * 0.8 + j) * 0.6, 1 + j * 2.4, 6, 0.8); }
g.restore();
e.light(xs - 22, -22, 14, '#fff6e0', 0.5 * vis); e.light(xs + 8, -24, 14, '#fff6e0', 0.45 * vis); e.light(xs - 3, -9.5, 12, '#ff4a3c', 0.6 * vis); e.light(xs + 7, -11.5, 12, '#ffd296', 0.3 * vis);
// the searchlight on the bridge sweeps the water; it brushes past the tower, never quite onto it
const psi = 1.15 + 0.38 * Math.sin(t * 0.11) + 0.1 * Math.sin(t * 0.29 + 2), sn = Math.sin(psi), c = Math.cos(psi), sx = 419 + xs;
const pt = (s, side) => { const d = 900 - c * s, hw = -16.5 - 13.5 * Math.min(1, s / 380) + side * (0.3 + 0.035 * s); return [(sx - sn * s) * 900 / d - 420, -31.7 + (1.7 - hw) * 900 / d]; };
g.globalCompositeOperation = 'lighter';
let s0 = 2;
while (s0 < 380) {
  const s1 = Math.min(380, s0 * 1.2 + 3), a = vis * 0.16 * Math.exp(-s0 / 260) * (0.6 + 0.7 * rain);
  const p0 = pt(s0, -1), p1 = pt(s1, -1), p2 = pt(s1, 1), p3 = pt(s0, 1);
  g.fillStyle = `rgba(235,240,255,${a})`; g.beginPath(); g.moveTo(p0[0], p0[1]); g.lineTo(p1[0], p1[1]); g.lineTo(p2[0], p2[1]); g.lineTo(p3[0], p3[1]); g.closePath(); g.fill();
  s0 = s1;
}
const pp = pt(380, 0), pr = 26 * 900 / (900 - c * 380);
g.save(); g.translate(pp[0], pp[1]); g.scale(1, 0.14); const pg = g.createRadialGradient(0, 0, 0, 0, 0, pr); pg.addColorStop(0, `rgba(220,230,250,${0.16 * vis})`); pg.addColorStop(1, 'rgba(220,230,250,0)'); g.fillStyle = pg; g.fillRect(-pr, -pr, 2 * pr, 2 * pr); g.restore();
const nm = Math.exp(-Math.pow((psi - Math.atan2(sx, 900)) / 0.15, 2)), fl = st.krechet_flash ? 1 : 0, m = Math.max(nm, fl);
const R = 6 + 60 * nm + 150 * fl, lg = g.createRadialGradient(xs - 1, -13.5, 0, xs - 1, -13.5, R);
lg.addColorStop(0, `rgba(255,255,245,${vis * (0.5 + 0.45 * m)})`); lg.addColorStop(0.12, `rgba(250,250,235,${vis * (0.15 + 0.35 * m)})`); lg.addColorStop(1, 'rgba(250,250,235,0)');
g.fillStyle = lg; g.fillRect(xs - 1 - R, -13.5 - R, 2 * R, 2 * R);
if (fl) { g.fillStyle = 'rgba(255,255,240,0.45)'; g.fillRect(xs - 160, -14.5, 320, 2); }
g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
e.light(xs - 1, -13.5, 10 + 30 * nm + 60 * fl, '#fffbe8', vis * (0.5 + 0.4 * nm + 0.5 * fl));
