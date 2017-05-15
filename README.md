# Daylight Savings Time Transitions
A simple library to determine the daylight savings transition time correct up to a second for any year. It returns the exact transition time correct upto a second when the Fall and Spring DST occurs. 

## Installation
```shell
   npm install dst-transitions --save
```

## Usage
```js
    var dst = require('dst-transitions');
    var transitions = dst.get_transitions(2017);//Only the year has to be passed as parameter
    console.log("Fall transition from " + new Date(transitions.fall.from) + " to " + new Date(transitions.fall.to));
    console.log("Spring transition from " + new Date(transitions.spring.from) + " to " + new Date(transitions.spring.to));
```
For example, suppose you are in US Eastern Timezone, the following will be output for the above code:<br />
Fall transition from Sun Nov 05 2017 01:59:59 GMT-0400 (Eastern Daylight Time) to Sun Nov 05 2017 01:00:00 GMT-0500 (Eastern Standard Time)<br />
Spring transition from Sun Mar 12 2017 01:59:59 GMT-0500 (Eastern Standard Time) to Sun Mar 12 2017 03:00:00 GMT-0400 (Eastern Daylight Time)<br />
Notice the exact second when the timezone offset changes in each line of output, which signifies that time has either falled back or moved ahead by one hour.<br />

To run the examples provided
```shell
   node examples\example.js
```

## Tests
```shell
   npm test
```

## Contributing
In lieu of a formal style guide, plesse take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality.
If you find any issues, please add one in the issues tab.

## Release History
* 1.0.0 Initial Release
* 1.1.0 Added unit tests and examples