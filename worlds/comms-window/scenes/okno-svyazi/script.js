const receive = () => {
  const p = scene.get("progress") || 0;
  scene.set("progress", 1, Math.max(3, (1 - p) * 90));
};
scene.on("load", (s) => {
  if (s.message === "принимается" && (s.minutes || 0) > 0) receive();
});
scene.on("change", "message", (v) => {
  if (v === "принимается") receive();
});
scene.on("change", "progress", (v) => {
  if (v >= 0.999 && scene.get("message") === "принимается") {
    scene.set("message", "получено");
    scene.tell("Сообщение с Земли принято целиком.", "tikhon");
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
  if (msg === "принимается") {
    scene.set("progress", scene.get("progress"));
    scene.set("message", "оборвалось");
    scene.tell("Ретранслятор ушёл за планету — приём оборвался на полуслове.", "relay");
  } else if (msg === "ждёт") {
    scene.tell("Ретранслятор ушёл за планету. Окно связи закрылось.", "relay");
  }
});
