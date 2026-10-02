var SEATS = [0.38, 1.36],
  hm = 0,
  dm = 0,
  dipping = false;
function cl(v) {
  return Math.max(-4.3, Math.min(4.3, v));
}
function moveHero(to, cb, raw) {
  if (!raw) to = cl(to);
  var x = scene.get("hero_x"),
    d = Math.abs(to - x),
    id = ++hm;
  if (d < 0.04) {
    scene.set("hero_moving", false);
    if (cb) cb();
    return;
  }
  var t = Math.max(0.5, d / 1.1);
  scene.set("hero_to", to);
  scene.set("hero_moving", true);
  scene.set("hero_x", to, t);
  scene.after(t, function () {
    if (id !== hm) return;
    scene.set("hero_moving", false);
    if (cb) cb();
  });
}
function moveDeath(to, cb, raw) {
  if (!raw) to = cl(to);
  var x = scene.get("death_x"),
    d = Math.abs(to - x),
    id = ++dm;
  if (d < 0.04) {
    scene.set("death_moving", false);
    if (cb) cb();
    return;
  }
  var t = Math.max(0.6, d / 0.8);
  scene.set("death_to", to);
  scene.set("death_moving", true);
  scene.set("death_x", to, t);
  scene.after(t, function () {
    if (id !== dm) return;
    scene.set("death_moving", false);
    if (cb) cb();
  });
}
function check() {
  var x = scene.get("hero_x"),
    dx = scene.get("death_x"),
    d = Math.abs(x - dx);
  scene.set("gap", Math.round(d * 100) / 100);
  if (!scene.get("met") && d < 1.8) {
    scene.set("met", true);
    scene.tell("Ты подошла к скамейке. Смерть подняла глаза и посмотрела на тебя.");
  }
}
function freeSeat(me, other, otherPose) {
  var c = SEATS.filter(function (s) {
    return !(otherPose === "sit" && Math.abs(other - s) < 0.35);
  });
  if (!c.length) return null;
  c.sort(function (a, b) {
    return Math.abs(a - me) - Math.abs(b - me);
  });
  return c[0];
}
scene.on("change", "hero_pose", function (p) {
  if (p === "sit") {
    var s = freeSeat(scene.get("hero_x"), scene.get("death_x"), scene.get("death_pose"));
    if (s == null) {
      scene.set("hero_pose", "stand");
      return;
    }
    moveHero(s, function () {
      check();
      if (scene.get("hero_pose") !== "sit") return;
      scene.tell(scene.get("death_pose") === "sit" ? "Ты села на скамейку рядом со Смертью." : "Ты села на скамейку.");
    });
  } else if (p === "leave") {
    moveHero(
      -6.5,
      function () {
        scene.tell("Ты ушла от скамейки по дорожке.");
      },
      true,
    );
  }
});
scene.on("change", "death_pose", function (p) {
  if (p === "sit") {
    var s = freeSeat(scene.get("death_x"), scene.get("hero_x"), scene.get("hero_pose"));
    if (s == null) {
      scene.set("death_pose", "stand");
      return;
    }
    moveDeath(s, check);
  } else if (p === "leave") {
    scene.set("offer", "none");
    moveDeath(
      6.8,
      function () {
        scene.tell("Смерть ушла по дорожке и пропала за фонарями.");
      },
      true,
    );
  }
});
scene.on("change", "gap", function (v) {
  if (typeof v !== "number") return;
  var x = scene.get("hero_x"),
    dx = scene.get("death_x");
  if (Math.abs(Math.abs(x - dx) - v) < 0.06) return;
  var side = x < dx ? -1 : 1,
    g2 = Math.max(0.3, v),
    to = dx + side * g2;
  if (Math.abs(cl(to) - to) > 0.01) to = dx - side * g2;
  if (scene.get("hero_pose") === "sit") scene.set("hero_pose", "stand");
  moveHero(to, check);
});
scene.on("change", "met", function (v) {
  if (v && scene.get("death_look") === "ahead") scene.set("death_look", "hero");
});
scene.every(0.5, function () {
  if (!scene.get("met") && Math.abs(scene.get("hero_x") - scene.get("death_x")) < 1.8) check();
});
scene.every(31, function () {
  if (dipping || !scene.get("met")) return;
  var L = scene.get("lamp");
  if (L < 0.2) return;
  dipping = true;
  scene.set("lamp", L * 0.5, 0.2);
  scene.after(0.3, function () {
    scene.set("lamp", L, 1.5);
    scene.after(1.6, function () {
      dipping = false;
    });
  });
});
scene.on("load", function () {
  if (scene.get("hero_moving")) scene.set("hero_moving", false);
  if (scene.get("death_moving")) scene.set("death_moving", false);
});
