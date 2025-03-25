import { sum } from "./sum.js";

describe("sum", () => {
  it("Should return the two numbers sumed up by each other", () => {
    expect(sum(5, 10)).toBe(15);
  });
});
