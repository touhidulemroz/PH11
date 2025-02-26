const person = {
    name : 'Rahim',
    age : 21,
    profession : 'developer',
    salary : 50000,
    married : false,
    'favPlace' : ['barishal', 'dhaka', 'chittagong']
}

person.salary= 30000;
person.age = 29;
person['age']=90;

console.log(person);

const keyName = 'profession';

console.log(person[keyName]);


