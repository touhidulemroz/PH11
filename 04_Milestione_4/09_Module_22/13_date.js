const today = new Date();
const date = new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091,0,26);
console.log(specificDate);
const spacificDate = new Date(2091, 0, 26);
spacificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));

// unix epoc 

