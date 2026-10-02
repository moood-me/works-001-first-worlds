const open = () => {
  if (scene.get("window") === "перерыв") {
    scene.set("window", "открыто");
    scene.tell("Окно №3 снова открыто.", "inspector");
  }
};
const shut = () => {
  scene.set("window", "перерыв");
  scene.tell("Окно №3 закрылось на технический перерыв.", "inspector");
  scene.after(60, open);
};
if (scene.get("window") === "перерыв") scene.after(30, open);
const v = scene.get("vip") || 0;
if (v > 0 && v < 1) scene.set("vip", 0);
scene.every(12, () => {
  if (scene.get("window") !== "открыто") return;
  const n = (scene.get("now") || 0) + 1;
  scene.set("now", n);
  if (n % 20 === 0) shut();
});
scene.every(150, () => {
  scene.set("vip", 0);
  scene.set("vip", 1, 12);
  scene.after(12.5, () => {
    scene.set("vip", 0);
    scene.set("mine", (scene.get("mine") || 0) + 1);
    scene.tell("Золотая яхта с мигалкой прошла к окну без очереди. Ваш номер пересчитан.", "yacht");
  });
});
