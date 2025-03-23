// finding leap year 

function isLeapYear(year) {
    if(year % 4 === 0)
    {
        console.log('leap year');
    }
    else
    {
        console.log('not leap year');
    }
}

isLeapYear(2000);


// logic of leap year

function isLeapYear2(year){
    if(year%100 !== 0 && year %4 ===0)
    {
        return true;
    }
    if (year % 100 === 0 && year % 400 === 0)  {
        return true;
    }
    return false;
}
console.log(isLeapYear2(2100));