# Daylight Savings Time Transitions
A simple library to determine the daylight savings transition time correct up to a millisecond for any year

## Installation
```shell
  npm install dst-transitions --save
```

## Usage
```js
    var dst = require('dst-transitions');
    var transitions = dst.get_transitions(2014);
    console.log("Fall transition from " + transitions.fall.from + " to " + transitions.fall.to);
    console.log("Spring transition from " + transitions.spring.from + " to " + transitions.spring.to);
```

## Tests
To be added

## Contributing
To be added


## Release History
* 1.0.0 Initial Release