// var or let
function fire(bool) {
    if (bool) {
        //let foo = 'bar'; // only in this block, no hoisting
        var foo = 'bar'; // hoisting, push var to the top
        console.log(foo); // bar
    } else {
        console.log(foo); // undefined @ var, reference error @ let
    }
}
fire(true);

// const
const names = ['John', 'Sandy'];
names.push('Susan');

console.log(names);
