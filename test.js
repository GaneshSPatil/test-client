var test = {};
var assert = require('assert');

test["isEven should return true if the number is even"] = function (lib){
  assert.equal(lib.isEven(2), true);
}

exports.test = test;
