myArray = [20, 2, 2]

const addition = function(array) {
    return array.reduce((total, current) => total + current);
};

const subtraction = function(array) {
    return array.reduce((total, current) => total - current);
};

const multiplication = function(array) {
    return array.reduce((total, current) => total * current, 1);
};

const division = function(array) {
    return array.reduce((total, current) => total / current);
};