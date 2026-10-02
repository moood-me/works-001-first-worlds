var P = { tower: [0.72, 12.5], station: [0.3, 45], shed: [0.14, 30] },
  W = [0.47, 13.2];
var NM = { tower: "у водонапорной башни", station: "у здания станции, рядом с фонарём", shed: "у старого сарая" };
function md(a, b, c, d) {
  var A = 1.78,
    F = 0.87;
  var x0 = ((a - 0.5) * A * b) / F,
    x1 = ((c - 0.5) * A * d) / F;
  return Math.sqrt((x1 - x0) * (x1 - x0) + (d - b) * (d - b));
}
var seq = 0;
function cur() {
  var sx = scene.get("player_sx"),
    d = scene.get("player_d");
  return [sx == null ? 0.72 : sx, d == null ? 12.5 : d];
}
function leg(p, cb) {
  var c = cur();
  var T = Math.max(0.2, md(c[0], c[1], p[0], p[1]) / 1.25);
  scene.set("player_sx", p[0], T);
  scene.set("player_d", p[1], T);
  scene.after(T + 0.1, cb);
}
function go(pos) {
  var my = ++seq;
  var p = P[pos] || P.tower;
  var c = cur();
  if (md(c[0], c[1], p[0], p[1]) < 0.3) {
    scene.set("player_sx", p[0]);
    scene.set("player_d", p[1]);
    return;
  }
  var fin = function () {
    if (my === seq && scene.get("player_position") === pos)
      scene.tell("Путник дошёл и стоит " + (NM[pos] || NM.tower) + ".");
  };
  if (c[0] > 0.5 !== p[0] > 0.5 && Math.abs(c[0] - W[0]) > 0.01)
    leg(W, function () {
      if (my === seq) leg(p, fin);
    });
  else leg(p, fin);
}
scene.on("change", "player_position", function (v) {
  go(v);
});
var hs = 0;
function hatch(open) {
  var my = ++hs;
  var h = scene.get("hatch_amount") || 0;
  if (open) {
    if (h < 0.15) {
      scene.set("hatch_amount", 0.16, 1.4);
      scene.after(2.1, function () {
        if (my !== hs) return;
        scene.set("hatch_amount", 1, 3.6);
        scene.after(3.8, function () {
          if (my === hs)
            scene.tell(
              "Ржавая дверца люка у основания башни со скрипом поддалась и открылась; внутри темно, пахнет старой водой.",
            );
        });
      });
    } else {
      var T = 3.6 * (1 - h) + 0.3;
      scene.set("hatch_amount", 1, T);
      scene.after(T + 0.2, function () {
        if (my === hs) scene.tell("Дверца люка открыта настежь.");
      });
    }
  } else {
    var T2 = 2.4 * h + 0.3;
    scene.set("hatch_amount", 0, T2);
    scene.after(T2 + 0.2, function () {
      if (my === hs) scene.tell("Дверца люка захлопнулась с глухим железным лязгом.");
    });
  }
}
scene.on("change", "hatch_open", function (v) {
  hatch(!!v);
});
var ts = 0,
  REST = 1.3;
function tw(near) {
  var my = ++ts;
  var x = scene.get("tw_x");
  if (x == null) x = 20;
  if (near) {
    if (x >= 19.5) {
      x = -17;
      scene.set("tw_x", -17);
    }
    var T = Math.abs(REST - x) / 1.5 + 0.1;
    scene.set("tw_x", REST, T);
    scene.after(T + 0.3, function () {
      if (my === ts) scene.tell("Перекати-поле докатилось до башни и застряло в траве у бетонного основания.");
    });
  } else {
    if (x >= 19.5) return;
    var T3 = (20 - x) / 1.7 + 0.1;
    scene.set("tw_x", 20, T3);
    scene.after(T3, function () {
      if (my === ts) scene.tell("Ветер сорвал перекати-поле от башни и укатил в степь.");
    });
  }
}
scene.on("change", "tumbleweed_near", function (v) {
  tw(!!v);
});
scene.on("change", "loose_chain_stirring", function (v, o) {
  if (v >= 0.7 && (o == null || o < 0.7))
    scene.after(2.5, function () {
      if (scene.get("loose_chain_stirring") >= 0.7) scene.tell("Цепь раскачалась и звякает о ржавую лестницу.");
    });
});
scene.on("change", "lantern_glow", function (v, o) {
  if (v <= 0.02 && o != null && o > 0.02) scene.tell("Фонарь у станции погас.");
  else if (v > 0.05 && o != null && o <= 0.02) scene.tell("Фонарь у станции снова затеплился.");
});
go(scene.get("player_position"));
var ho = !!scene.get("hatch_open"),
  ha = scene.get("hatch_amount") || 0;
if (ho && ha < 0.99) hatch(true);
if (!ho && ha > 0.01) hatch(false);
var tn = !!scene.get("tumbleweed_near"),
  tx0 = scene.get("tw_x");
if (tx0 == null) tx0 = 20;
if (tn && Math.abs(tx0 - REST) > 0.05) tw(true);
if (!tn && tx0 < 19.5) tw(false);
