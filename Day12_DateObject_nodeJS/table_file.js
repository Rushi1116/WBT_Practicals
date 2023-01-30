var fs= require("fs")

var num = 2
for (let i = 0; i < 11; i++) {
    var result = num * i
    fs.appendFileSync("table.txt",result + "\n")
}
