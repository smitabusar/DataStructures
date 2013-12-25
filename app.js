var path=require("path"),
	express=require("express");

var app=express()
	.use(express.static(__dirname,
		path.join(__dirname,"js"))); 

app.get("/",function(req,res){
	res.send("Data Structures Examples")
});

var port=3000;
app.listen(port);
console.log("Started server on port " + port);

