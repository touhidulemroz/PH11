/**
 * first 100: 100 taka
 * 101-200: 90 taka
 * more than 200: 70 taka
 */

function layerdDiscountedTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <=100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const reminingQuantity = quantity - 100;
        const second100Total = reminingQuantity * second100Price;
        const total = first100Total + second100Total;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const reminingQuantity = quantity - 200;
        const above200Total = reminingQuantity * above200Price;
        const total = first100Total + second100Total + above200Total;
        return total;
    }
}
const total = layerdDiscountedTotal(300);
console.log(total);