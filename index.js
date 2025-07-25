export class Character {
  constructor(name, type) {
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
  }

  levelUp() {
    if (this.health == 0) {
      throw new Error("Нельзя повысить уровень умершего!");
    }
    console.log("Уровень повышен");
      this.level = this.level + 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health = this.health - points * (1 - this.defence / 100);
    }
    throw new Error("Персонаж уже умер");
  }
}

export class Bowman extends Character{
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character{
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character{
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character{
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character{
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character{
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

