var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX ROUTE
router.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        }
    });
});
//NEW ROUTE
router.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});
//CREATE ROUTE
router.post("/campgrounds", function(req, res) {
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
router.get("/campgrounds/:id", function(req, res) {
    //find campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render show template with that campground
             res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    req.params.id;
});

module.exports = router;