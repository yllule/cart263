let paragraph = document.getElementById('paragraph');

// //3 different ways to set interval for event
// setTimeout(function() {
//     paragraph.style['color'] = '#ff0000';
// }, 3000);

// // setInterval(blink, 500);

// // function blink() {
// //     let opacity = paragraph.style['opacity'];
// //     if (opacity === '1') {
// //         paragraph.style['opacity'] = '0';
// //     }
// //     else {
// //         paragraph.style['opacity'] = '1';
// //     }
// // }

// let opacity = 1;

// fadeOut();

// function fadeOut() {
//     opacity -= 0.01;
//     paragraph.style['opacity'] = opacity;
//     if (opacity > 0) {
//         requestAnimationFrame(fadeOut);
//     }
// }


//set bg to red only if u click on paragraph
// paragraph.addEventListener('click', function(event) {
//     document.body.style['background-color'] = '#ff0000';
// });


// paragraph.addEventListener('click', function(event) {
//     console.log(event);
// });


//lets u know what element got clicked that triggered red text
// let mainHeading = document.getElementById('main-heading');
// let subHeading = document.getElementById('sub-heading');
// let paragraph = document.getElementById('paragraph');

// mainHeading.addEventListener('click', setRedTextColor);
// subHeading.addEventListener('click', setRedTextColor);
// paragraph.addEventListener('click', setRedTextColor);

// function setRedTextColor(event) {
//     event.target.style['color'] = 'ff0000';
// }

let originalText = paragraph.innerText;

// paragraph.addEventListener('mouseenter', function(event) {
//     paragraph.innerText = 'secret message';
// })

// paragraph.addEventListener('mouseleave', function(event) {
//     paragraph.innerText = originalText;
// })


// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         paragraph.style['color'] = '#ff0000';
//     }
// })


window.addEventListener('offline', function(event) {
    mainHeading.innerText = ':(';
})