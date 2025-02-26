/**
 * looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while loop --> ignore
 * 4. for of loop --> array loop --> string loop
 * 5. for in loop --> object loop
 */


// loop
const friends = ['elon', 'mark', 'jack', 'jane'];
// for (const friend of friends){
//     console.log(friend);
// }

// for (let i=0; i < 10; i++){
//     console.log(i);
//     console.log(friends[i]);
// }

// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers){
//     console.log(number);
// }

// while
let i = 0;
while (i < 10){
    console.log(i);
    console.log(friends[i]);
    i++;
}
