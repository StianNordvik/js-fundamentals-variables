let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable
let c = 0
c = b
b = a
a = c

console.log(a)
console.log(b)

module.exports = { a, b }
