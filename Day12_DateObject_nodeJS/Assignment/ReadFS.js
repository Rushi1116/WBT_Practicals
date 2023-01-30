var fs = require("fs");

var readData = fs.readFileSync("DummyText.txt");
console.log(readData.toString());