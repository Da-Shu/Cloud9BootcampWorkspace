var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
//COMPILE SCHEMA INTO MODEL
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Galaxy Bay", 
//         image: "https://source.unsplash.com/rM-9sF8E8_A",
//         description: "You can totes see the galaxy n'stuff."
        
//     }, function(err, campground) {
//         if(err) {
//             console.log("ERROR");
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     });

app.get("/", function(req, res) {
    res.redirect("/campgrounds");
});
//INDEX ROUTE
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});
//NEW ROUTE
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});
//CREATE ROUTE
app.post("/campgrounds", function(req, res) {
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
//   campgrounds.push(newCampground);
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            //redirect back to campgrounds
            res.redirect("/campgrounds");
        }
    });
});
//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //render show template with that campground
             res.render("show", {campground: foundCampground});
        }
    });
    req.params.id;
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!");
});