var dk = (e.state && e.state.dusk) || 0;
if (dk < 0.003) return;
var a = (0.6 * dk).toFixed(3),
  gr = g.createLinearGradient(0, -3.6, 0, -1.6);
gr.addColorStop(0, "rgba(20,20,44,0)");
gr.addColorStop(1, "rgba(20,20,44," + a + ")");
g.fillStyle = gr;
g.fillRect(-140, -3.6, 280, 2.0);
g.fillStyle = "rgba(20,20,44," + a + ")";
g.fillRect(-140, -1.6, 280, 35.5);
