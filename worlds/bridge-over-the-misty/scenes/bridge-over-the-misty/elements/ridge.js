const L = Math.max(0, Math.min(1, e.state.light));
const m = (a, b) => {
  const p = [1, 3, 5].map((i) => Math.round(parseInt(a.substr(i, 2), 16) * (1 - L) + parseInt(b.substr(i, 2), 16) * L));
  return "rgb(" + p.join(",") + ")";
};
const ridge = (base, amp, seed, col) => {
  g.fillStyle = col;
  g.beginPath();
  g.moveTo(-1400, 20);
  for (let x = -1400; x <= 1400; x += 30) {
    const y =
      base -
      amp * (0.5 + 0.5 * Math.sin(x * 0.0042 + seed)) * (0.6 + 0.4 * Math.sin(x * 0.011 + seed * 2)) -
      amp * 0.2 * e.rnd();
    g.lineTo(x, y);
  }
  g.lineTo(1400, 20);
  g.closePath();
  g.fill();
};
ridge(-40, 95, 1.3, m("#191b33", "#5a4b6a"));
ridge(-10, 50, 4.1, m("#14162a", "#43385a"));
