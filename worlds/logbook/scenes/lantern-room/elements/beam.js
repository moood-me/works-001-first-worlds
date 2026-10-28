const lamp = e.state.lamp ?? 0.7, sh = 1 - (e.state.shutter || 0), d = e.state.dawn || 0;
const I = (0.2 + 0.8 * lamp) * sh * (1 - 0.6 * d);
if (I < 0.01) return;
const a0 = e.t * 0.55;
g.globalCompositeOperation = 'lighter';
for (const a of [a0, a0 + Math.PI]) {
  const s = Math.sin(a), aw = -Math.cos(a);
  if (aw < -0.25) continue;
  const dir = Math.sign(s) || 1;
  const xv = aw > 0.12 ? Math.max(-460, Math.min(460, 60 * s / aw)) : dir * 460;
  const fade = Math.min(1, (aw + 0.25) / 0.45);
  const k = I * fade * (0.45 + 0.55 * Math.max(0, aw));
  if (Math.abs(xv) < 8) { const r = 30, h = g.createRadialGradient(0, 0, 0, 0, 0, r); h.addColorStop(0, `rgba(255,236,200,${0.3 * k})`); h.addColorStop(1, 'rgba(255,236,200,0)'); g.fillStyle = h; g.fillRect(-r, -r, 2 * r, 2 * r); continue; }
  const w = 6 + 6 * (1 - Math.max(0, aw)), tip = aw > 0.12 ? 0.4 : 4;
  const gr = g.createLinearGradient(0, 0, xv, 0);
  gr.addColorStop(0, `rgba(255,232,184,${0.3 * k})`); gr.addColorStop(0.35, `rgba(255,224,170,${0.12 * k})`); gr.addColorStop(1, 'rgba(255,220,170,0)');
  g.fillStyle = gr;
  for (const m of [2.2, 1]) { g.globalAlpha = m > 1 ? 0.4 : 0.85; g.beginPath(); g.moveTo(0, -w * m); g.lineTo(xv, -tip * m); g.lineTo(xv, tip * m); g.lineTo(0, w * m); g.closePath(); g.fill(); }
  g.globalAlpha = 1;
  if (aw > 0.12) { const h = g.createRadialGradient(xv, 0, 0, xv, 0, 40); h.addColorStop(0, `rgba(255,236,200,${0.12 * k})`); h.addColorStop(1, 'rgba(255,236,200,0)'); g.fillStyle = h; g.fillRect(xv - 40, -40, 80, 80); }
}
