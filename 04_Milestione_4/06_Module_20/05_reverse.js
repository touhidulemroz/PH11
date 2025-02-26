const sentence = 'i love you jim';
// reverse mij uoy evol i



let reverse = '';

for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// ignore this solution 
let rev = '';
for (let i =0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// shortcut
const reverse1 = sentence.split('').reverse().join('');
console.log(reverse1);
