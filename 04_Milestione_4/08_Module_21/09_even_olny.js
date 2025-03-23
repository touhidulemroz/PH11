function evenSumOnly (numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}

const num = [2, 3,4, 5, 6];
const result = evenSumOnly(num);
console.log(result);