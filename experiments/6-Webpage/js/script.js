let paragraph = document.getElementById('paragraph');

//3 different ways to set interval for event
setTimeout(function() {
    paragraph.style['color'] = '#ff0000';
}, 3000);

// setInterval(blink, 500);

// function blink() {
//     let opacity = paragraph.style['opacity'];
//     if (opacity === '1') {
//         paragraph.style['opacity'] = '0';
//     }
//     else {
//         paragraph.style['opacity'] = '1';
//     }
// }

let opacity = 1;

fadeOut();

function fadeOut() {
    opacity -= 0.01;
    paragraph.style['opacity'] = opacity;
    if (opacity > 0) {
        requestAnimationFrame(fadeOut);
    }
}

