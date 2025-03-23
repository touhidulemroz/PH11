const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min < num){
            min = num;
        }
    }
    return min;
}
const cheapest = getMin(prices);
console.log('cheapest: ', cheapest);