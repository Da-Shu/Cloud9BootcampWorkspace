var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Buckwheat Lake", image: "https://source.unsplash.com/f5sdemaT7XE"},
        {name: "Galaxy Bay", image: "https://source.unsplash.com/rM-9sF8E8_A"},
        {name: "Slayer Bluff", image: "https://source.unsplash.com/zcGJc069A-I"},        
        {name: "Buckwheat Lake", image: "https://source.unsplash.com/f5sdemaT7XE"},
        {name: "Galaxy Bay", image: "https://source.unsplash.com/rM-9sF8E8_A"},
        {name: "Slayer Bluff", image: "https://source.unsplash.com/zcGJc069A-I"},        
        {name: "Galaxy Bay", image: "https://source.unsplash.com/rM-9sF8E8_A"},
        {name: "Slayer Bluff", image: "https://source.unsplash.com/zcGJc069A-I"}
    ];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res) {
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});