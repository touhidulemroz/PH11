/**
 * function takes an array as a parameter
 * give me the average of the odd numbers in the array
 */

function oddAvg(numbers){
    let sum = 0;
    let count = 0;
    for (const number of numbers) {
        if (number % 2 !== 0){
            count++;
            sum = sum + number;
        }
    }
    let oddaverage = sum / count;
    return oddaverage;
}

const numbers = [1,2,3,4,5];
const avg = oddAvg(numbers);
console.log(avg);