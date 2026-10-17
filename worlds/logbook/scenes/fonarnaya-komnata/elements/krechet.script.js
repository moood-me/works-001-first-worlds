scene.on("change", "signal", (v) => {
  const k = scene.get("krechet") || 0;
  if (!v || !(k > 0) || k >= 0.999) return;
  const s = String(v)
    .replace(/[^·.—–-]/g, "")
    .replace(/·/g, ".")
    .replace(/[—–]/g, "-");
  const his = s === "...-",
    pat = his ? ["s", "s", "s", "l"] : ["s", "s"];
  let t = 2.5 + s.length * 1.4;
  for (const p of pat) {
    scene.after(t, () => scene.set("krechet_flash", true));
    t += p === "s" ? 0.35 : 1.1;
    scene.after(t, () => scene.set("krechet_flash", false));
    t += 0.5;
  }
  scene.after(t + 0.5, () => {
    scene.set("krechet_answer", his ? "· · · —" : "· ·");
    scene.tell(
      his
        ? tr('The Krechet answered with its searchlight: three short, one long, “I see you”.')
        : tr('The Krechet answered with two short: “I see.”'),
    );
  });
});
