var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
// "/cat" => "MEOW"
app.get("/dog", function(req, res) {
        console.log("Someone made a request to /dog");
    res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res) {
   var subreddit = req.params.subredditName;
   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

//what you put in each area will be returned when you call req
app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
   console.log(req.params);
   res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res) {
   res.send("You are a star!"); 
});
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server has started.");
});
