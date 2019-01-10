class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return 'Hello. My name is ' + this.name + ' and i say hello.';
    }
}

console.log(new Person('Jeffrey').greet());