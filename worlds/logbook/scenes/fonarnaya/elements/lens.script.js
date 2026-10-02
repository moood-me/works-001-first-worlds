const norm = (v) =>
  String(v)
    .replace(/[·•∙.*]/g, "s")
    .replace(/[—–−_-]/g, "l")
    .replace(/[^sl]/g, "")
    .slice(0, 12);
let busy = false;
scene.on("change", "signal", (v) => {
  if (!v || busy) return;
  const p = norm(v);
  if (!p) return;
  busy = true;
  const prev = scene.get("shutter") || 0;
  let t = 0.2;
  scene.set("shutter", 1, 0.3);
  t += 1.4;
  for (const c of p) {
    scene.after(t, () => scene.set("shutter", 0, 0.1));
    t += c === "s" ? 0.45 : 1.3;
    scene.after(t, () => scene.set("shutter", 1, 0.1));
    t += 0.6;
  }
  scene.after(t + 0.8, () => {
    scene.set("shutter", prev, 0.4);
    busy = false;
    scene.tell("Шторка линзы отстучала знак: " + v, "lens");
    // the «Кречет» answers once a night, if it is in sight: his own sign for his own, a curt «· ·» for anything else
    const k = scene.get("krechet") || 0;
    if (k <= 0.001 || k >= 0.999 || scene.get("krechet_answer")) return;
    const his = p === "sssl" || (String(v).match(/—/g) || []).length >= 3,
      pat = his ? "sssl" : "ss";
    let u = 3;
    for (const c of pat) {
      scene.after(u, () => scene.set("krechet_flash", true));
      u += c === "s" ? 0.35 : 1.1;
      scene.after(u, () => scene.set("krechet_flash", false));
      u += 0.5;
    }
    scene.after(u + 0.5, () => {
      const a = his ? "· · · —" : "· ·";
      scene.set("krechet_answer", a);
      scene.tell("«Кречет» ответил прожектором: " + a, "krechet");
    });
  });
});
