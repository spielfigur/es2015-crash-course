function *numbers() {
    console.log('Begin');
    yield 1;
    yield 2;
    yield 3;
    console.log('End');
}

let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//
function *range(start, end) {
    console.log('Begin2');
    while (start <= end) {
        yield start;
        start++;
    }
}

let iterator2 = range(1, 5);
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
for (let i of iterator2) console.log(i);
console.log(
    [...range(1,5 )]
);