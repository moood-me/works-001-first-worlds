scene.every(2, () => {
  const s = scene.state;
  const P = s.boatPresent ?? 1,
    T = s.ropeTaut ?? 0,
    L = s.ropeLoose ?? 0;
  if (P > 0.5 && L < 0.985 && T > 0.8) {
    const n = Math.min(1, L + (0.004 * (T - 0.8)) / 0.2 + 0.001);
    if (L < 0.5 && n >= 0.5) scene.tell("The rope loop is creeping up the stake — the knot is slipping.");
    if (n >= 0.985) {
      scene.set("ropeLoose", 1);
      scene.tell("The rope slipped off the stake. The boat is free and starts to drift away.");
    } else scene.set("ropeLoose", n);
  }
});
scene.every(1, () => {
  const s = scene.state;
  if ((s.boatPresent ?? 1) > 0.9 && (s.ropeLoose ?? 0) >= 0.985) {
    const d = s.boatDrift ?? 0;
    if (d < 1) {
      const n = Math.min(1, d + 0.004 * (0.6 + (s.waterShiver ?? 0.35)));
      scene.set("boatDrift", n);
      if (d < 0.6 && n >= 0.6) scene.tell("The drifting boat crosses the moon path.");
      if (n >= 1) {
        scene.set("boatPresent", 0, 3);
        scene.tell("The boat has drifted out into the dark and is gone.");
      }
    }
  }
});
scene.on("change", "ropeLoose", (v, o) => {
  if (v < 0.985 && o >= 0.985 && (scene.get("boatDrift") || 0) > 0) scene.set("boatDrift", 0, 4);
});
scene.on("change", "boatPresent", (v, o) => {
  if (v > 0.5 && o <= 0.5 && (scene.get("ropeLoose") || 0) < 0.985) scene.set("boatDrift", 0);
});
