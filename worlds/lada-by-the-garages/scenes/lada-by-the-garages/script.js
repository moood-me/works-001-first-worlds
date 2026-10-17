scene.every(20, () => {
  const d = scene.get("dusk") || 0;
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.025), 18);
});
scene.on("change", "dusk", (v) => {
  if (v > 0.35 && scene.get("lamp") === "off") {
    scene.set("lamp", "flickering");
    scene.after(12, () => {
      if (scene.get("lamp") === "flickering") {
        scene.set("lamp", "on");
        scene.tell(tr('The street lamp over the garages has come on, at the third try.'), "lamp");
      }
    });
  }
});
scene.on("load", (s) => {
  if (s.engine === "sputtering") scene.set("engine", "silent");
  if (s.tape === "chewed")
    scene.after(25, () => {
      scene.set("tape", "playing");
    });
  if (s.lamp === "flickering")
    scene.after(12, () => {
      if (scene.get("lamp") === "flickering") scene.set("lamp", "on");
    });
});
scene.every(28, () => {
  if (scene.get("engine") !== "silent") return;
  const n = (scene.get("tries") || 0) + 1;
  scene.set("tries", n);
  if (n % 6 === 0) {
    scene.set("engine", "running");
    scene.tell(tr('The Lada started! Try number {n}.', { n }), "lada");
    scene.after(5, () => {
      if (scene.get("engine") === "running") {
        scene.set("engine", "silent");
        scene.tell(tr('The Lada ran for five seconds and stalled.'), "lada");
      }
    });
  } else {
    scene.set("engine", "sputtering");
    scene.after(3, () => {
      if (scene.get("engine") === "sputtering") scene.set("engine", "silent");
    });
  }
});
scene.every(15, () => {
  const v = scene.get("shells") || 0;
  if (v < 1) scene.set("shells", Math.min(1, v + 0.01), 10);
});
scene.every(60, () => {
  if (scene.get("tape") === "playing" && Math.random() < 0.15) {
    scene.set("tape", "chewed");
    scene.tell(tr('The boombox on the roof has chewed the tape.'), "boombox");
    scene.after(25, () => {
      if (scene.get("tape") === "chewed") {
        scene.set("tape", "playing");
        scene.tell(tr('Someone wound the cassette back with a pencil. It plays on.'), "boombox");
      }
    });
  }
});
