const btns = document.querySelectorAll('button');
const sketchpad = document.querySelector('.sketchpad');
let grid = 4;
// create sketchpad
// function makeSketchpad (grid) {
    for (let i = 0; i < grid * grid; i++) {
        const newGrid = document.createElement('div');
        newGrid.classList.add('cell')
        sketchpad.appendChild(newGrid);
    }
//}

// make sure buttons work
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log("Clicked!");
    })
})