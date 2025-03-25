import { passed } from "./passed.js";

describe("passed", () => {
  it("Should show a passing grade", () => {
    expect(passed(12)).toBe("You've passed the test");
  });
  it("Should show a failing grade", () => {
    expect(passed(8)).toBe("You've failed this test");
  });
  it("Should show an invalid grade", () => {
    expect(passed(-1)).toBe("Invalid score");
  });
  it("Should show a passing grade", () => {
    expect(passed(20)).toBe("You've passed the test");
  });
  it("Should show an invalid grade", () => {
    expect(passed(32)).toBe("Invalid score");
  });
  it("Should show an invalid grade", () => {
    expect(passed(-4)).toBe("Invalid score");
  });
});
