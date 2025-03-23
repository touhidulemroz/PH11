/**
 * Returns the sum of two numbers.
 * @param {number} price1 - The first number to add.
 * @param {number} price2 - The second number to add.
 * @returns {number} The sum of the two input numbers.
 */
function add(price1 , price2){
    const total = price1 + price2;
    return total;
}

const bill = add(10, 20);
console.log(bill);

/**
 * Returns the sum of two numbers.
 * @param {number} price1 - The first number to add.
 * @param {number} price2 - The second number to add.
 * @returns {number} The sum of the two input numbers.
 */
function add2(price1 , price2){
    return price1 + price2;
}

const bill2 = add2(10, 20);
console.log(bill2);

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result = multiply / 2;
    return result ;

}
const result = doMath(10, 20);
console.log(result);
