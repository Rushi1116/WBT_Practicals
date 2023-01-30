var calc = require("./calculator") //Import statement
var greetings = require("./greetings")

var result = calc.sum(10,20)
console.log(result)

var result = calc.sub(10,20)
console.log(result)

console.log(calc.name)
console.log(calc.obj)

greetings.xyz()