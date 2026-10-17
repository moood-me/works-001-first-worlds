const receive = () => {
  const p = scene.get("progress") || 0;
  scene.set("progress", 1, Math.max(3, (1 - p) * 90));
};
scene.on("load", (s) => {
  if (s.message === "receiving" && (s.minutes || 0) > 0) receive();
});
scene.on("change", "message", (v) => {
  if (v === "receiving") receive();
});
scene.on("change", "progress", (v) => {
  if (v >= 0.999 && scene.get("message") === "receiving") {
    scene.set("message", "received");
    scene.tell(tr('The message from Earth has come through in full.'), "tikhon");
  }
});
scene.every(20, () => {
  const m = scene.get("minutes") || 0;
  if (m > 0) scene.set("minutes", m - 1);
});
scene.every(3, () => {
  const m = scene.get("minutes") || 0;
  const base = m > 0 ? 0.25 + (0.75 * m) / 40 : 0;
  scene.set("signal", Math.max(0, Math.min(1, base * (0.7 + Math.random() * 0.4))), 2.5);
});
scene.on("change", "minutes", (m) => {
  if (m > 0) return;
  const msg = scene.get("message");
  if (msg === "receiving") {
    scene.set("progress", scene.get("progress"));
    scene.set("message", "cut off");
    scene.tell(tr('The relay has gone behind the planet. Reception cut off mid-word.'), "relay");
  } else if (msg === "waiting") {
    scene.tell(tr('The relay has gone behind the planet. The comms window has closed.'), "relay");
  }
});
