(function () {
  window.mathlib = window.mathlib || {};
  window.mathlib.sum = sum;

  function sum(...values) {
    return values.reduce((a, b) => a + b, 0)
  }
})()

console.log(window.mathlib.sum(1,2,3))
// require.js
define(function() {
  return sum

  function sum(...values) {
    return values.reduce((a,b) => a+b,0)
  }
})

define(['mathlib/sum'], function(sum) {
  return {sum}
})

define(['mathlib'], function(mathlib){
  mathlib.sum(1,2,3)
})

// node.js and commonjs

const mathlib = require('./mathlab')

// es6,import babel webpack
import mathlib from './mathlib'


