//break

for(let i =  1; i<15; i++){
    console.log(i);
    if(i>10){
        break;
    }
}

let num = 54;
while (num > 25){
    console.log(num);
    if(num < 50){
        break;
    }
    num--;
}

//continue

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

let n = 0;
while (n<50){
    n++;
    if(n%5 !==0){
        continue;
    }
    console.log(n);
    
}