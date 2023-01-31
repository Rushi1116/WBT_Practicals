var readline = require("readline");

var inp = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

inp.question("Enter name ", function(data){
    console.log("hi "+data);
    inp.close();
})
