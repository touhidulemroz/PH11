const mobiles = [
    {name:'sumsung', price: 20000, camera:'12mp', color:'black'},
    {name:'vivo', price: 15000, camera:'8mp', color:'white'},
    {name:'sumsung', price: 20000, camera:'12mp', color:'black'},
    {name:'sumsung', price: 20000, camera:'12mp', color:'black'},
    {name:'sumsung', price: 20000, camera:'12mp', color:'black'},

]

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log(cheap);


// find max price phone as a task
