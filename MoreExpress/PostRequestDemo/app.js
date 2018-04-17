var express = require("express");
var app = express(); 
//npm install body-parser --save
var bodyParser = require("body-parser");

//the line below will be used often; parses input into js object
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var friends = ["Steve", "Gordo", "Pat" , "Aric", "Rob"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriends", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Started!");
});