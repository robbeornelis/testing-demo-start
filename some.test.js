describe("some", () => {
  test("reference/value copying", () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];

    expect(array1).toEqual(array2);
  });
});

describe("some", () => {
  test("reference/value copying", () => {
    const array1 = [1, 2, 3];
    const array2 = array1;

    expect(array1).toBe(array2);
  });
});

describe("some", () => {
  test("reference/value copying", () => {
    const obj1 = {
      a: "b",
      c: "d",
    };
    const obj2 = {
      c: "d",
      a: "b",
    };

    expect(obj1).toEqual(obj2);
  });
});
