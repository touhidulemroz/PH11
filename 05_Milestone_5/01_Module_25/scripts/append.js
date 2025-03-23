// where to add ?
const placesList = document.getElementById('places-list');

// what to be added ?
const li = document.createElement('li');
li.innerText = 'Dhaka';

// append
placesList.appendChild(li);


// where to add 

const mainContainer = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Fruits i like';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Mango';
const li2 = document.createElement('li');
li2.innerText = 'Apple';
const li3 = document.createElement('li');
li3.innerText = 'Orange';
const li4 = document.createElement('li');
li4.innerText = 'Watermelon';
const li5 = document.createElement('li');
li5.innerText = 'Guava';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

section.appendChild(ul);

mainContainer.appendChild(section);


// set inner html directly

const sectionDress =  document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress</h1>
<ul></ul>
    <li>Shirt</li>
    <li>Shirt</li>
    <li>Shirt</li>
    <li>Shirt</li>
    <li>Shirt</li>
</ul>
`

mainContainer.appendChild(sectionDress);
