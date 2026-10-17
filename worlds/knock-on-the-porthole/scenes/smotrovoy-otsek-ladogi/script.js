const knock = () => {
  scene.set("knocking", true);
  scene.after(1.6, () => scene.set("knocking", false));
  const k = (scene.get("knock") || 0) + 1;
  scene.set("knock", k);
  if (k === 1) scene.tell(tr('Someone knocked on the glass from outside: three times, evenly, the way you knock on a door.'), "gordeev");
  if (k === 3 && !scene.get("pod_hand")) {
    scene.set("pod_hand", true);
    scene.tell(tr('On the frost of pod 3 a handprint has appeared from the inside.'), "pod");
  }
};
scene.every(20, () => {
  const s = scene.get("suit") || 0;
  if (s < 1) {
    const n = Math.min(1, s + 0.1);
    scene.set("suit", n, 18);
    if (n >= 1) scene.after(18, () => scene.tell(tr('The spacesuit has drifted right up and pressed its glove to the glass.'), "gordeev"));
  } else knock();
});
scene.every(30, () => {
  const o = scene.get("oxygen");
  if (o > 0) {
    scene.set("oxygen", o - 1);
    if (o - 1 === 10) scene.tell(tr('Ten percent of the oxygen is left in the bay.'), "lida");
  }
});
