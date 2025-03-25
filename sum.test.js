import { sum } from "./sum.js";

describe("sum", () => {
  it("should return the two numbers sumed up by each other", () => {
    // Arrange
    expect(sum(5, 10)).toBe(15);
  });
});
