// <p> with red text that says “Hey I’m red!”
let container = document.querySelector('#container');
const p = document.createElement('p');
p.style.color = 'red';
p.classList.add('p');
p.textContent = "Hey I'm red!";
container.appendChild(p);

// <h3> with blue text that says “I’m a blue h3!”
container = document.querySelector('#container');
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

// <div> with a black border and pink background color
const newDiv = document.createElement('div');
newDiv.style.border = "solid black";
newDiv.style.backgroundColor = 'pink';

// <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

// <p> that says “ME TOO!”
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
newDiv.appendChild(p2);


document.body.insertBefore(newDiv, null);