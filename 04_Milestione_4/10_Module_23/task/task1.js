// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

heights2 = [167, 190, 120, 165, 137];
let min = heights2[0];
for (let i = 0; i < heights2.length; i++) {
    if (heights2[i] < min) {
        min = heights2[i];
    }
}
console.log(min);