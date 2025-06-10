class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error(
        "Имя должно быть строкой не менее 2-х символов и не более 10 символов"
      );
    }
    this.name = name;

    const validTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!validTypes.includes(type)) {
      throw new Error("Тип должен соответствовать одному из указанных");
    }
    this.type = type;

    this.health = 100;
    this.level = 1;

    if (type === "Bowman") {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === "Swordsman") {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === "Magician") {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === "Undead") {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === "Zombie") {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === "Daemon") {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health !== 0) {
      console.log("Уровень повышен");
      this.level = this.level + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить уровень умершего!");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health = this.health - points * (1 - this.defence / 100);
    } else {
      throw new Error("Персонаж уже умер");
    }
  }
}

export let Player1 = new Character("Bloody", "Undead");
console.log(Player1);
