// create random number function
function getRandomInt(max = 3) {
    return Math.floor(Math.random() * max)
}

// check
console.log(getRandomInt());

// create output function
function getComputerChoice() {
    // assign numbers to output
    if (getRandomInt() == 0) {
        return "rock";
    } if (getRandomInt() == 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

console.log(getComputerChoice());