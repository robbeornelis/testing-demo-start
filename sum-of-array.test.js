import { sumOfArray } from "./sum-of-array";

describe("sumOfArray", () => {
  it(
    ("Should return the array of numbers summed up",
    () => {
      const testArray = [1, 2, 3, 4];

      const arraySum = sumOfArray(testArray);

      expect(arraySum).toBe(10);
    })
  );
});
