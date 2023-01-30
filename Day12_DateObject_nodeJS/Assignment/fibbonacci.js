var fs = require("fs");

var a = 0, b = 1;
for (let i = 0; i < 15; i++) {
    if(a < 100){
        fs.appendFileSync("FibboPrint.txt", a + ", ");
        var data = fs.readFileSync("FibboPrint.txt") //returns buffer type data
        console.log(data.toString())
    }
    let c = a + b;
    a = b;
    b = c;
}