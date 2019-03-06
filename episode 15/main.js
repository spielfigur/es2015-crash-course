console.log(
    [2, 4, 6, 8, 10].indexOf(8) > -1
);

console.log(
    [2, 4, 6, 8, 10].includes(25)
);

console.log(
    [2, 4, 6, 8, 10, 11].find(item => item % 2)
);

console.log(
    [2, 4, 6, 8, 10, 11].find(item => item > 8)
);

class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('Jeffrey', false),
    new User('Jane', true),
    new User('Jack', false)
];

console.log(
    users.find(user => user.isAdmin).name
);

let items = ['jeff', 'jordan', 'way'].entries();
for (let name of items) console.log(name);