// Selectors
let mainNumber = document.querySelector('.counter').textContent;
let currentNumber = document.querySelector('.current-number');

const add = document.querySelector('.more');
const less = document.querySelector('.less');

// Event listeners 
add.addEventListener('click', increase);
less.addEventListener('click', decrease);


function increase(e) {
    e.preventDefault();
    mainNumber++;
    currentNumber.textContent = mainNumber;

    if (mainNumber === '50') {
        alert('You made it!');
    }
}

function decrease(e) {
    e.preventDefault();
    mainNumber--;
    currentNumber.textContent = mainNumber;
}