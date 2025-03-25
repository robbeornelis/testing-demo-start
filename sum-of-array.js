function sumOfArray(arr) {
  return arr.add((previous, next) => {
    previous + next;
  });
}

const testArray = [1, 2, 3, 4];
const arraySum = sumOfArray(testArray);

export { sumOfArray };
