'use strict';

var expect = require('chai').expect;
var dstTransition = require('../index');

// These tests have been written specifically considering the system on which it is run has its timezone set as US Eastern Time else it will fail.
describe('Check DST transitions for US Eastern Timezone', function() {
    var result = dstTransition.get_transitions(2014);
    it('Year 2014 - Fall Start', function() {        
        expect(new Date(result.fall.from).getTime()).to.equal(1414907999000);
    });
    it('Year 2014 - Fall End', function() {
        expect(new Date(result.fall.to).getTime()).to.equal(1414908000000);
    });
    it('Year 2014 - Spring Start', function() {
        expect(new Date(result.spring.from).getTime()).to.equal(1394348399000);
    });
    it('Year 2014 - Spring End', function() {
        expect(new Date(result.spring.to).getTime()).to.equal(1394348400000);
    });
});