const numbers = [45, 65, 23, 98, 19];

// for(let i=0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for of loop

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name:'xiaomi phone one night', price: 40000},
    {id: 2, name:'iphone', price: 70000},
    {id: 3, name:'mack book air', price: 30000},
    {id: 4, name:'dell inspiron laptop', price: 5000},
    {id: 5, name:'samsung phone ultra 7', price: 9000},
    {id: 5, name:'macbook laptop', price: 9000},
    {id: 5, name:'lenovo laptop', price: 9000},
    {id: 5, name:'lenovo PHone', price: 9000},
    {id: 5, name:'lenovo m1 chip LAptop', price: 9000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchedProducts(products, 'laptop'));