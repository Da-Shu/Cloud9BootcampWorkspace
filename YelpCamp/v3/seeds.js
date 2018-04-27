var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud Field",
        image: "https://source.unsplash.com/aWZjpucxlgE",
        description: "Cloudy Place and stuff."
    },
    {
        name: "Snow Field",
        image: "https://source.unsplash.com/f5sdemaT7XE",
        description: "Snowy Place and stuff."
    },
    {
        name: "Fog Field",
        image: "https://source.unsplash.com/gcCcIy6Fc_M",
        description: "Foggy Place and stuff."
    }
    ]

//REMOVE ALL CAMPGROUNDS
function seedDB(){
    Campground.remove({}, function (err){
        if(err){
            console.log(err);
        } else {
            console.log("REMOVED CAMPGROUNDS!");
            //ADD A FEW NEW CAMPGROUNDS
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("ADDED A CAMPGROUND");
                        //CREATE A COMMENT
                        Comment.create(
                            {
                                text: "This place is super weird", 
                                author: "Bart"
                                
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("CREATED NEW COMMENT");
                                }
                            }
                        )
                    }
                });
             });
        }
    });   
}

module.exports = seedDB;
