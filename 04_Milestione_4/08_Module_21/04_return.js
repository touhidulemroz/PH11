/**
 * Multiplies a given number by ten and returns the result.
 * @param {number} number - The number to be multiplied.
 * @returns {number} The result of multiplying the input number by ten.
 */

function tenTimes (number){
    const result = number * 10;
    return result;
    // console.log(result);
}

/**
 * Divides a given number by two and returns the result.
 * @param {number} number - The number to be divided.
 * @returns {number} The result of dividing the input number by two.
 */

function cutHalf (number){
    const half = number / 2;
    return half;
}
const result1 = tenTimes(5);
console.log(result1);
