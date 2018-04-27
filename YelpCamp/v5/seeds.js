var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud Field",
        image: "https://source.unsplash.com/aWZjpucxlgE",
        description: "Nigel mansell worn with distinction rugged et rock n roll star testosterone trophy karl marx tudor philosopher, pit fighter karl marx nigel mansell success worn with distinction rock n roll star landed gentry caterpillar holiday waiter tudor philosopher hairy lipsum testosterone trophy rugged et, socially mobile rock n roll star tudor philosopher worn with distinction dali pit fighter worn with distinction rugged et nigel mansell holiday waiter karl marx testosterone trophy hairy lipsum caterpillar landed gentry success."
    },
    {
        name: "Snow Field",
        image: "https://source.unsplash.com/f5sdemaT7XE",
        description: "Nigel mansell worn with distinction rugged et rock n roll star testosterone trophy karl marx tudor philosopher, pit fighter karl marx nigel mansell success worn with distinction rock n roll star landed gentry caterpillar holiday waiter tudor philosopher hairy lipsum testosterone trophy rugged et, socially mobile rock n roll star tudor philosopher worn with distinction dali pit fighter worn with distinction rugged et nigel mansell holiday waiter karl marx testosterone trophy hairy lipsum caterpillar landed gentry success."
    },
    {
        name: "Fog Field",
        image: "https://source.unsplash.com/gcCcIy6Fc_M",
        description: "Nigel mansell worn with distinction rugged et rock n roll star testosterone trophy karl marx tudor philosopher, pit fighter karl marx nigel mansell success worn with distinction rock n roll star landed gentry caterpillar holiday waiter tudor philosopher hairy lipsum testosterone trophy rugged et, socially mobile rock n roll star tudor philosopher worn with distinction dali pit fighter worn with distinction rugged et nigel mansell holiday waiter karl marx testosterone trophy hairy lipsum caterpillar landed gentry success."
    }
    ];

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
