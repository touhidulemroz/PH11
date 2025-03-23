function add(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2; 
}

function calculator(num1, num2, operator){
    if(operator === 'add')
    {
        const result = add(num1, num2);
        return result;
    }
    else if(operator === 'sub')
    {
        const result = sub(num1, num2);
        return result;
    }
    else if(operator === 'mul')
    {
        const result = mul(num1, num2);
        return result;
    }
    else if(operator === 'div')
    {
        const result = div(num1, num2);
        return result;
    }
    else{
        return "Only 'add', 'sub', 'mul' and 'div' are allowed";
    }
}

const result= calculator(10, 5, 'add');
console.log(result);