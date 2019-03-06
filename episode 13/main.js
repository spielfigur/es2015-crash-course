var timer = function(length) {
    return new Promise(function (resolve, reject) {
        console.log('Init Promise');

        setTimeout(function () {
            console.log('Timeout done.');
            resolve(); // then
            //reject(); // catch
        }, length);
    });
}

timer(4000).then(function() {
    console.log('Proceed now that timer has concluded.');
}).catch(function() {
    console.log('There was an error with the timer...');
});