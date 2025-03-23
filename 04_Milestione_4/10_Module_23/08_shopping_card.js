const products =[
    {name:'shampoo', price: 300, quantity: 2},
    {name:'chiruni', price: 100, quantity: 1},
    {name:'cream', price: 500, quantity: 3},
    {name:'oil', price: 120 , quantity: 1},
]

function cartTotal(products) {
    let total = 0;
    for(const product of products){
        total = total + product.price * product.quantity;
    }
    return total;
}
const shoppingCartTotal = cartTotal(products);
console.log(shoppingCartTotal);
