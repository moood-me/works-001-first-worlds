function go(k, to, sp) {
  var from = scene.get(k);
  var t = Math.max(0.3, Math.abs(to - from) / sp);
  scene.set(k, to, t);
  return t;
}
var GX = 6.5;
var MOV = ["walk_right", "walk_left", "run_right", "run_left", "approach", "go_away", "exit", "back"];
scene.on("change", "hero_action", function (a) {
  var x = scene.get("hero_x"),
    dx = scene.get("death_x"),
    u = scene.get("hero_through") || 0;
  function lateral() {
    x = scene.get("hero_x");
    var to = x,
      t = 0;
    if (a === "walk_right") to = Math.min(9, x + 3);
    else if (a === "walk_left") to = Math.max(-9, x - 3);
    else if (a === "run_right") to = 9;
    else if (a === "run_left") to = -9;
    else if (a === "approach") to = dx + (x > dx ? 1.1 : -1.1);
    else if (a === "go_away") to = Math.max(-9, Math.min(9, x + (x > dx ? 3 : -3)));
    else if (a === "exit") to = GX;
    else if (a === "open_gate") to = GX - 0.45;
    if (Math.abs(to - x) > 0.05) {
      scene.set("hero_face", to > x ? 1 : -1);
      t = go("hero_x", to, a.indexOf("run") === 0 ? 4.5 : 1.3);
    }
    if (a === "turn_away") scene.set("hero_face", dx < x ? 1 : -1);
    scene.after(t, function () {
      if (scene.get("hero_action") !== a) return;
      if (a === "exit") {
        if ((scene.get("gate") || 0) < 0.5) {
          scene.set("hero_action", "stand");
          scene.tell("Ты дошла до ворот — они закрыты" + (scene.get("gate_locked") ? " и заперты на цепь." : "."));
        } else {
          scene.set("hero_through", 1, 4);
          scene.after(4, function () {
            if (scene.get("hero_action") === "exit") {
              scene.set("hero_action", "stand");
              scene.tell("Ты вышла за ворота и скрылась в тумане по ту сторону.");
            }
          });
        }
      } else if (a === "open_gate") {
        scene.set("hero_face", 1);
        if (scene.get("gate_locked")) {
          scene.tell("Ты дёргаешь калитку — цепь звякает, замок держит.");
          scene.after(1.5, function () {
            if (scene.get("hero_action") === "open_gate") scene.set("hero_action", "stand");
          });
        } else {
          scene.set("gate", 1, 3);
          scene.tell("Ворота со скрипом открываются. За ними — бледный туман.");
          scene.after(3, function () {
            if (scene.get("hero_action") === "open_gate") scene.set("hero_action", "stand");
          });
        }
      } else if (MOV.indexOf(a) >= 0) scene.set("hero_action", a.indexOf("run") === 0 ? "catch_breath" : "stand");
    });
  }
  if (a === "back") {
    if (u > 0.02) {
      scene.set("hero_face", -1);
      scene.set("hero_through", 0, u * 4);
      scene.after(u * 4, function () {
        if (scene.get("hero_action") === "back") {
          scene.set("hero_action", "stand");
          scene.tell("Ты вернулась из-за ворот на дорожку.");
        }
      });
    } else scene.set("hero_action", "stand");
    return;
  }
  if (u > 0.02 && a !== "exit" && (MOV.indexOf(a) >= 0 || a === "open_gate")) {
    scene.set("hero_through", 0, u * 4);
    scene.after(u * 4, lateral);
  } else lateral();
});
scene.on("change", "death_action", function (a) {
  var hx = scene.get("hero_x"),
    dx = scene.get("death_x"),
    v = scene.get("death_through") || 0;
  if (a === "leave") {
    scene.set("death_through", 0, Math.max(0.3, v * 3));
    go("death_x", dx < hx ? -18 : 18, 1.0);
  } else if (a === "lead") {
    var t = go("death_x", GX, 1.2);
    scene.after(t, function () {
      if (scene.get("death_action") !== "lead") return;
      scene.set("death_through", 1, 3.5);
      scene.after(3.5, function () {
        if (scene.get("death_action") === "lead") {
          scene.set("death_action", "wait_beyond");
          scene.tell(
            "Смерть прошла сквозь " +
              ((scene.get("gate") || 0) < 0.5 ? "запертые ворота" : "открытые ворота") +
              " и ждёт по ту сторону, в тумане.",
          );
        }
      });
    });
  } else if (a === "return") {
    scene.set("death_through", 0, Math.max(0.3, v * 3));
    scene.after(Math.max(0.3, v * 3), function () {
      if (scene.get("death_action") === "return") scene.set("death_action", "wait");
    });
  }
});
scene.every(0.5, function () {
  var a = scene.get("death_action");
  if (a !== "approach" && a !== "chase" && a !== "follow") return;
  var hx = scene.get("hero_x"),
    dx = scene.get("death_x"),
    v = scene.get("death_through") || 0,
    u = scene.get("hero_through") || 0;
  if (u > 0.3) {
    if (Math.abs(dx - GX) > 0.1) {
      var st = Math.sign(GX - dx) * Math.min(Math.abs(GX - dx), (a === "chase" ? 3.6 : 1.5) * 0.5);
      scene.set("death_x", dx + st, 0.5);
    } else scene.set("death_through", Math.max(0, u - 0.15), 1);
    return;
  }
  if (v > 0.05) {
    scene.set("death_through", 0, 2);
    return;
  }
  var side = dx < hx ? -1 : 1;
  var to = hx + side * (a === "follow" ? 5 : 1.1);
  var sp = a === "chase" ? 3.6 : a === "approach" ? 1.7 : 1.3;
  if (Math.abs(to - dx) < 0.08) {
    if (a === "approach") {
      scene.set("death_action", "wait");
      scene.tell("Смерть подошла и остановилась рядом с тобой.");
    } else if (a === "chase") {
      scene.set("death_action", "wait");
      scene.tell("Смерть догнала тебя.");
    }
    return;
  }
  var step = Math.sign(to - dx) * Math.min(Math.abs(to - dx), sp * 0.5);
  scene.set("death_x", dx + step, 0.5);
});
scene.every(0.5, function () {
  if (!scene.get("at_gate") && scene.get("hero_x") > 5) {
    scene.set("at_gate", true);
    scene.tell(
      "Ты подошла к воротам парка. Мокрые прутья, цепь, за ними — туман. Дорожка уходит и дальше, в глубь парка.",
    );
  }
});
scene.every(10, function () {
  var d = scene.get("dusk") || 0;
  if (d < 1) scene.set("dusk", Math.min(1, d + 0.008), 9);
});
var mistTold = (scene.get("mist") || 0) >= 0.95;
scene.every(4, function () {
  if (!scene.get("mist_gathers")) return;
  var m = scene.get("mist") || 0;
  if (m < 1) {
    m = Math.min(1, m + 0.015);
    scene.set("mist", m, 3.8);
  }
  var f = scene.get("flicker") || 0,
    nf = Math.min(0.9, (m - 0.4) * 0.9);
  if (nf > f) scene.set("flicker", nf, 3);
  if (m >= 0.95 && !mistTold) {
    mistTold = true;
    scene.tell("Туман сомкнулся: дорожки назад почти не видно, только фонари у ворот.");
  }
});
