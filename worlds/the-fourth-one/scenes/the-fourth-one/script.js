scene.on("load", (s) => {
  scene.set("malGone", s.maloy === "ran off" ? 1 : 0);
});
scene.on("change", "maloy", (v) => scene.set("malGone", v === "ran off" ? 1 : 0, 4));
scene.every(20, () => {
  const s = scene.state;
  if (s.lamp === "on" || s.fourth >= 1) return;
  const n = Math.min(1, Math.round(s.fourth * 10 + 1) / 10);
  scene.set("fourth", n, 5);
  scene.after(5.5, () => {
    if (n >= 1) scene.tell(tr('The fourth one has squatted down right next to them, in the very light, and silently holds out his hand: got a smoke?'), "fourth");
    else if (n >= 0.6 && scene.get("garage") === "closed") {
      scene.set("garage", "ajar");
      scene.tell(tr('The door of the third garage creaks ajar. Nobody comes out.'), "garage");
    } else scene.tell(tr('While the lamp was blinking, the fourth one got a step closer.'), "fourth");
  });
});
scene.every(30, () => {
  const s = scene.state;
  if (s.shnyr !== "cracking seeds" || s.seeds <= 0) return;
  const v = Math.max(0, Math.round((s.seeds - 0.1) * 10) / 10);
  scene.set("seeds", v);
  if (v <= 0) scene.tell(tr('Shnyr has run out of seeds.'), "shnyr");
});
