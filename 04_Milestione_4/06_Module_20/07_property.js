const person = {
    name : 'Rahim',
    age : 21,
    profession : 'developer',
    salary : 50000,
    married : false,
    'favPlace' : ['barishal', 'dhaka', 'chittagong']
}

console.log(person);
console.log(person.profession);
console.log(person.salary);
console.log(person.married);

// dot notation 
const income = person.salary;
console.log(income);

// bracket notation
const married = person['married'];
console.log(married);

console.log(person['favPlace']);