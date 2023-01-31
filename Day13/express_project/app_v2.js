const express = require("express")
const app = express() // here creating app object
const bodyParser = require("body-parser") //Install it by npm body-parser

//handling static files
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : true}))
//GET -> req.query
//POST, PUT, PATCH -> req.body

app.post("/calc",function(req, res){
    console.log(req.body)
    var data = req.body
    var result = parseInt(data.num1) + parseInt(data.num2)
    res.send("Result is "+result) //Always write string 
})

appp.post("/user", function (req,res){
    console.log(req.body)
    var data  = req.bogy

    users.push(data)
    res.send("Send New Data")

app.get("/data",function(req,res){
    res.send("this is data path")
})

app.listen(5000,function(){
    console.log("Server running at 5000")
})