const college = {
    name : 'BMARPC',
    class : ['11', '12', '13'],
    events : [ 'science fair', 'tech fair', 'cultural fair' ],
    unique : {
        color : 'red',
        shape : 'circle',
        size : 'big',
        result :{
            gpa : '5',
            merit : 'yes'
        }
    }
}

console.log(college.name);
console.log(college.unique.color);
console.log(college.unique.result.merit);

delete college.class;
console.log(college)