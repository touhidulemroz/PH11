//odd

for(let i = 1; i <= 100; i++){
    if(i % 2 === 1){
        console.log('Odd');
    }
    else{
        console.log('Even');
    }
}

for(let i = 1; i <= 100; i+=2){
    console.log(i);
}

//multipliers of 3

for (let i = 1; i <= 100; i++){
    if((i%3 === 0) || ( i%5 === 0)){
        console.log(i);
    }
}


for (let i = 1; i <= 100; i++){
    if((i%3 === 0) && ( i%5 === 0)){
        console.log(i);
    }
}

// sum of numbers divisible by 3 and 5 in range 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++){
    if((i%3 === 0) && ( i%5 === 0)){
        sum = sum + i;
    }
}
console.log(sum);