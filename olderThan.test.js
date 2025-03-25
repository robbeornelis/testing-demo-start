import { olderThan } from "./olderThan.js";

describe("olderThan", () => {
  it("Should return names of people older than 30", () => {
    const persons = [
      { name: "John", age: 27 },
      { name: "Jane", age: 31 },
      { name: "Joe", age: 41 },
      { name: "Janet", age: 19 },
    ];
    expect(olderThan(persons, 30)).toEqual(["Jane", "Joe"]);
  });
});
