let title = 'Red Rising';

if (title.indexOf('R') == 0) {
    console.log('R is the first character');
}

if (title.indexOf('Blue') == -1) {
    console.log('This book does not begin with Blue');
}

if (! title.includes('Blue')) {
    console.log('This book does not begin with Blue');
}

if (title.includes('Red')) {
    console.log('This book begins with Red');
}

if (title.startsWith('Red')) {
    console.log('This book starts with Red');
}

if (title.endsWith('ing')) {
    console.log('This book ends with ...ing');
}

if (title.startsWith('i', 5)) {
    console.log('It does');
}

if (title.endsWith('i', 5)) {
    console.log('It does');
}

let str = 'tro';
console.log(
    str + 'lol'.repeat(100)
);

let heading = 'The Heading is here';
console.log(
    '>='.repeat(5) + ' ' + heading + ' ' + '=<'.repeat(5)
)
console.log(
    `${'>='.repeat(10)} ${heading} ${'=<'.repeat(10)}`
)

let padder = '='.repeat(10);
console.log(
    `${padder} ${heading} ${padder}`
)