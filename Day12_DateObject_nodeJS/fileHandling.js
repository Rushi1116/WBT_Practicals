var fs = require("fs")

//read file
var data = fs.readFileSync("demo.txt") //returns buffer type data
console.log(data.toString())

//write file
var str = "This is new data"
fs.writeFileSync("demo_1.txt",str) // data string must be of string type
//If file does not exists it will create it 
//If exists it will overwrite the data

//Append file
var str = "I am appending data"
fs.appendFileSync("demo.txt",str) // data string must be of string type
//If file does not exists it will create it 