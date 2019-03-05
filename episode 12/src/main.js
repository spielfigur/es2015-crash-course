import TaskCollection, { foo, myfunc } from './TaskCollection';

console.log(foo);

new TaskCollection([
    'Go to the Store',
    'Finish screencast',
    'Eat cake'
]).dump();
