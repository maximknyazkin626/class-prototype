import { Player1 } from "../index.js";

test("Player1 Health Check", () => {
  let result = Player1.health;
  expect(result).toBe(100);
});

test("Player1 Level Check", () => {
  let result = Player1.level;
  expect(result).toBe(1);
});
