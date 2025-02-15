// normal if else
// let age = 18;
// if(age >= 18){
//     console.log('adult');
// }
// else{
//     console.log('child');
// }

// age >= 18 ? console.log('adult') : console.log('child');

// using ternary operator  

// let result = age >= 18 ? 'adult' : 'child';
// console.log(result);

// let score = 80;

// let result = score >= 50 ? score >= 80 ? 'passed with reasonable number'
//     : 'passed'
//     : 'failed';
// console.log(result);

// 0, '', null, undefined, NaN

// let email = 'touhidul.ermoz@gmail.com';
// if(email){
//     console.log('email sent');
// }
// else{
//     console.log('enter a number');
// }

// let email = 'ewhanna01@gmail.com';
// let password = '123456';
// if(email && password){
//     console.log('Login Success');
// }
// else{
//     console.log('Login Failed');
// }

let isUserLoggedIn = false;
if(!isUserLoggedIn){
    console.log('Show sign up button');
}
else{
    console.log('Show sign out button');
}