// rest
function sum(...numbers) {
    /*
    return numbers.reduce(function(prev, current) {
        return prev + current;
    })
    */
    return numbers.reduce((prev,current) => prev + current);
}

console.log(sum(1, 2, 3));

// spread
function add(x, y) {
    return x + y;
}

let nums = [1, 2];
console.log(add(...nums));
