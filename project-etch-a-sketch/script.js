let size = 16;
let color = 'black';

const sketchpad = document.querySelector('.sketchpad');
const slider    = document.querySelector('.slider');
const cellSize  = document.querySelector('.cellSize');
const clearBtn  = document.querySelector('.clear-sketch');
const colorBtn  = document.querySelector('.pick-color');

clearBtn.addEventListener("click", clearSketchpad);
colorBtn.addEventListener("click", pickColor);

// Output for cell size
cellSize.innerHTML = size;

// Resizes sketchpad to slider value
slider.oninput = function() {
    cellSize.innerHTML = slider.value;
    size = cellSize.innerHTML;
    cellSize.textContent = size;
    setupSketchpad(size);
    clearSketchpad();
}

// creates sketchpad to size
function setupSketchpad (size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, auto)`;


    // creates divs and changes color on hover
    for (let i = 0; i < size * size; i++) {
        const newSize = document.createElement('div');
        newSize.classList.add('cell');
        newSize.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = color;
        })
        sketchpad.appendChild(newSize);
    }
}

function clearSketchpad() {
    sketchpad.innerHTML = '';
    setupSketchpad(size);
}

// need to include a UI color picker
function pickColor () {
    colorBtn.addEventListener('oninput', e => {
        e.target.value = color;
    })
}

// initialized sketchpad
setupSketchpad(size);