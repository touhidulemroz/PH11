const age = 62;
const price = 600;
if ( age <= 12)
{
    console.log('U can eat free');
}
else if (age >=60){
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}