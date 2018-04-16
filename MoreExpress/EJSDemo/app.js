var express = require("express");
var app = express(); 

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/kungfu/:stance", function(req, res) {
    var stance = req.params.stance;
    res.render("kungFu", {stanceVar: stance});
});

app.get("/posts", function (req, res) {
    var posts = [
            {title: "Post 1", author: "John"},
            {title: "Post 2", author: "Jim"},
            {title: "Post 3", author: "Jack"}
        ];
        
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening!");
});