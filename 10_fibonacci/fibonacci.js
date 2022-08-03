const fibonacci = function (fibPosition) {
    if (fibPosition <= 0) return "OOPS";
    let a = 1;
    let b = 1;
    if (fibPosition == 1) return a;
    if (fibPosition == 2) return b;
    let count = 3;
    let c = 0;
    while (count <= fibPosition) {
        c = a + b;
        a = b;
        b = c;
        count++;
    }

    return c;
};

// Do not edit below this line
module.exports = fibonacci;
