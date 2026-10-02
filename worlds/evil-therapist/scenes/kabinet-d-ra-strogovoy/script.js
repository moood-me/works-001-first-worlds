scene.every(15, function () {
  var m = scene.get("minutes") || 0;
  if (m < 50) {
    scene.set("minutes", m + 1);
    if (m + 1 === 50) scene.tell("Часы на стене показывают 14:50 — время сеанса вышло.", "wall");
  }
});
scene.every(4, function () {
  if (scene.get("writing")) {
    var n = scene.get("notes") || 0;
    if (n < 15) {
      scene.set("notes", n + 1);
      if (n + 1 === 15) scene.tell("В деле кончилась страница: доктор исписала её целиком.", "desk");
    }
  }
});
