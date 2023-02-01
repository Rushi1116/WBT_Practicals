var arr = [2,3,4,5,2,1,4]

var new_arr = arr.map(function(item){ return item * item})
// 2 -> 4
// 3 -> 9
// 4 -> 16
// 5 -> 25
// 1 -> 1
// 4 -> 16
//[4,9,16,25,1,16]
console.log(new_arr)

var arr = ["Siddhant", "Rajat", "Anubhav"]
var new_arr = arr.map(function(item){return item[1]})
//Siddhant -> i
//Rajat -> a
//Anubhav -> n
//[i,a,n]
console.log(new_arr)

var arr = ["Siddhant", "Rajat", "Anubhav"]
var new_arr = arr.map((item) => item[1] == "i")
// [true, false, false]

var arr = [
	{name : "Siddhant", age: 23, salary : 3000},
	{name : "Sid", age: 24, salary : 4000},
	{name : "Anubhav", age: 25, salary : 5000},
	{name : "Rajat", age: 26, salary : 6000},
]

var new_arr = arr.map(item => item.salary)
//{name : "Siddhant", age: 23, salary : 3000} -> 3000
//{name : "Sid", age: 24, salary : 4000} -> 4000
//[3000,4000,.....]
var new_arr = arr.map(item => item.salary.toString()[1] + "xyz")
//["0xyz","0xyz","0xyz","0xyz"]
//{name : "Siddhant", age: 23, salary : 3000} -> "0"
//{name : "Sid", age: 24, salary : 4000} -> "0"

var arr = [2,3,4,5,2,1,4]

var new_arr = arr.filter(function(item){ return item%2 == 0})
//2 -> true
// 3 -> false
// 4 -> true
//5 -> false
//2 -> true
//1 -> false
//4 -> true
//[2,4,2,4]
console.log(new_arr)

var arr = ["Siddhant", "Rajat", "Anubhav"]
var new_arr = arr.filter((item) => item[1] == "i")
//["Siddhant"]
var new_arr = arr.filter(function(item){return item[1]})
//[Siddhant, Rajat, Anubhav]

var arr = [
	{name : "Siddhant", age: 23, salary : 3000},
	{name : "Sid", age: 24, salary : 4000},
	{name : "Anubhav", age: 25, salary : 5000},
	{name : "Rajat", age: 26, salary : 6000},
]

var new_arr = arr.filter(item => item.salary.toString()[1])
/* [
	{name : "Siddhant", age: 23, salary : 3000},
	{name : "Sid", age: 24, salary : 4000},
	{name : "Anubhav", age: 25, salary : 5000},
	{name : "Rajat", age: 26, salary : 6000},
]*/













































