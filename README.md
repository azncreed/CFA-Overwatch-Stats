

Synopsis: 
================

Created a program that allows Overwatch users to look at their own or their friends statistics without going into the game. This can be accessed on any types of computers from PC to Macs and Linux. 

Code Example: 
================

![Alt text](/img/OverwatchAPI.png)


Getting started:
=================

** Requirements **

Need Node.js v 6.0 +

```
npm install overwatch-js

```

Running the program:
======================

To get the overall stats (including all the achievements that user has earned)

```

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

```

In the terminal

```
npm stats or yarn starts

```








