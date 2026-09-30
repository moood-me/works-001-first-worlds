const d = e.state.dawn || 0;
if (d < 0.02) return;
const gr = g.createLinearGradient(0, 0, 0, 700);
gr.addColorStop(0, `rgba(255,190,150,${0.45 * d})`); gr.addColorStop(0.3, `rgba(200,140,140,${0.18 * d})`); gr.addColorStop(1, 'rgba(120,100,130,0)');
g.fillStyle = gr; g.fillRect(-2200, 0, 4400, 700);
if (d > 0.5) { const k = (d - 0.5) * 2; for (let j = 1; j < 40; j++) { const p = j / 40, y = 600 * p * p, w = 20 + 260 * p; g.fillStyle = `rgba(255,226,180,${0.35 * k * (1 - p)})`; g.fillRect(-w / 2 + Math.sin(j * 7.1) * 60 * p, y, w, 2 + 10 * p); } }
