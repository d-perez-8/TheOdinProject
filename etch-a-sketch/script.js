const btns = document.querySelectorAll('button');
const sketchpad = document.querySelector('.sketchpad');
let grid = 16;

// deafult sketch pad 
for (let i = 0; i < grid * grid; i++) {
    const newGrid = document.createElement('div');
    newGrid.classList.add('cell');
    sketchpad.appendChild(newGrid);
}

// create mouseover effect
const gridCell = document.querySelectorAll('.cell');
gridCell.forEach(square => {
    square.addEventListener('mouseover', e => {
        square.style.backgroundColor = 'black';
    })
});

// slider value
const slider = document.querySelector('#range');
const output = document.querySelector('#cellSize');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
}

// make sure buttons work
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log("Clicked!");
    })
});

