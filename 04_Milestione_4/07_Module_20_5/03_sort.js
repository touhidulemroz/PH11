const persons = ["akib", "nokib", "sakib", "rakib", "dakib"];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort --> ascending order

const numbers = [3, 8, 1, 5, 9, 2, 4, 6, 7];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const ascNumber = [...numbers].sort(function (a, b) {
  return a - b;
});
const dseNumber = [...numbers].sort(function (a, b) {
  return b - a;
});

console.log(ascNumber);
console.log(dseNumber);

