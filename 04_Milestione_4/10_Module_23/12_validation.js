function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number")
    return "Please provide a number";
  else {
    const mult = num1 * num2;
    return mult;
  }
}

const result = multiply(5 + 9, 'jim');
console.log(result);


//------------------------------------

function fullName(firstName, lastName) {
    const full = firstName + ' ' + lastName;
    return full;
}

const full = fullName('Tahsina','Mursalin');
console.log(full);

//--------------------------------------------

function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    else{
        const price = product.price;
    return price;
    }
    
}

const price = getPrice({name:'shampoo', price: 300});

console.log(price);

const price1 = getPrice(5);
console.log(price1);