/**
 * for a given string tell me whether it has even number of charecteers or not
 * 
 */
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size%2 === 0){
        console.log('has even number of characters');
        return true;
    }
    else{
        console.log('has odd number of characters');
        return false;
    }
}

evenSizeString('Dhaka');
evenSizeString('Dhakaaaaa');

function doubleOrTripple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTripple(10, true));
console.log(doubleOrTripple(10, false));

function  numbersOfElement  (numbers){
    const len = numbers.length;
    return len;
}
numbersOfElement([1,2,3,4,5]);

function getAge(person){
    const age = person.age;
    return age; 
}