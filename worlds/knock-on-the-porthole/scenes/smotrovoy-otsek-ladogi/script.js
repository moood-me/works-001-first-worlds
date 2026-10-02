const knock = () => {
  scene.set("knocking", true);
  scene.after(1.6, () => scene.set("knocking", false));
  const k = (scene.get("knock") || 0) + 1;
  scene.set("knock", k);
  if (k === 1) scene.tell("В стекло снаружи постучали — три раза, ровно, как стучат в дверь.", "gordeev");
  if (k === 3 && !scene.get("pod_hand")) {
    scene.set("pod_hand", true);
    scene.tell("На инее капсулы №3 изнутри проступил отпечаток ладони.", "pod");
  }
};
scene.every(20, () => {
  const s = scene.get("suit") || 0;
  if (s < 1) {
    const n = Math.min(1, s + 0.1);
    scene.set("suit", n, 18);
    if (n >= 1) scene.after(18, () => scene.tell("Скафандр подплыл вплотную и прижал перчатку к стеклу.", "gordeev"));
  } else knock();
});
scene.every(30, () => {
  const o = scene.get("oxygen");
  if (o > 0) {
    scene.set("oxygen", o - 1);
    if (o - 1 === 10) scene.tell("Кислорода в отсеке осталось десять процентов.", "lida");
  }
});
