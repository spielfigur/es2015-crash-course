//
let items = new Set(
    ['one', 'two', 'three']
);

console.log(items);
console.log(items.size);
console.log(items.add('four'));
console.log(items.delete('two'));
console.log(items.has('four'));
items.forEach(item => console.log(item));
console.log(items.values());
for (let item of items) console.log(item);
items.clear();
console.log(items);

//
let tags = [
    'php', 'javascript', 'vue', 'php'
];
let set = new Set(tags);
console.log(set);
console.log([...set]);
console.log([...set].filter(tag => tag.length === 3));

//
var mentionedUsers = [
    'johndoe', 'janedoe', 'janedoe'
];
var uniqueMentionedUsers = new Set(mentionedUsers);
console.log(uniqueMentionedUsers);