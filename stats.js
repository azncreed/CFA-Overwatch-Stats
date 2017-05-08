var owjs = require('overwatch-js');
var prompt = require ('prompt');

function getUser(username) {

owjs.getOverall('pc', 'us', `${username}`)
    .then((data) => console.dir(data, {depth : 2, colors : true}) );

}

console.log('Overwatch Stats Checker\n');
console.log('Please enter a username to check:\n');

  prompt.start();

  prompt.get(['username'], function (err, result) {
  	console.log('You entered: ' + result.username);
  	getUser(result.username);

});

