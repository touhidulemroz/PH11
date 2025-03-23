const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid black';
    section.style.borderRadius = '10px';
    section.style.margin = '10px';
    section.style.padding = '5px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'lightblue';
placesContainer.style.padding = '20px';
placesContainer.style.margin = '50px';


// const placesContainer =document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');