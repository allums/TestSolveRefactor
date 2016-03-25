var squareRootNum = require('../squareRootNum.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();



describe('squareRootNum', function(){

	it('should be a function', function(){
		expect(squareRootNum).to.be.a('function');
	});

	it('should return a collection of square root numbers', function(){
		expect(squareRootNum(1)).to.equal(1);
		expect(squareRootNum(2)).to.equal(2);
		expect(squareRootNum(3)).to.equal(4);
		expect(squareRootNum(4)).to.equal(6);
	});

});
