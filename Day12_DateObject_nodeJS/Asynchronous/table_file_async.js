var fs = require("fs")

var num = 2;

for(var i = 1; i <=10; i++){
    let result = num * i;
    fs.appendFile("table.txt",result+"\n",function(){
        console.log("Data written");
    })
}