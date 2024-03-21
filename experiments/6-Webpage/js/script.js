let mainHeading = document.getElementById('main-heading');

//.style accesses css properties, change css properties in js
mainHeading.style['color'] = '#339966'; //can be written either like this or like v
mainHeading.style.fontSize = '4rem';
mainHeading.style.fontFamily = 'Courier, monospace';
mainHeading.style.backgroundColor = 'red';

let wellSection = document.getElementById('well-section');
wellSection.style['color'] = '#445566';

let pronoun = document.getElementById('pronoun');

//access html properties
pronoun.innerHTML = '<strong>you</strong>';

if (pronoun.innerText === 'we') {
    pronoun.innerText = 'you';
}

let img = document.getElementById('clown-image');

img.setAttribute('src', 'http://loremflickr.com/320/240/clown');

// let headers = document.getElementsByClassName('header');

// for (let i = 0; i < headers.length; i++) {
//     headers[i].style['color'] = '#ff0000';
// }

let headers = document.querySelectorAll('.header');

for (let i = 0; i < headers.length; i++) {
    headers[i].style['color'] = '#ff0000';
}

// let h2s = document.getElementsByTagName('h2');

// for (let i = 0; i < h2s.length; i++) {
//     h2s[i].style['color'] = '#ff0000';
// }


//add elements to a page
let newP = document.createElement('p');

newP.innerText = "Gosh, I sure do like clowns."; //to make this show up on page, add it to clown-section

let clownSection = document.getElementById('clown-section');

clownSection.appendChild(newP);

//remove elements of a page

// let mainHeading = document.getElementById('main-heading');

// //parent element = html body
// mainHeading.parentElement.removeChild(mainHeading);