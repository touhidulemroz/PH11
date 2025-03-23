const student = {
    name: "sakib khan",
    id: 121,
    address: "movie cinema",
    isSingle: true,
    friends:['aup', 'raz', 'salman', 'sakib'],
    movies:[{
        name: 'no-1',
        year: 2015,
    },
    {
        name: 'no-2',
        year: 2016,
    },
    {
        name: 'no-3',
        year: 2017,
    },
    {
        name: 'no-4',
        year: 2018,
    }],
    act: function(){
        console.log('acting');
    },
    car: {
        brand: 'bmw',
        price: 100000,
        made: 2025,
        manufacturer:{
            name: 'tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}
console.log(student);
