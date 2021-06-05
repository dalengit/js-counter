// Create variable targeting counter div 
let mainNumber = document.querySelector('.counter').textContent;

// Event listener into add function 
document.querySelector('.more').addEventListener('click', (event) => {
    // Prevent refresh 
    event.preventDefault();
    // Increment variable
    mainNumber++
    // Class 'current-number' = var mainNumber 
    document.querySelector('.current-number').textContent = mainNumber;
});

// Event listener into less function 
document.querySelector('.less').addEventListener('click', (event) => {
    event.preventDefault();
    mainNumber--
    document.querySelector('.current-number').textContent = mainNumber;
})