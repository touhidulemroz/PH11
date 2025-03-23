const products =[
    {name:'shampoo', price: 300},
    {name:'chiruni', price: 100},
    {name:'cream', price: 500},
]

function getTotalPrice(products){
    let total = 0;

    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const total = getTotalPrice(products);
console.log(total);