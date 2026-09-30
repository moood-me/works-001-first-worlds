scene.on("change", "signal", (v) => {
  if (!v || !(scene.get("krechet") > 0)) return;
  const his = String(v).includes("——"),
    pat = his ? ["s", "s", "s", "l"] : ["s", "s"];
  let t = 4;
  for (const p of pat) {
    scene.after(t, () => scene.set("krechet_flash", true));
    t += p === "s" ? 0.35 : 1.1;
    scene.after(t, () => scene.set("krechet_flash", false));
    t += 0.5;
  }
  scene.after(t + 0.5, () => scene.set("krechet_answer", his ? "· · · —" : "· ·"));
});
