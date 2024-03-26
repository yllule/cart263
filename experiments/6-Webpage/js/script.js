// let button = document.getElementById('example-button');

// button.addEventListener('click', function(event) {
//     // alert('Nice clicking!');
//     event.target.style['display'] = 'none';
// });

let textInput = document.getElementById('text-input');
let button = document.getElementById('example-button');

button.addEventListener('click', function(event) {
    let input = textInput.value;
    alert(input);
});

textInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        let input = textInput.value;
        alert(input);
    }
});