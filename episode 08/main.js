//
function getPerson() {
    let name = 'John';
    let age = '25';

    return {
        name,
        age,
        greet: () => `Hello ${name}`
    };
}
console.log(getPerson().greet());

//
let person = {
    name: 'Karen',
    age: 32
};
let { name, age } = person;
console.log(name);

//
let data = {
    results: ['foo', 'bar'],
    count: 30
};
let { results, count } = data;
console.log(results, count);
function getData({ results, count }) {
    console.log(results, count);
}
getData({
    name: 'John',
    age: 48,
    results: ['foo', 'bar', 'baz'],
    count: 96
});

//
function greet({ name, age}) {
    console.log(`Hello ${name}. You are ${age}`);
}
greet({
    name: 'Harry',
    age: 26
});