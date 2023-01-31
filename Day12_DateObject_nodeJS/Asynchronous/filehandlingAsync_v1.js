var fs = require("fs");
console.log("hi1");
fs.readFile("demo.txt", function(err, data){
    console.log(data.toString())
})
console.log("hi2");

var str = "This is new data"
fs.writeFile("demo.txt",str, function(){
    console.log("Data written");
})