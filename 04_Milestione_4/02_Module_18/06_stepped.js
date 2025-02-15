/**
 * multilevel condition
 */

const price = 800;
if(price>=500)
{
    const discount = price * 0.1;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price>=100)
{
    const discount = price * 0.05;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}