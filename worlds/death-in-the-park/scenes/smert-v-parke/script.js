function go(k, to, speed) {
  var from = scene.get(k);
  var d = Math.abs(to - from);
  var t = Math.max(0.3, d / speed);
  scene.set(k, to, t);
  return t;
}
scene.on("change", "hero_action", function (a) {
  var x = scene.get("hero_x"),
    dx = scene.get("death_x"),
    to = x,
    t = 0;
  if (a === "walk_right") to = Math.min(8.5, x + 3);
  else if (a === "walk_left") to = Math.max(-8.5, x - 3);
  else if (a === "run_right") to = 8.5;
  else if (a === "run_left") to = -8.5;
  else if (a === "approach") to = dx + (x > dx ? 1.1 : -1.1);
  else if (a === "go_away") to = Math.max(-8.5, Math.min(8.5, x + (x > dx ? 3 : -3)));
  else if (a === "sit") to = 3.35;
  if (Math.abs(to - x) > 0.05) {
    scene.set("hero_face", to > x ? 1 : -1);
    t = go("hero_x", to, a.indexOf("run") === 0 ? 4.5 : 1.3);
  }
  var moving = ["walk_right", "walk_left", "run_right", "run_left", "approach", "go_away"];
  if (moving.indexOf(a) >= 0)
    scene.after(t, function () {
      if (scene.get("hero_action") === a) scene.set("hero_action", a.indexOf("run") === 0 ? "catch_breath" : "stand");
    });
  if (a === "turn_away") scene.set("hero_face", dx < x ? 1 : -1);
});
scene.on("change", "death_action", function (a) {
  var hx = scene.get("hero_x"),
    dx = scene.get("death_x");
  if (a === "sit") go("death_x", 4.25, 1.2);
  else if (a === "leave") go("death_x", dx < hx ? -16 : 16, 1.0);
  if (a === "wait" && !scene.get("met")) {
    scene.set("met", true);
    scene.after(0.8, function () {
      scene.ask("death", "Ты подошла к нему по дорожке и остановилась рядом. Поздоровайся.");
    });
  }
});
scene.every(0.5, function () {
  var a = scene.get("death_action");
  if (a !== "approach" && a !== "chase" && a !== "follow") return;
  var hx = scene.get("hero_x"),
    dx = scene.get("death_x");
  var side = dx < hx ? -1 : 1;
  var to = hx + side * (a === "follow" ? 2.4 : 1.1);
  var sp = a === "chase" ? 3.6 : a === "approach" ? 1.7 : 1.3;
  if (Math.abs(to - dx) < 0.08) {
    if (a === "approach") scene.set("death_action", "wait");
    return;
  }
  var step = Math.sign(to - dx) * Math.min(Math.abs(to - dx), sp * 0.5);
  scene.set("death_x", dx + step, 0.5);
});
