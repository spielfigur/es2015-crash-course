// in es5
function UserEs5(username, email) {
    this.username = username;
    this.email = email;
}

UserEs5.prototype.changeEmail = function(newEmail) {
    this.email = newEmail;
};

var user = new UserEs5('JeffreyWay', 'support@laracasts.com');
user.changeEmail('foo@example.local');
console.dir(user);

// in es6
class UserEs6 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(...args) {
        console.log(...args);
        return new UserEs6(...args);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    get foo() {
        return 'foo';
    }
}

let user2 = new UserEs6('JeffreyWay', 'support@laracasts.com');
user2.changeEmail('foo@example.local');
console.dir(user2);

let user3 = UserEs6.register('JeffreyWay', 'support@laracasts.com');
console.dir(user3);
console.log(user3.foo);

//
function log(strategy) {
    strategy.handle();
}

class ConsoleLogger {
    handle() {
        console.log('using the console strategy to log');
    }
}

log(new ConsoleLogger());