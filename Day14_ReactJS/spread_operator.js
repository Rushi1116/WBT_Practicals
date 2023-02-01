


var arr = ["Siddhant", "Rajat", "Anubhav"]
var x = [...arr]
x.push("Neha")
console.log(arr)
console.log(x)

var arr = ["Siddhant", "Rajat", "Anubhav"]
arr = [...arr, "Neha"]
console.log(arr)

var arr = [
	{name : "Siddhant", age: 23, salary : 3000},
	{name : "Sid", age: 24, salary : 4000},
	{name : "Anubhav", age: 25, salary : 5000},
	{name : "Rajat", age: 26, salary : 6000},
]

arr = [...arr, {name :"Neha", age: 43}]
console.log(arr)
//x  = [...arr, "Apporv"]


var obj = {
	name : "Siddhant",
	age : 32,
	address : "Pune"
}

//obj.email = "sid@gmail.com"
obj = {
	...obj,
	email : "sid@gmail.com"
}
console.log(obj)
x = {
	...obj,
	email : "sid@gmail.com"
}











