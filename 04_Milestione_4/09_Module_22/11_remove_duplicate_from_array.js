// remove duplicate from an array
// unique array 

const biriyaniKhor = ['abul', 'babul', 'kabul', 'dabu', 'abul','sabul','babul'];
const numbers = [12, 23, 12, 34 ,56, 13, 12];

function uniqueArray(array){
    const unique = [];
    for (const element of array) {
        if(unique.includes(element) === false){
            unique.push(element);
        }
    }
    return unique;

}

const uniqueBiriyaniKhor = uniqueArray(biriyaniKhor);
console.log(uniqueBiriyaniKhor);

const uniqueNumbers = uniqueArray(numbers);
console.log(uniqueNumbers);