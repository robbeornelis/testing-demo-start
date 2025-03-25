// Given following input
const persons = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Joe", age: 41 },
  { name: "Janet", age: 19 },
];

const result = olderThan(persons, 30);

function olderThan(name, age) {
  return persons
    .filter((person) => person.age > 30)
    .map((person) => person.name);
}

console.log(result);

export { olderThan };
