/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 * sofa --> 30 cft
 * cabinet --> 5 cft
 * cupboard --> 15 cft
 * wardrobe --> 20 cft
 */


function woodQuantity(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalWood = chair * perChairWood + table * perTableWood + bed * perBedWood;

    return totalWood;
}

const totalWood = woodQuantity(4, 6, 7);
console.log('wood`s quantity: ', totalWood, 'cft');

// task 
/**
 * shirt --> 15 cft
 * pants --> 20 cft
 * shoes --> 50 cft
 */