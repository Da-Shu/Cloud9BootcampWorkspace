var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

//POST  title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER  email, name
var userSchema = new mongoose.Schema({
    email: String, 
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "Chuck@Lidel.chop",
//     name: "Chuck Lidel"
// });

// newUser.posts.push({
//     title: "How to throw down a slap",
//     content: "Just do it bro"
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Cool Stuff to Post About",
//     content: "Here is a bunch of cool stuff to post about"
// });
// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Chuck Lidel"}, function(err, user) {
    if(err) {
        // console.log(err);
    } else {
        user.posts.push({
            title: "Why did you move the ball?",
            content: "I tried to kick it and you moved it... why?"
        });
        user.save(function(err, user) {
            if(err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});