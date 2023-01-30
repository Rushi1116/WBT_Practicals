var fs = require("fs");

var n = 10, _tableof = 3;

for(let i = 1; i <= n; i++){
    var result = _tableof * i ;
    fs.appendFileSync("tablePrint.txt",_tableof+" * "+i+" = "+result+"\n");
}
