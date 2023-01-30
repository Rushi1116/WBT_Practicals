var fs = require("fs");

var readData = fs.readFileSync("ReadNumber.txt");
var convertToString = readData.toString();
console.log(convertToString);
var str = convertToString.split(",");
console.log(str);
let add = 0;
for(let i = 0; i < str.length; i++){
    add += parseInt(str[i]);
}
console.log(add.toString());
fs.writeFileSync("WriteAddNumber.txt",add.toString());