'use strict';

var TaskCollection = function TaskCollection(tasks) {
    if ( tasks === void 0 ) tasks = [];

    this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
    console.log(this.tasks);
};

var foo = 'bar';

console.log(foo);

new TaskCollection([
    'Go to the Store',
    'Finish screencast',
    'Eat cake'
]).dump();
