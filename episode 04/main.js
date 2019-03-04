class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => console.log(task));
    }
}

class Task {}

new TaskCollection([
    new Task, new Task, new Task
]).log();


let names = ['Taylor', 'Jeffrey', 'Adam', 'Matt'];
names = names.map(name => `${name} is cool.`);
console.log(names);