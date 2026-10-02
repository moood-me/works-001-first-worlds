scene.every(20, () => {
  const d = scene.get("dusk") || 0;
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.025), 18);
});
scene.on("change", "dusk", (v) => {
  if (v > 0.35 && scene.get("lamp") === "не горит") {
    scene.set("lamp", "мигает");
    scene.after(12, () => {
      if (scene.get("lamp") === "мигает") {
        scene.set("lamp", "горит");
        scene.tell("Над гаражами зажёгся фонарь — с третьей попытки.", "fonar");
      }
    });
  }
});
scene.on("load", (s) => {
  if (s.engine === "чихает") scene.set("engine", "молчит");
  if (s.tape === "зажевало")
    scene.after(25, () => {
      scene.set("tape", "играет");
    });
  if (s.lamp === "мигает")
    scene.after(12, () => {
      if (scene.get("lamp") === "мигает") scene.set("lamp", "горит");
    });
});
scene.every(28, () => {
  if (scene.get("engine") !== "молчит") return;
  const n = (scene.get("tries") || 0) + 1;
  scene.set("tries", n);
  if (n % 6 === 0) {
    scene.set("engine", "завелась");
    scene.tell("Копейка завелась! Попытка №" + n + ".", "kopeyka");
    scene.after(5, () => {
      if (scene.get("engine") === "завелась") {
        scene.set("engine", "молчит");
        scene.tell("Копейка поработала пять секунд и заглохла.", "kopeyka");
      }
    });
  } else {
    scene.set("engine", "чихает");
    scene.after(3, () => {
      if (scene.get("engine") === "чихает") scene.set("engine", "молчит");
    });
  }
});
scene.every(15, () => {
  const v = scene.get("shells") || 0;
  if (v < 1) scene.set("shells", Math.min(1, v + 0.01), 10);
});
scene.every(60, () => {
  if (scene.get("tape") === "играет" && Math.random() < 0.15) {
    scene.set("tape", "зажевало");
    scene.tell("Магнитолу на крыше зажевало.", "magnitola");
    scene.after(25, () => {
      if (scene.get("tape") === "зажевало") {
        scene.set("tape", "играет");
        scene.tell("Кассету перемотали карандашом. Играет дальше.", "magnitola");
      }
    });
  }
});
