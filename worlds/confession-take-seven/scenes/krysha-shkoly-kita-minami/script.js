const W = (f) => (f === "blowing" ? 1 : 0);
const restart = () => {
  const k = scene.get("take") || 7;
  scene.set("take", k + 1);
  scene.set("dusk", 0.1, 10);
  scene.set("petals", 1);
  scene.set("heat", 0);
  scene.set("fan", "blowing");
  scene.set("wrap", false);
  scene.tell(tr('The sun is back in its place. Take {take}. Places, everyone.', { take: k + 1 }), "sky");
};
const wrap = () => {
  scene.set("wrap", true);
  const k = scene.get("take") || 7;
  scene.tell(
    scene.get("senpai") === "in the doorway"
      ? tr('The sun has set. Senpai is standing in the doorway. Take {take}: in the can.', { take: k })
      : tr('The sun has set. Senpai never came. Take {take}: in the can.', { take: k }),
    "sky",
  );
  scene.after(12, restart);
};
scene.on("load", (s) => {
  scene.set("wind", W(s.fan));
  if (s.wrap) scene.after(3, restart);
});
scene.on("change", "fan", (v) => scene.set("wind", W(v), W(v) ? 2 : 6));
scene.every(12, () => {
  let h = scene.get("heat") || 0;
  const f = scene.get("fan");
  if (f === "blowing") {
    h = Math.min(1, +(h + 0.06).toFixed(2));
    scene.set("heat", h, 6);
    if (h >= 1) {
      scene.set("fan", "overheated");
      scene.tell(tr('The wind machine has overheated and gone quiet. Hikari\'s hair slowly settles.'), "fan");
    }
    const p = scene.get("petals") || 0;
    if (p > 0) {
      const q = Math.max(0, +(p - 0.025).toFixed(3));
      scene.set("petals", q);
      if (q === 0) scene.tell(tr('Kenta has run out of petals. He shakes the empty bag over the roof.'), "kenta");
    }
  } else if (f === "overheated") {
    h = Math.max(0, +(h - 0.12).toFixed(2));
    scene.set("heat", h, 6);
    if (h <= 0.3) {
      scene.set("fan", "blowing");
      scene.tell(tr('The wind machine has cooled down and is blowing again. The drama is back.'), "fan");
    }
  } else if (h > 0) scene.set("heat", Math.max(0, +(h - 0.1).toFixed(2)), 6);
});
scene.every(20, () => {
  if (scene.get("wrap")) return;
  const d = scene.get("dusk") || 0;
  if (d >= 1) {
    wrap();
    return;
  }
  const n = Math.min(1, +(d + 0.02).toFixed(2));
  scene.set("dusk", n, 18);
});
