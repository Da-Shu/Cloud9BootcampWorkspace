var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// User.findOne({name: "John Wayne"}, function(err, foundUser){
//     if(err){
//         console.log(err);
//     } else {
//         Post.create({
//             title: "How to get a kid to stop studdering 3",
//             content: "sdfkjl;fsd dflkjsdflfds sdflkfkjl"
//         }, function(err, post){
//             if(err){
//                 console.log(err);
//             } else {
//                  foundUser.posts.push(post._id);
//                  foundUser.save(function(err, data){
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

User.findOne({name: "John Wayne"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
