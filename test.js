import { Character, Bowman} from "./index.js";

// Для примера экспортировал основной класс Character и дочерний Bowman.
// Остальные дочерние не стал экспортировать

let Player = new Character('Rikky', 'Daemon');

test("Player Health Check = 100", () => {
  let result = Player.health;
  expect(result).toBe(100);
});

test("Player Level Check = 1", () => {
  let result = Player.level;
  expect(result).toBe(1);
});

test("Player Name Check = Rikky", () => {
  let result = Player.name;
  expect(result).toBe('Rikky');
});

test("Player type Check = Daemon", () => {
  let result = Player.type;
  expect(result).toBe('Daemon');
});

let bowman1 = new Bowman('Vasilisk');

test("bowman1 Health Check = 100", () => {
  let result = bowman1.health;
  expect(result).toBe(100);
});

test("bowman1 Level Check = 1", () => {
  let result = bowman1.level;
  expect(result).toBe(1);
});

test("bowman1 Name Check = Vasilisk", () => {
  let result = bowman1.name;
  expect(result).toBe('Vasilisk');
});

test("bowman1 type Check = Bowman", () => {
  let result = bowman1.type;
  expect(result).toBe('Bowman');
});

test("bowman1 attack Check = 25", () => {
  let result = bowman1.attack;
  expect(result).toBe(25);
});

test("bowman1 defence Check = 25", () => {
  let result = bowman1.defence;
  expect(result).toBe(25);
});

