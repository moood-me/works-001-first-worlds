var A = e.aspect;
var gr = g.createLinearGradient(0, -0.35, 0, 1.25);
function s(y, c) {
  gr.addColorStop((y + 0.35) / 1.6, c);
}
s(-0.35, "#0e131c");
s(0, "#161c28");
s(0.25, "#242c3b");
s(0.45, "#465062");
s(0.56, "#7a8290");
s(0.6, "#5b6576");
s(0.75, "#394353");
s(1, "#232a37");
s(1.25, "#1a202b");
g.fillStyle = gr;
g.fillRect(-0.35, -0.35, A + 0.7, 1.6);
g.save();
g.translate(0.8 * A, 0.56);
g.scale(2.4, 1);
var h = g.createRadialGradient(0, 0, 0, 0, 0, 0.3);
h.addColorStop(0, "rgba(170,178,196,0.16)");
h.addColorStop(1, "rgba(170,178,196,0)");
g.fillStyle = h;
g.fillRect(-0.3, -0.3, 0.6, 0.6);
g.restore();
