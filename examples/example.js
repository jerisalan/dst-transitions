var dst = require('../../dst-transitions');
var transitions = dst.get_transitions(2017);
console.log("Fall transition from " + new Date(transitions.fall.from) + " to " + new Date(transitions.fall.to));
console.log("Spring transition from " + new Date(transitions.spring.from) + " to " + new Date(transitions.spring.to));