var fs = require("fs")

//read file
var data = fs.readFileSync("demo.txt") //returns buffer type data
console.log(data.toString())

//write file
var str = "NodeJS practicals"
fs.writeFileSync("demo_2.txt",str) // data string must be of string type
//If file does not exists it will create it 
//If exists it will overwrite the data

//Append file
var str = "hey man its working good"
fs.appendFileSync("demo.txt",str) // data string must be of string type
//If file does not exists it will create it 