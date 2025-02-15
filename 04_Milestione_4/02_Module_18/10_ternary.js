/**
 * ternary operator
 * 
 * condition ? true : false
 */

const age = 12;
// normal if else
// if(age >= 18){
//     console.log('You can drive');
// }
// else{
//     console.log('You can not drive');
// }


//short if else
// age>=18 ? console.log('You can drive') : console.log('You can not drive');


let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0 ;
}
else{
    price = price + 100;
}
// console.log(price);

price = isLeader === true ? 0 : price + 100;

if(isLeader === true){
    if(price > 1000){
        price = price /2 ;

    }
    else{
        price = 0 ;
    }
}
else{
    price = price + 100;
}

// feel free to ignore this part

price = isLeader === true ? 0 : price + 100;

//Optional semi advance ternary operator
if(isLeader === true){
    if(price > 1000){
        price = price /2 ;
    }
    else{
        price = 0 ;
    }
}
else{
    price = price + 1000;
}

// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ?
            price > 1000 ?
                price /2 : 0
        : price + 1000;

console.log(price);