const express = require("express")
const app = express() // here creating app object

app.use(express.static("public"))
app.use(morgan())
app.use(bodyParser.urlencoded())
//app.use is used to integrate middleware

app.get("/",function(req, res){
    res.send("This is  / path")
})

app.get("/data",function(req,res){
    res.send("this is data path")
})

app.listen(5000,function(){
    console.log("Server running at 5000")
})