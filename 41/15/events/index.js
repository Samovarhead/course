var Event = require('events').EventEmitter;

var emt = new Event();

emt.on('event', function () {
	console.log('Event 1');
});

emt.addEventListener('event', function () {
	console.log('Event 2');
});

emt.once('event', function () {
	console.log('Event 1');
});

emt.emit('event');
emt.emit('event');