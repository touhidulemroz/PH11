
function isEven(num){
    if(num%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const even = isEven(10);
console.log(even);

function isOdd(num){
    if(num%2 !== 0){
        return true;
    }
    else{
        return false;
    }
}
const odd = isOdd(11);
console.log(odd);