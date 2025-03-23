// unit conversion 
// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

// feet to inch
function inchToFeet2(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch %12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch';
    return result;
}
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);


// mile to km
function mileToKm(mile){
    const kilo = mile * 1.6;
    return kilo;
}

// km to mile
function kmToMile(km){
    const mile = km / 1.6;
    return mile;
}

