let size = 16;

const sketchpad = document.querySelector('.sketchpad');
const slider    = document.querySelector('.slider');
const cellSize  = document.querySelector('.cellSize');
const clearBtn  = document.querySelector('.clear-sketch');
const cellDiv   = document.querySelector('.cell');

clearBtn.addEventListener("click", clearSketchpad);

// Output for cell size
cellSize.innerHTML = slider.value;
slider.oninput = function() {
    cellSize.innerHTML = slider.value;
    size = cellSize.innerHTML;
    console.log(size);
}

// creates sketchpad to size
function setupSketchpad (size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, auto)`;


    // creates divs and changes color on hover
    for (let i = 0; i < size * size; i++) {
        const newSize = document.createElement('div');
        newSize.classList.add('cell');
        newSize.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'black';
        })
        sketchpad.appendChild(newSize);
    }
};

function clearSketchpad() {
    sketchpad.innerHTML = '';
    setupSketchpad(size);
    console.log('clicked');
}

// initialized sketchpad
setupSketchpad(16);